/**
 * Testes dos Componentes HTML Modulares
 * Execute este arquivo no console do navegador para validar a modularização
 */

class ComponentTester {
    constructor() {
        this.results = {
            passed: 0,
            failed: 0,
            details: []
        };
    }

    /**
     * Executa todos os testes
     */
    async runAllTests() {
        console.log('🧪 Iniciando testes dos componentes HTML...\n');

        // Testes de carregamento de componentes
        await this.testHTMLLoader();
        
        // Testes de presença de elementos
        await this.testDOMElements();
        
        // Testes de funcionalidades
        await this.testModuleFunctions();

        // Relatório final
        this.printReport();
    }

    /**
     * Testa o carregador de HTML
     */
    async testHTMLLoader() {
        console.log('📋 Testando HTML Loader...');

        // Teste 1: Verificar se o htmlLoader existe
        this.test('HTMLLoader existe', () => {
            return window.Portfolio && window.Portfolio.getHTMLLoader();
        });

        // Teste 2: Verificar stats do loader
        this.test('HTMLLoader tem estatísticas', () => {
            const loader = window.Portfolio.getHTMLLoader();
            const stats = loader.getStats();
            return stats.loaded && stats.componentsCount > 0;
        });

        // Teste 3: Verificar componentes carregados
        this.test('Componentes foram carregados', () => {
            const loader = window.Portfolio.getHTMLLoader();
            const stats = loader.getStats();
            const expectedComponents = ['header', 'hero', 'especialidades', 'tecnologias', 'sobre', 'portfolio', 'contato', 'footer', 'backToTop'];
            return expectedComponents.every(comp => stats.components.includes(comp));
        });
    }

    /**
     * Testa presença de elementos no DOM
     */
    async testDOMElements() {
        console.log('🔍 Testando presença de elementos no DOM...');

        const elements = [
            { name: 'Header', selector: 'header' },
            { name: 'Main', selector: 'main' },
            { name: 'Hero Section', selector: '.topo-do-site' },
            { name: 'Especialidades Section', selector: '.especialidades' },
            { name: 'Tecnologias Section', selector: '.tecnologias' },
            { name: 'Sobre Section', selector: '.sobre' },
            { name: 'Portfolio Section', selector: '.portfolio' },
            { name: 'Contato Section', selector: '.formulario' },
            { name: 'Footer', selector: 'footer' },
            { name: 'Back to Top', selector: '#btn-topo' },
            { name: 'Theme Toggle', selector: '#theme-toggle-btn' },
            { name: 'Mobile Menu', selector: '#menu-mobile' },
            { name: 'Typewriter Element', selector: '#typewriter' },
            { name: 'Swiper Container', selector: '.swiper' }
        ];

        elements.forEach(({ name, selector }) => {
            this.test(`${name} existe no DOM`, () => {
                return document.querySelector(selector) !== null;
            });
        });
    }

    /**
     * Testa funcionalidades dos módulos
     */
    async testModuleFunctions() {
        console.log('⚙️ Testando funcionalidades dos módulos...');

        // Teste 1: Portfolio app existe
        this.test('Portfolio app inicializado', () => {
            return window.Portfolio && window.Portfolio.initialized;
        });

        // Teste 2: Módulos carregados
        this.test('Módulos JavaScript carregados', () => {
            const stats = window.Portfolio.getStats();
            return stats.modulesCount >= 5; // Pelo menos 5 módulos
        });

        // Teste 3: Theme toggle funciona
        this.test('Theme toggle funcional', () => {
            const themeToggle = window.Portfolio.getModule('themeToggle');
            return themeToggle && typeof themeToggle.toggle === 'function';
        });

        // Teste 4: Mobile menu funciona
        this.test('Mobile menu funcional', () => {
            const mobileMenu = window.Portfolio.getModule('mobileMenu');
            return mobileMenu && typeof mobileMenu.toggle === 'function';
        });

        // Teste 5: Back to top funciona
        this.test('Back to top funcional', () => {
            const backToTop = window.Portfolio.getModule('backToTop');
            return backToTop && typeof backToTop.show === 'function';
        });
    }

