class AboutTeam extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="page-heading">
      <div class="container">
        <div class="col-lg-12 align-self-center">
          <div class="caption  header-text">
            <h6>MEET OUR TEAM</h6>
            <div class="line-dec"></div>
            <h4>Capstone Group <em>C23-M4008</em></h4>
          </div>
          <div class="row g-4">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item text-center rounded overflow-hidden">
                <div class="rounded-circle overflow-hidden m-4">
                  <img class="img-fluid" src="images/team-1.png" alt="">
                </div>
                <h5 class="mb-0">Muhammad Putera <br> Ikhlasul Amal</h5>
                <small>F074XA125 </small>
                <div class="d-flex justify-content-center mt-3">
                  <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                      class="fab fa-linkedin-in"></i></a>
                  <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                      class="fab fa-github"></i></a>
                  <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                      class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item text-center rounded overflow-hidden">
                <div class="rounded-circle overflow-hidden m-4">
                  <img class="img-fluid" src="images/team-2.png" alt="">
                </div>
                <h5 class="mb-0">Akhmad Alfian </h5>
                <small>F074XA395 </small>
                <br>
                <br>
                <div class="d-flex justify-content-center mt-3">
                  <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                      class="fab fa-linkedin-in"></i></a>
                      <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                      class="fab fa-github"></i></a>
                  <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                      class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item text-center rounded overflow-hidden">
                <div class="rounded-circle overflow-hidden m-4">
                  <img class="img-fluid" src="images/team-3.png" alt="">
                </div>
                <h5 class="mb-0">Putri Nabella </h5>
                <small>F005YA005</small>
                <br>
                <br>
                <div class="d-flex justify-content-center mt-3">
                  <a class="btn btn-square btn-secondary mx-1" href="https://www.linkedin.com/in/putri-nabella-604218250/"
                    target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                    class="fab fa-github"></i></a>
                  <a class="btn btn-square btn-secondary mx-1" href="https://www.instagram.com/putrinabella__/"
                    target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="team-item text-center rounded overflow-hidden">
                <div class="rounded-circle overflow-hidden m-4">
                  <img class="img-fluid" src="images/team-4.png" alt="">
                </div>
                <h5 class="mb-0">Khusnul Rahmi <br> Maulidha </h5>
                <small>F005YA359 </small>
                <br>
                <div class="d-flex justify-content-center mt-3">
                  <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                      class="fab fa-linkedin-in"></i></a>
                      <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                      class="fab fa-github"></i></a>
                  <a class="btn btn-square btn-secondary mx-1" href="" target="_blank" rel="noopener"><i
                      class="fab fa-instagram"></i></a>
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
  
  customElements.define('about-team', AboutTeam);
  