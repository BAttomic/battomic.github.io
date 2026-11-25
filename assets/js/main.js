// Bernardo Motta - Portfolio JavaScript

const translations = {
    pt: {
        welcome: "Bem-vindo ao meu mundo!",
        nav_home: "bernardo.dev",
        nav_work: "work.done", 
        status: "Disponível",
        time_label: "Meu horário:",
        role: "Back-End & Analista de Dados",
        bio: "Automatizo processos e construo sistemas que tiram trabalho manual do caminho: plataformas de dados, painéis, agentes de IA e a infraestrutura segura que mantém tudo no ar.",
        experience: "9+ anos de experiência",
        location: "Viçosa, MG",
        languages: "Português, Inglês",
        cta_schedule: "Agende uma chamada",
        cta_quote: "Fale comigo",
        hero_title_1: "Desenvolvedor <span class=\"nowrap\">Back-End &amp;</span>",
        hero_title_2: "Analista de Dados",
        hero_desc: "Automatizo processos, crio aplicações web, integrações de dados, painéis e agentes de IA, e cuido da infraestrutura que mantém tudo no ar, com segurança e atenção à LGPD.",
        section_work: "Projetos",
        section_about: "Sobre mim", 
        section_whatido: "O que eu faço",
        section_stack: "Tech stack",
        stack_cat_lang: "Linguagens", stack_cat_fw: "Frameworks", stack_cat_infra: "Infra &amp; Cloud", stack_cat_data: "Dados", stack_cat_ai: "IA", stack_cat_auto: "Automação",
        service_data_title: "Dados &amp; painéis",
        service_data_desc: "Dados de sistemas diferentes reunidos num banco só, com permissões por papel, e painéis com metas, previsão e comparativos, sob medida ou no <strong>Power BI</strong>.",
        section_journey: "Trajetória",
        index_journey: "Trajetória",
        journey_next: "Futuro em construção",
        section_contact: "Contato",
        about_p1: "Sou Bernardo Cordeiro Motta, desenvolvedor back-end com mais de 9 anos de experiência transformando complexidade em automação. Fiz <strong>3 anos de Bacharelado em Matemática na UFV</strong> (Universidade Federal de Viçosa) e saí para aproveitar oportunidades de trabalho. Depois me <strong>formei em Análise e Desenvolvimento de Sistemas pela UniViçosa</strong> e voltei à Matemática para dar continuidade a esse estudo: hoje curso <strong>Licenciatura em Matemática pela FAVENI</strong> (EAD). Essa base em lógica e pensamento analítico é o que aplico todo dia para resolver problemas técnicos complexos.",
        about_p2: "Minha jornada prática começou em agosto de 2017, quando fundei a <strong>Lykos Province</strong> e passei a desenvolver sistemas para redes de Minecraft com milhares de usuários registrados. Ali aprendi na prática sobre <strong>performance</strong>, <strong>escalabilidade</strong> e <strong>infraestrutura resiliente</strong>, e essa experiência com alto tráfego me ensinou a pensar em arquiteturas robustas desde o início.",
        about_p3: "Hoje sou <strong>desenvolvedor e analista de dados na Eficaz</strong>, uma rede de clínicas, e assumo também o que vai além desse escopo: infraestrutura, segurança, banco, integrações de dados e as 22 apps internas. Em paralelo, construo meu próprio <strong>SaaS de CRM com agentes de IA</strong>, fluxos no estilo n8n e cobrança, e sigo fazendo <strong>automação de processos</strong> para empresas. Meu foco é eliminar gargalos operacionais e transformar processos manuais em fluxos automatizados e confiáveis.",
        service_automation_title: "Automação de Processos",
        service_automation_desc: "Fluxos e agentes de IA que conectam WhatsApp, CRMs, e-mail, Meta, Google e sistemas internos, no <strong>n8n</strong> ou em código. Tiram tarefas repetitivas da equipe e encurtam o tempo de resposta ao cliente.",
        service_devops_title: "Infraestrutura &amp; segurança", 
        service_devops_desc: "Servidores Linux com <strong>Docker</strong>, proxy e deploy a partir do Git, ambiente de teste separado, backup cifrado com restauração testada, monitoramento e cuidado com a LGPD.",
        service_backend_title: "Aplicações web &amp; APIs",
        service_backend_desc: "Aplicações em <strong>Next.js</strong> e APIs em Node.js e Python, sobre PostgreSQL ou MongoDB, com login por pessoa, papéis por área e dados sem risco de perda.",
        projects_counter: "Projetos destaques com foco em <strong>automação</strong> e <strong>escalabilidade</strong>",
        exp_eficaz_title: "Eficaz",
        exp_eficaz_date: "Out/2026 - Presente",
        exp_eficaz_role: "Desenvolvedor & Analista de Dados",
        exp_eficaz_desc: "Rede com 5 unidades de medicina e odontologia e 3 franquias de cartão de benefícios. Além do desenvolvimento e da análise de dados, assumi também o que foge do escopo: um servidor herdado cheio de <strong>vulnerabilidades e problemas de LGPD</strong>, que resolvi e migrei para uma plataforma isolada e versionada (<strong>Docker Swarm</strong>, Traefik, <strong>PostgreSQL 18</strong> com um papel por app), com backup cifrado, restauração testada toda semana, ambiente de teste e melhoria contínua. Em 8 semanas: 22 apps migradas ou criadas, 26 repositórios e mais de 630 commits, entre integrações de dados, painéis e um CRM de atendimento por WhatsApp. <a href=\"work/eficaz.html\" style=\"color: var(--accent); white-space: nowrap;\">Ver o case <i class=\"fas fa-arrow-right\"></i></a>",
        exp_lykos_title: "Lykos Province",
        exp_lykos_date: "Ago/2017 - 2023",
        exp_lykos_role: "Fundador & Desenvolvedor",
        exp_lykos_desc: "Onde comecei a programar: a comunidade de jogos que fundei, com uma rede de Minecraft de <strong>8 servidores</strong>, lobby e proxy em VPS próprias (Pterodactyl), site com contas e loja e um bot no Discord com os dados dos servidores em tempo real. Mais de 1000 membros ativos. <a href=\"work/lykos-province.html\" style=\"color: var(--accent); white-space: nowrap;\">Ver o case <i class=\"fas fa-arrow-right\"></i></a>",
        exp_freelancer_title: "Desenvolvedor Autônomo",
        exp_freelancer_date: "2018 - Presente", 
        exp_freelancer_role: "Back-end, DevOps & Automação",
        exp_freelancer_desc: "Freelas no mercado de jogos: construí a <strong>infraestrutura de servidores</strong> dos clientes, com pipelines de <strong>CI/CD</strong> e rotinas de <strong>backup</strong>, e até criei <strong>plugins autorais</strong> para eles. Hoje construo meu próprio SaaS multi-tenant de CRM, agentes de IA, fluxos de automação e cobrança (<strong>BAttomic</strong>, nome provisório).",
        exp_promovads_title: "PromovAds",
        exp_promovads_date: "Mar/2025 - Set/2025",
        exp_promovads_role: "Desenvolvedor", 
        exp_promovads_desc: "Automações integradas à <strong>Meta</strong> e ao <strong>Google</strong> e agentes de IA construídos no <strong>n8n</strong>, incluindo um agente de atendimento integrado ao WhatsApp, além da reestruturação completa da infraestrutura VPS com pipelines CI/CD. Foi aqui que surgiu a ideia de construir meu próprio CRM.",
        exp_orange_title: "OrangeStore",
        exp_orange_date: "Ago/2024 - Jan/2025",
        exp_orange_role: "Técnico Especializado",
        exp_orange_desc: "Microsoldagem e reparo de componentes eletrônicos complexos. Experiência que desenvolveu precisão técnica, capacidade de diagnóstico avançado e resolução de problemas em nível de hardware.",
        edu_faveni_title: "Licenciatura em Matemática",
        edu_faveni_school: "FAVENI · EAD",
        edu_faveni_date: "2026 - Em andamento",
        edu_college_title: "Análise e Desenvolvimento de Sistemas",
        edu_college_school: "UniViçosa",
        edu_college_date: "2024 - 2026 · Formado",
        edu_university_title: "Bacharelado em Matemática", 
        edu_university_school: "UFV - Universidade Federal de Viçosa",
        edu_university_date: "2020 - 2023",
        contact_title: "Contato",
        contact_whatsapp: "WhatsApp",
        contact_github: "@BAttomic",
        contact_linkedin: "/bernardo-cordeiro-motta",
        work_title: "Meus",
        work_highlight: "Projetos", 
        work_desc: "Uma coleção dos principais projetos que desenvolvi ao longo dos anos, desde automações inteligentes até infraestrutura de servidores.",
        index_title: "Índice",
        index_work: "Projetos",
        index_about: "Sobre mim",
        index_whatido: "O que faço",
        index_stack: "Tech stack", 
        index_contact: "Contato",
        nav_prev: "Projeto Anterior",
        nav_back: "Voltar aos Projetos", 
        nav_next: "Próximo Projeto",
		nav_agent: "<strong>Agente de IA</strong>",
        ia_title: "Agentes Inteligentes Sob Medida",
        ia_subtitle: "Desenvolvimento personalizado de agentes para venda consultiva, suporte e gestão, integrados exatamente aos processos e ferramentas que sua empresa já utiliza. Especialização em clínicas e PMEs da área da saúde.",
        lykos_title: "Lykos Province",
        lykos_subtitle: "Uma comunidade gaming que passou por diversas fases e jogos, tendo seu maior destaque no Minecraft com uma rede completa de servidores, economia própria e mais de 1000 membros ativos.",
        cta_cv: "Ver currículo",
        view_all_works: "Ver todos os projetos"
    },
    
    en: {
        welcome: "Welcome to my world!",
        nav_home: "bernardo.dev",
        nav_work: "work.done",
        status: "Open to work",
        time_label: "My time:",
        role: "Back-End Dev & Data Analyst",
        bio: "I automate processes and build systems that take manual work off people's plates: data platforms, dashboards, AI agents and the secure infrastructure that keeps it all running.",
        experience: "9+ years of experience",
        location: "Viçosa, MG",
        languages: "Portuguese, English",
        cta_schedule: "Schedule a call",
        cta_quote: "Work with me",
        hero_title_1: "Back-End <span class=\"nowrap\">Developer &amp;</span>",
        hero_title_2: "Data Analyst",
        hero_desc: "I automate processes, build web apps, data integrations, dashboards and AI agents, and run the infrastructure that keeps it all up, with security and LGPD (data protection) in mind.",
        section_work: "Work",
        section_about: "About me",
        section_whatido: "What I do", 
        section_stack: "Tech stack",
        stack_cat_lang: "Languages", stack_cat_fw: "Frameworks", stack_cat_infra: "Infra &amp; Cloud", stack_cat_data: "Data", stack_cat_ai: "AI", stack_cat_auto: "Automation", 
        service_data_title: "Data &amp; dashboards",
        service_data_desc: "Data from different systems brought into one database with per-role permissions, and dashboards with targets, forecasts and comparisons, custom-built or in <strong>Power BI</strong>.",
        section_journey: "Journey",
        index_journey: "Journey",
        journey_next: "Future under construction",
        section_contact: "Contact me",
        about_p1: "I'm Bernardo Cordeiro Motta, a back-end developer with over 9 years of experience turning complexity into automation. I spent <strong>3 years in the Mathematics bachelor's program at UFV</strong> (Federal University of Viçosa) and left to take on work opportunities. I then <strong>graduated in Systems Analysis and Development from UniViçosa</strong> and went back to mathematics to continue those studies: I'm now taking a <strong>teaching degree in Mathematics at FAVENI</strong> (online). That grounding in logic and analytical thinking is what I apply every day to solve complex technical problems.",
        about_p2: "My hands-on journey began in August 2017, when I founded <strong>Lykos Province</strong> and started building systems for Minecraft networks with thousands of registered users. That's where I learned <strong>performance</strong>, <strong>scalability</strong> and <strong>resilient infrastructure</strong> in practice, and that high-traffic experience taught me to think about robust architectures from the start.",
        about_p3: "Today I'm a <strong>developer and data analyst at Eficaz</strong>, a clinic network, and I also take on what goes beyond that scope: infrastructure, security, database, data integrations and its 22 internal apps. Alongside that, I'm building my own <strong>CRM SaaS with AI agents</strong>, n8n-style flows and billing, and I still do <strong>process automation</strong> for companies. My focus is eliminating operational bottlenecks and turning manual processes into automated, reliable workflows.",
        service_automation_title: "Process Automation",
        service_automation_desc: "Workflows and AI agents connecting WhatsApp, CRMs, email, Meta, Google and internal systems, in <strong>n8n</strong> or in code. They take repetitive work off the team and cut customer response times.",
        service_devops_title: "Infrastructure &amp; security",
        service_devops_desc: "Linux servers with <strong>Docker</strong>, a reverse proxy and Git-based deploys, a separate staging environment, encrypted backups with tested restores, monitoring and LGPD care.",
        service_backend_title: "Web apps &amp; APIs", 
        service_backend_desc: "<strong>Next.js</strong> apps and Node.js and Python APIs on PostgreSQL or MongoDB, with per-person logins, per-area roles and data that can't get lost.",
        projects_counter: "Featured projects focused on <strong>automation</strong> and <strong>scalability</strong>",
        exp_eficaz_title: "Eficaz",
        exp_eficaz_date: "Oct/2026 - Present",
        exp_eficaz_role: "Developer & Data Analyst",
        exp_eficaz_desc: "A network of 5 medical and dental units and 3 benefit-card franchises. Beyond development and data analysis, I also took on what falls outside that scope: an inherited server riddled with <strong>security vulnerabilities and LGPD (data protection) issues</strong>, which I fixed and moved to an isolated, versioned platform (<strong>Docker Swarm</strong>, Traefik, <strong>PostgreSQL 18</strong> with one role per app), with encrypted backups, restores tested every week, a staging environment and continuous improvement. In 8 weeks: 22 apps migrated or built, 26 repositories and 630+ commits, spanning data integrations, dashboards and a WhatsApp support CRM. <a href=\"work/eficaz.html\" style=\"color: var(--accent); white-space: nowrap;\">See the case <i class=\"fas fa-arrow-right\"></i></a>",
        exp_lykos_title: "Lykos Province",
        exp_lykos_date: "Aug/2017 - 2023",
        exp_lykos_role: "Founder & Developer",
        exp_lykos_desc: "Where I started programming: the gaming community I founded, with a Minecraft network of <strong>8 servers</strong>, a lobby and a proxy on my own VPSs (Pterodactyl), a website with accounts and a store, and a Discord bot reporting server data in real time. Over 1000 active members. <a href=\"work/lykos-province.html\" style=\"color: var(--accent); white-space: nowrap;\">See the case <i class=\"fas fa-arrow-right\"></i></a>",
        exp_freelancer_title: "Freelance Developer",
        exp_freelancer_date: "2018 - Present",
        exp_freelancer_role: "Backend, DevOps & Automation", 
        exp_freelancer_desc: "Freelance work in the gaming market: I built clients' <strong>server infrastructure</strong>, with <strong>CI/CD</strong> pipelines and <strong>backup</strong> routines, and even created <strong>original plugins</strong> for them. Today I'm building my own multi-tenant SaaS for CRM, AI agents, automation flows and billing (<strong>BAttomic</strong>, placeholder name).",
        exp_promovads_title: "PromovAds",
        exp_promovads_date: "Mar/2025 - Sep/2025",
        exp_promovads_role: "Developer",
        exp_promovads_desc: "Automations integrated with <strong>Meta</strong> and <strong>Google</strong> and AI agents built in <strong>n8n</strong>, including a support agent integrated with WhatsApp, plus a full restructuring of the VPS infrastructure with CI/CD pipelines. This is where the idea of building my own CRM was born.",
        exp_orange_title: "OrangeStore", 
        exp_orange_date: "Aug/2024 - Jan/2025",
        exp_orange_role: "Specialized Technician",
        exp_orange_desc: "Microsoldering and repair of complex electronic components. Experience that developed technical precision, advanced diagnostic capability and hardware-level problem solving.",
        edu_faveni_title: "Mathematics (Teaching Degree)",
        edu_faveni_school: "FAVENI · Online",
        edu_faveni_date: "2026 - In progress",
        edu_college_title: "Systems Analysis and Development",
        edu_college_school: "UniViçosa",
        edu_college_date: "2024 - 2026 · Graduated",
        edu_university_title: "Bachelor of Mathematics",
        edu_university_school: "UFV - Federal University of Viçosa", 
        edu_university_date: "2020 - 2023",
        contact_title: "Contact me",
        contact_whatsapp: "WhatsApp",
        contact_github: "@BAttomic", 
        contact_linkedin: "/bernardo-cordeiro-motta",
        work_title: "My",
        work_highlight: "Projects",
        work_desc: "A collection of the main projects I've developed over the years, from intelligent automations to server infrastructure.",
        index_title: "Index",
        index_work: "Work", 
        index_about: "About me",
        index_whatido: "What I do",
        index_stack: "Tech stack",
        index_contact: "Contact",
        nav_prev: "Previous Project",
        nav_back: "Back to Projects",
        nav_next: "Next Project",
		nav_agent: "<strong>AI Agent</strong>",
        ia_title: "Custom Intelligent Agents",
        ia_subtitle: "Custom development of agents for consultative sales, support and management, integrated exactly to the processes and tools your company already uses. Specialization in clinics and healthcare SMEs.",
        lykos_title: "Lykos Province", 
        lykos_subtitle: "A gaming community that went through several phases and games, having its highlight in Minecraft with a complete server network, own economy and over 1000 active members.",
        cta_cv: "View resume", 
        view_all_works: "View all works"
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
		
		const cvButton = document.getElementById('cv-download-btn');
		if (cvButton) {
			if (lang === 'en') {
				cvButton.href = 'assets/cv/Bernardo_C_Motta_Resume.pdf';
				cvButton.setAttribute('download', 'Bernardo_C_Motta_Resume.pdf');
			} else {
				cvButton.href = 'assets/cv/Bernardo_C_Motta_Curriculo.pdf';
				cvButton.setAttribute('download', 'Bernardo_C_Motta_Curriculo.pdf');
			}
		}
		
		document.querySelectorAll('[data-i18n]').forEach(el => {
			const key = el.getAttribute('data-i18n');
			const translation = translations[lang][key];
			if (translation) {
				el.innerHTML = translation;
			}
		});
		
		localStorage.setItem('site-language', lang);
		updateTime();
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

    // Project cards: só o fallback da imagem (o hover fica no CSS)
    document.querySelectorAll('.project-card').forEach(card => {
        const img = card.querySelector('.project-image img');
        const imageContainer = card.querySelector('.project-image');
        if (img && imageContainer) {
            img.addEventListener('error', () => imageContainer.classList.add('no-image'));
        }
    });

    // ── Motion do site ──
    // Uma linguagem só, a mesma da tech stack: ease-out exponencial (0.2, 0, 0, 1), cascatas curtas
    // e só transform, opacity e clip-path. Cada tipo de conteúdo entra do seu jeito: títulos
    // "digitados", cards em cascata, a linha da experiência que se desenha e números que contam.
    // Com prefers-reduced-motion nada disso roda e tudo já aparece no lugar.
    (function () {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
        document.documentElement.classList.add('motion-ready');

        // Na home tudo entra mais devagar, de cima para baixo, conforme a pessoa rola
        const slow = !!document.getElementById('home-main');
        if (slow) document.documentElement.classList.add('motion-slow');
        const KINDS = [
            ['type', '.section-title, .content-section > h2'],
            ['skel', '.sidebar .profile-avatar, .sidebar .profile-name, .sidebar .profile-role, .sidebar > :not(.profile-section)'],
            ['skel', '.hero-title, .hero-description, .about-content p, .works-carousel'],
            ['skel', '.project-card, .service-card, .stack-group, .contact-card'],
            ['skel', '.project-header-content > *, .case-meta > div, .figure, .cmp-head, .cmp-row, .shot, .incident > div'],
            ['skel', '.ba-card, .skin-card, .arch-item, .result-item, .kpi, .plan, .diagram-node, .rd-row, .tech-tag, .project-navigation > *'],
            // o resto dos cases: cada bloco de conteúdo entra sozinho (sem animar o que já tem animação dentro)
            ['skel', '.content-section > :not(h2), .deliverable > :not(.shot):not(.shots)'],
        ];
        const STEP = slow ? 120 : 70, MAX_STEPS = slow ? 10 : 8;
        const targets = [];
        KINDS.forEach(([kind, sel]) => document.querySelectorAll(sel).forEach(el => {
            if (el.hasAttribute('data-reveal')) return;
            // nada de animação dentro de animação
            if (el.closest('[data-reveal]') || el.querySelector('[data-reveal]')) return;
            el.setAttribute('data-reveal', kind);
            if (kind === 'skel') {
                const cs = getComputedStyle(el);
                if (cs.position === 'static') el.classList.add('skel-host');
                // texto vira linhas; o resto vira um bloco com o mesmo arredondamento
                el.setAttribute('data-skel', el.matches('p, li, ul, ol, h1, h3, h4, h5, h6, .hero-description, .projects-counter') ? 'text' : 'block');
                if (cs.borderTopLeftRadius !== '0px') el.style.setProperty('--skel-r', cs.borderTopLeftRadius);
            }
            targets.push(el);
        }));

        function countUp(el) {
            const m = el.textContent.trim().match(/^(\d+)(.*)$/);
            if (!m) return;
            const end = parseInt(m[1], 10), rest = m[2], t0 = performance.now(), dur = 900;
            if (!end) return;
            (function frame(now) {
                const t = Math.min(1, (now - t0) / dur);
                const e = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // ease-out exponencial
                el.textContent = Math.round(end * e) + rest;
                if (t < 1) requestAnimationFrame(frame);
            })(t0);
        }

        function finish(el) {
            el.removeAttribute('data-reveal');
            el.removeAttribute('data-skel');
            el.classList.remove('is-in', 'skel-host');
            el.style.removeProperty('--d');
            el.style.removeProperty('--skel-r');
        }

        // o esqueleto só sai depois que as imagens do bloco carregaram (no máximo 2,5 s)
        function whenLoaded(el, cb) {
            const imgs = Array.from(el.querySelectorAll('img')).filter(im => !im.complete);
            if (!imgs.length) return cb();
            let left = imgs.length, done = false;
            const go = () => { if (!done) { done = true; cb(); } };
            imgs.forEach(im => {
                const h = () => { if (--left === 0) go(); };
                im.addEventListener('load', h, { once: true });
                im.addEventListener('error', h, { once: true });
            });
            setTimeout(go, 2500);
        }

        function reveal(el, delay) {
            const kind = el.getAttribute('data-reveal');
            el.style.setProperty('--d', delay + 'ms');
            if (kind === 'type') {
                // revela o texto em "teclas": um passo por caractere, só na largura do texto
                const r = document.createRange();
                r.selectNodeContents(el);
                el.style.setProperty('--tw', Math.ceil(r.getBoundingClientRect().width) + 'px');
                const n = Math.max(4, Math.min(28, el.innerText.trim().length));
                el.style.setProperty('--n', n);
                el.classList.add('is-in');
                setTimeout(() => {
                    finish(el);
                    el.style.removeProperty('--tw');
                    el.style.removeProperty('--n');
                    el.classList.add('caret');
                    setTimeout(() => el.classList.remove('caret'), 2100);
                }, delay + n * 32 + 60);
                return;
            }
            whenLoaded(el, () => {
                el.classList.add('is-in');
                if (el.classList.contains('figure')) {
                    const strong = el.querySelector('strong');
                    if (strong) setTimeout(() => countUp(strong), delay + 120);
                }
                setTimeout(() => finish(el), delay + 800);
            });
        }

        const io = new IntersectionObserver(entries => {
            // o que entra junto vira uma cascata, na ordem em que aparece na tela
            const batch = entries.filter(e => e.isIntersecting).map(e => e.target);
            batch.sort((a, b) => {
                const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
                return (ra.top - rb.top) || (ra.left - rb.left);
            });
            batch.forEach((el, i) => {
                io.unobserve(el);
                reveal(el, Math.min(i, MAX_STEPS) * STEP);
            });
        }, { rootMargin: slow ? '0px 0px -18% 0px' : '0px 0px -8% 0px', threshold: 0 });
        targets.forEach(el => io.observe(el));

        // No fim da página (ou numa página que nem rola), o que ainda não entrou entra de uma vez
        function flushAtBottom() {
            if (window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 4) return;
            targets.filter(el => el.getAttribute('data-reveal') && !el.classList.contains('is-in'))
                .forEach((el, i) => { io.unobserve(el); reveal(el, Math.min(i, MAX_STEPS) * STEP); });
        }
        window.addEventListener('scroll', flushAtBottom, { passive: true });
        window.addEventListener('load', flushAtBottom);
    })();

    // Numeração de linhas (coluna estilo IDE): gera exatamente o suficiente para
    // acompanhar a altura do conteúdo — nunca falta nem sobra. Recalcula no resize.
    // Linha atual (como no editor): acende o número na altura do título da seção em que você está
    let lnCurrent = null;
    function markCurrentLine() {
        const ln = document.querySelector('.line-numbers');
        if (!ln || getComputedStyle(ln).display === 'none') return;
        const lineH = parseFloat(getComputedStyle(ln).lineHeight) || 18.7;
        let title = null;
        document.querySelectorAll('.main-content section[id]').forEach(sec => {
            const t = sec.querySelector('.section-title');
            if (t && sec.getBoundingClientRect().top <= 140) {
                if (!title || t.getBoundingClientRect().top > title.getBoundingClientRect().top) title = t;
            }
        });
        let span = null;
        if (title) {
            const y = title.getBoundingClientRect().top + title.offsetHeight / 2 - ln.getBoundingClientRect().top;
            span = ln.children[Math.floor(y / lineH)] || null;
        }
        if (span === lnCurrent) return;
        if (lnCurrent) lnCurrent.classList.remove('is-current');
        if (span) span.classList.add('is-current');
        lnCurrent = span;
    }
    let lnTick = false;
    window.addEventListener('scroll', () => {
        if (lnTick) return;
        lnTick = true;
        requestAnimationFrame(() => { lnTick = false; markCurrentLine(); });
    }, { passive: true });

    // Numeração de linhas: vai exatamente até o fim do conteúdo, ou seja, a última linha de cards do
    // Contato mais o mesmo espaço que separa um card do outro, e para ali. É refeita sempre que o
    // conteúdo muda de altura (idioma, fontes, imagens, tamanho da janela).
    function fillLineNumbers() {
        const ln = document.querySelector('.line-numbers');
        if (!ln || getComputedStyle(ln).display === 'none') return;
        const content = document.querySelector('.main-content');
        if (!content) return;
        const cs = getComputedStyle(ln);
        const lineH = parseFloat(cs.lineHeight) || (parseFloat(cs.fontSize) || 11) * 1.7;
        // as seções são reordenadas com `order`: o fim é o fundo da que aparece por último
        let last = null, bottom = 0;
        content.querySelectorAll(':scope > section').forEach(sec => {
            const r = sec.getBoundingClientRect();
            if (r.height && r.bottom > bottom) { bottom = r.bottom; last = sec; }
        });
        if (!last) return;
        const grid = last.querySelector('.contact-grid');
        const gap = grid ? (parseFloat(getComputedStyle(grid).rowGap) || 12) : 12;
        const target = bottom + gap - ln.getBoundingClientRect().top;
        const render = n => {
            n = Math.min(3000, Math.max(1, n));
            if (ln.childElementCount === n) return;
            ln.innerHTML = Array.from({ length: n }, (_, i) => `<span>${i + 1}</span>`).join('');
        };
        // primeiro pela altura de linha do CSS; depois corrige pela altura REAL de cada número na tela
        // (o Safari do iPhone arredonda a linha e o erro acumula em centenas de linhas)
        render(Math.ceil(target / lineH));
        const real = (ln.lastElementChild.getBoundingClientRect().bottom - ln.getBoundingClientRect().top) / ln.childElementCount;
        if (real > 0) render(Math.ceil(target / real));
        lnCurrent = null;
        markCurrentLine();
    }
    fillLineNumbers();
    window.addEventListener('load', () => { fillLineNumbers(); markCurrentLine(); });
    {
        const content = document.querySelector('.main-content');
        let lnFrame = 0;
        const schedule = () => { cancelAnimationFrame(lnFrame); lnFrame = requestAnimationFrame(fillLineNumbers); };
        if (content && 'ResizeObserver' in window) new ResizeObserver(schedule).observe(content);
        window.addEventListener('resize', schedule);
        if (langToggle) langToggle.addEventListener('click', () => setTimeout(schedule, 0));
    }

    // ── Lightbox / carrossel de imagens (work.done e afins) ──
    (function initLightbox() {
        const imgs = Array.from(document.querySelectorAll('.shot img, .gallery img, .ba-card img, .business-showcase img'));
        if (!imgs.length) return;
        imgs.forEach((im) => im.classList.add('lb-zoomable'));

        const ov = document.createElement('div');
        ov.className = 'lb-overlay';
        ov.setAttribute('role', 'dialog');
        ov.innerHTML =
            '<div class="lb-count"></div>' +
            '<button class="lb-close" aria-label="Fechar">✕</button>' +
            '<button class="lb-btn lb-prev" aria-label="Anterior">‹</button>' +
            '<button class="lb-btn lb-next" aria-label="Próximo">›</button>' +
            '<div class="lb-stage"><img class="lb-img" alt=""><div class="lb-cap"></div></div>';
        document.body.appendChild(ov);

        const lbImg = ov.querySelector('.lb-img');
        const lbCap = ov.querySelector('.lb-cap');
        const lbCount = ov.querySelector('.lb-count');
        let idx = 0;

        // Legenda visível (respeita idioma PT/EN atual)
        function capOf(im) {
            const box = im.closest('.shot, .ba-card, .business-showcase');
            const cap = box && box.querySelector('.shot-cap, .business-caption');
            if (!cap) return im.alt || '';
            const en = document.body.classList.contains('lang-en');
            const span = cap.querySelector(en ? '[lang="en"]' : '[lang="pt"]');
            return (span ? span.textContent : cap.textContent).trim();
        }
        function show(i) {
            idx = (i + imgs.length) % imgs.length;
            const im = imgs[idx];
            // data-full: versão completa (a página mostra só a prévia). Telas altas abrem com rolagem;
            // data-lb="wide" (diagramas) abre grande e rola nos dois sentidos.
            const wide = im.getAttribute('data-lb') === 'wide';
            ov.classList.remove('lb-tall');
            ov.classList.toggle('lb-wide', wide);
            ov.scrollTop = 0;
            ov.scrollLeft = 0;
            lbImg.onload = () => ov.classList.toggle('lb-tall', !wide && lbImg.naturalHeight > lbImg.naturalWidth * 0.9);
            lbImg.src = im.getAttribute('data-full') || im.currentSrc || im.src;
            lbCap.textContent = capOf(im);
            lbCount.textContent = imgs.length > 1 ? (idx + 1) + ' / ' + imgs.length : '';
        }
        function open(i) { show(i); ov.classList.add('open'); document.body.style.overflow = 'hidden'; }
        function close() { ov.classList.remove('open'); document.body.style.overflow = ''; }
        const single = imgs.length < 2;
        if (single) { ov.querySelector('.lb-prev').style.display = 'none'; ov.querySelector('.lb-next').style.display = 'none'; }

        imgs.forEach((im, i) => im.addEventListener('click', () => open(i)));
        ov.querySelector('.lb-next').addEventListener('click', (e) => { e.stopPropagation(); show(idx + 1); });
        ov.querySelector('.lb-prev').addEventListener('click', (e) => { e.stopPropagation(); show(idx - 1); });
        ov.querySelector('.lb-close').addEventListener('click', close);
        ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
        document.addEventListener('keydown', (e) => {
            if (!ov.classList.contains('open')) return;
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight' && !single) show(idx + 1);
            else if (e.key === 'ArrowLeft' && !single) show(idx - 1);
        });
    })();
    // Projetos da home: carrossel em leque. O card do centro fica na frente; os anteriores à
    // esquerda e os próximos à direita, em camadas de baixo e girados. Troca sozinho a cada 8 s
    // (a bolinha ativa enche no tempo), pausa com o mouse em cima, no foco ou fora da tela, e
    // aceita as bolinhas, clique nos cards de lado, setas do teclado e arrastar.
    (function () {
        const root = document.querySelector('.works-carousel');
        if (!root) return;
        const stage = root.querySelector('.works-stage');
        const cards = Array.from(stage.querySelectorAll('.project-card'));
        const n = cards.length;
        if (n < 2) return;
        const dotsBox = root.querySelector('.works-dots');
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const SIDE = Math.min(2, Math.floor((n - 1) / 2)); // quantos aparecem de cada lado
        let active = 0, moved = false, lastW = 0;

        const dots = cards.map((card, i) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'works-dot';
            const name = card.querySelector('.project-header h3');
            b.setAttribute('aria-label', (name ? name.innerText.trim() : 'Projeto') + ' (' + (i + 1) + '/' + n + ')');
            b.innerHTML = '<span class="works-pill"><span class="works-fill"></span></span>';
            b.addEventListener('click', () => go(i, true));
            dotsBox.appendChild(b);
            return b;
        });

        // distância de cada card até o do centro, no caminho mais curto do círculo
        function offset(i) {
            let d = ((i - active) % n + n) % n;
            if (d > n / 2) d -= n;
            return d;
        }
        function layout() {
            const narrow = stage.clientWidth < 640;
            const X = narrow ? [0, 40, 64] : [0, 54, 90]; // % da largura do card
            const Z = [0, -180, -340], R = [0, 34, 42], B = [1, 0.55, 0.35];
            cards.forEach((card, i) => {
                const d = offset(i), a = Math.abs(d), s = Math.sign(d);
                const show = a <= SIDE;
                const x = show ? s * X[a] : 0, z = show ? Z[a] : -420, r = show ? -s * R[a] : 0;
                card.style.transform = 'translateX(' + x + '%) translateZ(' + z + 'px) rotateY(' + r + 'deg)';
                card.style.zIndex = show ? 30 - a * 10 : 0;
                card.style.filter = a === 0 ? 'none' : 'brightness(' + (show ? B[a] : 0.3) + ')';
                card.style.opacity = show ? 1 : 0;
                card.style.pointerEvents = show ? '' : 'none';
                card.classList.toggle('is-active', a === 0);
                card.setAttribute('tabindex', a === 0 ? '0' : '-1');
                card.setAttribute('aria-hidden', a === 0 ? 'false' : 'true');
            });
            stage.style.height = cards[active].offsetHeight + 'px';
            dots.forEach((d, i) => {
                d.classList.toggle('is-active', i === active);
                d.setAttribute('aria-current', i === active ? 'true' : 'false');
            });
        }
        // troca automática: 8 s por projeto; depois de uma troca manual, 10 s até andar sozinho
        function go(i, manual) {
            root.style.setProperty('--works-delay', manual ? '10s' : '8s');
            active = ((i % n) + n) % n;
            dots.forEach(d => d.classList.remove('is-active'));
            void dotsBox.offsetWidth; // reinicia o tempo do auto-skip
            layout();
        }

        cards.forEach((card, i) => card.addEventListener('click', e => {
            if (moved) { e.preventDefault(); moved = false; return; }
            if (i !== active) { e.preventDefault(); go(i, true); }
        }));
        root.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1, true); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1, true); }
        });
        root.querySelector('.works-arrow.prev').addEventListener('click', () => go(active - 1, true));
        root.querySelector('.works-arrow.next').addEventListener('click', () => go(active + 1, true));

        if (!reduce) {
            root.classList.add('is-auto');
            root.addEventListener('animationend', e => { if (e.animationName === 'works-progress') go(active + 1, false); });
            const hold = new Set();
            const set = (k, on) => { if (on) hold.add(k); else hold.delete(k); root.classList.toggle('is-paused', hold.size > 0); };
            root.addEventListener('mouseenter', () => set('hover', true));
            root.addEventListener('mouseleave', () => set('hover', false));
            root.addEventListener('focusin', () => set('focus', true));
            root.addEventListener('focusout', () => setTimeout(() => set('focus', root.contains(document.activeElement)), 0));
            document.addEventListener('visibilitychange', () => set('hidden', document.hidden));
            if ('IntersectionObserver' in window) new IntersectionObserver(([en]) => set('off', !en.isIntersecting)).observe(root);
        }

        // arrastar para os lados troca de projeto (e não conta como clique)
        let startX = null;
        stage.addEventListener('dragstart', e => e.preventDefault());
        stage.addEventListener('pointerdown', e => { if (e.button === 0) { startX = e.clientX; moved = false; } });
        window.addEventListener('pointerup', e => {
            if (startX === null) return;
            const dx = e.clientX - startX;
            startX = null;
            if (Math.abs(dx) > 40) { moved = true; go(active + (dx < 0 ? 1 : -1), true); }
        });
        window.addEventListener('pointercancel', () => { startX = null; });

        layout();
        lastW = stage.clientWidth;
        if ('ResizeObserver' in window) {
            new ResizeObserver(() => {
                if (stage.clientWidth !== lastW) { lastW = stage.clientWidth; layout(); }
            }).observe(stage);
        }
        window.addEventListener('load', layout);
    })();

    // Trajetória: a linha se preenche com a rolagem e o ano "passa" junto, de item em item,
    // até virar "Hoje". Cada marcador acende quando a linha chega nele.
    (function () {
        const j = document.querySelector('.journey');
        if (!j) return;
        const axis = j.querySelector('.journey-axis');
        const year = j.querySelector('.journey-year');
        const items = Array.from(j.querySelectorAll('.journey-item'));
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const end = j.querySelector('.journey-end');
        let stops = [], shown = '';
        // até a linha chegar, cada card fica como esqueleto (dá para ver que tem coisa ali)
        if (!reduce) {
            j.classList.add('is-live');
            items.forEach(it => it.classList.add('is-waiting'));
        }
        function measure() {
            const top = axis.getBoundingClientRect().top;
            stops = items.map(it => {
                const m = it.querySelector('.journey-marker').getBoundingClientRect();
                return { y: m.top + m.height / 2 - top, year: parseInt(it.dataset.year, 10), it };
            });
        }
        function label(y) {
            const last = stops[stops.length - 1];
            if (y <= stops[0].y) return String(stops[0].year);
            for (let i = 0; i < stops.length - 1; i++) {
                const a = stops[i], b = stops[i + 1];
                if (y < b.y) return String(a.year + Math.floor((y - a.y) / Math.max(1, b.y - a.y) * (b.year - a.year)));
            }
            return String(last.year);
        }
        function update() {
            if (!stops.length) return;
            const r = axis.getBoundingClientRect();
            const h = r.height || 1;
            // a "ponta" da linha fica a 55% da tela; perto do fim da página ela desce até a borda de
            // baixo, para o último card também ser alcançado mesmo sem espaço para rolar mais
            const vh = window.innerHeight;
            const zone = vh * 0.45;
            const maxScroll = document.documentElement.scrollHeight - vh;
            const t = Math.min(1, Math.max(0, (window.scrollY - (maxScroll - zone)) / zone));
            const y = Math.min(h, Math.max(0, vh * (0.55 + 0.45 * t) - r.top));
            j.style.setProperty('--p', (y / h).toFixed(4));
            j.style.setProperty('--py', y.toFixed(1) + 'px');
            stops.forEach(s => {
                const past = s.y <= y + 1;
                s.it.classList.toggle('is-past', past);
                if (past) s.it.classList.remove('is-waiting'); // uma vez mostrado, fica
            });
            // passou do último ponto: o selo do ano some e fica só o "Futuro em construção"
            const done = y > stops[stops.length - 1].y + 28;
            if (end && done) end.classList.add('is-reached');
            year.parentElement.classList.toggle('is-done', done);
            const txt = label(y);
            if (txt !== shown) {
                shown = txt;
                year.textContent = txt;
                if (!reduce) { year.classList.remove('tick'); void year.offsetWidth; year.classList.add('tick'); }
            }
        }
        // Com as duas colunas, um card sobe para o lado do anterior quando ele é do outro lado
        // (trabalho e estudo ao mesmo tempo), sem passar o anterior na ordem e sem encostar no
        // último card do mesmo lado. No celular (uma coluna) fica tudo no fluxo normal.
        const MIN_STEP = 64, GAP = 14;
        function compact() {
            items.forEach(it => { it.style.marginTop = ''; });
            const twoCols = getComputedStyle(items[0]).gridTemplateColumns.split(' ').length === 3;
            if (!twoCols) return;
            let prevCenter = -Infinity, prevBottom = 0;
            const lastBottom = { work: -Infinity, study: -Infinity };
            items.forEach((it, i) => {
                const side = it.classList.contains('study') ? 'study' : 'work';
                const h = it.offsetHeight;
                const natural = i ? prevBottom + GAP : 0;
                // o marcador fica no meio do card: a ordem dos meios não pode inverter nem encostar
                const top = i ? Math.min(natural, Math.max(prevCenter + MIN_STEP - h / 2, lastBottom[side] + GAP)) : 0;
                if (top < natural) it.style.marginTop = (top - natural) + 'px';
                prevCenter = top + h / 2;
                prevBottom = top + h;
                lastBottom[side] = top + h;
            });
        }
        function refresh() { compact(); measure(); shown = ''; update(); }
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => { ticking = false; update(); });
        }, { passive: true });
        window.addEventListener('load', refresh);
        if ('ResizeObserver' in window) new ResizeObserver(refresh).observe(j);
        else window.addEventListener('resize', refresh);
        if (langToggle) langToggle.addEventListener('click', () => setTimeout(refresh, 0));
        refresh();
    })();

    // Tech stack: com mouse, uma linha de categorias pequenas, cada uma com até 5 ícones empilhados na
    // diagonal; no hover o card cresce num painel. Tudo sai do layout real e é refeito ao redimensionar.
    (function () {
        const groups = document.querySelector('.stack-groups');
        if (!groups) return;
        const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
        const PANEL_W = 360, MAX_PILE = 5, DX = 22, DY = 8, SCALE = 1.15; // SCALE = scale() da pilha no CSS
        const px = (v) => parseFloat(v) || 0;
        function layout() {
            const on = mq.matches;
            groups.classList.toggle('stack-ready', on);
            groups.querySelectorAll('.stack-group').forEach(g => {
                const panel = g.querySelector('.stack-panel');
                const list = g.querySelector('.stack-chips');
                const chips = Array.from(list.querySelectorAll('.stack-chip'));
                if (!on || !chips.length) { list.style.width = ''; return; }
                const cs = getComputedStyle(panel);
                const padX = px(cs.paddingLeft) + px(cs.paddingRight) + px(cs.borderLeftWidth) + px(cs.borderRightWidth);
                const padB = px(cs.paddingBottom) + px(cs.borderBottomWidth);
                const cw = g.offsetWidth, ch = g.offsetHeight;
                const pw = Math.max(cw, Math.min(PANEL_W, groups.clientWidth));
                list.style.width = (pw - padX) + 'px';
                const ph = Math.max(ch, list.offsetTop + list.offsetHeight + padB);
                g.style.setProperty('--cw', cw + 'px');
                g.style.setProperty('--ch', ch + 'px');
                g.style.setProperty('--pw', pw + 'px');
                g.style.setProperty('--ph', ph + 'px');
                // perto da borda direita o painel cresce para a esquerda
                g.classList.toggle('from-right', g.offsetLeft + pw > groups.clientWidth + 1);
                const v = Math.min(chips.length, MAX_PILE);
                const tile = chips[0].querySelector('.stack-tile').offsetHeight * SCALE;
                const areaW = cw - padX, areaH = ch - list.offsetTop - padB;
                const dx = v > 1 ? Math.min(DX, Math.max(0, (areaW - tile) / (v - 1))) : 0;
                const dy = v > 1 ? Math.min(DY, Math.max(0, (areaH - tile) / (v - 1))) : 0;
                const top = Math.max(0, (areaH - tile - dy * (v - 1)) / 2);
                chips.forEach((chip, i) => {
                    const k = Math.min(i, v - 1);
                    chip.classList.toggle('is-extra', i >= v);
                    chip.style.setProperty('--rx', (k * dx - chip.offsetLeft) + 'px');
                    chip.style.setProperty('--ry', (top + k * dy - chip.offsetTop) + 'px');
                });
            });
        }
        layout();
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
        if (mq.addEventListener) mq.addEventListener('change', layout);
        if ('ResizeObserver' in window) new ResizeObserver(layout).observe(groups);
        else window.addEventListener('resize', layout);
    })();
    // Favicon animado (B_Attomic: o "B" no núcleo e três elétrons girando nas órbitas). GIF só anima
    // no Firefox; aqui cada quadro é desenhado num canvas e vira o ícone da aba ~15 vezes por segundo,
    // o que funciona em todos. Para com a aba escondida; com "reduzir movimento" fica o SVG parado.
    (function () {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const cv = document.createElement('canvas');
        if (!cv.getContext || !window.Path2D) return;
        cv.width = cv.height = 64;
        const g = cv.getContext('2d');
        g.setTransform(2, 0, 0, 2, 0, 0);
        const B = new Path2D('M9.5 7H17C20 7 21.7 8.8 21.7 11.3C21.7 13 20.8 14.4 19.4 15.1C21.3 15.7 22.5 17.3 22.5 19.4C22.5 22.6 20.4 25 16.9 25H9.5ZM13.1 10V14H16.5C17.7 14 18.4 13.2 18.4 12C18.4 10.8 17.7 10 16.5 10ZM13.1 17V22H16.8C18.3 22 19.1 21.1 19.1 19.5C19.1 17.9 18.3 17 16.8 17Z');
        const ORBITS = [Math.PI / 6, -Math.PI / 6, Math.PI / 2];   // ±30° e a vertical
        const PHASES = [0, Math.PI * 2 / 3, Math.PI * 4 / 3];
        const RX = 12.5, RY = 4.6, PERIOD = 2400;
        const START = 206 * Math.PI / 180; // mesmo quadro do SVG parado
        const draw = function (g, now, round) {
            const th = START + (now / PERIOD) * Math.PI * 2;
            g.clearRect(0, 0, 32, 32);
            g.beginPath();
            if (round && g.roundRect) g.roundRect(0, 0, 32, 32, 7); else g.rect(0, 0, 32, 32);
            g.fillStyle = '#181818';
            g.fill();
            g.lineWidth = 1.3;
            g.strokeStyle = 'rgba(247, 244, 190, 0.5)';
            ORBITS.forEach(r => { g.beginPath(); g.ellipse(16, 16, RX, RY, r, 0, Math.PI * 2); g.stroke(); });
            // cada elétron passa por trás do "B" na metade de trás da órbita
            const es = ORBITS.map((r, k) => {
                const a = th + PHASES[k], x = RX * Math.cos(a), y = RY * Math.sin(a);
                return { x: 16 + x * Math.cos(r) - y * Math.sin(r), y: 16 + x * Math.sin(r) + y * Math.cos(r), front: Math.sin(a) > 0 };
            });
            const dot = e => { g.beginPath(); g.arc(e.x, e.y, 2.2, 0, Math.PI * 2); g.fillStyle = '#f7f4be'; g.fill(); };
            es.filter(e => !e.front).forEach(dot);
            g.lineWidth = 1.2;
            g.strokeStyle = '#181818';
            g.stroke(B);
            g.fillStyle = '#f2f2f2';
            g.fill(B, 'evenodd');
            es.filter(e => e.front).forEach(dot);
        };
        // um ícone só, em PNG, trocado a cada quadro (o SVG e o PNG fixos saem de cena)
        document.querySelectorAll('link[rel="icon"]').forEach(l => l.remove());
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        document.head.appendChild(link);
        const frame = now => { draw(g, now, true); link.href = cv.toDataURL('image/png'); };
        let timer = null;
        const t0 = performance.now();
        const start = () => { if (!timer) timer = setInterval(() => frame(performance.now() - t0), 66); };
        const stop = () => { clearInterval(timer); timer = null; };
        frame(0);
        document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
        if (!document.hidden) start();
    })();
    // Destaque que segue o mouse ("O que eu faço" e Tech stack): passa a posição do cursor para o CSS
    (function () {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        document.querySelectorAll('.service-card, .stack-panel').forEach(el => {
            el.addEventListener('pointermove', e => {
                const r = el.getBoundingClientRect();
                el.style.setProperty('--mx', (e.clientX - r.left).toFixed(1) + 'px');
                el.style.setProperty('--my', (e.clientY - r.top).toFixed(1) + 'px');
            });
        });
    })();

    // Currículo: o botão abre uma prévia da página inteira, cabendo na tela (sem rolagem), com o
    // "Baixar PDF" logo abaixo dela. Sem JavaScript, o link continua baixando o PDF direto.
    (function () {
        const btn = document.getElementById('cv-download-btn');
        if (!btn) return;
        const ov = document.createElement('div');
        ov.className = 'lb-overlay cv-preview';
        ov.setAttribute('role', 'dialog');
        ov.setAttribute('aria-modal', 'true');
        ov.innerHTML =
            '<button class="lb-close" type="button"><i class="fas fa-xmark" aria-hidden="true"></i></button>' +
            '<div class="lb-stage"><img class="lb-img" alt="">' +
            '<a class="btn-download-cv cv-preview-dl"><i class="fas fa-download" aria-hidden="true"></i><span></span></a></div>';
        document.body.appendChild(ov);
        const img = ov.querySelector('.lb-img');
        const dl = ov.querySelector('.cv-preview-dl');
        const closeBtn = ov.querySelector('.lb-close');
        function open(e) {
            e.preventDefault();
            const en = document.body.classList.contains('lang-en');
            img.src = (en ? 'assets/cv/resume-preview.webp' : 'assets/cv/curriculo-preview.webp') + '?v=20261125-6';
            img.alt = en ? 'Resume of Bernardo C. Motta' : 'Currículo de Bernardo C. Motta';
            dl.href = btn.getAttribute('href');
            dl.setAttribute('download', btn.getAttribute('download'));
            dl.querySelector('span').textContent = en ? 'Download PDF' : 'Baixar PDF';
            closeBtn.setAttribute('aria-label', en ? 'Close' : 'Fechar');
            ov.scrollTop = 0;
            ov.classList.add('open');
            document.body.style.overflow = 'hidden';
            closeBtn.focus({ preventScroll: true });
        }
        function close() {
            ov.classList.remove('open');
            document.body.style.overflow = '';
            btn.focus({ preventScroll: true });
        }
        btn.addEventListener('click', open);
        closeBtn.addEventListener('click', close);
        ov.addEventListener('click', e => { if (e.target === ov || e.target.classList.contains('lb-stage')) close(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('open')) close(); });
    })();
});
