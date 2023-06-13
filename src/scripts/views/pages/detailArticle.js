const detailArticle = {
    async render() {
      return `
       <detail-article></detail-article>
       <other-article></other-article>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default detailArticle;
