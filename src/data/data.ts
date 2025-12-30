import {
  GraduationCap,
  School,
  Code2,
  Layers,
  Globe,
  Layers2,
} from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  github: string;
  live: string;
  img: string;
  testcredentials?: {
    email: string;
    password: string;
  };
}

export const projects: Project[] = [
  {
    id: "caseopedia",
    name: "Caseopedia - Legal Case Management System",
    description:
      "Designed and developed a full-fledged Legal Case Management System tailored for law organization and independent advocates. The platform digitizes the complete law-firm workflow including client onboarding, case registration, court and hearing scheduling, document management, task tracking, and secure communication between lawyers and clients. Admin can manage multiple cases, assign tasks to lawyers, bulk upload data , track case status, and receive hearing reminders, while clients can securely view case progress and documents through a dedicated portal. The system streamlines daily legal operations, reduces manual data enty, and improves case visibility across the firm.",
    tech: [
      "React.js",
      "Firebase",
      "Django",
      "SQL",
      "AWS EC2",
      "Tailwind CSS",
      "ShadCN UI",
      "JavaScript",
      "REST APIs",
      "Role-Based Access Control",
      "Performance Optimization",
      "Reusable Components",
      "Responsive Design",
    ],
    problem:
      "Most small and mid-size law organizations rely on spreadsheets, physical files, and WhatsApp/email communication to manage cases, leading to misplaced documents, missed hearings, poor task tracking, and lack of transparency between lawyers and clients.",
    solution:
      "Built a centralized, role-based legal management system with a modular frontend and scalable backend. Implemented secure authentication for lawyers, organizations, and clients, structured case and document workflows, real-time case status updates, hearing reminders, and intuitive dashboards for workload and case tracking. Optimized UI performance to handle large case and document datasets smoothly.",
    impact:
      "Reduced manual paperwork and administrative overhead by ~60%, improved case tracking and accountability across teams, and helped law firms manage hundreds of active cases with better organization, faster access to documents, and improved client trust through transparent case updates.",
    testcredentials: {
      email: "test@gmail.com",
      password: "T@1234567890",
    },
    github: "https://github.com",
    live: "https://caseopedia.onrender.com",
    img: "/caseopedia.png",
  },
  {
    id: "messageX-whatsapp",
    name: "MessageX - WhatsApp- Messaging Platform",
    description:
      "A production-grade, frontend-only messaging application inspired by WhatsApp, designed to closely replicate real-world chat, status, and call experiences using modern React architecture. The platform simulates authentication, real-time messaging behavior, delivery states, and user presence entirely on the client side, making it ideal for MVPs, demos, and frontend system design showcases.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Zustand",
      "localStorage",
      "JavaScript",
      "Responsive Design",
      "Performance Optimization",
      "Reusable Components",
    ],
    problem:
      "Building real-time chat applications typically requires complex backend infrastructure such as WebSockets, databases, and authentication services, which slows down prototyping and limits frontend-focused experimentation.",
    solution:
      "Implemented a fully frontend-driven messaging architecture using Zustand for centralized global state management and localStorage as a simulated persistence layer. Authentication, chats, message delivery states, online indicators, auto-replies, and UI navigation are all modeled on the client side to closely mirror WhatsApp-style workflows without backend dependencies.",
    impact:
      "Demonstrates the ability to architect scalable, state-heavy, real-time-like user interfaces using modern frontend tools. The application showcases chat lifecycle management, message status simulation, responsive mobile-first layouts, and multi-section navigation (Chats, Status, Calls, Settings), making it a strong portfolio project for frontend, product, and UI engineering roles.",
    github: "https://github.com/",
    live: "https://messagex-whatsapp.onrender.com",
    img: "/messageX.png",
  },
  {
    id: "medicheck",
    name: "MediCheck - OCR-Based Prescription Management System",
    description:
      "Built an AI-powered healthcare web platform that allows users to securely sign up, select a pricing plan, and access a personalized dashboard to manage medical prescriptions. Users can upload handwritten doctor prescriptions, which are processed using an OCR pipeline to extract structured data such as medicine names, dosage, frequency, and duration. The system transforms unstructured handwritten prescriptions into readable, digital medical records, enabling users to store, review, and manage their prescription history in one place.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "ShadCN UI",
      "JavaScript",
      "Redux",
      "TypeScript",
      "Aws",
      "Framer Motion",
      "OCR (Tesseract / AI Vision)",
      "REST APIs",
      "Responsive Design",
      "Performance Optimization",
    ],
    problem:
      "Handwritten medical prescriptions are often difficult to read, easy to lose, and hard to track over time. Patients struggle to understand medicine details, while digital health records are rarely available for offline or small-clinic prescriptions.",
    solution:
      "Developed a secure, step-based user flow starting with authentication and pricing access control, followed by a dashboard-driven experience. Implemented an OCR-based prescription scanning system that extracts and structures key medical data from handwritten prescriptions. Designed a clean UI to review, edit, and store extracted prescription details, ensuring accuracy and long-term accessibility.",
    impact:
      "Enabled users to digitize handwritten prescriptions in seconds, reduced prescription misinterpretation risks, and created a centralized, searchable medical record system that improves medication clarity and long-term health tracking.",
    github: "https://github.com",
    live: "http://51.21.252.2/",
    img: "/medicheck.png",
  },
  {
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    description:
      "Full-featured e-commerce web application supporting complete shopping workflows including product listing, advanced filtering, product detail pages, cart management, and checkout experience. Built with a focus on performance, scalability, and responsive design to deliver a seamless shopping experience across mobile and desktop devices.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
      "ShadCN UI",
    ],
    problem:
      "Product discovery was slow and inconsistent due to inefficient filtering logic and unoptimized API calls, especially on mobile devices.",
    solution:
      "Implemented optimized client-side and server-side data handling, fast filtering and sorting mechanisms, reusable UI components, and a mobile-first checkout flow.",
    impact:
      "Improved page load and filtering performance by ~35%, increased session duration, and enhanced overall user engagement across all screen sizes.",
    github: "https://github.com",
    live: "https://next-e-commerce.onrender.com",
    img: "/ecommerce.svg",
  },
  {
    id: "abalytics",
    name: "ABAlytics – Intelligent ABA Data & Progress Tracking System",
    description:
      "Developed a smart ABA therapy platform focused on real-time behavioral data collection, AI-generated session notes, and learner health tracking. The system is optimized for doctors and therapists conducting in-home ABA sessions, allowing them to log observations live, capture skill and behavior metrics, and automatically generate professional session documentation. Interactive graphs and analytics help clinicians evaluate learner performance trends and therapy effectiveness.",
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "REST APIs",
      "Admin Control",
      "AI-Based Text Generation",
      "Recharts",
      "JWT Security",
      "Modular UI Components",
      "Azure Deployment",
    ],
    problem:
      "Manual ABA documentation is time-consuming, error-prone, and often completed after sessions, reducing data accuracy and making long-term learner tracking difficult.",
    solution:
      "Created a unified platform that combines live session data entry with AI-driven note generation and automated progress analytics. Designed clinician-friendly dashboards to visualize learner development and behavioral outcomes.",
    impact:
      "Improved documentation efficiency, enabled real-time clinical insights, and helped practitioners manage multiple learners with accurate, data-driven ABA therapy records.",
    testcredentials: {
      email: "sutanu.adhikary.8131@gmail.com",
      password: "Sonu@130",
    },
    github: "https://github.com",
    live: "https://lucidabanotesui.azurewebsites.net",
    img: "/abalytics.png",
  },
];
export const educationData = [
  {
    id: 1,
    title: "Heritage Institute of Technology (8.8 CGPA)",
    subtitle: "B.Tech in Computer Science & Engineering",
    startDate: "2020",
    endDate: "2024",
    skills: [
      "Computer Science",
      "Logical Thinking",
      "Problem Solving",
    ],
    icon: GraduationCap,
    link: "https://www.heritageit.edu",
    gradient: "from-red-700 to-red-900",
  },
  {
    id: 2,
    startDate: "2017",
    endDate: "2019",
    skills: [
      "Critical Thinking",
      "Communication",
      "Problem Solving",
      "Research",
    ],
    title: "Carmel Junior College (89%)",
    subtitle: "Science Stream (PCMB)",
    icon: School,
    link: "http://cjuniorcollege.com",
    gradient: "from-red-500 to-red-700",
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "PriceLabs",
    role: "FullStack Developer",
    period: "June 2024 - October 2025",
    location: "Pune, India",
    description:
      "Built an scraping system to scrape the Data from various travel websites using Python and Ruby on Rails.",
    achievements: [
      "Architected a high-volume scraping system using Ruby on Rails to parse and extract over 20 million data points from major OTAs",
      "Engineered a dynamic IP rotation system using proxy providers, achieving a 98\% request success rate",
      "Reverse-engineered mobile APIs using Burp Suite for traffic interception, increasing data acquisition speed by over 80\%.",
      "Integrated Percona Monitoring and Management (PMM) to oversee backend database, guaranteeing 99.9\% uptime and Secured the data extraction pipeline by routing all HTTP requests through TLS-enabled servers.",
    ],
    tech: [
      "Ruby on Rails",
      "TLS",
      "Python",
      "MySQL",
      "Percona Monitoring and Management (PMM)",
    ],
  },
  {
    company: "LucidSoftGen",
    role: "FullStack Developer",
    period: "June 2023 - June 2024",
    location: "Kolkata, India",
    description:
      "Built an Ai-powered Session Note Generation System for ABA Therapists to streamline documentation and improve accuracy.",
    achievements: [
      "Optimized frontend performance: implemented route-level code-splitting shrinking the JS bundle by 45\%",
      "Hardened auth UX and security with stateless JWT and Axios interceptors, cutting auth-related failures by 85\%",
      "Integrated OpenAI for AI-assisted session notes, reducing manual effort from 60\% to 10\%",
      "Launched subscriptions and billing with Stripe, managing recurring plans and invoice generation",
    ],
    tech: [
      "React.js",
      "HTML",
      "CSS",
      "Responsive Design",
      "Shadcn UI",
      "Springboot",
      "Mysql",
      "Azure",
    ],
  },
];
