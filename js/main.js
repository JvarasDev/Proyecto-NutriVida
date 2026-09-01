document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenuWrapper = document.getElementById('nav-menu-wrapper');

  if (hamburger && navMenuWrapper) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenuWrapper.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link, .nav-login, .nav-btn-register').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenuWrapper.classList.remove('active');
      });
    });
  }
});
