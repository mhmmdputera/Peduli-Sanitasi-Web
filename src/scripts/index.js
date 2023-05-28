import App from './views/app';
import 'jquery';
import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/animate.scss';
import '../styles/flex-slider.scss';
import '../styles/fontawesome.scss';
import '../styles/owl.scss';
import '../public/vendor/bootstrap/css/bootstrap.min.scss';
import './views/components/navbar';
import './views/components/main-banner';
import './views/components/custom-footer'
import './views/components/tentang-sanitasi'
import './views/components/sanitasi-sampah'
import './views/components/funt-fact'
import './views/components/article-section'
import '../funFactsData'
import 'owl.carousel';

$('.owl-features').owlCarousel({
    center: true,
  items:2,
  loop:true,
  nav: true,
  margin:30,
  responsive:{
    992:{
        items:3
    },
    1200:{
        items:4
    }
  }
});

