// TYPEWRITER

const typewriter = new Typewriter("#typewriter", {
  loop: true,
  delay: 75,
  deleteSpeed: 50
});

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


// CONFIGURAÇÕES SWIPER

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

