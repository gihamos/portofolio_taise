// ================================
// Persisted settings
// ================================
let currentLang = localStorage.getItem('lang') || 'fr';
let currentTheme = localStorage.getItem('theme') || 'dark';

// ================================
// Données bilingues (contenu)
// ================================
const translations = {
  fr: {
    nav: { about: "À propos", experience: "Expériences", projects: "Projets", skills: "Compétences", objective: "Alternance", contact: "Contact" },
    sections: { about: "À propos" },
    name: "Taïse De Thèse NGANGA YABIE",
    subtitle: "AI, Big Data & Développeur Full Stack en formation",
    about: [
      "Développeur passionné, j’aime concevoir des solutions robustes et centrées sur l’utilisateur.",
      "De la Licence Informatique au Master IA, Big Data & Développement, j’ai construit une solide culture technique.",
      "Curieux, rigoureux, orienté solution, j’apprécie les architectures modulaires et la documentation claire."
    ],
    motto: "Credo : construire clairement, itérer avec finesse, documenter élégamment.",
    exp_title: " Expériences Professionnelles",
    experiences: [
      { title: "Data Anlyst- ICC", date: "2022-2024", icon: "bi bi-person-workspace text-info",
          description: "Automatisation de processus et création de formulaires Excel avancés (Apps Script, VBA), conception de dashboards dynamiques (Power BI, Looker) pour le suivi des KPI, consolidation et contrôle des données ayant amélioré la fiabilité du reporting et la performance de suivi de +20 %, avec analyses synthétiques pour appuyer la prise de décision.",
        skills: ["Power Bi/looker", "excel/googlesheet", "Google/Microsoft Forms","VBA/AppScript"] },
      { title: "Developpeur fullstack - Edidebs", date: "09/2025-11/2025 · stage", icon: "bi bi-person-workspace text-info",
        description: "développement et amélioration de l’application bancaire EDIDEBS BANK, en React et Java Spring Boot, avec optimisation et sécurisation des microservices (paiements, offres, comptes), mise en place de CI/CD, déploiement automatisé via Docker, refonte de l’interface utilisateur, et déploiement en cours pour une banque en ligne en Éthiopie",
       skills: ["React","java spring Boot(microservices)"] },
      { title: "Développeur Web – Université d’Angers", date: "02/2024-04/2024 · Stage académique", icon: "bi bi-laptop text-warning",
        description: "Application de suivi scolaire (Symfony + PostgreSQL). Authentification, rapports PDF, documentation.",
        skills: ["Symfony", "PostgreSQL", "Git"] },
      { title: "Support Technique – Université d’Angers", date: "2022-2024 · CDD", icon: "bi bi-person-workspace text-info",
        description: "assistance utilisateurs, gestion des tickets, déploiement et maintenance du parc, résolution d’incidents, outils bureautiques et systèmes, Active Directory, configuration réseau de base.",
        skills: ["Support technique", "Linux", "Communication"] }
    ],
    proj_title: " Projets Académiques et Personnels",
    projects: [
      {
        title: "Quiz App",
        description: "Application android de quiz interactive avec score et logique dynamique (kotlin).",
        image: "assets/quizapp.png",
       github: "https://github.com/gihamos/quizapp"
        },
        {
    title: "Chatbot",
    description: "Chatbot interactif branché avec ollama, support de document pdf et memoire conversationel developpé avec Django",
    image: "assets/chatbot.png",
    github: "https://github.com/gihamos/chatbot"
  },


      { title: "Sudo-help", description: "Jeu de Sudoku Java avec architecture claire avec système d'aide intelligent.", image: "assets/sudoHelp2.jpg", github: "https://github.com/Enzo-mor/Sudo-help" },
      { title: "GTOsint", description: "conception d’une architecture web et développement d’une application de tracking de joueurs (Steam, Riot) en Angular/Node.js, avec authentification, gestion utilisateurs et base MongoDB Atlas, déployée via Docker/Kubernetes pour automatisation, scalabilité et haute disponibilité.
          ", image: "assets/gtosint.jpg", github: "https://github.com/gihamos/GTOsint" },
      { title: "Machine Learning", description: "Classification des émotions (Python / scikit-learn).", image: "assets/sklearn-make-classification_FEATURED-IMAGE.png", github: "https://github.com/gihamos/machinelearning" }
    ],
    skills_title: "Compétences",
    skills: {
      prog_title: "Langages de programmation",
      prog_list: ["Java, Kotlin, Python, C/C++, PHP, Ruby", "JavaScript/TypeScript, Bash", "R, Prolog, Haskell, C#"],
      back_title: "Backend & DevOps",
      back_list: ["Node.js, Express.js, Symfony, Django, FastAPI", "API REST, Docker, Git, CI/CD","Kubernetes"],
      front_title: "Frontend",
      front_list: ["Angular, React", "Bootstrap"],
      db_title: "Bases de données & cloud ",
      db_list: ["PostgreSQL, MySQL, MongoDB", "SQLite", "AWS"],
      sys_title: "Réseaux & Systèmes & business intelligence",
      sys_list: ["Linux, VirtualBox", "Concepts de communication réseau","power Bi/Looker","VBA/Appscript","microsoft office"],
      methods_title: "Méthodes & Langues",
      methods_list: ["Agile/Scrum, UML, Design Patterns", "Algorithmique appliquée", "Français (natif), Anglais (B2)"]
    },
    objective_title: "Objectif Alternance",
    objective_text: "Je recherche une alternance  Full Stack / Big Data / IA  au rythme 1 semaine école/3 semaines entreprise pour contribuer à des projets concrets et ambitieux.",
    objective_btn: "Me contacter pour une alternance",
    contact_title: "📬 Contact",
    cv_label: "Voir le CV (PDF)"
  },
 en: {
  nav: { 
    about: "About", 
    experience: "Experience", 
    projects: "Projects", 
    skills: "Skills", 
    objective: "Internship", 
    contact: "Contact" 
  },
  sections: { about: "About" },
  name: "Taïse De Thèse NGANGA YABIE",
  subtitle: "AI, Big Data & Full Stack Developer in training",
  about: [
    "Passionate developer, I enjoy designing robust, user-centered solutions.",
    "From a Computer Science Bachelor's to a Master's in AI, Big Data & Development, I have built a solid technical foundation.",
    "Curious, rigorous, solution-oriented, I value modular architectures and clear documentation."
  ],
  motto: "Motto: build clearly, iterate with finesse, document elegantly.",
  exp_title: "Professional Experiences",
  experiences: [
    { 
      title: "Data Analyst - ICC", 
      date: "2022-2024", 
      icon: "bi bi-person-workspace text-info",
      description: "Process automation and development of advanced Excel forms (Apps Script, VBA), design of dynamic dashboards (Power BI, Looker) for KPI tracking, data consolidation and validation improving reporting reliability and monitoring performance by +20%, with clear and synthetic analyses to support decision-making",
      skills: ["Power BI/Looker", "Excel/Google Sheets", "Google/Microsoft Forms", "VBA/AppScript"] 
    },
    { 
      title: "Fullstack Developer - Edidebs", 
      date: "09/2025-11/2025 · internship", 
      icon: "bi bi-person-workspace text-info",
      description: "developed and enhanced the banking application EDIDEBS BANK using React & Java Spring Boot, optimizing and securing microservices (payments, promotions, accounts), implementing CI/CD, automated deployment with Docker, redesigning the user interface, and currently being deployed for an online bank in Ethiopia.",
      skills: ["React", "Java Spring Boot (microservices)"] 
    },
    { 
      title: "Web Developer – University of Angers", 
      date: "02/2024-04/2024 · academic internship", 
      icon: "bi bi-laptop text-warning",
      description: "School tracking application (Symfony + PostgreSQL). Authentication, PDF reports, documentation.",
      skills: ["Symfony", "PostgreSQL", "Git"] 
    },
    { 
      title: "Technical Support – University of Angers", 
      date: "2022-2024 · fixed-term contract", 
      icon: "bi bi-person-workspace text-info",
      description: "User support, ticket management, deployment and maintenance of IT systems, incident resolution, office tools.",
      skills: ["Technical support", "Linux", "Communication"] 
    }
  ],
  proj_title: "Academic and Personal Projects",
  projects: [
    {
      title: "Quiz App",
      description: "Interactive Android quiz application with scoring and dynamic logic (kotlin).",
      image: "assets/quizapp.png",
      github: "https://github.com/gihamos/quizapp"
    },
    {
      title: "Chatbot",
      description: "Interactive chatbot connected with Ollama, PDF document support, and conversational memory developed with Django.",
      image: "assets/chatbot.png",
      github: "https://github.com/gihamos/chatbot"
    },
    { 
      title: "Sudo-help", 
      description: "Java Sudoku game with clear architecture and intelligent help system.", 
      image: "assets/sudoHelp2.jpg" 
    },
    { 
      title: "GTOsint", 
      description: "designed a web architecture and built a player tracking app (Steam, Riot) in Angular/Node.js, with authentication, user management and MongoDB Atlas, deployed using Docker/Kubernetes for automation, scalability and high availability
         ", 
      image: "assets/gtosint.jpg", 
      github: "https://github.com/gihamos/gtosint" 
    },
    { 
      title: "Machine Learning", 
      description: "Emotion classification (Python / scikit-learn).", 
      image: "assets/sklearn-make-classification_FEATURED-IMAGE.png", 
      github: "https://github.com/gihamos/machinelearning" 
    }
  ],
  skills_title: "Skills",
  skills: {
    prog_title: "Programming Languages",
    prog_list: ["Java, Kotlin, Python, C/C++, PHP, Ruby", "JavaScript/TypeScript, Bash", "R, Prolog, Haskell, C#"],
    back_title: "Backend & DevOps",
    back_list: ["Node.js, Express.js, Symfony, Django, FastAPI", "REST API, Docker, Git, CI/CD","Kubernetes"],
    front_title: "Frontend",
    front_list: ["Angular, React", "Bootstrap"],
    db_title: "Databases & cloud",
    db_list: ["PostgreSQL, MySQL, MongoDB", "SQLite","AWS"],
    sys_title: "Networks & Systems & busness intelligence",
    sys_list: ["Linux, VirtualBox", "Network communication concepts", "Power BI/Looker", "VBA/AppScript", "Microsoft Office"],
    methods_title: "Methods & Languages",
    methods_list: ["Agile/Scrum, UML, Design Patterns", "Applied algorithms", "French (native), English (B2)"]
  },
  objective_title: "Internship Objective",
  objective_text: "I am looking for a Full Stack / Big Data / AI internship with a rhythm of 1 week school / 3 weeks company to contribute to impactful projects.",
  objective_btn: "Contact me for an internship",
  contact_title: "📬 Contact",
  cv_label: "View CV (PDF)"
}
 
};

// ================================
// Utilities
// ================================
function typeEffect(text) {
  const el = document.getElementById("typing");
  if (!el) return;
  el.textContent = "";
  let i = 0;
  (function step() {
    if (i < text.length) {
      el.textContent += text.charAt(i++);
      setTimeout(step, 80);
    }
  })();
}

function fillList(id, items) {
  const ul = document.getElementById(id);
  if (!ul) return;
  ul.innerHTML = items.map(i => `<li>${i}</li>`).join('');
}

// ================================
// Renderers
// ================================
function renderTexts(t) {
  // Navbar labels
  ['about','experience','projects','skills','objective','contact'].forEach(k => {
    const el = document.querySelector(`[data-i18n="nav.${k}"]`);
    if (el) el.textContent = t.nav[k];
  });

  // About section
  const sectAbout = document.querySelector('[data-i18n="sections.about"]');
  if (sectAbout) sectAbout.textContent = t.sections.about;
  const subtitle = document.getElementById('subtitle'); if (subtitle) subtitle.textContent = t.subtitle;
  ['about_1','about_2','about_3'].forEach((id, idx) => {
    const p = document.getElementById(id); if (p) p.textContent = t.about[idx];
  });
  const motto = document.getElementById('motto'); if (motto) motto.textContent = t.motto;

  // Titles
  const expTitle = document.getElementById('exp_title'); if (expTitle) expTitle.textContent = t.exp_title;
  const projTitle = document.getElementById('proj_title'); if (projTitle) projTitle.textContent = t.proj_title;
  const skillsTitle = document.getElementById('skills_title'); if (skillsTitle) skillsTitle.textContent = t.skills_title;
  const contactTitle = document.getElementById('contact_title'); if (contactTitle) contactTitle.textContent = t.contact_title;
  const objTitle = document.getElementById('objective_title'); if (objTitle) objTitle.textContent = t.objective_title;
  const objText  = document.getElementById('objective_text'); if (objText) objText.textContent = t.objective_text;
  const objBtn   = document.getElementById('objective_btn'); if (objBtn) objBtn.textContent = t.objective_btn;

  // CV trigger label (button shows generator)
  const cvBtn = document.getElementById('cv_btn'); if (cvBtn) cvBtn.textContent = t.cv_label;

  // Skills
  const s = t.skills;
  const titleMap = [
    ['skill_prog_title', s.prog_title],
    ['skill_back_title', s.back_title],
    ['skill_front_title', s.front_title],
    ['skill_db_title', s.db_title],
    ['skill_sys_title', s.sys_title],
    ['skill_methods_title', s.methods_title]
  ];
  titleMap.forEach(([id, text]) => { const el = document.getElementById(id); if (el) el.textContent = text; });

  fillList('skill_prog_list', s.prog_list);
  fillList('skill_back_list', s.back_list);
  fillList('skill_front_list', s.front_list);
  fillList('skill_db_list', s.db_list);
  fillList('skill_sys_list', s.sys_list);
  fillList('skill_methods_list', s.methods_list);
}

function renderExperiences(t) {
  const container = document.getElementById("experience_rows");
  if (!container) return;
  container.innerHTML = "";
  t.experiences.forEach(exp => {
    const col = document.createElement("div");
    col.className = "col-md-6";
    col.innerHTML = `
      <div class="card h-100 p-3">
        <div class="d-flex align-items-center mb-2">
          <i class="${exp.icon} fs-4 me-2" aria-hidden="true"></i>
          <div>
            <h5 class="mb-0">${exp.title}</h5>
            <small class="text-muted">${exp.date}</small>
          </div>
        </div>
        <p class="mb-3">${exp.description}</p>
        <div class="d-flex gap-2 flex-wrap">
          ${exp.skills.map(s => `<span class="badge bg-secondary">${s}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

function renderProjects(t) {
  const indicators = document.getElementById("proj_indicators");
  const inner = document.getElementById("proj_inner");
  if (!indicators || !inner) return;
  indicators.innerHTML = "";
  inner.innerHTML = "";

  t.projects.forEach((p, i) => {
    const btn = document.createElement('button');
    btn.type = "button";
    btn.dataset.bsTarget = "#projectsCarousel";
    btn.dataset.bsSlideTo = String(i);
    btn.setAttribute('aria-label', `Slide ${i+1}`);
    if (i === 0) { btn.className = "active"; btn.setAttribute('aria-current','true'); }
    indicators.appendChild(btn);

    const item = document.createElement('div');
    item.className = `carousel-item ${i === 0 ? 'active' : ''}`;
    item.innerHTML = `
      <div class="row g-3 justify-content-center">
        <div class="col-md-4 col-sm-6">
          <div class="card p-3 h-100 text-center">
            <img src="${p.image}" class="img-fluid rounded mb-2" alt="${p.title}" loading="lazy">
            <h5 class="mb-1">${p.title}</h5>
            <p class="text-justify">${p.description}</p>
            <div class="d-flex justify-content-center gap-2">
              ${p.github ? `<a href="${p.github}" class="btn btn-outline-secondary" target="_blank" rel="noopener">GitHub</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
    inner.appendChild(item);
  });
}

// ================================
// CV auto-généré (deux colonnes) + export PDF
// ================================
function renderCV(t) {
  const cv = document.getElementById('cv_content');
  if (!cv) return;

  const skillsCombined = [
    ...t.skills.prog_list,
    ...t.skills.back_list,
    ...t.skills.front_list,
    ...t.skills.db_list,
    ...t.skills.sys_list,
    ...t.skills.methods_list
  ];

  cv.innerHTML = `
    <div class="cv-left">
      <h3>${t.name}</h3>
      <p><strong>${t.subtitle}</strong></p>
      <div class="cv-section">
        <h4>${t.skills_title}</h4>
        <ul>
          ${skillsCombined.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="cv-right">
      <div class="cv-section">
        <h4>${t.exp_title}</h4>
        ${t.experiences.map(exp => `
          <p><strong>${exp.title}</strong> (${exp.date})<br>${exp.description}</p>
        `).join('')}
      </div>
      <div class="cv-section">
        <h4>${t.proj_title}</h4>
        ${t.projects.map(p => `
          <p><strong>${p.title}</strong><br>${p.description}</p>
        `).join('')}
      </div>
      <div class="cv-section">
        <h4>${t.objective_title}</h4>
        <p>${t.objective_text}</p>
      </div>
    </div>
  `;
}

// ================================
// Theme & language
// ================================
function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.body.classList.toggle('light-mode', theme !== 'dark');
  localStorage.setItem('theme', theme);
  updateCarouselArrows(theme);
}

function updateCarouselArrows(theme) {
  const prevIcons = document.querySelectorAll('.carousel-control-prev-icon');
  const nextIcons = document.querySelectorAll('.carousel-control-next-icon');

  if (theme === 'light') {
    prevIcons.forEach(icon => {
      icon.style.backgroundImage =
        "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 16 16'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")";
    });
    nextIcons.forEach(icon => {
      icon.style.backgroundImage =
        "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 16 16'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")";
    });
  } else {
    // remettre les icônes par défaut (blanches)
    prevIcons.forEach(icon => {
      icon.style.backgroundImage = "";
    });
    nextIcons.forEach(icon => {
      icon.style.backgroundImage = "";
    });
  }
}
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  renderTexts(t);
  renderExperiences(t);
  renderProjects(t);
  const togg = document.getElementById('langToggle');
  if (togg) togg.textContent = lang.toUpperCase();
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

// ================================
// Init + interactions
// ================================
document.addEventListener('DOMContentLoaded', () => {
  // Safety: ensure key containers exist; if not, abort
  const required = [
    '#typing','#subtitle','[data-i18n="sections.about"]',
    '#exp_title','#experience_rows',
    '#proj_title','#proj_indicators','#proj_inner',
    '#skills_title',
    '#skill_prog_title','#skill_prog_list',
    '#skill_back_title','#skill_back_list',
    '#skill_front_title','#skill_front_list',
    '#skill_db_title','#skill_db_list',
    '#skill_sys_title','#skill_sys_list',
    '#skill_methods_title','#skill_methods_list',
    '#objective_title','#objective_text','#objective_btn',
    '#contact_title','#cv_btn','#langToggle','#themeToggle',
    '#contactForm','#cv','#cv_content','#downloadCV'
  ];
  const missing = required.filter(sel => !document.querySelector(sel));
  if (missing.length) {
    console.error('Missing elements:', missing);
    return;
  }

  // Apply settings
  applyLanguage(currentLang || 'fr');
  applyTheme(currentTheme || 'light');

  // Typing effect
  typeEffect(translations[currentLang].name);

  // Carousel
  const carouselEl = document.getElementById('projectsCarousel');
  if (carouselEl) bootstrap.Carousel.getOrCreateInstance(carouselEl, { interval: 3500 });

  // Smooth scroll + close navbar
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar && navbar.classList.contains('show')) new bootstrap.Collapse(navbar).hide();
    });
  });

  // Close navbar on outside click
  document.addEventListener('click', (event) => {
    const navbar = document.querySelector('.navbar-collapse');
    const isOpen = navbar && navbar.classList.contains('show');
    const inside = event.target.closest('.navbar');
    if (isOpen && !inside) new bootstrap.Collapse(navbar, { toggle: false }).hide();
  });

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    currentTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(currentTheme);
  });

  // Language toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = (currentLang === 'fr') ? 'en' : 'fr';
    applyLanguage(currentLang);
    typeEffect(translations[currentLang].name);
  });

 


  // CV generation (show section)
  document.getElementById('cv_btn').addEventListener('click', e => {
    e.preventDefault();
    const t = translations[currentLang];
    renderCV(t);
    document.getElementById('cv').classList.remove('d-none');
    document.getElementById('cv').scrollIntoView({ behavior: 'smooth' });
  });

  // CV export to PDF
  document.getElementById('downloadCV').addEventListener('click', () => {
    const element = document.getElementById('cv_content');
    if (!element) return;
    html2pdf().from(element).save(`CV_${translations[currentLang].name}.pdf`);
  });
});


// ================================
// Gestion du formulaire de contact (Formspree)
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  if (!form) return; // sécurité : si pas de formulaire, on ne fait rien

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);

    // Message de progression
    status.innerHTML = '<div class="alert alert-info">⏳ Envoi en cours...</div>';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.innerHTML = '<div class="alert alert-success">✅ Merci, votre message a été envoyé !</div>';
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          status.innerHTML = `<div class="alert alert-danger">${result.errors.map(error => error.message).join(", ")}</div>`;
        } else {
          status.innerHTML = '<div class="alert alert-danger">❌ Oups, une erreur est survenue.</div>';
        }
      }
    } catch (error) {
      status.innerHTML = '<div class="alert alert-danger">❌ Impossible de contacter Formspree.</div>';
    }
  });
});
