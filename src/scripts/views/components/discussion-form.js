import Swal from 'sweetalert2';
import { openDB } from 'idb';

class DiscussionForm extends HTMLElement {
  constructor() {
    super();
    this.dbPromise = null;
  }

  connectedCallback() {
    if (!this.isUserLoggedIn()) {
      Swal.fire({
        title: 'Anda harus login terlebih dahulu!',
        icon: 'error',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.href = '#/login';
      });
      return;
    }

    this.render();
    this.addEventListeners();
    this.posts = [];
    this.initializeIndexedDB();
    this.fetchPostsFromIndexedDB();
  }

  initializeIndexedDB() {
    this.dbPromise = openDB('DiscussionDB', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('posts')) {
          const objectStore = db.createObjectStore('posts', { keyPath: 'id', autoIncrement: true });
          objectStore.createIndex('author', 'author', { unique: false });
          objectStore.createIndex('message', 'message', { unique: false });
          objectStore.createIndex('comments', 'comments', { unique: false });
        }
      }
    });
  }

  async fetchPostsFromIndexedDB() {
    const db = await this.dbPromise;
    const transaction = db.transaction('posts', 'readonly');
    const objectStore = transaction.objectStore('posts');

    const posts = await objectStore.getAll();

    if (posts) {
      this.posts = posts;
      this.displayPosts();
    }
  }

  async savePostToIndexedDB(post) {
    const db = await this.dbPromise;
    const transaction = db.transaction('posts', 'readwrite');
    const objectStore = transaction.objectStore('posts');

    await objectStore.add(post);
    console.log('Post saved to IndexedDB');
  }

  async addCommentToIndexedDB(postId, comment) {
    const db = await this.dbPromise;
    const transaction = db.transaction('posts', 'readwrite');
    const objectStore = transaction.objectStore('posts');

    const post = await objectStore.get(postId);
    post.comments.push(comment);

    await objectStore.put(post);
    console.log('Comment saved to IndexedDB');
  }
  
  async updatePostInIndexedDB(post) {
    const db = await this.dbPromise;
    const transaction = db.transaction('posts', 'readwrite');
    const objectStore = transaction.objectStore('posts');
  
    await objectStore.put(post);
    console.log('Post updated in IndexedDB');
  }

  isUserLoggedIn() {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      const user = JSON.parse(userData);
      return user !== null;
    }
    return false;
  }

  getUserData() {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      const user = JSON.parse(userData);
      return user;
    }
    return null;
  }


  render() {
    this.innerHTML = `
    <div class="space"></div>
    <div class="container">
      <div class="section-heading">
        <h2>Forum <em>Diskusi</em></h2>
        <div class="line-dec"></div>
        <h5>Selamat datang di Forum Diskusi Web Peduli Sanitasi!</h5>
        <p>Mari kita jadikan forum ini sebagai wadah yang positif untuk berbagi pengalaman, pengetahuan, dan inovasi terkait sanitasi. Bersama-sama, kita dapat menciptakan perubahan yang signifikan dan berdampak positif bagi kesehatan dan kualitas hidup banyak orang.</p>
        <form id="postForm">
          <label for="author">Nama:</label>
          <input type="text" id="author" class="formbox" required><br>
          <label for="message">Pesan:</label><br>
          <textarea id="message" class="formbox" required></textarea>
          <button type="submit">Kirim</button>
        </form>
        <h2>Posting Terbaru</h2>
        <div id="postsContainer"></div>
        <div class="space"></div>
      </div>
    </div>
    `;

    const authorInput = this.querySelector('#author');
    const userData = this.getUserData();
    if (userData) {
      authorInput.value = userData.email;
    }
  }

  addEventListeners() {
    const formDiscussion = this.querySelector('#postForm');
    formDiscussion.addEventListener('submit', this.addPost.bind(this));
  }

  displayPosts() {
    const postsContainer = this.querySelector('#postsContainer');
    postsContainer.innerHTML = '';

    this.posts.forEach((post, index) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      const authorElement = document.createElement('h4');
      authorElement.textContent = post.author;

      const messageElement = document.createElement('p');
      messageElement.textContent = post.message;

      //menambahkan fitur Komentar

      const komentarform = document.createElement('form');
      komentarform.classList.add('comment-form' );
      komentarform.dataset.postIndex = index;
      komentarform.addEventListener('submit', this.addComment.bind(this));

      const komentarInput = document.createElement('input');
      komentarInput.type = 'text';
      komentarInput.placeholder = 'Tambahkan komentar...';
      komentarInput.classList.add('formbox');

      const komentarButton = document.createElement('button');
      komentarButton.type = 'submit';
      komentarButton.textContent = 'Kirim';

      komentarform.appendChild(komentarInput);
      komentarform.appendChild(komentarButton);

      const komentarContainer = document.createElement('div');
      komentarContainer.classList.add('comment-container' );

      post.comments.forEach(comment => {
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('comment-container');

        const usernameElement = document.createElement('span');
        usernameElement.classList.add('username');
        const userData = this.getUserData();
        const username = userData ? userData.email : 'Anonymous';
        usernameElement.textContent = username;

        const commentElement = document.createElement('p');
        commentElement.textContent = comment;

        commentContainer.appendChild(usernameElement);
        commentContainer.appendChild(commentElement);

        komentarContainer.appendChild(commentContainer);
      });

      // menambah fitur edit dan delete
      const editDeleteContainer = document.createElement('div');
      editDeleteContainer.classList.add('edit-delete-container');

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('post-button', 'edit');
      editButton.addEventListener('click', () => {
        this.editPost(index);
      });
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('post-button', 'delete');
      deleteButton.addEventListener('click', () => {
        this.deletePost(index);
      });
      
      editDeleteContainer.appendChild(editButton);
      editDeleteContainer.appendChild(deleteButton);
  
      postElement.appendChild(editDeleteContainer);
      postElement.appendChild(authorElement);
      postElement.appendChild(messageElement);
      postElement.appendChild(komentarContainer);
      postElement.appendChild(komentarform);

      postsContainer.appendChild(postElement);
    });
  }

  //editpost
  editPost(index) {
    const postElement = this.querySelector(`#postsContainer > div:nth-child(${index + 1})`);
    const post = this.posts[index];

    const authorElement = postElement.querySelector('h4');
    const messageElement = postElement.querySelector('p');

    // Membuat form edit
    const editForm = document.createElement('form');

    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.classList.add('formbox');
    authorInput.value = post.author;

    const messageInput = document.createElement('textarea');
    messageInput.classList.add('formbox');
    messageInput.value = post.message;

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.classList.add('post-button', 'edit');

    editForm.appendChild(authorInput);
    editForm.appendChild(messageInput);
    editForm.appendChild(updateButton);

    // Menangani perubahan saat tombol update ditekan
    updateButton.addEventListener('click', () => {
      post.author = authorInput.value;
      post.message = messageInput.value;

      // Hapus form edit dan tampilkan kembali elemen teks yang diperbarui
      postElement.removeChild(editForm);
      authorElement.textContent = post.author;
      messageElement.textContent = post.message;
      
      this.updatePostInIndexedDB(post); // Menyimpan pembaruan pada IndexedDB
    });

    // Hapus elemen teks dan tampilkan form edit
    postElement.removeChild(authorElement);
    postElement.removeChild(messageElement);
    postElement.appendChild(editForm);
  }

  //updatepost
  updatePost(index) {
    const authorInput = this.querySelector('#author');
    const messageInput = this.querySelector('#message');
    
    const author = authorInput.value;
    const message = messageInput.value;
    
    this.posts[index].author = author;
    this.posts[index].message = message;
    
    // Hapus postingan lama dari this.posts
    this.posts.splice(index, 1);

    this.displayPosts();
    
    // Reset form input
    authorInput.value = '';
    messageInput.value = '';
    
    const submitButton = this.querySelector('#submitButton');
    submitButton.textContent = 'Kirim';
    submitButton.removeEventListener('click', this.updatePost.bind(this));
    submitButton.addEventListener('click', this.addPost.bind(this));
    
    this.updatePostInIndexedDB(this.posts); // Menyimpan pembaruan pada IndexedDB
  }

  //deletepost
  async deletePost(index) {
    const postId = this.posts[index].id;

  const db = await this.dbPromise;
  const transaction = db.transaction('posts', 'readwrite');
  const objectStore = transaction.objectStore('posts');

  await objectStore.delete(postId);
  console.log('Post deleted from IndexedDB');

  this.posts.splice(index, 1);
  this.displayPosts();
  }

  async addPost(event) {
    event.preventDefault();

    const authorInput = this.querySelector('#author');
    const messageInput = this.querySelector('#message');

    const author = authorInput.value;
    const message = messageInput.value;

    const newPost = {
      author: author,
      message: message,
      comments: []
    };

    this.posts.push(newPost);
    await this.savePostToIndexedDB(newPost);

    // lakukan auto load
    await this.fetchPostsFromIndexedDB();

    this.displayPosts();

    // Reset form input
    authorInput.value = '';
    messageInput.value = '';
  }

  async addComment(event) {
    event.preventDefault();

    const komentarInput = event.target.querySelector('input');
    const komentar = komentarInput.value;

    const postIndex = event.target.dataset.postIndex;

    this.posts[postIndex].comments.push(komentar);

    await this.addCommentToIndexedDB(this.posts[postIndex].id, komentar);

    this.displayPosts();

    komentarInput.value = '';
  }
}

customElements.define('discussion-form', DiscussionForm);
