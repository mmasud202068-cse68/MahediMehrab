import { Award, Education, Experience, Project, SkillDomain, SocialLink, Sponsor } from '../types';

export const PERSONAL_INFO = {
  name: "Md Mehrab Hossain Khan",
  shortName: "Mehrab Khan",
  title: "Robotics Engineer & Tech Innovator",
  subtitle: "CFO at UIU Mariner • MATE ROV WORLD FINALS 2025 Champion (Doc) • UIU CSE Student",
  location: "Jatrabari, Dhaka, Bangladesh",
  institution: "United International University (UIU)",
  degree: "B.Sc in Computer Science & Engineering",
  emails: [
    "mkhan201377@2bscse.uiu.ac.bd",
    "mehrabkhan.mhk@gmail.com"
  ],
  bio: `This is Md Mehrab Hossain Khan from Dhaka, living in Jatrabari with my family. Currently pursuing my Bachelor's degree in Computer Science and Engineering at United International University (UIU).

I am an ambitious tech enthusiast who thrives on transforming innovative ideas into robust real-world systems. My core engineering passion spans robotics, autonomous hardware, drone technology, underwater robotics (ROVs), and emerging technologies. I have proudly contributed to global-stage engineering teams including the UIU Mars Rover Team and UIU Mariner (Bangladesh's premier underwater ROV team), competing and winning top positions internationally.

Beyond engineering, I work as a Communication Apprentice at UIU PRO and Comms, bringing technical storytelling to life through high-end cinematography, DSLR photography, and videography. My biggest hobby is motorcycle touring—venturing across new terrains, learning through travel, and meeting inspiring minds.`,
  shortBio: "Tech enthusiast turning bold ideas into real-world projects. International competitor in Mars Rover & Underwater ROV, CFO at UIU Mariner, documentation champion, and passionate tech storyteller.",
  stats: [
    { label: "Global & National Awards", value: "7+" },
    { label: "World Championships", value: "4" },
    { label: "Engineered Projects", value: "10+" },
    { label: "Asia Ranking (ROV/URC)", value: "#1" }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/md-mehrab-hossain-khan-279263377",
    handle: "md-mehrab-hossain-khan",
    iconName: "linkedin",
    accentColor: "#0a66c2"
  },
  {
    platform: "GitHub",
    url: "https://github.com/MehrabKhanMK",
    handle: "MehrabKhanMK",
    iconName: "github",
    accentColor: "#24292e"
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/share/1FGQYwdjdw/",
    handle: "Mehrab Hossain Khan",
    iconName: "facebook",
    accentColor: "#1877f2"
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/mysterio_de_mk?stkn=dnY5NWQwbzU0ZmVz",
    handle: "@mysterio_de_mk",
    iconName: "instagram",
    accentColor: "#e4405f"
  }
];

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    domain: "Technical Documentation & Leadership",
    icon: "FileText",
    description: "World Championship-winning engineering documentation, technical reports, compliance, and systems architecture blueprints.",
    skills: ["Technical Writing", "Pioneer Systems Compliance", "Budget Management", "Logistics Strategy", "Team Operations", "CFO Oversight"]
  },
  {
    domain: "Robotics, ROV & Hardware",
    icon: "Cpu",
    description: "Multi-terrain planetary rovers, underwater ROV thrusters, buoyancy mechanisms, sensor payloads, and hardware diagnostics.",
    skills: ["Underwater ROV Systems", "Mars Rover Architecture", "SolidWorks 3D Modeling", "Microcontroller Interfacing", "Actuators & Thrusters", "Autonomous Navigation"]
  },
  {
    domain: "Drone & Autonomous Technology",
    icon: "Radio",
    description: "Aerial drone telemetry, flight stabilization algorithms, sensor integration, and intelligent hardware automation.",
    skills: ["Drone Technology", "Telemetry Systems", "Sensors & Actuators", "Circuit Design", "Autonomous Hall Controls", "IoT Protocols"]
  },
  {
    domain: "Software & Database Engineering",
    icon: "Code",
    description: "Robust backend architectures, database-driven enterprise systems, REST APIs, and responsive interactive web applications.",
    skills: ["C / C++", "Java", "Spring Boot", "PostgreSQL", "MySQL", "PHP", "REST APIs", "WebSockets", "Git & GitHub", "Gradle", "XAMPP"]
  },
  {
    domain: "Cinematography & Digital Media",
    icon: "Camera",
    description: "High-definition visual production, DSLR photography, commercial video editing, brand communication, and media management.",
    skills: ["DSLR Photography", "Cinematography", "Video Production", "Premiere & Editing", "UIU PRO Communications", "Media Direction"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "talksmart",
    title: "TalkSmart - AI IELTS Speaking Platform",
    subtitle: "Champion at UIU CSE Project Show Fall 2024",
    category: "Web & Software",
    labOrCourse: "Software Engineering Lab",
    description: "Interactive web platform to speak, prepare, and take full mock tests for IELTS Speaking with instant intelligent score evaluation.",
    fullDescription: "TalkSmart is an innovative educational platform engineered to solve the confidence and scoring barrier for students preparing for the IELTS Speaking test. Users practice cue-card topics and two-way conversations with automated acoustic feedback and real-time rubric assessment. Mehrab spearheaded full system documentation, IEEE requirement specifications, system design models, and software architecture reports.",
    keyContributions: [
      "Led end-to-end technical documentation and IEEE standard software engineering specifications.",
      "Engineered mock speaking test flow with instant rubric-based evaluation criteria.",
      "Secured 1st Place Champion Award at the UIU CSE Project Show Fall 2024."
    ],
    technologies: ["Java", "Spring Boot", "Speech Analysis", "MySQL", "REST APIs", "Tailwind CSS", "JavaScript"],
    image: "/assets/images/talksmart_platform_1789498425103.jpg",
    gallery: [
      "/assets/images/talksmart_platform_1789498425103.jpg",
      "/assets/images/fintech_portal_ui_1789501774706.jpg",
      "/assets/images/iot_exam_system_1789501747552.jpg"
    ],
    specs: [
      { label: "Speech Engine Latency", value: "< 450 ms" },
      { label: "Scoring Alignment", value: "94.2% IELTS Rubric Match" },
      { label: "Architecture Pattern", value: "MVC + RESTful Microservices" },
      { label: "Database Transactions", value: "ACID Compliant MySQL" }
    ],
    challengesSolved: [
      "Acoustic noise filtering in ambient classroom environments",
      "Real-time audio chunk streaming to evaluation pipeline",
      "Comprehensive IEEE standard documentation validation"
    ],
    systemMetrics: [
      { label: "Band Score Accuracy", value: "Band 4.0 - 9.0", detail: "Granular Fluency, Lexical, Grammar & Pronunciation breakdown" },
      { label: "UIU Project Show", value: "1st Place Gold", detail: "Awarded Champion in Fall 2024 CSE Showcase" }
    ],
    badge: "Project Show Champion",
    awardMention: "Champion UIU Fall 2024",
    hasInteractiveDemo: true
  },
  {
    id: "underwater-rov",
    title: "Subsea Underwater ROV (FYDP)",
    subtitle: "Final Year Design Project • Deep Subsea Exploration",
    category: "Robotics & Hardware",
    labOrCourse: "Final Year Design Project (FYDP)",
    description: "Industrial-grade subsea remotely operated vehicle equipped with vectored brushless thrusters, HD optical telemetry, and robotic manipulator arm.",
    fullDescription: "Designed and engineered as a capstone exploration vehicle capable of executing delicate underwater inspections, structural pipeline monitoring, and marine specimen collection under extreme hydrostatic pressure. Integrates custom waterproof enclosures, tethered umbilical power delivery, and low-latency surface telemetry with live multi-angle camera feeds.",
    keyContributions: [
      "Designed structural buoyancy calculations and ballast placement for neutral equilibrium.",
      "Orchestrated logistics and component procurement for high-pressure marine thrusters.",
      "Integrated live multi-angle camera streaming with manipulator servo controls."
    ],
    technologies: ["Underwater Robotics", "SolidWorks", "Brushless Thrusters", "Tether Telemetry", "C++", "Sensors", "Vectored Propulsion"],
    image: "/assets/images/underwater_rov_1789498408884.jpg",
    gallery: [
      "/assets/images/underwater_rov_1789498408884.jpg",
      "/assets/images/rover_robotics_1789498391669.jpg",
      "/assets/images/iot_exam_system_1789501747552.jpg"
    ],
    specs: [
      { label: "Operational Depth", value: "50+ Meters" },
      { label: "Thruster Vectoring", value: "6-DOF Vectored Configuration" },
      { label: "Tether Length", value: "100m Optical/Copper Hybrid" },
      { label: "Manipulator Payload", value: "2.5 kg Underwater Grip" }
    ],
    challengesSolved: [
      "Hydrostatic pressure sealing using custom O-ring acrylic enclosures",
      "Neutral buoyancy trimming in high-salinity and freshwater conditions",
      "Surface umbilical voltage drop mitigation over 100m cable"
    ],
    systemMetrics: [
      { label: "Documentation Score", value: "1st Worldwide", detail: "Highest Technical Documentation score at MATE ROV WORLD FINALS 2025" },
      { label: "Global Ranking", value: "5th in World • 1st in Asia", detail: "Pioneer Division, MATE ROV WORLD FINALS 2025" }
    ],
    badge: "FYDP Flagship",
    awardMention: "MATE ROV Pioneer Pedigree"
  },
  {
    id: "mars-rover-system",
    title: "UIU Mars Rover: Yggdrasil — URC 2024 & ARC World Finalist",
    subtitle: "Qualified for University Rover Challenge 2024 (SAR) • 1st in Asia & 5th in World",
    category: "Robotics & Hardware",
    labOrCourse: "Autonomous Robotics Systems (CAIR • UIU)",
    description: "Planetary rover with rocker-bogie locomotion, 3D-printed flexible honeycomb compliant wheels, 6-DOF robotic arm with sample retrieval gripper claw, and autonomous telemetry under CAIR.",
    fullDescription: "Engineered and deployed for the University Rover Challenge (URC 2024) in Hanksville, Utah, USA and the Anatolian Rover Challenge (ARC). Developed under CAIR (Centre for Artificial Intelligence & Robotics) at United International University. Features high-traction terrain traversal with 3D-printed honeycomb compliant wheels, differential rocker-bogie suspension, 5.8GHz long-range wireless data links, and a precision robotic manipulator arm capable of delicate sample container collection and extreme terrain operations under the Bangladesh national flag. Mehrab contributed decisively to cross-border logistics, operational field trials, and competition equipment durability.",
    keyContributions: [
      "Crucial contributor to the System Acceptance Review (SAR) qualification for University Rover Challenge 2024 (Rover Yggdrasil).",
      "Field-tested the multi-axis robotic arm with custom red 3-finger gripper claw collecting soil specimen canisters on rocky Martian-simulated terrain.",
      "Spearheaded international logistics, equipment durability pipelines, and spare supply chains leading to 5th in the World (1st in Asia) in Utah, USA."
    ],
    technologies: ["Autonomous Robotics", "C++", "Embedded Systems", "Long-Range RF", "SolidWorks", "Planetary Navigation", "ROS", "CAIR UIU"],
    image: "/assets/images/yggdrasil_urc_banner.jpg",
    gallery: [
      "/assets/images/yggdrasil_urc_banner.jpg",
      "/assets/images/uiu_mars_rover_hardware.jpg",
      "/assets/images/rover_robotics_1789498391669.jpg"
    ],
    specs: [
      { label: "Suspension Architecture", value: "Differential Rocker-Bogie Mechanism" },
      { label: "Wheel Engineering", value: "3D-Printed Flexible Honeycomb Compliant Wheels" },
      { label: "Manipulator Dexterity", value: "6-DOF Arm with 3-Finger Red Gripper Claw" },
      { label: "SAR Qualification", value: "Official URC 2024 Finalist (CAIR / UIU)" }
    ],
    challengesSolved: [
      "Extreme desert thermal regulation in Utah heat (over 40°C)",
      "High-bandwidth video streaming across rocky geological canyons",
      "Rapid spare parts logistics and team supply chains across continents",
      "Multi-axis manipulator precision during real-time sample container collection"
    ],
    systemMetrics: [
      { label: "URC 2024 (Utah)", value: "5th in World • 1st in Asia", detail: "Highest ranked Asian rover team at Mars Desert Research Station, Utah" },
      { label: "ARC 2023", value: "3rd in World (Bronze)", detail: "International podium finish in Anatolian Rover Challenge" }
    ],
    badge: "World Top 5 Rover",
    awardMention: "1st in Asia @ URC 2024"
  },
  {
    id: "smart-autonomous-exam-hall",
    title: "Smart Autonomous Exam Hall",
    subtitle: "Microcontroller & Sensor Network Architecture",
    category: "IoT & Systems",
    labOrCourse: "Microcontroller Laboratory",
    description: "Autonomous invigilation environment leveraging microcontrollers, acoustic noise thresholds, ambient automation, and candidate RFID authentication.",
    fullDescription: "Eliminates administrative bottlenecks and malpractice in large examination halls. The system tracks candidate seat occupancy, monitors ambient decibel spikes, automates bell schedules, and alerts invigilators immediately via digital consoles.",
    keyContributions: [
      "Implemented hardware microcontroller firmware for ultrasonic & RFID verification.",
      "Built automatic ambient lighting and air circulation triggers based on occupancy.",
      "Designed telemetry alerts for unexpected sound disturbances during quiet exams."
    ],
    technologies: ["Microcontrollers", "C / C++", "RFID Modules", "Acoustic Sensors", "Embedded C", "Hardware Prototyping"],
    image: "/assets/images/iot_exam_system_1789501747552.jpg",
    gallery: [
      "/assets/images/iot_exam_system_1789501747552.jpg",
      "/assets/images/campus_shuttle_gps_1789501760474.jpg",
      "/assets/images/talksmart_platform_1789498425103.jpg"
    ],
    specs: [
      { label: "Microcontroller Unit", value: "ATmega328P / ESP32" },
      { label: "RFID Frequency", value: "13.56 MHz (Mifare)" },
      { label: "Acoustic Threshold", value: "Adjustable 40dB - 85dB" },
      { label: "Occupancy Ultrasonic Range", value: "2 cm - 400 cm" }
    ],
    challengesSolved: [
      "Debouncing false acoustic triggers caused by accidental paper rustling",
      "Multi-candidate RFID tap collision prevention",
      "Power consumption optimization with low-power sleep cycles"
    ],
    systemMetrics: [
      { label: "Auth Speed", value: "< 0.3 sec / student", detail: "Instant RFID tag scan and seat mapping" },
      { label: "Lab Grade", value: "Top Innovation", detail: "Recognized as exemplar project in Microcontroller Lab" }
    ],
    badge: "Micro Lab Innovation"
  },
  {
    id: "smart-shuttle-system",
    title: "Smart Campus Shuttle System",
    subtitle: "Real-time Vehicle Telemetry & Fleet Management",
    category: "IoT & Systems",
    labOrCourse: "Electronics Laboratory",
    description: "IoT-enabled smart shuttle tracker providing real-time location, passenger occupancy analytics, and automated route alerts for students.",
    fullDescription: "Engineered to alleviate campus transit unpredictability. Leverages GPS receiver units, cellular IoT modems, and smart student ID taps to display live ETA and available seating across campus terminals.",
    keyContributions: [
      "Designed circuit schematics for vehicular power regulation and GPS modules.",
      "Engineered automated seat occupancy counter using beam-break infrared sensors.",
      "Drafted comprehensive electronics laboratory schematic documentation."
    ],
    technologies: ["Electronics Engineering", "IoT", "GPS Modules", "Cellular Telemetry", "Circuit Design", "C++", "Power Electronics"],
    image: "/assets/images/campus_shuttle_gps_1789501760474.jpg",
    gallery: [
      "/assets/images/campus_shuttle_gps_1789501760474.jpg",
      "/assets/images/iot_exam_system_1789501747552.jpg",
      "/assets/images/rover_robotics_1789498391669.jpg"
    ],
    specs: [
      { label: "GPS Accuracy", value: "Within 2.5 meters" },
      { label: "Telemetry Interval", value: "3.0 seconds live sync" },
      { label: "Input Voltage", value: "12V - 24V Automotive Buck" },
      { label: "Cellular Band", value: "4G LTE Cat-M1 / NB-IoT" }
    ],
    challengesSolved: [
      "Automotive voltage spikes and alternator noise isolation",
      "Dead reckoning inside campus basements and underpasses",
      "Real-time bidirectional synchronization with cloud display"
    ],
    systemMetrics: [
      { label: "ETA Accuracy", value: "96.4% precision", detail: "Within 90 seconds of actual arrival" },
      { label: "Electronics Lab", value: "Honors Distinction", detail: "Highest circuit reliability rating in class" }
    ],
    badge: "Electronics Lab"
  },
  {
    id: "empower-her-finance",
    title: "Empower Her Finance",
    subtitle: "Social Financial Platform for Women",
    category: "Web & Software",
    labOrCourse: "Advanced Object-Oriented Programming (AOOP)",
    description: "Social media and financial literacy platform tailored for women to build financial autonomy, manage micro-budgets, and share investment insights.",
    fullDescription: "Engineered using clean object-oriented design principles. Features micro-savings group vaults, interactive expense visualizers, financial mentor matchmaking, and peer discussion forums focused on entrepreneurial women in Bangladesh.",
    keyContributions: [
      "Architected OOP class hierarchies and design patterns in Java / Spring Boot.",
      "Built interactive expense tracking and goal-based savings milestone trackers.",
      "Integrated role-based access control and community discussion threads."
    ],
    technologies: ["Java", "OOP Design Patterns", "Spring Boot", "PostgreSQL", "HTML5/CSS3", "REST APIs"],
    image: "/assets/images/fintech_portal_ui_1789501774706.jpg",
    gallery: [
      "/assets/images/fintech_portal_ui_1789501774706.jpg",
      "/assets/images/talksmart_platform_1789498425103.jpg",
      "/assets/images/campus_shuttle_gps_1789501760474.jpg"
    ],
    specs: [
      { label: "Design Patterns", value: "Factory, Singleton, Observer, DAO" },
      { label: "Security Level", value: "BCrypt Salt Hashing + JWT" },
      { label: "Database", value: "Normalized PostgreSQL 15" },
      { label: "Concurrency", value: "Spring Multi-threaded Async" }
    ],
    challengesSolved: [
      "Atomic transaction rollback in collaborative micro-vaults",
      "Dynamic data visualization with zero external dependencies",
      "Inclusive and culturally tailored UX for non-technical users"
    ],
    systemMetrics: [
      { label: "Architecture", value: "100% Pure OOP", detail: "Solid adherence to SOLID design principles" },
      { label: "Faculty Evaluation", value: "Outstanding Grade", detail: "Selected as AOOP Lab Showcase Feature" }
    ],
    badge: "AOOP Lab Showcase"
  },
  {
    id: "smart-canteen-system",
    title: "Smart Canteen & Meal System",
    subtitle: "High-Concurrency Database Architecture",
    category: "Web & Software",
    labOrCourse: "Database Management Systems (DBMS)",
    description: "Automated dining order routing, real-time kitchen display tokens, digital wallet billing, and relational inventory tracking.",
    fullDescription: "Solved long campus lunch-hour queues with a high-throughput order queue system. Features ACID-compliant transaction processing, table reservation sync, and automated threshold alerts for kitchen raw ingredients.",
    keyContributions: [
      "Designed 3NF normalized relational schema in MySQL / PostgreSQL with indexing.",
      "Built stored procedures and triggers to prevent double-spending and race conditions.",
      "Created clean cashier POS and student mobile order interfaces."
    ],
    technologies: ["PostgreSQL", "MySQL", "PHP", "HTML/CSS", "Database Normalization", "XAMPP"],
    image: "/assets/images/talksmart_platform_1789498425103.jpg",
    gallery: [
      "/assets/images/talksmart_platform_1789498425103.jpg",
      "/assets/images/fintech_portal_ui_1789501774706.jpg",
      "/assets/images/iot_exam_system_1789501747552.jpg"
    ],
    specs: [
      { label: "Schema Normalization", value: "3rd Normal Form (3NF)" },
      { label: "Transaction Isolation", value: "Serializable ACID Locking" },
      { label: "Concurrent Peak Orders", value: "500+ / minute" },
      { label: "Query Execution Time", value: "< 12 ms average" }
    ],
    challengesSolved: [
      "Double booking of meal meal vouchers during peak 1:00 PM rush",
      "Trigger-based automatic stock decrement for raw ingredients",
      "Real-time kitchen order dispatch ticket synchronization"
    ],
    systemMetrics: [
      { label: "Queue Reduction", value: "-78% Wait Time", detail: "Drastically eliminated campus dining bottlenecks" },
      { label: "DBMS Lab", value: "Top Marks", detail: "Comprehensive relational integrity and index strategy" }
    ],
    badge: "DBMS Lab"
  },
  {
    id: "smart-elearning-lms",
    title: "Smart E-Learning Management System",
    subtitle: "Modular Course & Assessment Architecture",
    category: "Web & Software",
    labOrCourse: "Systems Analysis & Design (SAD) Lab",
    description: "Modern modular LMS offering interactive lesson branching, automated grading, peer assessment queues, and teacher analytics dashboards.",
    fullDescription: "A comprehensive SAD project covering requirements elicitation, UML use-case diagrams, sequence diagrams, and a prototype full-stack implementation designed for educational scalability.",
    keyContributions: [
      "Constructed complete UML architectural diagrams and SAD specification dossier.",
      "Developed course content upload pipelines and quiz scoring modules.",
      "Validated system usability with student usability testing cohorts."
    ],
    technologies: ["Systems Analysis", "UML", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    image: "/assets/images/fintech_portal_ui_1789501774706.jpg",
    gallery: [
      "/assets/images/fintech_portal_ui_1789501774706.jpg",
      "/assets/images/talksmart_platform_1789498425103.jpg",
      "/assets/images/campus_shuttle_gps_1789501760474.jpg"
    ],
    specs: [
      { label: "UML Artifacts", value: "Use-Case, Class, Sequence, Activity" },
      { label: "Modular Architecture", value: "Component-based Course Blocks" },
      { label: "Grade Automation", value: "Instant MCQ & Code Execution" },
      { label: "Supported Formats", value: "PDF, Video Stream, Interactive Quiz" }
    ],
    challengesSolved: [
      "Designing complex state machines for assignment grading cycles",
      "Dynamic permission trees between Student, TA, and Course Instructor",
      "Extensive user story mapping and stakeholder interviews"
    ],
    systemMetrics: [
      { label: "SAD Specification", value: "100+ Page Dossier", detail: "End-to-end IEEE-aligned architectural blueprint" },
      { label: "Usability Score", value: "92 / 100 SUS", detail: "High user satisfaction in testing trials" }
    ],
    badge: "SAD Lab"
  }
];

export const AWARDS: Award[] = [
  {
    id: "mate-rov-doc-champ",
    title: "Technical Documentation Champion",
    team: "UIU Mariner",
    event: "MATE ROV WORLD FINALS 2025",
    year: "2025",
    rank: "World Champion (1st in World)",
    category: "Pioneer Category - Subsea Engineering",
    description: "Achieved the #1 highest technical documentation score in the entire world in the Pioneer category at MATE ROV WORLD FINALS 2025, beating top global universities.",
    badgeType: "gold",
    featuredImage: "/assets/images/underwater_rov_1789498408884.jpg"
  },
  {
    id: "mate-rov-world-5th",
    title: "5th in the World & 1st in Asia",
    team: "UIU Mariner",
    event: "MATE ROV WORLD FINALS 2025",
    year: "2025",
    rank: "5th in World • 1st in Asia",
    category: "Global Pioneer Finals",
    description: "Ranked 5th globally and 1st across all Asian university engineering teams at MATE ROV WORLD FINALS 2025 for underwater robotics.",
    badgeType: "gold",
    featuredImage: "/assets/images/underwater_rov_1789498408884.jpg"
  },
  {
    id: "urc-2024-5th",
    title: "5th in the Whole World & 1st in Asia (URC 2024)",
    team: "UIU Mars Rover Team (#UMRT)",
    event: "University Rover Challenge (URC) 2024 • Utah, USA",
    year: "2024",
    rank: "5th in World • 1st in Asia",
    category: "System Acceptance Review (SAR) Finalist • Utah, USA",
    description: "Qualified for URC 2024 with rover 'Yggdrasil' under CAIR & UIU, ranking 5th in the entire world and 1st across Asia during grueling Martian desert missions at the Mars Desert Research Station, Utah.",
    badgeType: "gold",
    featuredImage: "/assets/images/yggdrasil_urc_banner.jpg"
  },
  {
    id: "arc-2023-3rd",
    title: "3rd in the Whole World (Podium Finish)",
    team: "UIU Mars Rover Team",
    event: "Anatolian Rover Challenge (ARC) 2023",
    year: "2023",
    rank: "3rd in World (Bronze Medal)",
    category: "International Rover Competition",
    description: "Secured global podium finish ranking 3rd in the world with superior robotic arm dexterity, mechanical reliability, and mission logistics.",
    badgeType: "bronze",
    featuredImage: "/assets/images/rover_robotics_1789498391669.jpg"
  },
  {
    id: "urc-2023-9th",
    title: "9th in Whole World & 1st in Asia",
    team: "UIU Mars Rover Team",
    event: "University Rover Challenge (URC) 2023",
    year: "2023",
    rank: "9th in World • 1st in Asia",
    category: "Mars Desert Research Station, USA",
    description: "Secured top-10 global finish and the #1 rank across Asia during intense field trials in the Utah Mars Desert Research Station.",
    badgeType: "silver",
    featuredImage: "/assets/images/rover_robotics_1789498391669.jpg"
  },
  {
    id: "uiu-cse-show-champ",
    title: "Champion - UIU CSE Project Show",
    team: "TalkSmart Core Team",
    event: "Software Engineering Lab Showcase (Fall 2024)",
    year: "2024",
    rank: "1st Place (Champion)",
    category: "Academic Software Excellence",
    description: "Awarded 1st place champion out of dozens of university projects for TalkSmart—an intelligent IELTS speaking practice and instant scoring platform.",
    badgeType: "gold",
    featuredImage: "/assets/images/talksmart_platform_1789498425103.jpg"
  },
  {
    id: "wro-judge-2025",
    title: "Honorable Judge",
    team: "World Robot Olympiad (WRO) Bangladesh",
    event: "WRO Bangladesh National Championship 2025",
    year: "2025",
    rank: "National Judge & Evaluator",
    category: "Robotics Mentorship & Evaluation",
    description: "Appointed as an honorable judge to evaluate and mentor the next generation of roboticists and STEM innovators across Bangladesh.",
    badgeType: "special"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "uiu-mariner-cfo",
    role: "Chief Financial Officer (CFO) & Logistics Lead",
    organization: "UIU Mariner (Underwater ROV Team)",
    period: "2024 - Present",
    location: "Dhaka, Bangladesh & USA",
    type: "Leadership & Engineering",
    highlights: [
      "Oversee multi-thousand dollar fiscal budgets, sponsorship allocations, and component procurement.",
      "Co-led team to achieve Technical Documentation Champion in Pioneer Category at MATE ROV WORLD FINALS 2025.",
      "Spearhead logistics operations, international cargo shipping protocols, and emergency field supply pipelines.",
      "Coordinate with institutional sponsors (United Group, SolidWorks, Yamaha) for equipment funding."
    ],
    skills: ["Financial Strategy", "CFO Leadership", "Logistics Management", "Technical Documentation", "Sponsor Relations"]
  },
  {
    id: "uiu-mars-rover-logistics",
    role: "Logistics Member & Operational Specialist",
    organization: "UIU Mars Rover Team",
    period: "2023 - Present",
    location: "Dhaka, Bangladesh",
    type: "Competition Team",
    highlights: [
      "Supported competition preparation culminating in 5th in the World and 1st in Asia at URC 2024 (Utah, USA).",
      "Managed critical hardware supply chain, travel logistics, and field equipment durability protocols.",
      "Collaborated across mechanical, electrical, and autonomous software sub-teams during simulation dry-runs.",
      "Assisted in winning 3rd in the World at ARC 2023 and 9th in the World at URC 2023."
    ],
    skills: ["Field Operations", "Global Competition Logistics", "Hardware Coordination", "Cross-functional Teamwork"]
  },
  {
    id: "uro-bangladesh-cfo",
    role: "Chief Financial Officer (CFO)",
    organization: "URO Bangladesh",
    period: "2024 - Present",
    location: "Dhaka, Bangladesh",
    type: "Executive Leadership",
    highlights: [
      "Direct overall financial governance, balance sheet reporting, and long-term capital forecasting.",
      "Streamlined budgeting processes and expenditure tracking across active technology initiatives.",
      "Formulated risk mitigation strategies and fiscal transparency standards for organization projects."
    ],
    skills: ["Financial Forecasting", "Budget Governance", "Risk Mitigation", "Executive Strategy"]
  },
  {
    id: "uiu-pro-comms-apprentice",
    role: "Communication Apprentice & Media Producer",
    organization: "UIU PRO & Communications",
    period: "2023 - Present",
    location: "United International University",
    type: "Creative & Brand Media",
    highlights: [
      "Direct DSLR photography, cinematography, and post-production video editing for official university showcases.",
      "Manage digital media campaigns, high-profile event coverage, and multimedia storytelling for public relations.",
      "Curate university brand narratives that bridge engineering breakthroughs with engaging visual content."
    ],
    skills: ["Cinematography", "DSLR Photography", "Video Production", "Brand Media", "Storytelling"]
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering (B.Sc in CSE)",
    institution: "United International University (UIU)",
    concentration: "Robotics, Autonomous Systems & Software Engineering",
    timeline: "Currently Enrolled",
    status: "In Progress",
    highlights: [
      "Active leader in UIU Mariner and UIU Mars Rover Team.",
      "Software Engineering Lab Project Champion (TalkSmart - Fall 2024).",
      "Core coursework: Software Engineering, DBMS, Microcontrollers, AOOP, Electronics, FYDP."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Dhaka Chartered Commerce College",
    concentration: "Science Stream (Physics, Chemistry, Mathematics, ICT)",
    timeline: "Completed",
    status: "Graduated",
    highlights: [
      "Built strong foundation in analytical mathematics, physical mechanics, and computer science fundamentals.",
      "Participated actively in collegiate science exhibitions and technology workshops."
    ]
  },
  {
    degree: "Secondary School Certificate (SSC) - Science",
    institution: "Jatrabari Ideal School & College",
    concentration: "General Science Curriculum",
    timeline: "Completed",
    status: "Graduated",
    highlights: [
      "Nurtured early passion for electronics, mechanics, robotics, and software exploration.",
      "Graduated with top academic standing in science subjects."
    ]
  }
];

export const EXTRACURRICULAR = [
  {
    title: "UIU Robotics Club - Mentor",
    role: "Mentor & Technical Advisor",
    description: "Mentoring junior students and aspiring robotics enthusiasts in microcontroller programming, sensor integration, SolidWorks 3D design, and international rover competition preparation.",
    icon: "Users"
  },
  {
    title: "Community Social Drives with YAMAHA & ACI Motors",
    role: "Volunteer Organizer",
    description: "Spearheaded winter warmth initiatives distributing blankets and warm apparel to underprivileged communities in partnership with YAMAHA and ACI Motors.",
    icon: "Heart"
  },
  {
    title: "Motorcycle Touring & Bangladesh Exploration",
    role: "Adventurer & Moto Tourer",
    description: "Avid motorcycle rider who embarks on long-distance expedition tours across Bangladesh to discover remote landscapes, understand diverse cultures, and connect with people.",
    icon: "Compass"
  },
  {
    title: "Cinematography & Visual Storytelling",
    role: "Visual Creator",
    description: "Producing cinematic short films, aerial drone photography, and technical documentaries highlighting university innovation and scenic natural wonders.",
    icon: "Camera"
  }
];

export const SPONSORS: Sponsor[] = [
  {
    name: "United Group",
    role: "Principal Industrial Patron",
    type: "Conglomerate",
    tag: "Title Patron"
  },
  {
    name: "United International University (UIU)",
    role: "Academic Host & Research Patron",
    type: "University",
    tag: "Alma Mater"
  },
  {
    name: "SolidWorks",
    role: "CAD & Structural Simulation Partner",
    type: "Engineering Software",
    tag: "Official CAD Partner"
  },
  {
    name: "Yamaha",
    role: "Motorsport & Community Patron",
    type: "Mobility & Social",
    tag: "Mobility Partner"
  },
  {
    name: "ACI Motors",
    role: "Automotive & Community Partner",
    type: "Automotive",
    tag: "Community Partner"
  },
  {
    name: "Matrix Jerseys",
    role: "Apparel & Official Kit Partner",
    type: "Apparel",
    tag: "Official Apparel"
  }
];

export const TECH_STACK = [
  { name: "C / C++", category: "Core Systems", level: 95 },
  { name: "Java & Spring Boot", category: "Backend Architecture", level: 90 },
  { name: "PostgreSQL & MySQL", category: "Databases", level: 92 },
  { name: "PHP & XAMPP", category: "Web Systems", level: 88 },
  { name: "SolidWorks", category: "3D CAD & Modeling", level: 88 },
  { name: "Underwater ROV Tech", category: "Robotics", level: 96 },
  { name: "Autonomous Rovers", category: "Robotics", level: 94 },
  { name: "Drone Telemetry", category: "Hardware & RF", level: 86 },
  { name: "REST APIs & WebSockets", category: "Networking", level: 90 },
  { name: "Technical Documentation", category: "Engineering Docs", level: 99 },
  { name: "Git & GitHub", category: "DevOps & VCS", level: 92 },
  { name: "DSLR Cinematography", category: "Creative Production", level: 94 }
];
