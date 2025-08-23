const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

navLinksItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });
});

document
    .querySelector(".scroll-down")
    .addEventListener("click", function () {
        const target = document.querySelector(
            this.getAttribute("data-target")
        );
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            const id = section.getAttribute("id");
            navLinksItems.forEach((item) => {
                item.classList.remove("active");
                if (item.getAttribute("href") === `#${id}`) {
                    item.classList.add("active");
                }
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document
    .querySelectorAll(".skill-card, .project-card")
    .forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });

// Language Toggle Functionality
const languageToggle = document.getElementById('language-toggle');
const flagIcon = document.getElementById('flag-icon');
let currentLanguage = 'pt';

const translations = {
    // Menu items | Itens do menu
    'menu-home': {
        pt: 'home',
        en: 'home'
    },
    'menu-expertise': {
        pt: 'habilidades',
        en: 'expertise'
    },
    'menu-work': {
        pt: 'projetos',
        en: 'work'
    },
    'menu-contact': {
        pt: 'contato',
        en: 'contact'
    },

    // Hero section | Redirecionamento
    'hero-title': {
        pt: 'DESENVOLVEDOR FULL-STACK',
        en: 'FULL-STACK DEVELOPER'
    },
    'hero-expertise': {
        pt: 'habilidades',
        en: 'expertise'
    },
    'hero-work': {
        pt: 'projetos',
        en: 'work'
    },
    'hero-contact': {
        pt: 'contato',
        en: 'contact'
    },

    // Skills section | Seção de Habilidades
    'skills-title': {
        pt: 'Minhas <span>Habilidades</span>',
        en: 'My <span>Skills</span>'
    },
    'skill-html': {
        pt: 'Criação de interfaces responsivas e acessíveis com as mais recentes tecnologias web.',
        en: 'Creating responsive and accessible interfaces with the latest web technologies.'
    },
    'skill-js': {
        pt: 'Desenvolvimento de aplicações interativas e dinâmicas com ES6+ e padrões modernos.',
        en: 'Development of interactive and dynamic applications with ES6+ and modern patterns.'
    },
    'skill-react': {
        pt: 'Construção de interfaces de usuário escaláveis e de alto desempenho com React.',
        en: 'Building scalable and high-performance user interfaces with React.'
    },
    'skill-java': {
        pt: 'Desenvolvimento de aplicações back-end robustas e escaláveis com Java e Spring Boot.',
        en: 'Developing robust and scalable back-end applications with Java and Spring Boot.'
    },
    'skill-python': {
        pt: 'Programação em Python para automação, análise de dados e desenvolvimento web.',
        en: 'Python programming for automation, data analysis, and web development.'
    },
    'skill-github': {
        pt: 'Versionamento de código e gerenciamento de branches seguindo o fluxo GitFlow.',
        en: 'Code versioning and branch management following GitFlow workflow.'
    },
    'skill-scrum': {
        pt: 'Gestão ágil de projetos com sprints, backlogs e quadros de tarefas.',
        en: 'Agile project management with sprints, backlogs, and task boards.'
    },
    'skill-ui': {
        pt: 'Design de interfaces intuitivas focadas na experiência do usuário e usabilidade.',
        en: 'Designing intuitive interfaces focused on user experience and usability.'
    },
    'skill-responsive': {
        pt: 'Sites que se adaptam perfeitamente a qualquer dispositivo ou tamanho de tela.',
        en: 'Websites that perfectly adapt to any device or screen size.'
    },

    // Projects section | Seção de Projetos
    'projects-title': {
        pt: 'Meus <span>Projetos</span>',
        en: 'My <span>Projects</span>'
    },
    'project-1-title': {
        pt: 'FaceShield',
        en: 'FaceShield'
    },
    'project-1-desc': {
        pt: 'Este é um sistema de gerenciamento de empréstimos de ferramentas completo, que utiliza reconhecimento facial para validação de usuários. Ele permite o gerenciamento total (CRUD) de usuários, ferramentas, locais, estados e empréstimos, além de oferecer buscas detalhadas por ferramentas disponíveis, por localização/estado e histórico de empréstimos.',
        en: 'This is a complete tool loan management system that uses facial recognition for user validation. It allows full CRUD management of users, tools, locations, statuses, and loans, as well as providing detailed searches for available tools, by location/status, and loan history.'
    },
    'project-2-title': {
        pt: 'Página Web – FaceShield',
        en: 'Landing Page – FaceShield'
    },
    'project-2-desc': {
        pt: 'Desenvolvi uma landing page para a FaceShield, empresa especializada em automação de bancadas e organização. O projeto teve como foco apresentar os serviços de forma clara e objetiva, destacando a identidade visual da marca e garantindo uma experiência de navegação simples e intuitiva. A página foi estruturada para transmitir credibilidade, otimizar a comunicação com potenciais clientes e facilitar a conversão, unindo design moderno e funcionalidade.',
        en: 'I developed a landing page for FaceShield, a company specialized in workstation automation and organization. The project focused on presenting the services in a clear and objective way, highlighting the brand’s visual identity and ensuring a simple and intuitive user experience. The page was designed to convey credibility, optimize communication with potential clients, and drive conversions by combining modern design with functionality.'
    },
    'project-3-title': {
        pt: 'Em Breve',
        en: 'Coming Soon'
    },
    'project-3-desc': {
        pt: '',
        en: ''
    },
    'project-code': {
        pt: 'Ver Código',
        en: 'View Code'
    },
    'project-code-2': {
        pt: 'Ver Código',
        en: 'View Code'
    },
    'project-code-3': {
        pt: 'Em Breve',
        en: 'Coming Soon'
    },

    // Contact section
    'contact-title': {
        pt: 'Entre em <span>Contato</span>',
        en: 'Contact <span>Me</span>'
    },
    'contact-text': {
        pt: 'Estou disponível para novos projetos e oportunidades. Entre em contato comigo através dos canais abaixo ou envie uma mensagem direta.',
        en: 'I am available for new projects and opportunities. Contact me through the channels below or send a direct message.'
    },

    // Footer
    'footer-text': {
        pt: '© 2025 Kauã Frenedozo. Todos os direitos reservados.',
        en: '© 2025 Kauã Frenedozo. All rights reserved.'
    }
};

function updateLanguage(lang) {
    // Update flag | Atualizar a Bandeira
    flagIcon.src = lang === 'pt'
        ? 'https://flagcdn.com/w20/br.png'
        : 'https://flagcdn.com/w20/us.png';

    // Update all translatable elements
    Object.keys(translations).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (id === 'skills-title' || id === 'projects-title' || id === 'contact-title') {
                element.innerHTML = translations[id][lang];
            } else {
                element.textContent = translations[id][lang];
            }
        }
    });

    currentLanguage = lang;
}

// Toggle language on button click
languageToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'pt' ? 'en' : 'pt';
    updateLanguage(newLang);
});

// Initialize with Portuguese
updateLanguage('pt');
