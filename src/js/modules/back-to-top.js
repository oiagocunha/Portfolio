/**
 * Módulo para gerenciar o botão "voltar ao topo"
 */
export class BackToTop {
    constructor(buttonSelector = '#btn-topo') {
        this.button = document.querySelector(buttonSelector);
        this.scrollThreshold = {
            desktop: 300,
            mobile: 200
        };
        this.scrollTimeout = null;
        this.init();
    }

    init() {
        if (this.button) {
            this.addEventListeners();
            this.checkScroll(); // Verificar posição inicial
        }
    }

    addEventListeners() {
        // Evento de scroll otimizado
        window.addEventListener('scroll', () => {
            this.optimizedScrollHandler();
        });

        // Eventos de clique (desktop e mobile)
        this.button.addEventListener('click', (e) => {
            this.scrollToTop(e);
        });

        this.button.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.scrollToTop(e);
        });
    }

    optimizedScrollHandler() {
        if (!this.scrollTimeout) {
            this.scrollTimeout = setTimeout(() => {
                this.checkScroll();
                this.scrollTimeout = null;
            }, 100);
        }
    }

    checkScroll() {
        const isMobile = window.innerWidth <= 768;
        const threshold = isMobile ? this.scrollThreshold.mobile : this.scrollThreshold.desktop;

        if (window.pageYOffset > threshold) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }

    scrollToTop(e) {
        if (e) e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
