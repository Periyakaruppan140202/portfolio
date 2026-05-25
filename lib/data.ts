export const siteConfig = {
  name: "Periyakaruppan Nagappan",
  title: "Software Engineer Portfolio",
  description: "Building Secure, Scalable and Intelligent Software Systems",
  url: "https://periyakaruppan.dev",
}

export const personalInfo = {
  name: "Periyakaruppan Nagappan",
  title: "Member Technical Staff",
  tagline: "Building Secure, Scalable and Intelligent Software Systems.",
  subtitle: "Member Technical Staff @ Zoho | Full Stack Developer",
  email: "periyakaruppannagappan2020@gmail.com",
  workEmail: "periyakaruppan.nn@zohocorp.com",
  phone: "+91 8939088759",
  location: "Chennai, India",
  avatar: "/avatar.png",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Periyakaruppan140202",
    linkedin: "https://linkedin.com/in/periyakaruppannagappan",
    youtube: "https://www.youtube.com/@periyakaruppannagappan",
    twitter: "https://x.com/Ram_14_02",
  }
}

export const technologies = [
  "Java", "React", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Docker", "Machine Learning", "Spring"
]

export const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Major Projects", value: 5, suffix: "+" },
  { label: "Research Publication", value: 1, suffix: "" },
  { label: "Academic Rank", value: 1, suffix: "st" },
]

export const experiences = [
  {
    id: 1,
    role: "Member Technical Staff",
    company: "Zoho - Vulnerability Manager Plus",
    period: "Jun 2023 - Present",
    description: "Collaborated with Endpoint Framework team developing security features, optimizing database performance, and implementing secure coding practices for enterprise vulnerability management.",
    achievements: [
      { metric: "+15%", label: "Revenue Impact" },
      { metric: "86.3%", label: "Query Optimization" },
      { metric: "99%", label: "Code Stability" },
      { metric: "96%", label: "Setup Time Reduced" },
    ],
    technologies: ["Java", "Groovy", "PostgreSQL", "MSSQL", "Apache JMeter", "REST APIs"],
    highlights: [
      "Developed Dynamic Custom Group support for Compliance scans, enabling customers to scan specific agents based on criteria instead of static groups",
      "Implemented combination roles to eliminate runtime role population, reducing security incidents by 10%",
      "Optimized view queries using ANALYZE and EXPLAIN, improving loading time from 17.6s to 2.41s",
      "Replaced unsafe SQL query string execution with data objects using Mickey framework, mitigating SQL injection risks",
      "Developed data population tool reducing testing environment setup time by 96%",
      "Unified ME User tracking for on-premise and cloud environments, enhancing product analytics by 20%",
    ],
  },
  {
    id: 2,
    role: "Project Trainee",
    company: "Zoho - Unified Endpoint Management and Security (UEMS)",
    period: "Jan 2023 - May 2023",
    description: "Developed open APIs for patch and vulnerability modules, completed product training, and participated in security challenges.",
    achievements: [
      { metric: "15%", label: "Tickets Reduced" },
      { metric: "Top 10", label: "HackOp CTF" },
    ],
    technologies: ["Java", "REST API", "Servlets", "Jersey", "Mickey Framework"],
    highlights: [
      "Developed open APIs for patch and vulnerability module (decline, patch, vulnerability scan) enabling third-party integrations",
      "Completed DesktopCentral product Onboarding and Mickey Internal Framework training",
      "Finished OWASP WebGoat training, placed top 10 out of 225 teams in internal HackOp CTF events",
    ],
  },
  {
    id: 3,
    role: "Summer Intern",
    company: "Zoho Corporation",
    period: "Jul 2022",
    description: "Selected through On-Campus Recruitment. Mastered advanced Java concepts and implemented secure database interactions.",
    achievements: [
      { metric: "JDBC", label: "Implementation" },
    ],
    technologies: ["Java", "JDBC", "Design Patterns", "Collections"],
    highlights: [
      "Mastered advanced Java concepts including Collections and design patterns like Singleton and Factory",
      "Implemented JDBC with PreparedStatement for secure database interactions preventing SQL injection",
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: "Early Detection of Chronic Kidney Disease (CKD)",
    category: "AI / ML",
    description: "Capstone Design Project with IBM - Machine learning system for early detection of chronic kidney disease using Random Forest Classifier.",
    problem: "Delayed CKD diagnosis caused by time-consuming and costly traditional methods leads to missed early treatment opportunities.",
    solution: "Developed a machine learning-based prediction model using Random Forest Classifier, integrated with Flask and hosted on IBM Cloud for faster and accurate early detection.",
    impact: "Achieved 99.16% accuracy by optimizing data preprocessing techniques including handling missing values and feature selection.",
    technologies: ["IBM Cloud", "IBM Watson Studio", "Scikit-learn", "Random Forest", "Python", "Flask", "MySQL", "JIRA"],
    github: "https://github.com/Periyakaruppan140202/IBM-CKD",
    images: ["/projects/IBM-CKD/ibm-ckd-form.png", "/projects/IBM-CKD/ibm-ckd-result.png"],
    featured: true,
  },
  {
    id: 2,
    title: "Alumni Tracking System",
    category: "Full Stack",
    description: "MERN Stack application enabling alumni registration, verification, and peer communication for colleges.",
    problem: "Colleges lack efficient systems for alumni registration, verification, and maintaining connections with graduates.",
    solution: "Built a web-based system using React.js for alumni search and registration, with MongoDB for flexible data storage and WebSockets for real-time communication.",
    impact: "Enabled secure alumni management with efficient search capabilities, event postings, and peer communication features.",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "WebSockets"],
    github: "https://github.com/Periyakaruppan140202/alumni-tracker",
    images: ["/projects/alumni-tracker/alumni-tracker-dashboard.png", "/projects/alumni-tracker/alumni-tracker-records.png"],
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Buyer and Seller Application",
    category: "Full Stack",
    description: "Full-stack e-commerce platform with Google authentication, Stripe payments, and server-side rendering.",
    problem: "Need for a responsive, secure e-commerce platform with modern authentication and payment processing.",
    solution: "Built fully responsive application using Next.js with SSR for SEO, NextAuth for Google authentication, Stripe for payments with webhooks, and Redux for state management.",
    impact: "Achieved seamless cross-device experience with improved SEO, secure authentication, and reliable real-time order management.",
    technologies: ["Next.js", "React.js", "Redux", "Stripe", "Webhooks", "Cloud Firestore", "NextAuth", "Tailwind CSS"],
    github: "https://github.com/Periyakaruppan140202/shopify",
    images: ["/projects/shopify/shopify.png", "/projects/shopify/shopify-cart.png"],
    featured: true,
  },
  {
    id: 4,
    title: "Smart Data Visualizer - Anubhuti NGO",
    category: "Full Stack",
    description: "Data visualization platform for managing underprivileged student records with interactive charts and Excel data migration.",
    problem: "NGO teachers struggled with managing student data in Excel sheets, lacking visual insights and easy data entry methods.",
    solution: "Developed a solution allowing direct form uploads and Excel data transfer, with interactive Chart.js visualizations for actionable student insights.",
    impact: "Provided teachers in rural areas with accessible, responsive platform for data-driven decision making across all devices.",
    technologies: ["Bootstrap", "Chart.js", "MongoDB", "Flask", "Figma"],
    github: "https://github.com/Periyakaruppan140202/cfg-hackathon",
    images: ["/projects/cfg-hackathon/cfg-hackathon-dashboard.png", "/projects/cfg-hackathon/cfg-hackathon.png"],
    featured: false,
  },
]

