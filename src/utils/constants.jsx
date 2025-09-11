import {
  Briefcase,
  Code,
  Home,
  Info,
  MailPlus,
  Star,
  Users,
  BadgeAlert,
  Lightbulb, 
  FolderPen,
  CalendarDays,
  MailMinus,
  Phone,
  MapPinHouse,
  BookOpenCheck,
  BriefcaseBusiness,
  Download,
  FileJson,
  FolderKanban,
  GraduationCap,
  Mail,
  CircleDollarSign,
  Contact,
  BotMessageSquare,
  CardSim,
  CloudSunRain,
  Link2,
  Landmark,
  CodeXml,
  Settings,
  BatteryFull,
  Grid3x3
} from "lucide-react";


import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import {
  FaFacebookF,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
  FaYoutube,
} from "react-icons/fa";

export const navItems = [
  { id: "home", label: "Home", ico: Home },
  { id: "about", label: "About", ico: Info },
  { id: "projects", label: "Projects", ico: Code },
  { id: "experiences", label: "Experiences", ico: Briefcase },
  { id: "skills", label: "Skills", ico: Star },
  { id: "testimonials", label: "Testimonials", ico: Users },
  { id: "contact", label: "Contact", ico: MailPlus},
];

export const skillBadges = [
  { 
    icon: FaHtml5, 
    text: "HTML", 
    size: 20,
    position: "left-10 lg:left-8", // top left
    animation: "animate-float"
  },
  { 
    icon: IoLogoCss3, 
    text: "CSS", 
    size: 19,
    position: "right-8", // top right
    animation: "animate-float"
  },
  { 
    icon: IoLogoJavascript, 
    text: "JavaScript", 
    size: 19,
    position: "left-8 bottom-0", // bottom left
    animation: "animate-float"
  },
  { 
    icon: FaReact, 
    text: "React", 
    size: 19,
    position: "bottom-0 right-10 lg:right-8", // bottom right
    animation: "animate-float-fast"
  },
];

export const infoBadges = [
  {
    icon: BriefcaseBusiness,
    title: "1+ Year",
    subtitle: "Experience"
  },
  {
    icon: FileJson,
    title: "Javascript",
    subtitle: "Main language"
  },
  {
    icon: FolderKanban,
    title: "2 projects",
    subtitle: "Total project"
  },
  {
    icon: GraduationCap,
    title: "3.63/4",
    subtitle: "GPA"
  }
]

export const socialMedials = [
  { icon: FaGithub, link: "#" },
  { icon: FaLinkedin, link: "#" },
  { icon: FaFacebookF, link: "#" },
  { icon: FaYoutube, link: "#" },
];

export const ProfileActionButtons = [
  { icon: Download, size: 20, title: "Explore My Project" },
  { icon: Mail, size: 20, title: "Contact Me" },
];


export const introCards = [
  {icon: BadgeAlert, size: 20, title: "Who Am I?", desc: "I'm a frontend developer who crafts responsive, interactive, and clean UIs. With a background in Informatics Engineering, I blend design sense with technical logic." },
  {icon: Lightbulb, size: 20, title: "My approach", desc: "I believe in a user-centered design process, where understanding the user's needs and pain points is key to creating effective solutions." }
]

export const personalInfos = [
  {icon: FolderPen , size: 20, label: "Name", value: "Thach Dinh" },
  {icon: CalendarDays , size: 20, label: "Date of Birth", value: "January 1, 1990" },
  {icon: MailMinus , size: 20, label: "Email", value: "thach.dinh@example.com" },
  {icon: Phone , size: 20, label: "Phone", value: "+1234567890" },
  {icon: MapPinHouse , size: 20, label: "Place of Birth", value: "Vietnam" },
  {icon: BookOpenCheck , size: 20, label: "GPA", value: "3.63/4" },
  {icon: GraduationCap , size: 20, label: "Education", value: "University of Engineering and Technology" },
]

