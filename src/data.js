export const projects = [
{
title: "KIET HRMS",
desc: "Used by KIET faculty and staff to manage organizational activities. It includes modules for payroll, leave requests, employee records, and performance monitoring, helping streamline HR workflows",
tech: ["Django", "MySQL", "Celery",],
img: "/images/hrms.png",
live: "https://tech.kiet.edu/",
},
{
title: "Student Portal",
desc: "High-performance Student Portal serving 8,000+ daily users at KIET Group of Institutions. It features attendance tracking, class schedules, a fee payment system, and PWA capabilities with offline support.",
tech: ["Django", "MySQL", "Celery",],
img: "/images/studentPortal.png",
live: "https://tech.kiet.edu/StudentPortal/",
},
  
{
title: "NotifyKIET",
desc: "Web application for creating email templates and sending bulk emails efficiently, serving as a notification portal for KIET Group of Institutions and streamlining communication across the organization.",
tech: ["Django REST Framework", "MySQL", "Celery", "Redis","Docker"],
img: "/images/notify.png",
live: "https://tech.kiet.edu/notify-kiet/",
},
{
  title: "KIET E-Pay Event Management System",
  desc: "An event management platform where admins can create events and configure registration forms. Users can register and complete secure payments via Easebuzz, supporting both INR and USD-paying customers through international card acceptance.",
  tech: [
    "Django REST Framework",
    "Easebuzz",
    "PostgreSQL",
    "Webhook Handling",
    "Docker",
  ],
  img: "/images/epay.png",
  live: "https://tech.kiet.edu/kiet-epay/"
}
,

{
title: "Manthan Quiz Platform",
desc: "The official quiz registration and management platform for Manthan 3.0, enabling participants to register, take quizzes, and track results seamlessly.",
tech: ["Django REST Framework", "PostgreSQL","Docker","Celery","Redis"],
img: "/images/manthan.png",
live: "https://manthan.kiet.edu/",
    // github: "https://github.com/example"
},
{
title: "Hospital Management System",
desc: "A complete hospital workflow system with authentication, analytics, and role-based access, enabling smooth management of patients and staff.",
tech: ["Django", "MySQL", "Email Integration","SMTP"],
img: "/images/hms.jpeg",
live: "https://www.suhanisingh.me/#!/landing",
github: "https://github.com/nandinisingh27/VitalCure-hospital-management-system-"},

{
title: "Certificate Generator",
desc: "Bulk certificate generation with CSV import, customizable templates, ZIP packaging, and complete Google Drive functionality.",
tech: ["Python", "Django", "PIL"],
img: "https://source.unsplash.com/800x600/?certificate,design",
github: "https://github.com/nandinisingh27/Certificate_generator",
},
{
title: "Hostel Grievance Redressal System",
desc:"Developed a scalable backend for a Hostel Grievance Management System, streamlining complaint handling with structured escalation, real-time tracking, and automated staff assignment—improving accountability and accelerating issue resolution.",
tech: ["Django","Celery","Redis","MySQL"],
img: "https://source.unsplash.com/800x600/?certificate,design",
github: "https://github.com/nandinisingh27/CampusCare"},
{
title: "Space Weather Notifier",
desc: "Built a system that collects and analyzes data on space disasters, providing users with timely updates and insights. Designed a user-friendly dashboard with storytelling elements to simplify complex events, and integrated text-to-speech (TTS) for an accessible and immersive experience.",
tech: ["Django REST Framework","NASA API","Gemini API","GTTS","MySQL",],
img: "/images/spaceWeather.png",
github: "https://github.com/nandinisingh27/sw_server"},
{
title: "NeuraSecure",
desc: "Built a Cyber Attack News Scraper that automatically gathers the latest cybersecurity incidents from trusted sources and notifies users via email. Integrated a blog-style interface where users can like, share, and comment on updates for enhanced engagement.",
tech: ["Django","Selenium","MySQL"],
img: "/images/NeuraSecure.png",
github: "https://github.com/nandinisingh27/NeuraSecure",},
{
title: "WhatsApp Scrappy",
desc: "Puppeteer-based automation tool for extracting WhatsApp chats and processing conversation data.",
tech: ["Node.js", "Puppeteer", "JavaScript"],
img: "https://source.unsplash.com/800x600/?automation,code",
github: "https://github.com/nandinisingh27/Certificate_generator",},



];


export const skills = [
  { key: "html", label: "HTML" },
  { key: "css", label: "CSS" },
  { key: "js", label: "JavaScript" },
  { key: "react", label: "React" },
  { key: "python", label: "Python" },
  { key: "django", label: "Django" },
  { key: "drf", label: "Django REST Framework" },
  { key: "c", label: "C Language" },
  { key: "cpp", label: "C++" },
  { key: "mysql", label: "MySQL" },
  { key: "postgres", label: "PostgreSQL" },
  { key: "git", label: "Git" },
  { key: "docker", label: "Docker" },
];
