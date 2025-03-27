function ajustarNavbar() {
  let logo = document.getElementById("header");
  let navbar = document.getElementById("navbar");

  let logoHeight = window.innerWidth <= 700 ? 100 : 200; // Altura del logo según el tamaño de pantalla
  let scrollY = window.scrollY;

  if (scrollY >= logoHeight) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = (logoHeight - scrollY) + "px";
  }
}


document.addEventListener("DOMContentLoaded", ajustarNavbar); // Cuando la página termina de cargar
window.addEventListener("resize", ajustarNavbar); // Cuando se cambia el tamaño de la ventana
window.addEventListener("scroll", ajustarNavbar); // Detectar scroll normalmente