export const publication = {
  title: "Design and Development of Automatic Call Handling (ACH) Framework",
  abstract: "This research presents a mobile application prototype that detects incoming calls, determines user speed using real-time GPS tracking, and intelligently blocks or allows calls based on emergency priority to minimize driver distraction.",
  journal: "Springer Nature • Conference Paper",
  year: "NGNDAI 2025",
  status: "Published",
  methodology: [
    "Real-time GPS tracking for speed detection",
    "Emergency priority classification algorithm",
    "Incoming call interception and handling",
    "Performance optimization across device tiers",
  ],
  findings: [
    "98.6% model accuracy in call classification",
    "389.9ms response time for 50th percentile devices",
    "178ms response time for 25th percentile devices",
    "Efficient call handling with minimal driver distraction",
  ],
  link: "https://link.springer.com/chapter/10.1007/978-3-032-15401-9_22",
}

export const skills = {
  "Programming Languages": ["Java", "C", "C++", "Python", "JavaScript ES6"],
  "Web Development": ["React.js", "Node.js", "Express.js", "Next.js", "Bootstrap", "Tailwind CSS"],
  "Databases": ["PostgreSQL", "MSSQL", "MySQL", "MongoDB"],
  "Cloud & DevOps": ["GCP", "AWS", "Docker", "Firebase"],
  "Technical Tools": ["Informatica", "Git", "Jupyter Notebook", "MuleSoft", "Blender", "JUnit", "Apache JMeter", "Selenium", "Wireshark"],
  "Libraries & Frameworks": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  "Methodologies": ["Agile", "Kanban", "OWASP Security"],
  "Soft Skills": ["Problem-solving", "Organizational", "Teamwork", "Interpersonal Communication"],
}

