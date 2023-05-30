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
        <img src="./images/logo.png" alt="Logo DineOutNow" />
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
        <li class="app-bar__item"><a href="/" class="active">Home</a></li>
        <li class="app-bar__item"><a href="#/article">Article</a></li>
        <li class="app-bar__item"><a href="#">Forum Diskusi</a></li>
        <li class="app-bar__item"><a href="#/about">About</a></li>
        <li class="app-bar__item"><a href="#">Log In</a></li>
          </li>
        </ul>
      </nav>
    </header>
   
    `;

   
    
    
  }
}

customElements.define('nav-bar', NavBar);
