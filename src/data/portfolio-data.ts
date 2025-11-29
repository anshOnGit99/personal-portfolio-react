import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, Building, Award, Code, Database, Globe, Server, Smartphone, Layers, Zap, Brain } from "lucide-react";

export const personalInfo = {
  name: "Ansh Ahuja",
  title: "Software Developer",
  tagline: "Passionate about creating innovative web solutions and delivering exceptional user experiences",
  bio: "I'm a dedicated software developer with expertise in full-stack web development, mobile applications, and cloud technologies. I love solving complex problems and building scalable, user-friendly applications that make a real impact.",
  location: "Bengaluru, India",
  email: "anshahuja3199@gmail.com",
  phone: "+91-8979314326",
  availability: "Available for opportunities",
  
  social: {
    github: "https://github.com/anshOnGit99",
    linkedin: "https://linkedin.com/in/ansh-ahuja99",
    email: "mailto:anshahuja3199@gmail.com"
  },

  navigation: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]
};

export const experience = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    position: "Systems Engineer",
    duration: "Aug 2023 - Present",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Working on enterprise-level web applications and contributing to digital transformation initiatives.",
    highlights: [
      "Developed and maintained full-stack web applications using React, Node.js, and cloud technologies",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented best practices for code quality, testing, and deployment processes",
      "Participated in agile development methodologies and continuous integration workflows"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Git"],
    icon: Building
  }
];

export const skills = {
  categories: [
    {
      name: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "Angular", level: 90, category: "Frontend" },
        { name: "React", level: 80, category: "Frontend" },
        { name: "TypeScript", level: 85, category: "Frontend" },
        { name: "JavaScript", level: 90, category: "Frontend" },
        { name: "HTML/CSS", level: 95, category: "Frontend" },
        { name: "Tailwind CSS", level: 85, category: "Frontend" },
        { name: "Bootstrap", level: 90, category: "Frontend" }
      ]
    },
    {
      name: "Backend Development", 
      icon: Server,
      skills: [
        { name: "Node.js", level: 85, category: "Backend" },
        { name: "Express.js", level: 80, category: "Backend" },
        { name: "Python", level: 75, category: "Backend" },
        { name: "REST APIs", level: 85, category: "Backend" }
      ]
    },
    {
      name: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80, category: "Database" },
        { name: "MySQL", level: 75, category: "Database" },
        // { name: "AWS", level: 70, category: "Cloud" },
        // { name: "Firebase", level: 75, category: "Cloud" }
      ]
    },
    // {
    //   name: "Mobile Development",
    //   icon: Smartphone, 
    //   skills: [
    //     { name: "React Native", level: 75, category: "Mobile" },
    //     { name: "Flutter", level: 70, category: "Mobile" },
    //     { name: "Android", level: 65, category: "Mobile" }
    //   ]
    // },
    {
      name: "Tools & Others",
      icon: Layers,
      skills: [
        { name: "Git", level: 85, category: "Tools" },
        // { name: "Docker", level: 70, category: "Tools" },
        { name: "Figma", level: 75, category: "Design" },
        { name: "Postman", level: 80, category: "Tools" }
      ]
    }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Crypto-Currency-Tracker-Angular",
    description: "The Crypto Currency Tracker is an Angular-based web application that allows users to track the latest updates and trends in the cryptocurrency market.",
    longDescription: "The application provides real-time data on various cryptocurrencies, including their current prices, market caps, and price changes over the last 24 hours. Users can also view detailed information about individual cryptocurrencies, including historical price trends over different time periods (24 hours, 30 days, 90 days, and 1 year).The application integrates with the CoinGecko API to fetch real-time cryptocurrency data and uses Angular Material for a sleek and responsive user interface. Users can switch between different currencies (INR and USD) to view the data in their preferred currency.",
    image: "/placeholder.svg",
    technologies: ["Angular", "Angular Material", "CoinGecko API", "Chart.js", "RxJS"],
    features: [
      "Real-Time Cryptocurrency Data",
      "Currency Conversion",
      "Interactive Charts", 
      "Search and Filter",
      "Responsive Design",
    ],
    github: "https://github.com/anshOnGit99/Crypto-Currency-Tracker-Angular",
    status: "Completed",
    category: "Frontend"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization.",
    longDescription: "Developed a modern task management solution with drag-and-drop functionality, real-time collaboration, file attachments, and comprehensive project tracking capabilities.",
    image: "/placeholder.svg", 
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task organization",
      "File attachments and comments",
      "Project timeline and milestones",
      "Team member management",
      "Mobile responsive design"
    ],
    github: "https://github.com/anshOnGit99/task-manager",
    live: "https://taskmanager-demo.com",
    status: "In Progress",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather App",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed meteorological data visualization.",
    longDescription: "Created an elegant weather application featuring current conditions, 7-day forecasts, weather maps, and location-based services with a focus on user experience and data visualization.",
    image: "/placeholder.svg",
    technologies: ["React Native", "OpenWeather API", "Maps API", "Redux"],
    features: [
      "Current weather conditions",
      "7-day weather forecast", 
      "Interactive weather maps",
      "Location-based services",
      "Weather alerts and notifications",
      "Offline data caching"
    ],
    github: "https://github.com/anshOnGit99/weather-app",
    live: "https://weather-demo.com",
    status: "Completed", 
    category: "Mobile"
  }
];

export const achievements = [
  {
    title: "Best Innovation Award",
    organization: "TCS Hackathon 2024",
    date: "2024",
    description: "Won first place for developing an AI-powered solution for employee productivity enhancement"
  },
  {
    title: "Certified Azure Administrator Associate (AZ-104)",
    organization: "Microsoft",
    date: "2024",
    description: "Successfully completed Azure administrator associate certification"
  },
  {
    title: "Certified Azure Fundamentals (AZ-900)",
    organization: "Microsoft",
    date: "2022-2024", 
    description: "Certified in Azure Fundamentals"
  }
];