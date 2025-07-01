/**
 * Main JavaScript Entry Point
 * Inicializa todos os módulos do portfolio
 */

// Importar todos os módulos
import { ThemeToggle } from './modules/theme-toggle.js';
import { MobileMenu } from './modules/mobile-menu.js';
import { TypewriterEffect } from './modules/typewriter.js';
import { SwiperManager } from './modules/swiper-manager.js';
import { BackToTop } from './modules/back-to-top.js';

class Portfolio {
    constructor() {
        this.modules = {};
        this.initialized = false;
        this.init();
    }

    async init() {
        if (this.initialized) return;

        try {
            console.log('🚀 Inicializando Portfolio...');

            // Aguardar o DOM estar pronto
            await this.waitForDOM();

            // Inicializar módulos JavaScript
            await this.initializeModules();

            this.initialized = true;
            console.log('🎉 Portfolio inicializado com sucesso!');

        } catch (error) {
            console.error('❌ Erro ao inicializar portfolio:', error);
        }
    }

    /**
     * Aguarda o DOM estar completamente carregado
     */
    waitForDOM() {
        return new Promise((resolve) => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }

    async initializeModules() {
        try {
            console.log('⚙️ Inicializando módulos JavaScript...');

            // Inicializar tema
            this.modules.themeToggle = new ThemeToggle();
            console.log('✅ Tema inicializado');

            // Inicializar menu mobile
            this.modules.mobileMenu = new MobileMenu();
            console.log('✅ Menu mobile inicializado');

            // Inicializar botão voltar ao topo
            this.modules.backToTop = new BackToTop();
            console.log('✅ Botão voltar ao topo inicializado');

            // Inicializar typewriter (aguardar carregamento da biblioteca)
            await this.initTypewriter();

            // Inicializar Swiper (aguardar carregamento da biblioteca)
            await this.initSwiper();

            console.log('✅ Todos os módulos JavaScript inicializados');

        } catch (error) {
            console.error('❌ Erro ao inicializar módulos:', error);
        }
    }

    async initTypewriter() {
        return new Promise((resolve) => {
            let attempts = 0;
            const maxAttempts = 50; // 5 segundos
            
            // Aguardar carregamento da biblioteca Typewriter
            const checkTypewriter = () => {
                attempts++;
                
                if (typeof Typewriter !== 'undefined') {
                    console.log('📚 Biblioteca Typewriter carregada');
                    this.modules.typewriter = new TypewriterEffect('#typewriter');
                    console.log('✅ Typewriter inicializado');
                    resolve();
                } else if (attempts >= maxAttempts) {
                    console.error('❌ Timeout: Biblioteca Typewriter não carregou em 5 segundos');
                    resolve(); // Resolve anyway to continue initialization
                } else {
                    console.log(`⏳ Aguardando carregamento do Typewriter... (tentativa ${attempts}/${maxAttempts})`);
                    setTimeout(checkTypewriter, 100);
                }
            };
            checkTypewriter();
        });
    }

    async initSwiper() {
        return new Promise((resolve) => {
            // Aguardar carregamento da biblioteca Swiper
            const checkSwiper = () => {
                if (typeof Swiper !== 'undefined') {
                    this.modules.swiper = new SwiperManager();
                    console.log('✅ Swiper inicializado');
                    resolve();
                } else {
                    console.log('⏳ Aguardando carregamento do Swiper...');
                    setTimeout(checkSwiper, 100);
                }
            };
            checkSwiper();
        });
    }

    /**
     * Obtém um módulo específico
     */
    getModule(moduleName) {
        return this.modules[moduleName];
    }

    /**
     * Obtém estatísticas da aplicação
     */
    getStats() {
        return {
            initialized: this.initialized,
            modulesCount: Object.keys(this.modules).length,
            modules: Object.keys(this.modules)
        };
    }
}

// Inicializar aplicação
console.log('🎯 Carregando main.js...');
const portfolio = new Portfolio();

// Exportar para acesso global (útil para debug)
window.Portfolio = portfolio;

// Debug: Expor instância para testes
window.portfolioInstance = portfolio;

console.log('📦 Main.js carregado completamente');
