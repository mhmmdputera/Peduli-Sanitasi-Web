class FunFact extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="infos section" id="infos">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-content">
              <div class="row">
                <div class="col-lg-6">
                  <div class="left-image">
                    <img src="images/left-infos.png" alt="">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="section-heading">
                    <h2>Fun Fact tentang <span>Sanitasi</span></h2>
                    <div class="line-dec"></div>
                    <div class="funFactSection" id="funFact"></div>
                  </div>
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
  
  customElements.define('fun-fact', FunFact);
  