class LoginSection extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="myspace"></div>
      <section class="vh-100 gradient-custom-3">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem;">
              <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="images/Logo Login 2.png"
                alt="login form"
                class="foto"
                style="border-radius: 1rem 0 0 1rem;"
              />
            </div>
            
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div class="d-flex align-items-center mb-3 pb-1 mt-5">
                        <span
                          class="h1 fw-bold mb-0"
                          style="font-size: x-large;"
                          >Welcome To Peduli sanitasi!</span
                        >
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style="letter-spacing: 1px;"
                      >
                        Login into your account
                      </h5>

                      <div class="form-outline mb-4 mt-5">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-4 mt-3">
                        <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="pt-1 mb- d-flex justify-content-center">
                        <button
                          type="button"
                          class="block btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          id="loginButton"
                        >
                          Login
                        </button>
                      </div>

                      <p class="mb-5 pb-lg-2 mt-4" style="color: #393f81;">
                        Don't have an account?
                        <a href="#/register" style="color: #393f81;"
                          >Register here</a
                        >
                      </p>
                    </form>
                  </div>
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
        import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
        import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
      
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
      
        const loginButton = document.getElementById("loginButton");
      
        loginButton.addEventListener("click", (e) => {
          let email = document.getElementById("email").value;
          let password = document.getElementById("password").value;
      
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              const date = new Date();
              update(ref(database, "users/" + user.uid), {
                last_login: date,
              });
              window.location.href = "#/diskusi";
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
  
  customElements.define('login-section', LoginSection);
  
