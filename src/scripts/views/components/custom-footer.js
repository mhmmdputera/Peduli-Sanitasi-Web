class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.render();
      this.addNavigationEventListeners();
    }
  
    render() {
      this.innerHTML = `
      <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-sm-6">
            <h2 class="useful_text">About</h2>
            <p class="ipsum_text">Peduli sanitasi adalah website edukasi yang bertujuan untuk meningkatkan kesadaran
              masyarakat Indonesia mengenai pentingnya sanitasi di Indonesia.
            </p>
          </div>
          <div class="col-lg-4 col-sm-6">
            <h2 class="useful_text">Menu</h2>
            <div class="footer_links">
              <ul class="ul-footer">
                <li class="scroll-to-section"><a href="#/" class="active">Home</a></li>
                <li class="scroll-to-section"><a href="#/article">Article</a></li>
                <li class="scroll-to-section"><a href="#/diskusi">Discussion Forum</a></li>
                <li class="scroll-to-section"><a href="#/about">About</a></li>
                <li class="scroll-to-section"><a href="#/login">Log In</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
        <div class="copyright">
        <p>Copyright © 2023 <a href="#">- Capstone Group C23-M4008 </a>
        </p>
        </div>
        </div>
      </div>
    </footer>
      `;
    }
    
    addNavigationEventListeners() {
      const navigationLinks = this.querySelectorAll('.scroll-to-section a');
      navigationLinks.forEach((link) => {
        link.addEventListener('click', () => {
          window.scrollTo(0, 0);
        });
      });
    }

  }
  
  customElements.define('custom-footer', CustomFooter);
  
