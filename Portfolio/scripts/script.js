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
    // Menu items
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

    // Hero section
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

    // Skills section
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

    // Projects section
    'projects-title': {
        pt: 'Meus <span>Projetos</span>',
        en: 'My <span>Projects</span>'
    },
    'project-1-title': {
        pt: 'Loja Virtual Moderna',
        en: 'Modern E-commerce Store'
    },
    'project-1-desc': {
        pt: 'Plataforma de e-commerce completa com carrinho, checkout e integração de pagamentos.',
        en: 'Complete e-commerce platform with shopping cart, checkout, and payment integration.'
    },
    'project-2-title': {
        pt: 'Dashboard Financeiro',
        en: 'Financial Dashboard'
    },
    'project-2-desc': {
        pt: 'Sistema de análise e visualização de dados financeiros em tempo real com gráficos interativos.',
        en: 'Real-time financial data analysis and visualization system with interactive charts.'
    },
    'project-3-title': {
        pt: 'App de Fitness',
        en: 'Fitness App'
    },
    'project-3-desc': {
        pt: 'Aplicativo para acompanhamento de treinos, dieta e progresso físico com plano personalizado.',
        en: 'App for tracking workouts, diet, and physical progress with personalized plans.'
    },
    'project-demo': {
        pt: 'Demo',
        en: 'Demo'
    },
    'project-code': {
        pt: 'Código',
        en: 'Code'
    },
    'project-code-2': {
        pt: 'Código',
        en: 'Code'
    },
    'project-code-3': {
        pt: 'Código',
        en: 'Code'
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
        pt: '&copy; 2025 Kauã Frenedozo. Todos os direitos reservados.',
        en: '&copy; 2025 Kauã Frenedozo. All rights reserved.'
    }
};

function updateLanguage(lang) {
    // Update flag
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
