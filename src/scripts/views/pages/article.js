import '../components/article-page';

const Article = {
    async render() {
      return `
       <article-page></article-page>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Article;