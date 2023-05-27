class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <a href="index.html" class="logo">
              <img
                src="images/logo.png"
                alt=""
                style="max-width: 112px"
              />
            </a>
            <ul class="nav">
              <li class="scroll-to-section">
                <a href="#top" class="active">Home</a>
              </li>
              <li class="scroll-to-section">
                <a href="#projects">Article</a>
              </li>
              <li class="scroll-to-section"><a href="#">Forum Diskusi</a></li>
              <li class="scroll-to-section">
                <a href="about.html">About</a>
              </li>
              <li class="scroll-to-section"><a href="#">Log In</a></li>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
    `;

    // Menu Dropdown Toggle
    const menuTrigger = document.querySelector('.menu-trigger');
    const nav = document.querySelector('.header-area .nav');
    if (menuTrigger && nav) {
      menuTrigger.addEventListener('click', function() {
        this.classList.toggle('active');
        if (nav.style.display === 'none' || nav.style.display === '') {
          nav.style.display = 'block';
        } else {
          nav.style.display = 'none';
        }
      });
    }


    // Menu elevator animation
    const scrollLinks = document.querySelectorAll('.scroll-to-section a[href*="#"]:not([href="#"])');
    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname && target) {
          const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          const menuTrigger = document.querySelector('.menu-trigger');
          const nav = document.querySelector('.header-area .nav');
          if (width < 991 && menuTrigger && nav) {
            menuTrigger.classList.remove('active');
            nav.style.display = 'none';
          }
          const scrollTop = target.offsetTop - 80;
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
          return false;
        }
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
      document.addEventListener('scroll', onScroll);

      // Smooth Scroll
      const smoothScrollLinks = document.querySelectorAll('.scroll-to-section a[href^="#"]');
      smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          document.removeEventListener('scroll', onScroll);
          smoothScrollLinks.forEach(function(link) {
            link.classList.remove('active');
          });
          this.classList.add('active');
          const target = document.querySelector(this.hash);
          if (target) {
            const scrollTop = target.offsetTop - 79;
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth'
            });
            window.location.hash = this.hash;
            document.addEventListener('scroll', onScroll);
          }
        });
      });
    });

    function onScroll(event) {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      const navLinks = document.querySelectorAll('.nav a');
      navLinks.forEach(function(link) {
        const currLink = link;
        const href = currLink.getAttribute('href');
        if (href && href !== '#') { 
          const refElement = document.querySelector(href);
          if (refElement && refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight) > scrollPos) {
            document.querySelectorAll('.nav ul li a').forEach(function(link) {
              link.classList.remove('active');
            });
            currLink.classList.add('active');
          } else {
            currLink.classList.remove('active');
          }
        }
      });
    }
    
  }
}

customElements.define('nav-bar', NavBar);
