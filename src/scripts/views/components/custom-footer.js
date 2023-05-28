class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.render();
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
              <ul>
                <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                <li class="scroll-to-section"><a href="#projects">Article</a></li>
                <li class="scroll-to-section"><a href="#">Forum Diskusi</a></li>
                <li class="scroll-to-section"><a href="about.html">About</a></li>
                <li class="scroll-to-section"><a href="#">Log In</a></li>
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
  }
  
  customElements.define('custom-footer', CustomFooter);
  