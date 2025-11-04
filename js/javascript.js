// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    
    // Abrir/fechar menu
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Fechar menu
    function closeMenu() {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    mobileMenu.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', closeMenu);
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Fechar menu ao redimensionar a janela para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});