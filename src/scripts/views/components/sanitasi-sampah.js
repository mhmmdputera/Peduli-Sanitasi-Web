class SanitasiSampah extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="services section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-6">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                  <h2><em>Sanitasi</em>
                    Tempat Sampah
                  </h2>
                  <div class="line-dec"></div>
                  <p>
                    Sanitasi tempat sampah merupakan aspek penting dalam menjaga kebersihan dan kesehatan lingkungan.
                    Selain itu, warna pada tempat sampah juga memiliki arti penting dalam sistem pengelolaan sampah.
                    Berikut adalah beberapa arti warna yang umum digunakan pada tempat sampah:
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="service-item">
                  <h4>Warna Hijau</h4>
                  <p>
                    Digunakan untuk memilah sampah organik, seperti sisa makanan atau bahan-bahan organik lainnya. Sampah
                    organik ini dapat diolah menjadi kompos yang berguna sebagai pupuk tanaman.
                  </p>
                </div>
  
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="service-item">
                  <h4>Warna Kuning</h4>
                  <p>Digunakan khusus untuk memisahkan sampah yang dapat didaur ulang, seperti plastik, kaca, dan logam.
                    Sampah-sampah ini bisa diolah kembali menjadi bahan baku untuk produk-produk baru.
                  </p>
  
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="service-item">
                  <h4>Warna Biru</h4>
                  <p>
                    Digunakan untuk memilah sampah kertas, tisu, dan kardus. Sampah ini dapat didaur ulang menjadi produk
                    kertas baru sehingga dapat mengurangi penebangan pohon yang berlebihan serta mendukung keberlanjutan
                    lingkungan.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="service-item">
                  <h4>Warna Merah</h4>
                  <p>
                    Digunakan untuk membuang sampah berbahaya atau berpotensi berbahaya, seperti baterai dan produk-produk
                    kimia.
                    Pengelolaan yang benar terhadap sampah berbahaya penting untuk melindungi
                    kesehatan dan lingkungan.
                  </p>
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
  
  customElements.define('sanitasi-sampah', SanitasiSampah);
  