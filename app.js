// ===== TRACK DATA =====
const tracks = [
  {
    id: "economics",
    priority: "Must-cover",
    title: "Engineering Economics: стоимость, ресурсы, эффективность",
    shortTitle: "Engineering Economics",
    score: "54.9",
    role: "Центральный трек",
    evidence: "Самая высокая суммарная частота и сила боли. Это разговор не про экономию ради экономии, а про выживаемость инженерной организации под давлением стоимости изменений.",
    summary: "Трек отвечает на вопрос, как команде принимать технические решения с учётом стоимости владения, ограниченного capacity, давления на инфраструктуру и высокой цены неверного архитектурного выбора.",
    questions: [
      "Как уменьшать стоимость изменений и не раздувать платформу?",
      "Как считать эффективность инженерной системы без корпоративной бюрократии?",
      "Где у smalltech/midtech реальные точки утечки ресурсов?"
    ],
    sections: [
      { name: "Infrastructure cost pressure", format: "Практический кейс + экспертная панель" },
      { name: "Resource allocation and operational load", format: "Кейс + benchmark talk" },
      { name: "Cost-aware engineering decisions", format: "Разбор решений и trade-off talk" },
      { name: "Efficiency without enterprise overhead", format: "Круглый стол для small/midtech" }
    ],
    speakerProfile: "CTO, Head of Engineering, Platform Lead с опытом пересборки затратной модели разработки.",
    accentColor: "#d6ac75"
  },
  {
    id: "delivery",
    priority: "Must-cover",
    title: "Delivery & Operating Processes",
    shortTitle: "Delivery & Processes",
    score: "54.4",
    role: "Центральный трек",
    evidence: "Один из самых широких кластеров исследования: поток задач, качество поставки, процессы, testing, планирование и операционная координация.",
    summary: "Трек про то, как делать поставку предсказуемее в растущей компании, где уже есть сложность, но ещё нет зрелой операционной машины.",
    questions: [
      "Как строить процесс там, где компания уже выросла, а процессы ещё нет?",
      "Как не тонуть в тестировании, пожарных релизах и операционных зависимостях?",
      "Какие практики дают поток, а какие создают иллюзию контроля?"
    ],
    sections: [
      { name: "Process setup in growing companies", format: "War story + checklist talk" },
      { name: "Testing and quality flow", format: "Прикладной доклад + clinic session" },
      { name: "Planning and operational coordination", format: "Кейс + фасилитируемая дискуссия" },
      { name: "Workflow overload and task turbulence", format: "Панель тимлидов и EM" }
    ],
    speakerProfile: "EM, Delivery Manager, Head of Development, которые выстраивали поток в условиях роста и турбулентности.",
    accentColor: "#809274"
  },
  {
    id: "legacy",
    priority: "Must-cover",
    title: "Legacy, Migration & Modernization",
    shortTitle: "Legacy & Migration",
    score: "52.6",
    role: "Центральный трек",
    evidence: "Одна из самых острых тем по интенсивности сигнала: миграции, импортозамещение, стабилизация унаследованных систем и пересборка критических слоёв без остановки бизнеса.",
    summary: "Трек нужен как набор честных историй о том, как команды проходят модернизацию без витринного оптимизма: с откатами, сопротивлением и длинным хвостом последствий.",
    questions: [
      "Как наводить порядок в легаси, не ломая текущую поставку?",
      "Как мигрировать платформы, базы и интеграции без катастрофической потери управляемости?",
      "Какие решения реально работают в импортозамещении под ограничениями?"
    ],
    sections: [
      { name: "Legacy cleanup and stabilization", format: "Разбор кейса с ошибками и решениями" },
      { name: "Data and messaging migrations", format: "Deep-dive case study" },
      { name: "Platform and cloud migrations", format: "Case study + AMA" },
      { name: "Import substitution under constraints", format: "Панель практических кейсов" }
    ],
    speakerProfile: "Architect, Staff Engineer, Infra Lead, пережившие реальную модернизацию под давлением срока и бизнеса.",
    accentColor: "#d7ac62"
  },
  {
    id: "platform",
    priority: "Must-cover",
    title: "Platforms, Cloud, DevOps & Observability",
    shortTitle: "Platform & DevOps",
    score: "51.0",
    role: "Центральный трек",
    evidence: "Массовый запрос на прикладной разговор об инфраструктуре: deployment, CI/CD, observability, облако, K8s и эксплуатация в сложных средах заказчика.",
    summary: "Трек должен быть анти-абстрактным. Аудитории нужны рабочие практики эксплуатации, а не демонстрация идеального DevOps в вакууме.",
    questions: [
      "Как строить платформу, если команда маленькая, а требований много?",
      "Как собирать наблюдаемость и релизный контур без лишней тяжести?",
      "Как жить с гибридной инфраструктурой и нестандартными контурами заказчика?"
    ],
    sections: [
      { name: "Cloud operations and platform migration", format: "Практический кейс" },
      { name: "Monitoring and observability", format: "Tech case + patterns talk" },
      { name: "Kubernetes and platform operations", format: "Deep technical talk" },
      { name: "CI/CD and release automation", format: "Practical workshop / demo session" },
      { name: "Deployment in customer environments", format: "War story session" }
    ],
    speakerProfile: "Platform Engineer, SRE, DevOps Lead, умеющие показывать реальные компромиссы, а не только эталонную схему.",
    accentColor: "#5d8b9b"
  },
  {
    id: "architecture",
    priority: "Must-cover",
    title: "Architecture & Scalability",
    shortTitle: "Architecture & Scalability",
    score: "50.9",
    role: "Центральный трек",
    evidence: "Сильный кластер о проектировании сложных систем, росте нагрузки, системном дизайне и необходимости принимать решения под реальными ограничениями.",
    summary: "Трек нужен, чтобы говорить о проектировании сложных систем как о цепочке дорогостоящих решений, а не как о красивых схемах без цены ошибки.",
    questions: [
      "Как проектировать сложную систему, когда нельзя всё переписать?",
      "Какие архитектурные решения выдерживают рост подсистем и нагрузки?",
      "Как сохранять устойчивость при ограниченности команды и данных?"
    ],
    sections: [
      { name: "System design for complex systems", format: "Architecture case" },
      { name: "Scalability under growth", format: "Performance/scaling case" },
      { name: "Distributed architecture and resilience", format: "Deep technical talk" },
      { name: "Architecture under constraints", format: "Panel + decision review" }
    ],
    speakerProfile: "Architect, Principal Engineer, способные разобрать не только финальный вариант, но и логику трудных выборов.",
    accentColor: "#9e8764"
  },
  {
    id: "leadership",
    priority: "Must-cover",
    title: "Leadership, Team Design & Scale Management",
    shortTitle: "Leadership & Org Design",
    score: "50.5",
    role: "Центральный трек",
    evidence: "Устойчивая массовая боль про управление командами, метрики, org design, выгорание, рост зоны ответственности и менеджерские компромиссы.",
    summary: "Трек закрывает критичный управленческий пласт: как не потерять управляемость, когда компания и инженерная система растут быстрее, чем зрелость процессов и лидеров.",
    questions: [
      "Как расти, не ломая структуру и ожидания?",
      "Как выравнивать менеджеров, роли и метрики без корпоративного театра?",
      "Как работать с выгоранием, сложными кейсами и длинной дистанцией роста?"
    ],
    sections: [
      { name: "Team scaling and span of control", format: "Case study for leaders" },
      { name: "Org design, roles and metrics", format: "Framework talk + practical examples" },
      { name: "Managerial alignment and expectation management", format: "Panel / AMA with directors" },
      { name: "Burnout and sustainable leadership", format: "Honest roundtable" },
      { name: "Difficult people cases", format: "Closed-door discussion / clinic" }
    ],
    speakerProfile: "CTO, VP Eng, Director of Engineering, Head of R&D с опытом реального масштабирования и тяжёлых управленческих решений.",
    accentColor: "#8574aa"
  },
  {
    id: "ai",
    priority: "Secondary",
    title: "AI in Production",
    shortTitle: "AI in Production",
    score: "48.8",
    role: "Крупная секция второго эшелона",
    evidence: "Тема важна, но в данных она сильна именно как прикладной запрос: как внедрять AI в проде в контексте стоимости, качества, данных и ограничений команды.",
    summary: "AI здесь не витринный блок, а дисциплинированный слой про ценность, качество, retrieval, agents и real-world ограничения инженерной среды.",
    questions: [
      "Где AI реально даёт value, а где создаёт только ожидания?",
      "Как строить RAG и agents, которые работают в проде, а не только на демо?",
      "Как контролировать стоимость, качество и надёжность AI-фич?"
    ],
    sections: [
      { name: "AI adoption and value realization", format: "Case study + anti-hype panel" },
      { name: "RAG and retrieval AI", format: "Deep technical case" },
      { name: "AI agents and multi-agent systems", format: "Practical case + debate" },
      { name: "AI quality and safety", format: "Workshop / checklist session" },
      { name: "AI in engineering workflow", format: "Panel + working practices" }
    ],
    speakerProfile: "AI Lead, Applied ML Lead, Product/Engineering leader, показывающие production-grade внедрение вместо хайпового витринного нарратива.",
    accentColor: "#8ea66b"
  }
];

