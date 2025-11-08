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

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos details
    const detailsElements = document.querySelectorAll('details');
    
    // Inicialmente fecha todos os detalhes
    detailsElements.forEach(detail => {
    detail.open = false;
    });
    
    // Adiciona evento de clique para cada details
    detailsElements.forEach(detail => {
    detail.addEventListener('click', function(e) {
        // Se este details está sendo aberto
        if (!this.open) {
        // Fecha todos os outros details
        detailsElements.forEach(otherDetail => {
            if (otherDetail !== this) {
            otherDetail.open = false;
            }
        });
        }
    });
    });
    
    // Controle das seções principais
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const section = this.closest('.section');
        const isExpanded = section.classList.contains('expanded');
        
        // Fecha todas as seções
        document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('expanded');
        });
        
        // Se a seção clicada não estava expandida, expande ela
        if (!isExpanded) {
        section.classList.add('expanded');
        }
    });
    });
});