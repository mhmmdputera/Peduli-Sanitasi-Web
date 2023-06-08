class DiscussionForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
    this.posts = [];
  }

  render() {
    this.innerHTML = `
    <div class="space"></div>
    <div class="container">
        <div class="section-heading">
            <h2>Forum <em>Diskusi</em>
            </h2>
            <div class="line-dec"></div>
            <p>
                Tambahkan Diskusi Baru
            </p>
            <form id="postForm">
                <label for="author">Nama:</label>
                <input type="text" id="author" required>
    
                <label for="message">Pesan:</label>
                <textarea id="message" required></textarea>
    
                <button type="submit">Kirim</button>
            </form>
            <h2>Posting Terbaru</h2>
            <div id="postsContainer"></div>
            <div class="space"></div>
        </div>
    </div>
    `;
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
      komentarform.classList.add('comment-form');
      komentarform.dataset.postIndex = index;
      komentarform.addEventListener('submit', this.addComment.bind(this));

      const komentarInput = document.createElement('input');
      komentarInput.type = 'text';
      komentarInput.placeholder = 'Tambahkan komentar...';

      const komentarButton = document.createElement('button');
      komentarButton.type = 'submit';
      komentarButton.textContent = 'Kirim';

      komentarform.appendChild(komentarInput);
      komentarform.appendChild(komentarButton);

      const komentarContainer = document.createElement('div');
      komentarContainer.classList.add('comment-container');

      post.comments.forEach(comment => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;

        komentarContainer.appendChild(commentElement);
      });

      postElement.appendChild(authorElement);
      postElement.appendChild(messageElement);
      postElement.appendChild(komentarform);
      postElement.appendChild(komentarContainer);

      postsContainer.appendChild(postElement);
    });
  }

  addPost(event) {
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

    this.displayPosts();

    // Reset form input
    authorInput.value = '';
    messageInput.value = '';
  }

  addComment(event) {
    event.preventDefault();

    const komentarInput = event.target.querySelector('input');
    const komentar = komentarInput.value;

    const postIndex = event.target.dataset.postIndex;

    this.posts[postIndex].comments.push(komentar);

    this.displayPosts();

    komentarInput.value = '';
  }
}

customElements.define('discussion-form', DiscussionForm);