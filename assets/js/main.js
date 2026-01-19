// Bernardo Motta - Portfolio JavaScript

const translations = {
    pt: {
        welcome: "Bem-vindo ao meu mundo!",
        nav_home: "bernardo.dev",
        nav_work: "work.done", 
        nav_blog: "blog.share",
        status: "Disponível",
        time_label: "Meu horário:",
        role: "Back-end & DevOps",
        bio: "Especialista em automação empresarial e infraestrutura escalável. Transformo fluxos complexos em soluções eficientes usando N8n, APIs e DevOps.",
        experience: "7+ anos de experiência",
        location: "Viçosa, MG",
        languages: "Português, Inglês",
        cta_schedule: "Agende uma chamada",
        cta_quote: "Fale comigo",
        hero_title_1: "Desenvolvedor Backend &",
        hero_title_2: "Especialista em Automação",
        hero_desc: "Transformo processos manuais complexos em sistemas automatizados escaláveis. Especializado em integração de APIs, infraestrutura DevOps e automações inteligentes que reduzem custos operacionais.",
        section_work: "Projetos",
        section_about: "Sobre mim", 
        section_whatido: "O que eu faço",
        section_stack: "Tech stack",
        section_experience: "Experiência",
        section_education: "Educação",
        section_contact: "Contato",
        about_p1: "Sou Bernardo Cordeiro Motta, desenvolvedor backend com mais de 7 anos de experiência transformando complexidade em automação. Minha base acadêmica em <strong>Matemática pela UFV</strong> me deu fundamentos sólidos em lógica e pensamento analítico, que aplico diariamente para resolver problemas técnicos complexos.",
        about_p2: "Minha jornada prática começou em 2017 desenvolvendo sistemas para redes de Minecraft com milhares de usuários registrados, onde aprendi na prática sobre <strong>performance</strong>, <strong>escalabilidade</strong> e <strong>infraestrutura resiliente</strong>. Essa experiência com alto tráfego me ensinou a pensar em arquiteturas robustas desde o início.",
        about_p3: "Hoje, aplico esse conhecimento criando <strong>automações inteligentes</strong>, desenvolvendo <strong>APIs escaláveis</strong> e implementando cultura <strong>DevOps</strong> em empresas e startups. Meu foco é eliminar gargalos operacionais e transformar processos manuais em fluxos automatizados e confiáveis.",
        service_automation_title: "Automação de Processos",
        service_automation_desc: "Desenvolvimento de fluxos automatizados que conectam WhatsApp, CRMs, e-mail e sistemas internos. Elimino tarefas repetitivas e reduzo tempo de resposta ao cliente.",
        service_devops_title: "DevOps & Infraestrutura", 
        service_devops_desc: "Arquitetura e gestão de servidores VPS com <strong>Docker</strong>, pipelines <strong>CI/CD</strong> automatizados e monitoramento. Garanto estabilidade, escalabilidade e zero downtime para aplicações críticas.",
        service_backend_title: "Desenvolvimento Backend",
        service_backend_desc: "Criação de <strong>APIs REST robustas</strong> com Node.js e Python/Django, integração entre sistemas e arquitetura de bancos de dados otimizada para performance e segurança.",
        service_integration_title: "Integração de Sistemas",
        service_integration_desc: "Conexão entre ferramentas empresariais (WhatsApp Business, Google APIs, Discord, CRMs) criando ecossistemas integrados que eliminam silos de informação e trabalho manual.",
        projects_counter: "Projetos destaques com foco em <strong>automação</strong> e <strong>escalabilidade</strong>",
        exp_freelancer_title: "Desenvolvedor Autônomo",
        exp_freelancer_date: "2018 - Presente", 
        exp_freelancer_role: "Back-end, DevOps & Automação",
        exp_freelancer_desc: "Desenvolvimento de soluções customizadas de automação para empresas e startups. Especialização em infraestrutura VPS escalável, pipelines CI/CD, integração de APIs empresariais e sistemas de atendimento automatizado. Experiência comprovada gerenciando servidores de jogos com milhares de usuários simultâneos.",
        exp_promovads_title: "PromovAds",
        exp_promovads_date: "Mar/2025 - Set/2025",
        exp_promovads_role: "Desenvolvedor", 
        exp_promovads_desc: "Implementação de automações internas que otimizaram processos operacionais. Desenvolvimento de agente de atendimento com IA integrado ao WhatsApp e reestruturação completa da infraestrutura VPS com pipelines CI/CD automatizados.",
        exp_orange_title: "OrangeStore",
        exp_orange_date: "Ago/2024 - Jan/2025",
        exp_orange_role: "Técnico Especializado",
        exp_orange_desc: "Microsoldagem e reparo de componentes eletrônicos complexos. Experiência que desenvolveu precisão técnica, capacidade de diagnóstico avançado e resolução de problemas em nível de hardware.",
        edu_college_title: "Análise e Desenvolvimento de Sistemas",
        edu_college_school: "UniViçosa",
        edu_college_date: "2024 - Atual",
        edu_university_title: "Bacharelado em Matemática", 
        edu_university_school: "UFV - Universidade Federal de Viçosa",
        edu_university_date: "2020 - 2023 (Incompleto)",
        contact_title: "Contato",
        contact_whatsapp: "WhatsApp",
        contact_github: "@BAttomic",
        contact_linkedin: "/bernardo-cordeiro-motta",
        work_title: "Meus",
        work_highlight: "Projetos", 
        work_desc: "Uma coleção dos principais projetos que desenvolvi ao longo dos anos, desde automações inteligentes até infraestrutura de servidores.",
        blog_title: "Blog",
        blog_highlight: "& Artigos",
        blog_desc: "Compartilhando conhecimento sobre automação, DevOps e integração de sistemas.",
        blog_coming: "Mais artigos em breve...",
        index_title: "Índice",
        index_work: "Projetos",
        index_about: "Sobre mim",
        index_whatido: "O que faço",
        index_stack: "Tech stack", 
        index_experience: "Experiência",
        index_contact: "Contato",
        nav_prev: "Projeto Anterior",
        nav_back: "Voltar aos Projetos", 
        nav_next: "Próximo Projeto",
        ia_title: "Agentes Inteligentes Sob Medida",
        ia_subtitle: "Desenvolvimento personalizado de agentes para venda consultiva, suporte e gestão, integrados exatamente aos processos e ferramentas que sua empresa já utiliza. Especialização em clínicas e PMEs da área da saúde.",
        lykos_title: "Lykos Province",
        lykos_subtitle: "Uma comunidade gaming que passou por diversas fases e jogos, tendo seu maior destaque no Minecraft com uma rede completa de servidores, economia própria e mais de 1000 membros ativos."
    },
    
    en: {
        welcome: "Welcome to my world!",
        nav_home: "bernardo.dev",
        nav_work: "work.done",
        nav_blog: "blog.share", 
        status: "Open to work",
        time_label: "My time:",
        role: "Back-end & DevOps",
        bio: "Specialist in business automation and scalable infrastructure. I transform complex flows into efficient solutions using N8n, APIs and DevOps.",
        experience: "7+ years experience",
        location: "Viçosa, MG",
        languages: "Portuguese, English",
        cta_schedule: "Schedule a call",
        cta_quote: "Work with me",
        hero_title_1: "Backend Developer &",
        hero_title_2: "Automation Specialist",
        hero_desc: "I transform complex manual processes into scalable automated systems. Specialized in API integration, DevOps infrastructure and intelligent automations that reduce operational costs.",
        section_work: "Work",
        section_about: "About me",
        section_whatido: "What I do", 
        section_stack: "Tech stack",
        section_experience: "Experience", 
        section_education: "Education",
        section_contact: "Contact me",
        about_p1: "I'm Bernardo Cordeiro Motta, a backend developer with over 7 years of experience transforming complexity into automation. My academic background in <strong>Mathematics from UFV</strong> gave me solid foundations in logic and analytical thinking, which I apply daily to solve complex technical problems.",
        about_p2: "My practical journey began in 2017 developing systems for Minecraft networks with thousands of registered users, where I learned hands-on about <strong>performance</strong>, <strong>scalability</strong> and <strong>resilient infrastructure</strong>. This high-traffic experience taught me to think about robust architectures from the start.",
        about_p3: "Today, I apply this knowledge creating <strong>intelligent automations</strong>, developing <strong>scalable APIs</strong> and implementing <strong>DevOps</strong> culture in companies and startups. My focus is eliminating operational bottlenecks and transforming manual processes into automated and reliable workflows.",
        service_automation_title: "Process Automation",
        service_automation_desc: "Development of automated workflows that connect WhatsApp, CRMs, email and internal systems. I eliminate repetitive tasks and reduce customer response time.",
        service_devops_title: "DevOps & Infrastructure",
        service_devops_desc: "Architecture and management of VPS servers with <strong>Docker</strong>, automated <strong>CI/CD</strong> pipelines and monitoring. I ensure stability, scalability and zero downtime for critical applications.",
        service_backend_title: "Backend Development", 
        service_backend_desc: "Creation of <strong>robust REST APIs</strong> with Node.js and Python/Django, system integration and database architecture optimized for performance and security.",
        service_integration_title: "System Integration",
        service_integration_desc: "Connection between business tools (WhatsApp Business, Google APIs, Discord, CRMs) creating integrated ecosystems that eliminate information silos and manual work.",
        projects_counter: "Featured projects focused on <strong>automation</strong> and <strong>scalability</strong>",
        exp_freelancer_title: "Freelance Developer",
        exp_freelancer_date: "2018 - Present",
        exp_freelancer_role: "Backend, DevOps & Automation", 
        exp_freelancer_desc: "Development of custom automation solutions for companies and startups. Specialization in scalable VPS infrastructure, CI/CD pipelines, business API integration and automated customer service systems. Proven experience managing game servers with thousands of simultaneous users.",
        exp_promovads_title: "PromovAds",
        exp_promovads_date: "Mar/2025 - Sep/2025",
        exp_promovads_role: "Developer",
        exp_promovads_desc: "Implementation of internal automations that optimized operational processes. Development of AI customer service agent integrated with WhatsApp and complete restructuring of VPS infrastructure with automated CI/CD pipelines.",
        exp_orange_title: "OrangeStore", 
        exp_orange_date: "Aug/2024 - Jan/2025",
        exp_orange_role: "Specialized Technician",
        exp_orange_desc: "Microsoldering and repair of complex electronic components. Experience that developed technical precision, advanced diagnostic capability and hardware-level problem solving.",
        edu_college_title: "Systems Analysis and Development",
        edu_college_school: "UniViçosa",
        edu_college_date: "2024 - Current",
        edu_university_title: "Bachelor of Mathematics",
        edu_university_school: "UFV - Federal University of Viçosa", 
        edu_university_date: "2020 - 2023 (Incomplete)",
        contact_title: "Contact me",
        contact_whatsapp: "WhatsApp",
        contact_github: "@BAttomic", 
        contact_linkedin: "/bernardo-cordeiro-motta",
        work_title: "My",
        work_highlight: "Projects",
        work_desc: "A collection of the main projects I've developed over the years, from intelligent automations to server infrastructure.",
        blog_title: "Blog",
        blog_highlight: "& Insights", 
        blog_desc: "Sharing knowledge about automation, DevOps and system integration.",
        blog_coming: "More articles coming soon...",
        index_title: "Index",
        index_work: "Work", 
        index_about: "About me",
        index_whatido: "What I do",
        index_stack: "Tech stack",
        index_experience: "Experience",
        index_contact: "Contact",
        nav_prev: "Previous Project",
        nav_back: "Back to Projects",
        nav_next: "Next Project",
        ia_title: "Custom Intelligent Agents",
        ia_subtitle: "Custom development of agents for consultative sales, support and management, integrated exactly to the processes and tools your company already uses. Specialization in clinics and healthcare SMEs.",
        lykos_title: "Lykos Province", 
        lykos_subtitle: "A gaming community that went through several phases and games, having its highlight in Minecraft with a complete server network, own economy and over 1000 active members."
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;
    const savedLang = localStorage.getItem('site-language') || 'pt';
    
    // Sistema de idiomas integrado com horário
    function setLanguage(lang) {
        if (lang === 'en') {
            body.classList.add('lang-en');
            if (langToggle) langToggle.textContent = 'PT';
        } else {
            body.classList.remove('lang-en');
            if (langToggle) langToggle.textContent = 'EN';
        }
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = translations[lang][key];
            if (translation) {
                el.innerHTML = translation;
            }
        });
        
        localStorage.setItem('site-language', lang);
        updateTime(); // Atualiza formato do horário imediatamente
    }
    
    // Horário com formato baseado no idioma
    function updateTime() {
        const now = new Date();
        const isEnglish = body.classList.contains('lang-en');
        
        const options = {
            timeZone: 'America/Sao_Paulo',
            hour: '2-digit',
            minute: '2-digit',
            hour12: isEnglish // true = 12h AM/PM, false = 24h
        };
        
        const locale = isEnglish ? 'en-US' : 'pt-BR';
        const timeString = now.toLocaleTimeString(locale, options);
        
        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            timeElement.textContent = timeString;
        }
    }
    
    setLanguage(savedLang);
    updateTime();
    setInterval(updateTime, 1000);
    
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = body.classList.contains('lang-en') ? 'pt' : 'en';
            setLanguage(currentLang);
        });
    }
    
    // Smooth scroll
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

    // Navegação ativa
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

    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        const img = card.querySelector('.project-image img');
        const imageContainer = card.querySelector('.project-image');
        if (img && imageContainer) {
            img.addEventListener('error', () => {
                imageContainer.classList.add('no-image');
            });
        }
    });

    // Animação do hero
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

    // Animações de scroll
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

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .project-card, .timeline-item, .education-card { opacity: 0; }
        .animated { opacity: 1 !important; }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});