export const projectData = {
  "projects": [
    {
      "id": 1,
      "title": "Money Tracker",
      "category": "fullstack",
      "year": "2025",
      "status": "Completed",
      "icon": CircleDollarSign,
      "features": [
        "Supabase Auth + Database",
        "CRUD transaksi harian",
        "Statistik pengeluaran",
        "Dark mode UI"
      ],
      "techStack": [
        "React",
        "Supabase",
        "Tailwind"
      ],
      "demoUrl": "#",
      "codeUrl": "#"
    },
    {
      "id": 2,
      "title": "Personal Portfolio",
      "category": "frontend",
      "year": "2025",
      "status": "Completed",
      "icon": Contact,
      "features": [
        "Tailwind CSS",
        "Dark/light mode",
        "Animated tabs",
        "Project & skill showcase"
      ],
      "techStack": [
        "React",
        "Tailwind"
      ],
      "demoUrl": "#",
      "codeUrl": "#"
    },
    {
      "id": 3,
      "title": "AI Chatbot JSON",
      "category": "fullstack",
      "year": "2025",
      "status": "Completed",
      "icon": BotMessageSquare,
      "features": [
        "React + Express backend",
        "Input belajar dari user",
        "Simpan ke JSON",
        "Logic respons otomatis"
      ],
      "techStack": [
        "React",
        "Express",
        "Node.js"
      ],
      "demoUrl": "#",
      "codeUrl": "#"
    },
    {
      "id": 4,
      "title": "RESTful API Service",
      "category": "backend",
      "year": "2024",
      "status": "Completed",
      "icon": CardSim,
      "features": [
        "Express.js + MongoDB",
        "JWT Auth",
        "CRUD user & posts",
        "Swagger API docs"
      ],
      "techStack": [
        "Node.js",
        "Express",
        "MongoDB"
      ],
      "demoUrl": "#",
      "codeUrl": "#"
    },
    {
      "id": 5,
      "title": "Weather App",
      "category": "frontend",
      "year": "2024",
      "status": "Completed",
      "icon": CloudSunRain,
      "features": [
        "Fetch API OpenWeather",
        "Search by city",
        "Responsive UI",
        "Dark mode"
      ],
      "techStack": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "demoUrl": "#",
      "codeUrl": "#"
    },
    {
      "id": 6,
      "title": "Link Collector",
      "category": "fullstack",
      "year": "2025",
      "status": "In Progress",
      "icon": Link2,
      "features": [
        "User auth (Supabase)",
        "Simpan link pribadi",
        "Search + filter",
        "Responsive design"
      ],
      "techStack": [
        "React",
        "Supabase"
      ],
      "demoUrl": "#",
      "codeUrl": "#"
    }
  ],
  "filterCategories": [
    {
      "id": "all",
      "label": "All Projects",
      "icon": Grid3x3
    },
    {
      "id": "frontend",
      "label": "Frontend",
      "icon": CodeXml
    },
    {
      "id": "backend",
      "label": "Backend",
      "icon": Settings
    },
    {
      "id": "fullstack",
      "label": "Fullstack",
      "icon": BatteryFull
    }
  ]
}

export const experienceData = {
  "projects": [
    {
      "id": 1,
      "title": "Frontend Developer Intern",
      "category": "work",
      "year": "2024",
      "status": "Completed",
      "icon": BriefcaseBusiness,
      "features": [
        "Developed responsive web pages using React and Tailwind CSS.",
        "Collaborated with designers to implement UI/UX improvements.",
        "Optimized website performance, reducing load times by 20%."
      ],
      "techStack": [
        "React",
        "Tailwind CSS",
        "Git"
      ],
      "demoUrl": "#",
      "codeUrl": "#"
    },
    {
      "id": 2,
      "title": "Open Source Contributor",
      "category": "personal",
      "year": "2023",
      "status": "Ongoing",
      "icon": FileJson,
      "features": [
        "Contributed to various open-source projects on Git   Hub.",
        "Fixed bugs and implemented new features in JavaScript libraries.",
        "Engaged with the community to review code and provide feedback."
      ],
      "techStack": [
        "JavaScript",
        "Git",
        "GitHub"
      ],
      "demoUrl": "#",
      "codeUrl": "#"
    },
    {
      "id": 3,
      "title": "University Project - E-commerce Website",
      "category": "academic",
      "year": "2022",
      "status": "Completed",
      "icon": GraduationCap,
      "features": [
        "Led a team of 4 to develop a full-stack e-commerce website.",
        "Implemented user authentication, product listings, and shopping cart functionality.",
        "Deployed the application using Heroku and managed the database with MongoDB."
      ],
      "techStack": [
        "React",
        "Node.js",
        "MongoDB"
      ],
      "demoUrl": "#",
      "codeUrl": "#"
    }
  ],
  "filterCategories": [
    {
      "id": "all",
      "label": "All Experiences",
      "icon": Grid3x3
    },
    {
      "id": "work",
      "label": "Work",
      "icon": BriefcaseBusiness
    },
    {
      "id": "personal",
      "label": "Personal",
      "icon": FileJson
    },
    {
      "id": "academic",
      "label": "Academic",
      "icon": GraduationCap
    }
  ] 
}

const skillData = [
  
]