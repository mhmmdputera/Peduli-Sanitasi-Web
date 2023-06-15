class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addNavigationEventListeners();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
        <div class="app-bar__menu">
          <button id="button-container" class="button-container">
            <img tabindex="0" aria-label="tombol-buka-menu-navigasi" src="icons/list.svg" />
          </button>
        </div>
        <div class="app-bar__brand" id="content">
          <img data-src="./images/Logo Navbar.png" class="lazyload" alt="Logo Peduli Sanitasi" />
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li class="app-bar__item"><a href="#/" class="active">Home</a></li>
            <li class="app-bar__item"><a href="#/article">Article</a></li>
            <li class="app-bar__item"><a href="#/diskusi">Discussion Forum</a></li>
            <li class="app-bar__item"><a href="#/about">About</a></li>
            <li class="app-bar__item"><a href="#/login">Log In</a></li>
          </ul>
        </nav>
      </header>
   
    `;
    this.addScrollEventListeners();
  }

  addNavigationEventListeners() {
    $(this).find('.app-bar__item a').on('click', () => {
      window.scrollTo(0, 0);
    });
  }

  addScrollEventListeners() {
    const navbar = this.querySelector('.app-bar');
    $(window).on('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        $(navbar).addClass('scrolled');
      } else {
        $(navbar).removeClass('scrolled');
      }
    });
  }
}

customElements.define('nav-bar', NavBar);