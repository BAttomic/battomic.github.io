// ========================================
// Bernardo Motta - Portfolio JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // SISTEMA DE IDIOMAS
    // ==========================================
    
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;
    
    // Verifica idioma salvo ou usa português como padrão
    const savedLang = localStorage.getItem('site-language') || 'pt';
    
    // Função para aplicar idioma
    function setLanguage(lang) {
        if (lang === 'en') {
            body.classList.add('lang-en');
            if (langToggle) langToggle.textContent = 'PT';
        } else {
            body.classList.remove('lang-en');
            if (langToggle) langToggle.textContent = 'EN';
        }
        localStorage.setItem('site-language', lang);
    }
    
    // Aplicar idioma inicial
    setLanguage(savedLang);
    
    // Event listener para toggle
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = body.classList.contains('lang-en') ? 'pt' : 'en';
            setLanguage(currentLang);
        });
    }
    
    // ==========================================
    // ATUALIZAÇÃO DE HORÁRIO
    // ==========================================
    
    function updateTime() {
        const now = new Date();
        const options = {
            timeZone: 'America/Sao_Paulo',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        const timeString = now.toLocaleTimeString('pt-BR', options);
        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            timeElement.textContent = timeString;
        }
    }
    
    updateTime();
    setInterval(updateTime, 1000);

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // ACTIVE NAVIGATION
    // ==========================================
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.index-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ==========================================
    // PROJECT CARD HOVER
    // ==========================================
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        // Se a imagem der erro, mostra placeholder
        const img = card.querySelector('.project-image img');
        const imageContainer = card.querySelector('.project-image');
        if (img && imageContainer) {
            img.addEventListener('error', () => {
                imageContainer.classList.add('no-image');
            });
        }
    });

    // ==========================================
    // HERO TITLE ANIMATION
    // ==========================================
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.6s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    // ==========================================
    // ANIMATE ON SCROLL
    // ==========================================
    
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(
            '.project-card, .timeline-item, .education-card'
        );
        
        const windowHeight = window.innerHeight;

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < windowHeight - 100;
            
            if (isVisible && !el.classList.contains('animated')) {
                el.classList.add('animated');
                el.style.animation = 'fadeInUp 0.5s ease forwards';
            }
        });
    };

    // Add fade-in animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .project-card, .timeline-item, .education-card {
            opacity: 0;
        }
        
        .animated {
            opacity: 1 !important;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on load

    console.log('✅ Portfolio carregado com sucesso!');
});
