import App from './views/app';
import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/forum.scss';
import '../styles/animate.scss';
import '../styles/flex-slider.scss';
import '../styles/fontawesome.scss';
import '../styles/detail-article.scss';
import '../styles/other-article.scss';
import '../styles/login-register-style.scss';
import './views/components/navbar';
import './views/components/main-banner';
import './views/components/custom-footer';
import './views/components/tentang-sanitasi';
import './views/components/sanitasi-sampah';
import './views/components/funt-fact';
import './views/components/about-team';
import './views/components/article-page';
import './views/components/detail-article';
import './views/components/other-article';
import './views/components/discussion-form';
import './views/components/login-section'
import './views/components/register-section'
import '../articleData.json';
import '../funFactsData.json';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'swiper/swiper-bundle.min.css';
import '../../node_modules/swiper/swiper-bundle.min.js';
import swRegister from './utils/sw-register';



const app = new App({
  button: document.querySelector('.button-container'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
