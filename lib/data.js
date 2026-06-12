// Single source of content, sourced from CV_Kayta.md.
// Skill proficiency values are authored estimates for the scroll-fill meter.

export const profile = {
  name: "Kayta Rechia Mazaya",
  wordmark: "KAYTA.EXE",
  location: "Bandung, Jawa Barat, Indonesia",
  email: "kaytarechiam@gmail.com",
  phone: "+62 895-3210-41947",
  github: "https://github.com/kaytarechiam",
  githubHandle: "github.com/kaytarechiam",
  roles: [
    "IST Student",
    "UI/UX Designer",
    "IoT Enthusiast",
    "Event Organizer",
    "Co-founder @ Questify",
  ],
  bio: "Undergraduate Information Systems & Technology student at Institut Teknologi Bandung with a strong interest in technology, creative media, and organizational leadership. I work across code, IoT hardware, and UI/UX design, with a proven track record leading divisions and shaping curricula in campus organizations.",
  bioShort:
    "Building across code, IoT, and design. Leading people, shipping ideas, and winning the occasional medal along the way.",
};

export const stats = [
  { value: "3.60", label: "GPA / 4.00", note: "ITB" },
  { value: "7", label: "Organizations", note: "led & served" },
  { value: "8", label: "Projects", note: "shipped" },
  { value: "4", label: "Awards", note: "national & regional" },
];

export const education = [
  {
    school: "Institut Teknologi Bandung (ITB)",
    place: "Bandung",
    degree: "Bachelor of Engineering, Information Systems & Technology",
    period: "Expected Oct 2028",
    gpa: "GPA 3.60 / 4.00",
    points: [
      "Coursework: Database Systems, Enterprise Information Systems, Programming, Algorithms & Data Structures, EDA, UX Research, System Integration.",
    ],
  },
  {
    school: "SMAN 8 Pekanbaru",
    place: "Pekanbaru",
    degree: "Major in Science",
    period: "Jul 2021 - May 2024",
    gpa: "GPA 91.10 / 100",
    points: [
      "Top 15 academic standing among 330 students.",
      "Member of CIBI Biology Club; Treasurer of PMR (Red Cross Youth).",
    ],
  },
];

export const experience = [
  {
    org: "Kaderisasi Awal Terpusat (KAT) ITB 2026",
    role: "Staff of Material & Method (Mamet), STEI-K Faction",
    period: "Apr 2026 - Present",
    place: "Bandung",
    current: true,
    points: [
      "Represented the STEI-K faction to evaluate and structure the centralized orientation grand design.",
      "Applied systems thinking to keep the orientation curriculum relevant for incoming faculty students.",
    ],
  },
  {
    org: "ArkavX - Arkavidia 10.0",
    role: "Staff of ArkavX",
    period: "Oct 2025 - Mar 2026",
    place: "Bandung",
    points: [
      "Secured corporate partnerships and managed exhibition opportunities for tech companies including GDP Labs, Algobash, and FishLog.",
      "Facilitated professional networking between industry leaders and ITB students during the peak technology festival.",
    ],
  },
  {
    org: "ITB Journey to Riau (ITBJTR) 2026",
    role: "Deputy Head of Material & Method Division",
    period: "Dec 2025 - Feb 2026",
    place: "Riau & Kepulauan Riau",
    points: [
      "Co-designed the event curriculum and interactive sessions for the Riau roadshow.",
      "Supervised staff preparing materials that introduce ITB culture to high school students.",
    ],
  },
  {
    org: "STEI-K Regional Orientation 2025",
    role: "Staff of Material & Method Division",
    period: "Oct 2025 - Dec 2025",
    place: "Bandung",
    points: [
      "Explored core product management principles through collaborative learning and community projects.",
      "Built a foundation in user-centric thinking, problem-solving, and cross-functional communication.",
    ],
  },
  {
    org: "OHU UKMR ITB 2025",
    role: "Head of Publication & Documentation",
    period: "Aug 2025 - Sep 2025",
    place: "Bandung",
    points: [
      "Led a team across the full cycle of event documentation and visual publication for the Open House Unit.",
      "Directed creative assets and managed social media timelines to maximize event exposure.",
    ],
  },
  {
    org: "OHKM OSKM ITB 2025",
    role: "Staff of Concert Division (PIC)",
    period: "Aug 2025 - Sep 2025",
    place: "Bandung",
    points: [
      "Served as PIC overseeing logistical aspects of the concert event.",
      "Coordinated performers and technical crews for a smooth event rundown.",
    ],
  },
  {
    org: "ITB Journey to Riau (ITBJTR) 2025",
    role: "Staff of Publication & Documentation",
    period: "Dec 2024 - Mar 2025",
    place: "Riau & Kepulauan Riau",
    points: [
      "Executed documentation tasks during the roadshow event in Riau.",
      "Created visual content for social media and event reporting.",
    ],
  },
];

