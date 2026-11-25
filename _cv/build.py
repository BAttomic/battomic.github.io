"""Gera o currículo (PT e EN) em HTML e PDF.

Uso:  python _cv/build.py
Escreve _cv/curriculo.html e _cv/resume.html e imprime os PDFs em assets/cv/ com o Chrome
headless. A pasta _cv não é publicada pelo GitHub Pages (pastas com "_" ficam de fora do Jekyll).
"""
import html, os, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CHROME = next((p for p in (
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
) if os.path.exists(p)), None)

CONTACT = [
    ('fa-solid fa-phone', '+55 31 93300-8486'),
    ('fa-solid fa-envelope', 'bernardocordeiromotta@gmail.com'),
    ('fa-solid fa-location-dot', {'pt': 'Viçosa, MG', 'en': 'Viçosa, MG - Brazil'}),
    ('fa-solid fa-globe', 'www.battomic.com'),
    ('fa-brands fa-github', 'github.com/BAttomic'),
    ('fa-brands fa-linkedin', '/bernardo-cordeiro-motta'),
]

T = {
    'pt': {
        'lang': 'pt-BR',
        'title': 'Currículo — Bernardo C. Motta',
        'role': 'Desenvolvedor Back-End &amp; Analista de Dados',
        'h_contact': 'Contato', 'h_edu': 'Educação', 'h_skills': 'Habilidades', 'h_langs': 'Idiomas',
        'h_profile': 'Perfil profissional', 'h_exp': 'Experiência', 'h_proj': 'Projetos',
        'present': 'PRESENTE',
        'edu': [
            ('2026 - EM ANDAMENTO', 'FAVENI', 'Licenciatura em Matemática · EAD'),
            ('2024 - 2026', 'UNIVIÇOSA', 'Análise e Desenvolvimento de Sistemas'),
            ('2020 - 2023', 'UFV - UNIVERSIDADE FEDERAL', 'Bacharelado em Matemática (Incompleto)'),
        ],
        'skills': [
            'Linguagens (TypeScript, JavaScript, Python, Java, SQL, Bash)',
            'Frameworks (Node.js, Next.js, React, Tailwind, Django, Flask, Playwright)',
            'Dados (PostgreSQL, MySQL, MariaDB, MongoDB, Power BI)',
            'Infra &amp; DevOps (Linux, Docker, Traefik, Git, CI/CD, Cloudflare, AWS)',
            'IA (Claude, OpenAI, Gemini, Grok, Ollama)',
            'Automação (n8n, WhatsApp API, Meta Ads, Google Ads, Google Workspace)',
            'Pensamento analítico',
        ],
        'langs': ['Português: Nativo', 'Inglês: Avançado'],
        'profile': ('Desenvolvedor back-end e analista de dados com mais de 9 anos de experiência. Automatizo '
                    'processos e construo aplicações web, integrações de dados, painéis e agentes de IA, e cuido '
                    'da infraestrutura que mantém tudo no ar, com segurança e atenção à LGPD. Formado em Análise '
                    'e Desenvolvimento de Sistemas e cursando Licenciatura em Matemática. Portfólio completo em '
                    '<strong>www.battomic.com</strong>.'),
        'exp': [
            ('Eficaz', 'OUT 2026 - PRESENTE', 'Desenvolvedor &amp; Analista de Dados', [
                'Desenvolvimento e análise de dados numa rede de 5 unidades de saúde e 3 franquias; além do escopo, infraestrutura e segurança.',
                'Migrei um servidor herdado, com vulnerabilidades e problemas de LGPD, para uma plataforma isolada e versionada (Docker Swarm, Traefik, PostgreSQL 18), com backup cifrado e testado.',
                'Em 8 semanas: 22 apps, 26 repositórios e 630+ commits, entre integrações de dados, painéis com previsão e um CRM de WhatsApp.',
            ]),
            ('Desenvolvedor Autônomo', '2018 - PRESENTE', 'Back-end, DevOps &amp; Automação', [
                'Freelas no mercado de jogos: infraestrutura de servidores, pipelines de CI/CD e rotinas de backup dos clientes, e plugins autorais.',
                'Automação de processos para empresas com n8n, agentes de IA e integrações (WhatsApp, Google, Meta).',
            ]),
            ('PromovAds', 'MAR 2025 - SET 2025', 'Desenvolvedor', [
                'Automações integradas à Meta e ao Google e agentes de IA no n8n, incluindo um agente de atendimento no WhatsApp.',
                'Reestruturação da infraestrutura VPS com pipelines CI/CD.',
            ]),
            ('OrangeStore', 'AGO 2024 - JAN 2025', 'Técnico Especializado', [
                'Microsoldagem e reparo de componentes eletrônicos complexos, com diagnóstico avançado de hardware.',
            ]),
        ],
        'proj': [
            ('BAttomic — Plataforma SaaS', '2025 - PRESENTE',
             'SaaS multi-tenant (nome provisório) de CRM com agentes de IA, fluxos no estilo n8n, prospecção, campanhas e cobrança com Asaas.'),
            ('Relatórios de Produção — São Romão', '2026',
             'Cliente real: transforma relatórios de produção em PDF em análises por supervisor, produto e período, 100% offline em servidor Node local.'),
            ('TicketFlow (TCC)', '2026',
             'Plataforma full-stack de venda de ingressos com QR Code dinâmico (HMAC rotativo), check-in offline e pré-venda com fila de espera.'),
            ('Lykos Province', 'AGO 2017 - 2023',
             'Comunidade de jogos que fundei e onde comecei a programar: rede Minecraft com 8 servidores em VPS, site com loja, bot no Discord e 1000+ membros.'),
        ],
        'pdf': 'Bernardo_C_Motta_Curriculo.pdf', 'html': 'curriculo.html', 'preview': 'curriculo-preview.webp',
    },
    'en': {
        'lang': 'en',
        'title': 'Resume — Bernardo C. Motta',
        'role': 'Back-End Developer &amp; Data Analyst',
        'h_contact': 'Contact', 'h_edu': 'Education', 'h_skills': 'Skills', 'h_langs': 'Languages',
        'h_profile': 'Profile summary', 'h_exp': 'Work experience', 'h_proj': 'Projects',
        'present': 'PRESENT',
        'edu': [
            ('2026 - IN PROGRESS', 'FAVENI', 'Mathematics (Teaching Degree) · Online'),
            ('2024 - 2026', 'UNIVIÇOSA', 'Systems Analysis &amp; Development'),
            ('2020 - 2023', 'UFV - FEDERAL UNIVERSITY', "Bachelor's in Mathematics (Incomplete)"),
        ],
        'skills': [
            'Languages (TypeScript, JavaScript, Python, Java, SQL, Bash)',
            'Frameworks (Node.js, Next.js, React, Tailwind, Django, Flask, Playwright)',
            'Data (PostgreSQL, MySQL, MariaDB, MongoDB, Power BI)',
            'Infra &amp; DevOps (Linux, Docker, Traefik, Git, CI/CD, Cloudflare, AWS)',
            'AI (Claude, OpenAI, Gemini, Grok, Ollama)',
            'Automation (n8n, WhatsApp API, Meta Ads, Google Ads, Google Workspace)',
            'Analytical thinking',
        ],
        'langs': ['Portuguese: Native', 'English: Advanced'],
        'profile': ('Back-end developer and data analyst with over 9 years of experience. I automate processes and '
                    'build web apps, data integrations, dashboards and AI agents, and run the infrastructure that '
                    'keeps it all up, with security and LGPD (data protection) in mind. Graduated in Systems Analysis '
                    'and Development and currently taking a teaching degree in Mathematics. Full portfolio at '
                    '<strong>www.battomic.com</strong>.'),
        'exp': [
            ('Eficaz', 'OCT 2026 - PRESENT', 'Developer &amp; Data Analyst', [
                'Development and data analysis for a network of 5 healthcare units and 3 franchises; beyond that scope, infrastructure and security.',
                'Moved an inherited server with security vulnerabilities and LGPD issues to an isolated, versioned platform (Docker Swarm, Traefik, PostgreSQL 18), with encrypted, tested backups.',
                'In 8 weeks: 22 apps, 26 repositories and 630+ commits, spanning data integrations, forecasting dashboards and a WhatsApp CRM.',
            ]),
            ('Freelance Developer', '2018 - PRESENT', 'Back-end, DevOps &amp; Automation', [
                "Freelance work in the gaming market: clients' server infrastructure, CI/CD pipelines and backup routines, plus original plugins.",
                'Process automation for companies with n8n, AI agents and integrations (WhatsApp, Google, Meta).',
            ]),
            ('PromovAds', 'MAR 2025 - SEP 2025', 'Developer', [
                'Automations integrated with Meta and Google and AI agents in n8n, including a WhatsApp support agent.',
                'VPS infrastructure restructuring with CI/CD pipelines.',
            ]),
            ('OrangeStore', 'AUG 2024 - JAN 2025', 'Specialized Technician', [
                'Microsoldering and repair of complex electronic components, with advanced hardware diagnostics.',
            ]),
        ],
        'proj': [
            ('BAttomic — SaaS Platform', '2025 - PRESENT',
             'Multi-tenant SaaS (placeholder name) for CRM with AI agents, n8n-style flows, prospecting, campaigns and billing with Asaas.'),
            ('Production Reports — São Romão', '2026',
             'Real client: turns production reports in PDF into analytics by supervisor, product and period, 100% offline on a local Node server.'),
            ('TicketFlow (Capstone)', '2026',
             'Full-stack ticketing platform with dynamic QR Code (rotating HMAC), offline check-in and a pre-sale waiting list.'),
            ('Lykos Province', 'AUG 2017 - 2023',
             'The gaming community I founded and where I started programming: a Minecraft network of 8 VPS servers, a website with a store, a Discord bot and 1000+ members.'),
        ],
        'pdf': 'Bernardo_C_Motta_Resume.pdf', 'html': 'resume.html', 'preview': 'resume-preview.webp',
    },
}

