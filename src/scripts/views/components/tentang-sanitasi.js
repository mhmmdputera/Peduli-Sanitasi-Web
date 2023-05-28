class TentangSanitasi extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="happy-clients section" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Mari cari tahu apa itu
                <!-- <em>apa itu </em> -->
                <span>Sanitasi</span>
              </h2>
              <div class="line-dec"></div>
              <p>
                Sanitasi merupakan salah satu komponen dari kesehatan lingkungan, yaitu perilaku yang disengaja untuk
                membudayakan hidup bersih untuk mencegah manusia bersentuh langsung dengan kotoran dan bahan buangan
                berbahaya lainnya, dengan harapan dapat menjaga dan meningkatkan kesehatan manusia.
              </p>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="naccs">
              <div class="tabs">
                <div class="row">
                  <div class="col-lg-12">
                  <div class="menu">
                  <div class="active"><span>Manfaat Sanitasi</span></div>
                  <div><span>Upaya Meningkatkan Sanitasi</span></div>
                  <div><span>Contoh Penerapan Sanitasi</span></div>
                  <div class="last-item"><span>Dampak Sanitasi yang Buruk</span></div>
                </div>
                
                  </div>
                  <div class="col-lg-12">
                    <ul class="nacc">
                      <li class="active">
                        <div>
                          <div class="row">
                            <div class="col-lg-7">
                              <h4>Berikut manfaat dari sanitasi:</h4>
                              <div class="line-dec"></div>
                              <p>
                                1. Menciptakan lingkungan yang lebih bersih, sehat, dan nyaman untuk ditempati.
                                <br>
                                2. Mengurangi pontesi terjadinya malnutrisi yang berbahaya bagi lingkungan
                                <br>
                                3. Mencegah terjadinya penyebaran virus atau penyakit yang disebabkan oleh kontaminasi
                                benda kotor
                                <br>
                                4. Memperbaiki kondisi air di dalam tanah agar lebih layak untuk digunakan
                              </p>
                              <p>
                                <br>
                                Dengan mengakui dan menerapkan manfaat sanitasi, kita dapat memprioritaskan perlunya
                                sanitasi yang baik dalam upaya mencapai kesehatan dan kesejahteraan yang lebih baik bagi
                                semua orang.
                              </p>
                            </div>
                            <div class="col-lg-5 align-self-center">
                              <img src="images/Manfaat Sanitasi.png" alt="">
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div class="row">
                            <div class="col-lg-7">
                              <h4>Berikut beberapa upaya untuk meningkatkan kualitas sanitasi:</h4>
                              <div class="line-dec"></div>
                              <p>
                                1. Terus meningkatkan kebiasaan hidup sehat dalam kehidupan sehari-hari
                                <br>
                                2. Membersihkan lingkungan tempat tinggal secara berkala
                                <br>
                                3. Melakukan gerakan 3M, yaitu menguras, menutup, serta menimbun
                                <br>
                                4. Menjaga kebersihan saluran pembuangan air
                              </p>
                              <p>
                                <br>
                                Melalui upaya-upaya ini, diharapkan kualitas sanitasi dapat ditingkatkan, mengurangi
                                risiko penyakit yang terkait dengan sanitasi yang buruk, serta meningkatkan kesehatan dan
                                kualitas hidup masyarakat secara keseluruhan.
                              </p>
                            </div>
                            <div class="col-lg-5 align-self-center">
                              <img src="images/Upaya Sanitasi.png" alt="">
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div class="row">
                            <div class="col-lg-7">
                              <h4>Berikut contoh penerapan sanitasi di lingkungan:</h4>
                              <div class="line-dec"></div>
                              <div class="most-list sectionlist">
                                <div class="container">
                                  <div class="row">
                                    <div class="accordions is-first-expanded">
                                      <article class="accordion">
                                        <div class="accordion-head">
                                          <span>Sarana Pembuangan Kotoran Manusia (Tinja)</span>
                                          <span class="icon">
                                            <i class="icon fa fa-chevron-right"></i>
                                          </span>
                                        </div>
                                        <div class="accordion-body">
                                          <div class="content">
                                            <p>
                                              Sarana pembuangan tinja atau jamban wajib dimiliki setiap keluarga. Jamban
                                              yang baik dibuat dengan
                                              tipe leher angsa dan dilengkapi dengan air yang cukup
                                            </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="accordion">
                                        <div class="accordion-head">
                                          <span>Sarana Pembuangan Sampah</span>
                                          <span class="icon">
                                            <i class="icon fa fa-chevron-right"></i>
                                          </span>
                                        </div>
                                        <div class="accordion-body">
                                          <div class="content">
                                            <p>
                                              Sarana pembuangan sampah terbuat dari bahan kedap udara yang tidak mudah
                                              berkarat. Selain itu
                                              sebaiknya mempunyai tutup dan memakai kantong plasik khusus untuk
                                              sisa-sisa bahan makanan khususnya
                                              yang cepat membusuk. 
                                            </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="accordion">
                                        <div class="accordion-head">
                                          <span>Saluran Pembuangan Air Limbah</span>
                                          <span class="icon">
                                            <i class="icon fa fa-chevron-right"></i>
                                          </span>
                                        </div>
                                        <div class="accordion-body">
                                          <div class="content">
                                            <p>Saluran pembuangan air limbah diharapkan terbuat dari bahan kedap air,
                                              tidak merupakan sumber
                                              pencemar, dan memakai saluran tertutup. Hal ini karena air limbah
                                              berbahaya bagi kesehatan dan juga
                                              berbau
                                            </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="accordion">
                                        <div class="accordion-head">
                                          <span>Penyediaan Air Bersih</span>
                                          <span class="icon">
                                            <i class="icon fa fa-chevron-right"></i>
                                          </span>
                                        </div>
                                        <div class="accordion-body">
                                          <div class="content">
                                            <p>
                                              Air bersih dibutuhkan untuk memenuhi kebutuhan sehari-hari seperti mandi,
                                              mencuci, minum, maupun
                                              memasak. Ketersediaan air bersih bisa mendukung program santasi yang
                                              memadai.
                                            </p>
                                          </div>
                                        </div>
                                      </article>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-5 align-self-center">
                              <img src="images/Penerapan Sanitasi.png" alt="">
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div class="row">
                            <div class="col-lg-7">
                              <h4>Berikut dampak kesahatan yang diakibatkan dari sanitasi yang buruk:</h4>
                              <div class="line-dec"></div>
                              <div class="most-list sectionlist">
                                <div class="container">
                                  <div class="row">
                                    <div class="accordions is-first-expanded">
                                      <article class="accordion">
                                        <div class="accordion-head">
                                          <span>Diare dan Cacingan</span>
                                          <span class="icon">
                                            <i class="icon fa fa-chevron-right"></i>
                                          </span>
                                        </div>
                                        <div class="accordion-body">
                                          <div class="content">
                                            <p>
                                              Diare dan cacingan adalah salah satu dampak yang paling sering dialami
                                              masyarakat dengan tingkat sanitasi rendah. Twinda mengatakan bahwa kedua
                                              masalah kesehatan ini muncul karena bakteri dan virus penyebab diare maupun
                                              cacingan akan sangat rentan muncul pada toilet yang kotor. </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="accordion">
                                        <div class="accordion-head">
                                          <span>Stunting</span>
                                          <span class="icon">
                                            <i class="icon fa fa-chevron-right"></i>
                                          </span>
                                        </div>
                                        <div class="accordion-body">
                                          <div class="content">
                                            <p>
                                              Dari diare dan cacingan yang dialami anak, risiko stunting pada beberapa
                                              anak rentan pun bisa semakin besar. Alasannya karena diare yang akan
                                              menyebabkan nutrisi di dalam tubuh menjadi terkuras melalui buang air yang
                                              berkala. Pada cacingan, cacing pada usus juga akan mengganggu penyerapan zat
                                              gizi makanan pada tubuh anak.
                                            </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="accordion">
                                        <div class="accordion-head">
                                          <span>Tifus</span>
                                          <span class="icon">
                                            <i class="icon fa fa-chevron-right"></i>
                                          </span>
                                        </div>
                                        <div class="accordion-body">
                                          <div class="content">
                                            <p>
                                              etika sanitasi tidak memadai, kondisi lingkungan menjadi subur bagi
                                              perkembangan bakteri Salmonella typhi, yang merupakan penyebab infeksi
                                              tifus. Faktor-faktor sanitasi yang buruk meliputi akses yang terbatas
                                              terhadap air bersih, sanitasi limbah yang tidak memadai, dan kurangnya
                                              kebersihan di area makan dan pemrosesan makanan.
                                            </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="accordion">
                                        <div class="accordion-head">
                                          <span>Hepatitis A</span>
                                          <span class="icon">
                                            <i class="icon fa fa-chevron-right"></i>
                                          </span>
                                        </div>
                                        <div class="accordion-body">
                                          <div class="content">
                                            <p>
                                              Sanitasi dalam hal mencuci tangan tidak hanya menyebabkan tifus, namun juga
                                              hepatitis A. Seseorang dapat dengan mudah tercemar virus hepatitis A jika
                                              malas mencuci tangan sebelum makan. Terlebih apabila baru selesai buang air
                                              dan melakukan kontak fisik dengan pasien hepatitis A.
                                            </p>
                                          </div>
                                        </div>
                                      </article>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-5 align-self-center">
                              <img src="images/Dampak Sanitasi.png" alt="">
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
      const menuDivs = this.querySelectorAll(".naccs .menu div");
      const listItems = this.querySelectorAll(".naccs ul li");
      
      menuDivs.forEach((div, index) => {
        div.addEventListener("click", () => {
          if (!div.classList.contains("active")) {
            menuDivs.forEach((menuDiv) => {
              menuDiv.classList.remove("active");
            });
      
            listItems.forEach((item) => {
              item.classList.remove("active");
            });
      
            div.classList.add("active");
            listItems[index].classList.add("active");
      
            const listItemHeight = listItems[index].offsetHeight;
            this.querySelector(".naccs ul").style.height = `${listItemHeight}px`;
          }
        });
      });
    
      
	const Accordion = {
		settings: {
		  first_expanded: false,
		  toggle: false
		},
  
		openAccordion: function(toggle, content) {
		  if (content.children.length) {
			toggle.classList.add("is-open");
			let final_height = Math.floor(content.children[0].offsetHeight);
			content.style.height = final_height + "px";
		  }
		},
  
		closeAccordion: function(toggle, content) {
		  toggle.classList.remove("is-open");
		  content.style.height = 0;
		},
  
		init: function(el) {
		  const _this = this;
  
		  let is_first_expanded = _this.settings.first_expanded;
		  if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
		  let is_toggle = _this.settings.toggle;
		  if (el.classList.contains("is-toggle")) is_toggle = true;
  
		  const sections = el.getElementsByClassName("accordion");
		  const all_toggles = el.getElementsByClassName("accordion-head");
		  const all_contents = el.getElementsByClassName("accordion-body");
		  for (let i = 0; i < sections.length; i++) {
			const section = sections[i];
			const toggle = all_toggles[i];
			const content = all_contents[i];
  
			toggle.addEventListener("click", function(e) {
			  if (!is_toggle) {

				for (let a = 0; a < all_contents.length; a++) {
				  _this.closeAccordion(all_toggles[a], all_contents[a]);
				}
  
				_this.openAccordion(toggle, content);
			  } else {
				if (toggle.classList.contains("is-open")) {
				  _this.closeAccordion(toggle, content);
				} else {
				  _this.openAccordion(toggle, content);
				}
			  }
			});
  
			if (i === 0 && is_first_expanded) {
			  _this.openAccordion(toggle, content);
			}
		  }
		}
	  };
  
	  (function() {
		const accordions = document.getElementsByClassName("accordions");
		for (let i = 0; i < accordions.length; i++) {
		  Accordion.init(accordions[i]);
		}
	  })();
  
      
    }
  }
  
  customElements.define('tentang-sanitasi', TentangSanitasi);
  