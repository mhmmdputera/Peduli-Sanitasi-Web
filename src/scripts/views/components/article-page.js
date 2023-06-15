import articledataJson from '../../../public/articleData.json';

class ArticlePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="article_page">
          <h1 class="title">DAFTAR ARTIKEL</h1>
 
	  	<div class="col-12">
          		<div class="row gap-5 justify-content-center">
            ${this.generateArticleItems()}
          </div></div>
        </div>
      </div>
    `;
    const articleLinks = this.querySelectorAll('a');
    $(articleLinks).on('click', function(event) {
      event.preventDefault();
      const href = $(this).attr('href');
      window.location.href = href;
      window.scrollTo(0, 0);
    });
  }

  generateArticleItems() {
    const items = articledataJson.article;
    return items
      .map(item => {
        const description = Object.values(item.content.description)
          .map(p => `<p class="description">${p}</p>`)
          .join('');

        return `
          <div class="col-lg-3 col-md-5 col-sm-8 col-8 contain rounded shadow">
            <div class="article_item" tabindex="0">
              <h1>${item.title}</h1>
              <p class="author">Penulis : <span>${item.author}</span> (${item.date})</p>
              <img data-src="${item.image}" alt="${item['image-name']}" class="img-fluid lazyload">
              ${description.slice(0, 150)} ... <a href="#/article/${item.id}">Baca Selengkapnya!</a>
            </div>
          </div>
        `;
      })
      .join('');
  }
}

customElements.define('article-page', ArticlePage);