CSS = '''
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 210mm; background: #fff; }
body { font-family: 'Montserrat', sans-serif; color: #444; font-size: 8pt; line-height: 1.42;
       -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 210mm; height: 297mm; padding: 9mm 16mm 8mm; display: flex; flex-direction: column; }
header { text-align: center; }
.photo { width: 21mm; height: 21mm; margin: 0 auto 3mm; border-radius: 50%; border: 1.1mm solid #e6e6e6; overflow: hidden; }
.photo img { width: 100%; height: 100%; object-fit: cover; object-position: center 30%; transform: scale(1.15); }
h1 { font-weight: 500; font-size: 22pt; letter-spacing: 0.12em; color: #222; line-height: 1.1; }
.role { margin-top: 2mm; font-size: 7.6pt; letter-spacing: 0.36em; text-transform: uppercase; color: #666; }
.rule { height: 0; border-top: 0.35mm solid #d2d2d2; margin: 4.5mm 0 0; }
.cols { flex: 1; display: grid; grid-template-columns: 61mm 1fr; min-height: 0; }
.left { padding: 0 6mm 0 0; border-right: 0.35mm solid #d2d2d2; }
.right { padding: 0 0 0 6.5mm; }
h2 { margin: 5mm 0 2.4mm; font-size: 8.6pt; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #222; }
.contact li { list-style: none; display: grid; grid-template-columns: 6mm 1fr; align-items: center; margin-bottom: 1.4mm; color: #333; font-size: 7.6pt; }
.contact i { font-size: 7.6pt; color: #222; }
.edu { margin-bottom: 2.2mm; }
.edu .d { font-weight: 700; color: #222; font-size: 7.8pt; }
.edu .s { font-weight: 700; color: #222; letter-spacing: 0.06em; font-size: 7.8pt; }
.edu .c { color: #555; }
.skills li { list-style: none; position: relative; padding-left: 3.2mm; margin-bottom: 1.2mm; color: #444; }
.skills li::before { content: "•"; position: absolute; left: 0; color: #444; }
.langs p { margin-bottom: 1.2mm; color: #444; }
.profile { text-align: justify; color: #555; line-height: 1.55; }
.profile strong { color: #222; }
.item { margin-bottom: 2.4mm; }
.top { display: flex; justify-content: space-between; align-items: baseline; gap: 4mm; }
.top b { font-weight: 600; font-size: 8.8pt; color: #222; }
.top span { font-size: 7.4pt; color: #555; white-space: nowrap; letter-spacing: 0.02em; }
.sub { font-style: italic; color: #666; margin: 0.2mm 0 0.9mm; }
.item ul { padding-left: 4mm; }
.item li { margin-bottom: 0.6mm; color: #444; }
.proj p { color: #444; margin-top: 0.6mm; }
.right > h2:first-child, .left > h2:first-child { margin-top: 4.5mm; }
'''

