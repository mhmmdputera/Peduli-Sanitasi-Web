import articledataJson from '../../../articleData.json';
class OtherArticle extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-fluid mb-5 other-article">
        <div class="receptacle swiper">
            <h1>ARTIKEL LAINNYA!</h1>
            <div class="slide-receptacle">
                <div class="place-wrapper swiper-wrapper">
                    ${this.generateOtherArticles()}
                </div>
            </div>
            <div class="swiper-button-next swiper-navBtn-next"></div>
            <div class="swiper-button-prev swiper-navBtn-prev"></div>
            <div class="swiper-pagination py-3"></div>
        </div>
        </div>
      `;
        const articleLinks = document.querySelectorAll('.title');
        articleLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const target = event.target;
                const href = target.getAttribute('href');
                window.location.href = href;
                window.scrollTo(0, 0);
            });
        });
        const swiper = new Swiper(".slide-receptacle", {
            slidesPerView: 4,
            spaceBetween: 20,
            sliderPerGroup: 4,
            loop: true,
            centerSlide: "true",
            fade: "true",
            grabCursor: "true",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                520: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 4,
                },
            },
        });
    }
    generateOtherArticles() {
        const currentArticleId = this.getCurrentArticleId();
        const otherArticles = this.getOtherArticles(currentArticleId);
        return otherArticles
            .map(article => {
                return `
              <div class="place swiper-slide" id="place">
                <div class="image-box">
                  <img src="${article.image}" alt="${article['image-name']}">
                </div>
                <div class="title-author">
                  <h3 class="title"><a href="#/article/${article.id}">${article.title}</a></h3>
                  <h4 class="author">Penulis : ${article.author}</h4>
                </div>
              </div>
            `;
            })
            .join('');
    }

    getCurrentArticleId() {
        const currentUrl = window.location.href;
        const urlParts = currentUrl.split('/');
        return urlParts[urlParts.length - 1];
    }

    getOtherArticles(currentArticleId) {
        const allArticles = articledataJson.article;
        return allArticles.filter(article => article.id !== currentArticleId);
    }
}

customElements.define('other-article', OtherArticle);