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
      let currentIndex = 0;
      let delayInSeconds = 3;
      
      function changeFact() {
          fetch("../funFactsData.json")
              .then(function (response) {
                  return response.json();
              })
              .then(function (data) {
                  let currentFact = data[currentIndex];
                  let factText = currentFact.fact;
                  let sourceText = currentFact.source;
      
                  document.getElementById("funFact").innerHTML = factText + "<br><br><span>" + sourceText + "</span>";
                  currentIndex = (currentIndex + 1) % data.length;
              })
              .catch(function (error) {
                  console.log("Error fetching fun facts:", error);
              });
      }
      
      changeFact();
      
      setInterval(changeFact, delayInSeconds * 1000);
    }
  }
  
  customElements.define('fun-fact', FunFact);
  