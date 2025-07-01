/**
 * Módulo para gerenciar o efeito de typewriter
 */
export class TypewriterEffect {
    constructor(elementSelector, options = {}) {
        this.elementSelector = elementSelector;
        this.element = document.querySelector(elementSelector);
        this.options = {
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            ...options
        };
        this.init();
    }

    init() {
        console.log('🖊️ Inicializando TypewriterEffect...');
        
        if (!this.element) {
            console.error(`❌ Elemento não encontrado: ${this.elementSelector}`);
            return;
        }

        if (typeof Typewriter === 'undefined') {
            console.error('❌ Biblioteca Typewriter não carregada');
            return;
        }

        console.log('✅ Elemento encontrado, biblioteca disponível');
        this.setupTypewriter();
    }

    setupTypewriter() {
        try {
            console.log('🖊️ Configurando typewriter...');
            
            const typewriter = new Typewriter(this.element, this.options);

            typewriter
                .typeString("Olá! Me chamo Iago Cunha!")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Desenvolvedor Full Stack")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Apaixonado por Tecnologia")
                .pauseFor(2500)
                .deleteAll()
                .start();

            console.log('✅ Typewriter configurado e iniciado');
            return typewriter;
            
        } catch (error) {
            console.error('❌ Erro ao configurar typewriter:', error);
        }
    }
}
