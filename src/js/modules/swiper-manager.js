/**
 * Módulo para gerenciar o Swiper
 */
export class SwiperManager {
    constructor(selector = '.swiper', options = {}) {
        this.selector = selector;
        this.defaultOptions = {
            direction: "vertical",
            loop: true,
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            ...options
        };
        this.init();
    }

    init() {
        if (typeof Swiper !== 'undefined') {
            this.swiper = new Swiper(this.selector, this.defaultOptions);
        }
    }

    getSwiper() {
        return this.swiper;
    }

    destroy() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    }
}