def esc(s):
    return s  # os textos já vêm em HTML (entidades e <strong>)

def build(code):
    t = T[code]
    contact = ''.join(
        f'<li><i class="{ic}" aria-hidden="true"></i><span>{(v[code] if isinstance(v, dict) else v)}</span></li>'
        for ic, v in CONTACT)
    edu = ''.join(f'<div class="edu"><div class="d">{d}</div><div class="s">{s}</div><div class="c">{c}</div></div>'
                  for d, s, c in t['edu'])
    skills = ''.join(f'<li>{x}</li>' for x in t['skills'])
    langs = ''.join(f'<p>{x}</p>' for x in t['langs'])
    exp = ''.join(
        f'<div class="item"><div class="top"><b>{n}</b><span>{d}</span></div><div class="sub">{r}</div>'
        f'<ul>{"".join(f"<li>{b}</li>" for b in bs)}</ul></div>' for n, d, r, bs in t['exp'])
    proj = ''.join(f'<div class="item proj"><div class="top"><b>{n}</b><span>{d}</span></div><p>{x}</p></div>'
                   for n, d, x in t['proj'])
    return f'''<!doctype html>
<html lang="{t['lang']}">
<head>
<meta charset="utf-8">
<title>{t['title']}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&display=block">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>{CSS}</style>
</head>
<body>
<div class="page">
  <header>
    <div class="photo"><img src="foto.jpg" alt=""></div>
    <h1>BERNARDO C. MOTTA</h1>
    <div class="role">{t['role']}</div>
  </header>
  <div class="rule"></div>
  <div class="cols">
    <aside class="left">
      <h2>{t['h_contact']}</h2><ul class="contact">{contact}</ul>
      <h2>{t['h_edu']}</h2>{edu}
      <h2>{t['h_skills']}</h2><ul class="skills">{skills}</ul>
      <h2>{t['h_langs']}</h2><div class="langs">{langs}</div>
    </aside>
    <main class="right">
      <h2>{t['h_profile']}</h2><p class="profile">{t['profile']}</p>
      <h2>{t['h_exp']}</h2>{exp}
      <h2>{t['h_proj']}</h2>{proj}
    </main>
  </div>
</div>
</body>
</html>
'''

