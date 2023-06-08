import App from './views/app';
import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/forum.scss';
import '../styles/animate.scss';
import '../styles/flex-slider.scss';
import '../styles/fontawesome.scss';
import '../styles/owl.scss';
import '../styles/detail-article.scss';
import '../styles/login-register-style.scss';
import '../public/vendor/bootstrap/css/bootstrap.min.scss';
import './views/components/navbar';
import './views/components/main-banner';
import './views/components/custom-footer';
import './views/components/tentang-sanitasi';
import './views/components/sanitasi-sampah';
import './views/components/funt-fact';
import './views/components/article-section';
import './views/components/about-team';
import './views/components/article-page';
import './views/components/detail-article';
import './views/components/discussion-form';
import './views/components/login-section'
import '../articleData.json';
import '../funFactsData';
import 'jquery';
import 'owl.carousel';
import '../public/js/owl-carousel'


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
});

// $('.owl-features').owlCarousel({
//     center: true,
//   items:2,
//   loop:true,
//   nav: true,
//   margin:30,
//   responsive:{
//     992:{
//         items:3
//     },
//     1200:{
//         items:4
//     }
//   }
// });