// ===== RENDER TRACK DETAIL =====
function renderTrackDetail(trackId) {
  const track = tracks.find(t => t.id === trackId);
  if (!track) return;

  const detail = document.getElementById('trackDetail');
  detail.innerHTML = `
    <div class="track-role-badge">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      ${track.role}
    </div>
    <h3 class="track-detail-title">${track.title}</h3>
    <p class="track-detail-summary">${track.summary}</p>
    <div class="score-badge" style="background: linear-gradient(135deg, ${track.accentColor}33, ${track.accentColor}18); border: 1px solid ${track.accentColor}44;">
      <div class="score-label">Priority Score</div>
      <div class="score-value" style="color: ${track.accentColor}">${track.score}</div>
    </div>
    <div class="track-two-col">
      <div>
        <div class="track-sub-label">Какие вопросы должен закрывать трек</div>
        <ul class="track-questions">
          ${track.questions.map(q => `<li>${q}</li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="track-sub-label">Секции и форматы</div>
        <ul class="track-sections">
          ${track.sections.map(s => `
            <li>
              <div class="section-name">${s.name}</div>
              <div class="section-format">${s.format}</div>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
    <div class="track-speaker-profile">
      <strong style="color: rgba(255,255,255,0.85); font-size: 12px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.15em;">Профиль спикера</strong><br/>
      <span style="margin-top: 6px; display: block;">${track.speakerProfile}</span>
    </div>
  `;
}

// ===== TRACK BUTTONS =====
function initTracks() {
  const buttons = document.querySelectorAll('.track-btn');
  renderTrackDetail('economics');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTrackDetail(btn.dataset.track);
    });
  });
}

// ===== BURGER MENU =====
function initBurger() {
  const btn = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ===== ACTIVE NAV =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          link.style.background = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'rgba(255,255,255,0.95)';
            link.style.background = 'rgba(255,255,255,0.1)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initTracks();
  initBurger();
  initAnimations();
  initActiveNav();
});
