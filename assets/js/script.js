const langBtn = document.getElementById('toggle-lang');
let currentLang = 'pt';

const translations = {
  pt: {
    role: "Automação, DevOps e Soluções em Tecnologia",
    about: `Apaixonado por lógica, automações e soluções escaláveis. Especialização prática em integração de sistemas, DevOps, arquiteturas VPS e deploys contínuos. Capacidade de adaptar ferramentas às necessidades de cada projeto com agilidade, clareza e mentalidade solucionadora. Formação em Matemática (UFV) trouxe base sólida em lógica, pensamento analítico e rigor, impulsionando minha eficiência técnica em desenvolvimento e infraestrutura.`,
    hardSkills: [
      "DevOps (CI/CD, VPS, Docker, N8N)",
      "Integração e automação com APIs REST/JSON",
      "Desenvolvimento com Java, Python e JavaScript",
      "Banco de dados: MySQL, PostgreSQL, Supabase",
      "Infraestrutura escalável e serviços em nuvem"
    ],
    softSkills: [
      "Raciocínio analítico e tomada de decisão",
      "Comunicação objetiva e técnica",
      "Autonomia, proatividade e curiosidade contínua",
      "Foco em resultados e visão de produto"
    ],
    experience: [
      {
        title: "PromovAds (BH/MG) — Mar/2025 até o momento",
        items: [
          "Responsável por automações internas e infraestrutura VPS",
          "Criação de pipelines de CI/CD",
          "Ganhos de produtividade da equipe"
        ]
      },
      {
        title: "OrangeStore (Viçosa/MG) — Ago/2024 a Jan/2025",
        items: [
          "Especialização técnica em reparo de produtos Apple",
          "Disciplina em processos e prazos",
          "Certificações técnicas"
        ]
      },
      {
        title: "Freelancer (Remoto) — 2018 a 2023",
        items: [
          "Desenvolvimento de servidores Minecraft, bots para Discord e sistemas personalizados",
          "Integração de APIs e automações",
          "Versatilidade e autonomia"
        ]
      }
    ],
    education: [
      "UniViçosa — Análise e Desenvolvimento de Sistemas (2024 – 2026)",
      "Universidade Federal de Viçosa — Bacharelado em Matemática (2020 – 2023, incompleto)"
    ],
    projects: [
      {
        img: "assets/img/project1.jpg",
        title: "Assistente com OpenAI",
        desc: "Sistema inteligente de atendimento automatizado utilizando modelos da OpenAI (LLMs), com orquestração via N8N, armazenamento em Supabase e deploy seguro em VPS protegido com Cloudflare."
      },
      {
        img: "assets/img/project2.jpg",
        title: "Rede de Servidores Minecraft",
        desc: "Estrutura modular com servidores independentes (Proxy, Lobby, Modos de jogo) configurados em Java, hospedados em VPS Linux com bancos em MySQL. Inclui painéis web de administração e automações de deploy e autenticação."
      },
      {
        img: "assets/img/project3.jpg",
        title: "Bot para Discord com API",
        desc: "Bot avançado com comandos inteligentes, integração via API REST com ferramentas externas, sistema de autenticação, menus interativos e persistência de dados. Usado por comunidades para moderação e utilidades."
      }
    ]
  },
  en: {
    role: "Automation, DevOps & Tech Solutions",
    about: `Passionate about logic, automation, and scalable solutions. Solid expertise in system integration, DevOps, VPS architecture, and CI/CD deployments. Ability to adapt tools to real project needs with agility, clarity, and a problem-solving mindset. Academic background in Mathematics (UFV) provided a strong foundation in logic, analytical thinking, and rigor, enhancing my technical proficiency in development and infrastructure.`,
    hardSkills: [
      "DevOps (CI/CD, VPS, Docker, N8N)",
      "API automation and integration (REST/JSON)",
      "Development with Java, Python, and JavaScript",
      "Databases: MySQL, PostgreSQL, Supabase",
      "Scalable infrastructure & cloud services"
    ],
    softSkills: [
      "Analytical reasoning & decision-making",
      "Technical and objective communication",
      "Proactivity, autonomy, and continuous curiosity",
      "Product mindset and focus on results"
    ],
    experience: [
      {
        title: "PromovAds (BH/MG) — Mar/2025 to Present",
        items: [
          "Tech lead for internal automation and VPS infrastructure",
          "Built custom CI/CD pipelines",
          "Improved team productivity"
        ]
      },
      {
        title: "OrangeStore (Viçosa/MG) — Aug/2024 to Jan/2025",
        items: [
          "Technical expertise in Apple product repairs",
          "Discipline with processes and deadlines",
          "Industry certifications"
        ]
      },
      {
        title: "Freelancer (Remote) — 2018 to 2023",
        items: [
          "Developed Minecraft servers, Discord bots, and custom systems",
          "API integration and workflow automation",
          "Versatility and autonomy"
        ]
      }
    ],
    education: [
      "UniViçosa — Systems Analysis and Development (2024 – 2026)",
      "Federal University of Viçosa — Mathematics Bachelor's (2020 – 2023, incomplete)"
    ],
    projects: [
      {
        img: "assets/img/project1.jpg",
        title: "Assistant with OpenAI",
        desc: "AI-based support system using OpenAI LLMs, orchestrated with N8N, stored in Supabase, and securely deployed on Cloudflare-protected VPS."
      },
      {
        img: "assets/img/project2.jpg",
        title: "Minecraft Server Network",
        desc: "Modular structure with independent servers (Proxy, Lobby, Game Modes) in Java, hosted on Linux VPS with MySQL. Includes admin panels and automated deploy/auth workflows."
      },
      {
        img: "assets/img/project3.jpg",
        title: "Discord Bot with API",
        desc: "Advanced bot with smart commands, REST API integrations, authentication, interactive menus, and data persistence. Used for moderation and utilities."
      }
    ]
  }
};

function renderLang() {
  const t = translations[currentLang];
  document.getElementById('role').textContent = t.role;
  document.getElementById('about-text').innerHTML = t.about;

  const hard = document.getElementById('skills-hard');
  hard.innerHTML = t.hardSkills.map(item => `<li>${item}</li>`).join('');

  const soft = document.getElementById('skills-soft');
  soft.innerHTML = t.softSkills.map(item => `<li>${item}</li>`).join('');

  const exp = document.getElementById('experience');
  exp.innerHTML = t.experience
    .map(entry =>
      `<li>
         <strong>${entry.title}</strong><br>
         ${entry.items.map(i => `${i}`).join('<br>')}
       </li>`
    )
    .join('');

  const edu = document.getElementById('education');
  edu.innerHTML = t.education.map(e => `<li>${e}</li>`).join('');

  const proj = document.getElementById('projects');
  proj.innerHTML = t.projects.map(p =>
    `<article class="project-card">
      <img src="${p.img}" alt="Imagem do projeto ${p.title}" />
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </article>`
  ).join('');

  langBtn.textContent = currentLang === 'pt' ? '🌐 English' : '🌐 Português';
}

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  renderLang();
});

document.addEventListener('DOMContentLoaded', renderLang);
