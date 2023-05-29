import '../components/main-banner';
import '../components/tentang-sanitasi';
import '../components/sanitasi-sampah';
import '../components/article-section';
import '../components/funt-fact';

const Home = {
    async render() {
      return `
      <main-banner></main-banner>
      <tentang-sanitasi></tentang-sanitasi>
      <sanitasi-sampah></sanitasi-sampah>
      <fun-fact></fun-fact>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Home;