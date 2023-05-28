class ArticleSection extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
      <div class="projects section" id="projects">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-heading">
              <h2>Menjaga<em> Kebersihan </em> &amp; <span> Kesehatan</span></h2>
              <div class="line-dec"></div>
              <p>Menginspirasi Perubahan melalui Artikel Terbaru </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="owl-features owl-carousel">
              <div class="item">
                <img src="images/projects-01.jpg" alt="">
                <div class="down-content">
                  <h4>Digital Agency HTML Templates</h4>
                  <a href="#"><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="item">
                <img src="images/projects-02.jpg" alt="">
                <div class="down-content">
                  <h4>Admin Dashboard CSS Templates</h4>
                  <a href="#"><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="item">
                <img src="images/projects-03.jpg" alt="">
                <div class="down-content">
                  <h4>Best Responsive Website Layouts</h4>
                  <a href="#"><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="item">
                <img src="images/projects-04.jpg" alt="">
                <div class="down-content">
                  <h4>HTML CSS Layouts for your websites</h4>
                  <a href="#"><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="item">
                <img src="images/projects-02.jpg" alt="">
                <div class="down-content">
                  <h4>Bootstrap 5 Themes for Free</h4>
                  <a href="#"><i class="fa fa-link"></i></a>
                </div>
              </div>
              <div class="item">
                <img src="images/projects-03.jpg" alt="">
                <div class="down-content">
                  <h4>Mobile Friendly Website Layouts</h4>
                  <a href="#"><i class="fa fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
    }
  }
  
  customElements.define('article-section', ArticleSection);
  