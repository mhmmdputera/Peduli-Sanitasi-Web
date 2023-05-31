// import artikeldataJson from '../../../artikelData.json';

// class ArticlePage extends HTMLElement {
//   connectedCallback() {
//     this.render();
//   }

//   render() {
//     this.innerHTML = `
//       <div class="container">
//         <div class="article_page">
//           <h1 class="title">DAFTAR ARTIKEL</h1>
//           <div class="col-12">
//             <div class="row gap-5 justify-content-center">
//               <div class="col-lg-3 col-md-5 col-sm-9 border border-5 border-success rounded shadow">
//               <div id="article_page"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       `;
//     const items = artikeldataJson.artikel;
//     const itemList = items.map(item => {
//       const description = Object.values(item.konten.description).map(p => `<p class="description">${p}</p>`).join('');

//       return `
//     <div class="article_item" tabindex="0">
//       <h1>${item.title}</h1>
//       <p class="author">Penulis : <span>${item.author}</span> (${item.tanggal})</p>
//       <img src="${item.image}" alt="${item['image-name']}">
//       ${description.slice(0, 150)}
//     </div>
//   `;
//     }).join('');

//     document.getElementById('article_page').innerHTML = itemList;
//   }
// }

// customElements.define('article-page', ArticlePage);

import articledataJson from '../../../articleData.json';

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
  }

  generateArticleItems() {
    const items = articledataJson.artikel;
    return items
      .map(item => {
        const description = Object.values(item.content.description)
          .map(p => `<p class="description">${p}</p>`)
          .join('');

        return `
          <div class="col-lg-3 col-md-5 col-sm-8 col-6 border border-5 border-success rounded shadow">
            <div class="article_item" tabindex="0">
              <h1>${item.title}</h1>
              <p class="author">Penulis : <span>${item.author}</span> (${item.tanggal})</p>
              <img src="${item.image}" alt="${item['image-name']}" class="img-fluid">
              ${description.slice(0, 150)} ...
            </div>
          </div>
        `;
      })
      .join('');
  }
}

customElements.define('article-page', ArticlePage);