    /**
     * Executa um teste individual
     */
    test(name, testFunction) {
        try {
            const result = testFunction();
            if (result) {
                console.log(`✅ ${name}`);
                this.results.passed++;
                this.results.details.push({ name, status: 'PASS' });
            } else {
                console.log(`❌ ${name}`);
                this.results.failed++;
                this.results.details.push({ name, status: 'FAIL' });
            }
        } catch (error) {
            console.log(`❌ ${name} (Erro: ${error.message})`);
            this.results.failed++;
            this.results.details.push({ name, status: 'ERROR', error: error.message });
        }
    }

    /**
     * Imprime relatório final
     */
    printReport() {
        console.log('\n📊 RELATÓRIO FINAL DOS TESTES');
        console.log('═══════════════════════════════');
        console.log(`✅ Testes Aprovados: ${this.results.passed}`);
        console.log(`❌ Testes Falharam: ${this.results.failed}`);
        console.log(`📈 Taxa de Sucesso: ${((this.results.passed / (this.results.passed + this.results.failed)) * 100).toFixed(1)}%`);
        
        if (this.results.failed > 0) {
            console.log('\n❌ TESTES QUE FALHARAM:');
            this.results.details
                .filter(test => test.status !== 'PASS')
                .forEach(test => {
                    console.log(`   • ${test.name} ${test.error ? `(${test.error})` : ''}`);
                });
        }

        console.log('\n🎯 STATUS GERAL:', this.results.failed === 0 ? 'SUCESSO' : 'FALHAS DETECTADAS');
    }

    /**
     * Teste de performance dos componentes
     */
    async testPerformance() {
        console.log('⚡ Testando performance...');

        const start = performance.now();
        
        // Simular recarregamento de um componente
        await window.Portfolio.getHTMLLoader().reloadComponent('hero');
        
        const end = performance.now();
        const loadTime = end - start;

        this.test('Recarregamento de componente é rápido (< 1s)', () => {
            return loadTime < 1000;
        });

        console.log(`⏱️ Tempo de recarregamento: ${loadTime.toFixed(2)}ms`);
    }

    /**
     * Teste de acessibilidade básica
     */
    testAccessibility() {
        console.log('♿ Testando acessibilidade básica...');

        // Teste de alt em imagens
        this.test('Imagens têm texto alternativo', () => {
            const images = document.querySelectorAll('img');
            return Array.from(images).every(img => img.hasAttribute('alt'));
        });

        // Teste de links
        this.test('Links têm texto ou aria-label', () => {
            const links = document.querySelectorAll('a');
            return Array.from(links).every(link => 
                link.textContent.trim() || link.hasAttribute('aria-label')
            );
        });

        // Teste de botões
        this.test('Botões são acessíveis', () => {
            const buttons = document.querySelectorAll('button');
            return Array.from(buttons).every(button => 
                button.textContent.trim() || button.hasAttribute('aria-label')
            );
        });
    }
}

// Função para executar todos os testes
async function runComponentTests() {
    const tester = new ComponentTester();
    await tester.runAllTests();
    await tester.testPerformance();
    tester.testAccessibility();
    return tester.results;
}

// Função para executar testes quando a página carregar
function runTestsWhenReady() {
    if (window.Portfolio && window.Portfolio.initialized) {
        setTimeout(runComponentTests, 1000); // Aguardar 1s para garantir que tudo carregou
    } else {
        setTimeout(runTestsWhenReady, 500);
    }
}

// Auto-executar se estiver no console
if (typeof window !== 'undefined') {
    console.log('🧪 Tester de Componentes HTML carregado!');
    console.log('📝 Execute runComponentTests() para testar todos os componentes');
    console.log('⚡ Execute runTestsWhenReady() para aguardar carregamento e testar automaticamente');
}

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ComponentTester, runComponentTests, runTestsWhenReady };
}