def main():
    out_dir = os.path.join(ROOT, 'assets', 'cv')
    for code in ('pt', 'en'):
        t = T[code]
        page = os.path.join(HERE, t['html'])
        with open(page, 'w', encoding='utf-8', newline='\n') as f:
            f.write(build(code))
        if '--html-only' in sys.argv:
            continue
        if not CHROME:
            sys.exit('Chrome/Edge não encontrado')
        pdf = os.path.join(out_dir, t['pdf'])
        subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
                        '--run-all-compositor-stages-before-draw', '--virtual-time-budget=10000',
                        f'--print-to-pdf={pdf}', 'file:///' + page.replace('\\', '/')],
                       check=True, capture_output=True)
        # imagem da página para a prévia do site ("Ver currículo"): A4 em 2x, convertida para WebP
        png = os.path.join(HERE, t['preview'].replace('.webp', '.png'))
        subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=794,1400',
                        '--force-device-scale-factor=2', '--virtual-time-budget=10000', f'--screenshot={png}',
                        'file:///' + page.replace('\\', '/')], check=True, capture_output=True)
        webp = os.path.join(out_dir, t['preview'])
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', png, '-vf', 'crop=1588:2246:0:0', '-c:v', 'libwebp', '-quality', '90', webp], check=True)  # captura mais alta e corta no A4 exato (o headless encolhe a área visível)
        os.remove(png)
        print(code, pdf, os.path.getsize(pdf) // 1024, 'KB', '|', t['preview'], os.path.getsize(webp) // 1024, 'KB')

if __name__ == '__main__':
    main()
