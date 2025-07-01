/**
 * Módulo para gerenciar o alternador de tema (dark/light)
 */
export class ThemeToggle {
    constructor() {
        this.themeToggleBtn = document.getElementById("theme-toggle-btn");
        this.logoHeader = document.querySelector(".logo img");
        this.logoFooter = document.querySelector(".logo-footer img");
        this.init();
    }

    init() {
        if (this.themeToggleBtn) {
            this.setInitialTheme();
            this.addEventListeners();
        }
    }

    setInitialTheme() {
        const isDarkTheme = document.body.classList.contains("dark-theme");
        this.updateTheme(isDarkTheme);
    }

    updateTheme(isDark) {
        if (isDark) {
            // Tema escuro
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            this.themeToggleBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
            if (this.logoHeader) this.logoHeader.src = "assets/img/images/Logo_semFundo_light.png";
            if (this.logoFooter) this.logoFooter.src = "assets/img/images/Logo_semFundo_light.png";
        } else {
            // Tema claro
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            this.themeToggleBtn.innerHTML = '<i class="bi bi-moon-stars"></i>';
            if (this.logoHeader) this.logoHeader.src = "assets/img/images/Logo_semFundo_dark.png";
            if (this.logoFooter) this.logoFooter.src = "assets/img/images/Logo_semFundo_dark.png";
        }
    }

    addEventListeners() {
        this.themeToggleBtn.addEventListener("click", () => {
            const isDarkTheme = document.body.classList.contains("dark-theme");
            this.updateTheme(!isDarkTheme);
        });
    }
}
