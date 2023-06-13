import articledataJson from '../../../articleData.json';

class DetailArticle extends HTMLElement {
    connectedCallback() {
      this.render();
      this.fetchArticleData();
    }
  
    render() {
      this.innerHTML = `
        <div class="container">
          <div class="detail_article" id="detail_article" tabindex="0"></div>
        </div>
      `;
    }
  
    fetchArticleData() {
      const articleId = this.getArticleIdFromURL();
      const articleData = this.getArticleDataById(articleId);
      if (articleData) {
        const detailArticle = this.generateDetailArticleHTML(articleData);
        document.getElementById('detail_article').innerHTML = detailArticle;
      } else {
        console.log('Artikel tidak ditemukan.');
      }
    }
  
    getArticleIdFromURL() {
      const url = window.location.href;
      const urlParts = url.split('/');
      return urlParts[urlParts.length - 1];
    }
  
    getArticleDataById(articleId) {
      const items = articledataJson.article;
      return items.find(item => item.id === articleId);
    }
  
    generateDetailArticleHTML(articleData) {
      const description = Object.values(articleData.content.description)
        .map(p => `<p class="description">${p}</p>`)
        .join('');
  
      return `
        <h1>${articleData.title}</h1>
        <p class="author">Penulis : <span>${articleData.author}</span> (${articleData.date})</p>
        <img src="${articleData.image}" alt="${articleData['image-name']}" class="img-fluid">
        <div class="deskripsi">${description}</div>
      `;
    }
  }
  
  customElements.define('detail-article', DetailArticle);
 