export const certifications = [
  {
    id: 1,
    name: "Java, Python, C, C++ and RDBMS PostgreSQL Training",
    organization: "IIT Bombay",
    platform: "Spoken Tutorial Project",
    year: 2022,
    credential: "https://drive.google.com/drive/folders/18Gsv-gIlSrdvKcscbYFM8U-uIZeZjhgt?usp=sharing",
  },
  {
    id: 2,
    name: "HTML, CSS, and Javascript for Web Developers",
    organization: "Johns Hopkins University",
    platform: "Coursera",
    year: 2022,
    credential: "https://www.coursera.org/account/accomplishments/certificate/QMCC24UYMMFJ",
  },
  {
    id: 3,
    name: "SQL and Relational Databases 101",
    organization: "IBM",
    platform: "Cognitive Class",
    year: 2022,
    credential: "https://courses.cognitiveclass.ai/certificates/8f6575b567ba48d7bffbb15abd399790",
  },
  {
    id: 4,
    name: "Google Cloud Skill Badges & Quests",
    organization: "Google",
    platform: "Google Cloud",
    year: 2022,
    credential: "https://www.cloudskillsboost.google/public_profiles/35e4b019-4f8a-447e-9923-3d63ddea7b74",
  },
  {
    id: 5,
    name: "Programming for Everybody (Getting Started with Python)",
    organization: "University of Michigan",
    platform: "Coursera",
    year: 2021,
    credential: "https://www.coursera.org/account/accomplishments/certificate/ZDVQRXMWEC2Q",
  },
  {
    id: 6,
    name: "Getting Started with AI on Jetson Nano",
    organization: "NVIDIA",
    platform: "Deep Learning Institute",
    year: 2022,
    credential: "https://courses.nvidia.com/certificates/d98cc146afeb47a59f9b3e5c251c7c3b",
  },
]

export const awards = [
  {
    id: 1,
    title: "Academic Topper Award - University Rank 1",
    organization: "Thiagarajar College of Engineering",
    year: 2023,
    description: "Secured 1st rank out of 150 students in Bachelor of Engineering in Computer Science and Engineering.",
  },
  {
    id: 2,
    title: "Code For Good 2022 - First Place",
    organization: "JP Morgan Chase & Co",
    year: 2022,
    description: "Won first place out of 100 highly competitive teams selected from numerous participants across India for solving NGO problem statement.",
  },
  {
    id: 3,
    title: "Best Project Demo Stall - React.js",
    organization: "GLUGOT FS'tival 2021",
    year: 2021,
    description: "Awarded for providing an MVP web-based solution on Alumni Tracking at the college technical festival.",
  },
  {
    id: 4,
    title: "Garrett STEM Merit Scholarship",
    organization: "Garrett Foundation",
    year: "2019-2023",
    description: "Awarded prestigious scholarship for academic excellence, selected as 1 of only 15 students from the entire college.",
  },
]

export const education = {
  degree: "Bachelor of Engineering",
  field: "Computer Science and Engineering",
  institution: "Thiagarajar College of Engineering",
  location: "Madurai, India",
  period: "Jun 2019 - Mar 2023",
  cgpa: "9.81/10",
  rank: "1 / 150",
  coursework: [
    "Data Structures",
    "Database Management Systems",
    "Object Oriented Programming",
    "Web Programming",
    "AI & Machine Learning",
    "Cloud Computing",
    "Operating Systems",
    "Cyber Security and Cryptography",
  ],
  achievements: [
    "Academic Topper",
    "Garrett STEM Merit Scholar",
    "Coder's Club Coordinator",
  ],
}

export const leadership = [
  {
    id: 1,
    role: "FS'tival Organizer and Mentor",
    organization: "GNU/Linux User Group of TCE (GLUGOT)",
    period: "Nov 2022",
    description: "Organized the Workshop event and mentored teams in building foundational knowledge.",
    impact: "Guided Sophomore team in foundational knowledge and Junior team in completing a project using Tailwind CSS.",
  },
  {
    id: 2,
    role: "Coder's Club Coordinator",
    organization: "Thiagarajar College of Engineering",
    period: "Jun 2021 - Nov 2021",
    description: "Curated and posted weekly coding challenges on HackerRank, reviewed submissions and clarified doubts for students.",
    impact: "Organized 5+ online workshops with alumni on Technologies and Interview experiences for students.",
  },
]

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publication", href: "#publication" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Awards", href: "#awards" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
]
