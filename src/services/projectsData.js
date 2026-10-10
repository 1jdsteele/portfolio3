export const projects = [
  // 3. Master's Thesis / Fairness Research
  {
    id: "algorithmic-fairness-research",
    name: "Algorithmic Fairness in AI",
    context: "Graduate Research · Cal State LA",
    shortDescription:
      "AI tools are a factor used in justice systems to determine people's fate. My Master's thesis focuses on evaluating their fairness in a Machine Learning model.",
    techStack: [
      "Python",
      "Machine Learning",
      "Algorithmic Fairness",
      "COMPAS",
      "Data Analysis",
    ],
    year: 2026,
    highlight:
      "Preliminary experiments suggest that combining fairness interventions can improve fairness beyond applying individual techniques alone.",
    links: [
      {
        label: "Code",
        href: "https://github.com/1jdsteele/farayola-reproduction",
      },
    ],
  },
  // 7. AppFolio Payment Feature
  {
    id: "appfolio-payment-qa",
    name: "New Payment Method Launch",
    context: "Professional Internship · AppFolio",
    shortDescription:
      "Tested a new payment method for AppFolio's SaaS platform, identifying defects and assessing release risks. Collaborated with engineering, product, and design teams to support its launch.",
    techStack: [
      "Software QA",
      "Exploratory Testing",
      "Agile",
      "Git",
      "Defect Tracking",
    ],
    year: 2023,
    highlight:
      "Helped support the launch of a new payment method that opened an additional revenue stream, gaining firsthand experience with software quality in a production SaaS environment.",
    links: [],
  },
  {
    id: "snap-study",
    name: "Snap Study",
    context: "",
    shortDescription:
      "Snapchat feaature prototype. React Native + Supabase mobile app with real-time chat, pomodoro timer, and incrementing daily streaks.",
    role: "Lead Engineer, Product Design",
    techStack: ["React Native", "PostgreSQL", "Supabase"],
    year: 2025,
    highlight: "Designed prototype to simulate each day in one minute.",
    links: [
      { label: "Code", href: "https://github.com/1jdsteele/SnapStudyRooms" },
    ],
  },
  // 1. Recombee Data Ingestion
  {
    id: "recombee-data-ingestion",
    name: "API Data Ingestion DAGs",
    context: "Professional Work · VS Media",
    shortDescription:
      "Developed production Apache Airflow pipelines to extract millions of records from a rate limited API into object storage and load them into a columnar analytical database on a daily basis. Implemented idempotent loading, staging validation, deduplication, and reliable data publication.",
    techStack: ["Python", "Apache Airflow", "ClickHouse", "SQL"],
    year: 2026,
    highlight:
      "Built ingestion workflows that handle large datasets, API rate limits, and repeatable data loading while preserving data integrity.",
    links: [],
  },
  // 2. Change Data Capture
  {
    id: "change-data-capture",
    name: "Change Data Capture Engineering",
    context: "Professional Work · VS Media",
    shortDescription:
      "Investigated data synchronization requirements and evaluated CDC architectures for propagating database changes. Developed a Python ingestion sink and optimized batch processing to improve throughput.",
    techStack: [
      "Python",
      "ClickHouse",
      "Docker",
      "Change Data Capture",
      "Event Streaming",
      "Batch Processing",
    ],
    year: 2026,
    highlight:
      "Improved Python sink throughput from approximately 4.4 to 1,175 rows per second in prototype testing, processing 1.83 million records in under 26 minutes.",
    links: [],
  },
  {
    id: "weather-analytics-pipeline",
    name: "Weather Analytics Pipeline",
    context: "Personal Project",
    shortDescription:
      "Dockerized ELT pipeline built using Apache Airflow to ingest weather data from Open-Meteo, transform it into analytical tables in ClickHouse, and visualize results in Metabase.",
    role: "Solo Project",
    techStack: ["Apache Airflow", "ClickHouse", "Metabase", "Python", "Docker"],
    year: 2026,
    highlight:
      "I learned a lot about how to deal with hiccups in raw data ingestion.",
    links: [
      {
        label: "Code",
        href: "https://github.com/1jdsteele/weather-pipeline/",
      },
    ],
  },
  {
    id: "competitive-pokemon-catalog",
    name: "Competitive Pokemon Catalog",
    context: "",
    shortDescription:
      "Classic web Javascript, HTML, CSS project. Reads an internal JSON of hand curated Pokemon most important to the current competitive game.",
    role: "Solo Project",
    techStack: ["JavaScript", "HTML", "CSS"],
    year: 2025,
    highlight:
      "I love that AI can help me with styling - I always feel like I struggle with that.",
    links: [
      {
        label: "Live",
        href: "https://1jdsteele.github.io/steele_snapCatalog/",
      },
      {
        label: "Code",
        href: "https://github.com/1jdsteele/steele_snapCatalog",
      },
    ],
  },
  {
    id: "innventory",
    name: "Innventory",
    context: "",
    shortDescription:
      "Hotel inventory management app with Supabase auth, low-stock email alerts sent by a third-party integration, and responsive React UI.",
    role: "Lead Engineer",
    techStack: [
      "React",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Resend",
      "MaterialUI",
    ],
    year: 2025,
    highlight: "End-to-end CRUD, RBAC, and email alerts in production.",
    links: [
      // { label: "Live", href: "https://my-innventory-url.vercel.app" },
      { label: "Code", href: "https://github.com/1jdsteele/innventory" },
    ],
  },
  {
    id: "portfolio3",
    name: "Portfolio 3",
    context: "",
    shortDescription:
      "You're looking at it! Just something I threw together in prep for applying to internships summer '26.",
    role: "Solo Project",
    techStack: ["React", "Material UI"],
    year: 2025,
    highlight:
      "I love that AI can help me with styling - I always feel like I struggle with that.",
    links: [{ label: "Code", href: "https://github.com/1jdsteele/portfolio3" }],
  },
  // SKELETON FOR FUTURE USE
  // {
  //   id: "",
  //   name: "new",
  //   context: "",
  //   shortDescription: "",
  //   techStack: [""],
  //   year: 2026,
  //   highlight: "",
  //   links: [
  //     // { label: "Live", href: "" },
  //     { label: "", href: "" },
  //   ],
  // },

  // 4. Snap AI Chatbot
  {
    id: "snap-ai-chatbot",
    name: "AI Chatbot & Fantasy RPG",
    context: "Snap Engineering Academy",
    shortDescription:
      "Built a React Native chatbot app featuring rule-based trivia and an LLM-powered fantasy RPG, with interactive storytelling, answer validation, and scoring.",
    techStack: ["React Native", "JavaScript", "Expo", "OpenAI API", "LLM"],
    year: 2025,
    highlight:
      "Combined traditional rule-based game logic with generative AI to create different interactive experiences within a single mobile application.",
    links: [
      {
        label: "Code",
        href: "https://github.com/Snap-Engineering-Academy-2025/snapchatbots-jakesteele/tree/main",
      },
    ],
  },

  // 5. Airflow DAG Factory Modernization
  {
    id: "airflow-dag-factory",
    name: "Legacy DAG Factory Modernization",
    context: "Professional Work · VS Media",
    shortDescription:
      "Refactored a configuration driven Apache Airflow framework for generating and managing ETL pipelines. Improved dynamic DAG registration, configuration validation, connection handling.",
    techStack: ["Python", "Apache Airflow", "ClickHouse", "Docker"],
    year: 2026,
    highlight:
      "Improved the maintainability of a shared ETL framework by separating configuration validation from runtime execution and making pipeline registration more robust.",
    links: [],
  },

  // 6. Twill the Messenger
  {
    id: "twill-video-gallery",
    name: "Twill the Messenger Video Gallery",
    context: "Freelance Client Project",
    shortDescription:
      "Shopify video-gallery and QR-linked stories pages developed using Liquid and JavaScript. Refactored existing pages and helped the client maintain them.",
    techStack: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS", "SCSS", "QR"],
    year: 2022,
    highlight:
      "Learned Shopify's Liquid templating language to deliver custom functionality and reusable components for a real client.",
    links: [
      {
        label: "Live Video Gallery",
        href: "https://www.twillthemessenger.com/pages/highlights",
      },
      {
        label: "Live Stories Page",
        href: "https://www.twillthemessenger.com/blogs/woven-scripts",
      },
    ],
  },

  {
    id: "dolphins-swim-academy",
    name: "Dolphins Swim Academy",
    context: "",
    shortDescription:
      "Spring Boot/JTE app for managing swim classes, sessions, and student enrollment.",
    role: "Backend & architecture",
    techStack: ["Spring Boot", "JTE", "MySQL", "JPA", "Bootstrap"],
    year: 2025,
    highlight: "REST API + server-rendered UI with proper data modeling.",
    links: [
      {
        label: "Code",
        href: "https://github.com/1jdsteele/dolphins-swim-academy",
      },
    ],
  },
];

// MORE PROJECTS
// twill the messenger stories landing page

//FUTURE LAYOUT PLANS
// 1 toggle see all/ see top
// 2 top for each size (5?, 4, 3)
