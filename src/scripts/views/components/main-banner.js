class MainBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="main-banner" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="caption header-text">
            <h6>PEDULI SANITASI</h6>
            <div class="line-dec"></div>
            <h4>Bersama-sama <br><em>Mewujudkan</em><br>Lingkungan Bersih <br><em>Dan Sehat</em>
              <!-- <span>Sehat</span> -->
            </h4>
            <p>
              Dengan kesadaran sanitasi yang baik, edukasi praktik kebersihan yang tepat, serta kerjasama dalam
              program sanitasi berkelanjutan, kita bisa ciptakan perubahan positif untuk kesejahteraan komunitas.
            </p>
            <!-- <div class="main-button scroll-to-section"><a href="#services">Discover More</a></div> -->
            <!-- <span>or</span> -->
            <!-- <div class="second-button"><a href="faqs.html">Check our FAQs</a></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define('main-banner', MainBanner);
