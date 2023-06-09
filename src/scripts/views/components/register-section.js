class RegisterSection extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="myspace"></div>
      <section
      class="vh-100 bg-image"
      style="
        background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');
      "
    >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px;">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example1cg"
                        >Username</label
                      >
                      <input
                        type="text"
                        id="username"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3cg"
                        >Email</label
                      >
                      <input
                        type="email"
                        id="email"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg"
                        >Password</label
                      >
                      <input
                        type="password"
                        id="password"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="block btn btn-success btn-lg gradient-custom-4 text-body"
                        id="registerButton"
                      >
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <a href="#/login" class="text"
                        ><u>Login here</u></a
                      >
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      `;
      const scriptElement = document.createElement("script");
      scriptElement.type = "module";
      scriptElement.text = `
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
        import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyDAit4jZgn7GxPxfVn7_PJnfVOsBMmQU8M",
          authDomain: "peduli-sanitasi.firebaseapp.com",
          databaseURL:
            "https://peduli-sanitasi-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "peduli-sanitasi",
          storageBucket: "peduli-sanitasi.appspot.com",
          messagingSenderId: "74325752547",
          appId: "1:74325752547:web:222b1dc8724364f733e3d6",
          measurementId: "G-KLYKPS49PK",
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const database = getDatabase(app);
        const auth = getAuth();
      
        const registerButton = document.getElementById("registerButton");
      
        registerButton.addEventListener("click", (e) => {
          let email = document.getElementById("email").value;
          let username = document.getElementById("username").value;
          let password = document.getElementById("password").value;
      
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              set(ref(database, "users/" + user.uid), {
                username: username,
                email: email,
              });
              alert("Your Account Has Been Made!");
              window.location.href = "#/login";
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
      
              alert(errorMessage);
            });
        });
      `;
      
      this.appendChild(scriptElement);
      
    }
  }
  
  customElements.define('register-section', RegisterSection);
  
