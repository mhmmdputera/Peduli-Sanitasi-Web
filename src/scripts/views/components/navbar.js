class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
      <div class="app-bar__menu">
      <button id="button-container" class="button-container">
      <img tabindex="0" aria-label="tombol-buka-menu-navigasi" src="icons/list.svg"
>
  </button>
      </div>
      <div class="app-bar__brand" id="content">
        <img src="./images/Logo Navbar - No Background.png" alt="Logo Peduli Sanitasi" />
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
        <li class="app-bar__item"><a href="/" class="active">Home</a></li>
        <li class="app-bar__item"><a href="#/article">Article</a></li>
        <li class="app-bar__item"><a href="#/diskusi">Forum Diskusi</a></li>
        <li class="app-bar__item"><a href="#/about">About</a></li>
        <li class="app-bar__item"><a href="#/login">Log In</a></li>
          </li>
        </ul>
      </nav>
    </header>
   
    `;
    const navbar = document.querySelector('.app-bar');
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

customElements.define('nav-bar', NavBar);