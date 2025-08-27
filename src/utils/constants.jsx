import {
  Briefcase,
  Code,
  Home,
  Info,
  MailPlus,
  Star,
  Users,
} from "lucide-react";


import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";

import {
  BriefcaseBusiness,
  Download,
  FileJson,
  FolderKanban,
  GraduationCap,
  Mail
} from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
  FaYoutube,
} from "react-icons/fa";

export const navItems = [
  { id: "home", label: "Home", ico: <Home size={15} /> },
  { id: "about", label: "About", ico: <Info size={15} /> },
  { id: "projects", label: "Projects", ico: <Code size={15} /> },
  { id: "experiences", label: "Experiences", ico: <Briefcase size={15} /> },
  { id: "skills", label: "Skills", ico: <Star size={15} /> },
  { id: "testimonials", label: "Testimonials", ico: <Users size={15} /> },
  { id: "contact", label: "Contact", ico: <MailPlus size={15} /> },
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