export const projects = [
  {
    id: "dash",
    title: "DASH",
    subtitle: "Decentralized Ride-Hailing Platform",
    role: "UI/UX Designer",
    period: "Current",
    current: true,
    tags: ["UI/UX", "Design System", "Web3"],
    image: "/images/project-dash.png",
    summary:
      "Web2-like UX for a decentralized ride-hailing platform, abstracting away blockchain complexity.",
    points: [
      "Designed the interface abstracting blockchain complexities for a seamless, Web2-like experience.",
      "Built a high-fidelity design system with a Minimalist Noir aesthetic and Emerald Green accents.",
      "Mapped user journeys for off-chain ride matching and on-chain settlement using stablecoin payments (IDRX).",
    ],
  },
  {
    id: "questify",
    title: "Questify",
    subtitle: "Gamified Career Readiness Platform",
    role: "Developer / Co-creator",
    period: "Current",
    current: true,
    tags: ["Product", "AI", "Gamification"],
    image: "/images/project-questify.png",
    summary:
      "An employability engine and gamified learning platform helping non-IT professionals move into tech.",
    points: [
      "Designed an employability engine and gamified learning platform for career transitions into tech.",
      "Built core features: an AI manager, quest-based learning, and portfolio generation.",
      "Strategized a fast-tracked MVP launch.",
    ],
  },
  {
    id: "psytrack",
    title: "PsyTrack",
    subtitle: "Proactive AI Psychiatry System",
    role: "Hardware & Systems Researcher",
    period: "Mar 2026",
    current: true,
    tags: ["IoT", "Edge AI", "Healthcare"],
    image: "/images/project-psytrack.png",
    summary:
      "A proactive AI-enabled hardware system for outpatient psychiatry that detects early symptom destabilization.",
    points: [
      "Developed a proactive AI-enabled hardware system for outpatient psychiatry.",
      "Evaluated scalable IoT and edge-AI architectures, planning the move from ESP32 prototypes to commercial SoC (Qualcomm QCC series).",
    ],
  },
  {
    id: "order-served",
    title: "Order Served",
    subtitle: "Co-op Cooking Simulation Game",
    role: "Programmer & Asset Designer",
    period: "Dec 2025",
    tags: ["Java", "OOP", "Pixel Art"],
    image: "/images/project-ordserved.png",
    summary:
      "An Overcooked-inspired collaborative cooking game built in Java, with original pixel-art assets.",
    points: [
      "Developed a collaborative cooking simulation game (inspired by Overcooked) in Java for an OOP course.",
      "Designed original pixel-art assets for characters and environments.",
      "Implemented core game mechanics and used Git for version control.",
    ],
  },
  {
    id: "moviedb",
    title: "Movie Streaming DB",
    subtitle: "Relational Database System",
    role: "Database Engineer",
    period: "Nov 2025",
    tags: ["SQL", "ERD", "DDL/DML"],
    image: "/images/project-moviedb.png",
    summary:
      "A relational database for a movie streaming platform, designed and optimized for efficient retrieval.",
    points: [
      "Designed and implemented a relational database for a movie streaming platform in SQL.",
      "Created ERDs and performed DDL/DML operations on large datasets.",
      "Optimized queries for efficient data retrieval and reporting.",
    ],
  },
  {
    id: "ampibi",
    title: "AMPIBI",
    subtitle: "IoT Waste Monitoring & Sorting",
    role: "Researcher & Developer",
    period: "Aug 2025",
    award: "2nd Place, SRE Fest 2025",
    tags: ["IoT", "Solar", "Cloud"],
    image: "/images/project-ampibi.png",
    summary:
      "A solar-powered IoT device for automated waste sorting and monitoring, with real-time cloud tracking.",
    points: [
      "Developed a solar-powered IoT device for automated waste sorting and monitoring.",
      "Integrated a cloud app for real-time data tracking to promote environmental conservation.",
      "Awarded 2nd Place at SRE Fest 2025.",
    ],
  },
  {
    id: "solar",
    title: "Solar Street Lighting",
    subtitle: "IoT-Powered, Energy-Efficient",
    role: "Engineering Student (Final Project)",
    period: "May 2025",
    tags: ["IoT", "Solar", "Sustainability"],
    image: "/images/project-solar.png",
    summary:
      "An energy-efficient street lighting solution using solar power and IoT control with remote monitoring.",
    points: [
      "Designed energy-efficient street lighting using solar power and IoT control for the Intro to Engineering & Design course.",
      "Focused on sustainability, energy saving, and remote monitoring.",
    ],
  },
  {
    id: "agriculture",
    title: "Smart Agriculture",
    subtitle: "IoT Automated Watering System",
    role: "Lead Researcher",
    period: "Oct 2023",
    award: "1st Place, LPIR MIPA EXPO XVII",
    tags: ["IoT", "Arduino", "Blynk"],
    image: null,
    icon: "sprout",
    summary:
      "A solar-powered, remote-controlled watering system using soil moisture sensors and Blynk.",
    points: [
      "Built a remote-controlled watering system using soil moisture sensors and Blynk app integration.",
      "Powered by solar energy for an eco-friendly automated farming solution.",
      "Awarded 1st Place at LPIR MIPA EXPO XVII.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Programming & Engineering",
    level: 85,
    items: ["Java (OOP)", "Python", "SQL", "C / C++", "ERD", "DDL/DML", "Relational DB Design", "Git"],
  },
  {
    title: "IoT & Hardware",
    level: 80,
    items: ["Arduino", "ESP32", "Blynk", "Soil Moisture Sensors", "Solar Integration", "Cloud IoT", "Edge AI", "Qualcomm QCC"],
  },
  {
    title: "Design & Creative",
    level: 90,
    items: ["Figma", "High-Fidelity Prototyping", "Design Systems", "Graphic Design", "Pixel Art", "Social Media Content"],
  },
  {
    title: "Leadership & Coordination",
    level: 88,
    items: ["Event Management", "Division Leadership", "Curriculum Development", "Cross-functional Coordination", "Corporate Partnership", "Public Speaking"],
  },
];

export const techBadges = [
  "Java", "Python", "SQL", "C/C++", "Git", "Figma",
  "Arduino", "ESP32", "Blynk", "Cloud IoT", "Edge AI", "Pixel Art",
];

export const languages = [
  { name: "Bahasa Indonesia", level: "Native" },
  { name: "English", level: "Proficient" },
  { name: "Japanese", level: "Basic - Certified" },
];

export const awards = [
  {
    medal: "silver",
    title: "2nd Place, National Scientific Writing Competition",
    org: "SRE Fest, Telkom University, Purwokerto",
    date: "Aug 2025",
  },
  {
    medal: "gold",
    title: "1st Place, Youth Scientific Research Competition (LPIR)",
    org: "FMIPA Universitas Riau",
    date: "Oct 2023",
  },
  {
    medal: "rank",
    title: "5th Rank in Biology, National Science Olympiad (OSN-K)",
    org: "Pekanbaru",
    date: "Apr 2023",
  },
  {
    medal: "gold",
    title: "Gold Medal in Biology",
    org: "Indonesian Youth Science Competition (IYSC)",
    date: "Oct 2022",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];
