/**
 * Módulo para gerenciar o menu mobile
 */
export class MobileMenu {
    constructor() {
        this.btnMenu = document.getElementById('btn-abrir-menu');
        this.menu = document.getElementById('menu-mobile');
        this.overlay = document.getElementById('overlay-menu');
        this.btnFechar = this.menu?.querySelector('.btn-fechar');
        this.init();
    }

    init() {
        if (this.btnMenu && this.menu && this.overlay) {
            this.addEventListeners();
        }
    }

    addEventListeners() {
        // Abrir menu
        this.btnMenu.addEventListener('click', () => {
            this.openMenu();
        });

        // Fechar menu ao clicar no overlay
        this.overlay.addEventListener('click', () => {
            this.closeMenu();
        });

        // Fechar menu ao clicar no botão fechar
        if (this.btnFechar) {
            this.btnFechar.addEventListener('click', () => {
                this.closeMenu();
            });
        }

        // Fechar menu ao clicar em qualquer link do menu
        const menuLinks = this.menu.querySelectorAll('nav ul li a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Fechar menu com tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.menu.classList.contains('abrir-menu')) {
                this.closeMenu();
            }
        });
    }

    openMenu() {
        this.menu.classList.add('abrir-menu');
        document.body.style.overflow = 'hidden'; // Prevenir scroll do body
    }

    closeMenu() {
        this.menu.classList.remove('abrir-menu');
        document.body.style.overflow = ''; // Restaurar scroll do body
    }
}
