import {
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  LineChart,
  Palette,
  Server,
  Settings,
  ShoppingCart,
  Zap,
} from "lucide-react";

//About page data
export const skillGroups = [
  {
    icon: <Palette size={24} />,
    title: "Frontend",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js (Hooks)",
      "Responsive Design",
    ],
  },
  {
    icon: <Server size={24} />,
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    icon: <Database size={24} />,
    title: "Database",
    skills: [
      "MongoDB",
      "Indexing",
      "Aggregation Pipeline",
      "CRUD Operations",
      "Schema Design",
    ],
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "eCommerce",
    skills: [
      "WordPress",
      "WooCommerce",
      "Shopify Customization",
      "Payment Integration",
      "Dropshipping",
    ],
  },
  {
    icon: <Cpu size={24} />,
    title: "AI & Tools",
    skills: ["AI Integration", "ChatGPT/Copilot", "Git & GitHub", "Deployment"],
  },
  {
    icon: <Cloud size={24} />,
    title: "Additional",
    skills: [
      "SEO Optimization",
      "Google Analytics",
      "Project Management",
      "Problem Solving",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Green Garde",
    category: "Mern Stack",
    isFeatured: false,
    image: "/Main.png",
    description:
      "A full-stack MERN eCommerce platform specializing in gardening products. Features include user authentication, product catalog, shopping cart, secure checkout, and a unique gardener booking system. Integrated AI capabilities including a CNN-based plant recognition model and AI chatbot for customer support.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "CNN",
      "MongoDB",
      "OpenAI API",
    ],
    features: [
      "User authentication system",
      "AI-powered plant recognition",
      "Shopping cart & secure checkout",
      "Gardener booking system",
      "Admin panel for management",
    ],
    liveLink: null,
    githubLink: "https://github.com/21014156-068/green-garden",
  },
  {
    id: 2,
    title: "Paswal Tours LTD",
    category: "Travel Agency Website",
    isFeatured: true,
    image: "/pas1.png",
    description:
      "A comprehensive online travel and visa services platform offering multi-entry and single-entry visas, flight bookings, and Pakistan NADRA services including ID card and passport issuance and renewal.",
    techStack: ["WordPress", "Elementor", "PHP", "Html", "Tailwind CSS"],
    features: [
      "Visa Services",
      "Flight Booking",
      "Pakistan NADRA Services",
      "Customer Support",
      "Secure Payments",
    ],
    liveLink: "https://mysafetrips.com/",
    githubLink: null,
  },
  {
    id: 3,
    title: "Alfattah Vibes",
    category: "Ecommerce Website",
    isFeatured: false,
    image: "/al.png",
    description:
      "A comprehensive eCommerce platform built with wordpress woocommerce for local business owner to sell their products online.",
    techStack: ["WordPress", "Elementor", "PHP", "Html", "Tailwind CSS"],
    features: [
      "Fully responsive design",
      "Advanced 3D animations",
      "Smooth page transitions",
      "Fully Functional checkout system",
    ],
    liveLink: "https://alfattahvibes.com/",
    githubLink: null,
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web Development",
    isFeatured: false,
    image: "/p3.png",
    description:
      "A professional developer portfolio built with React, TailwindCSS, Framer Motion, and Three.js. The site includes advanced 3D animations, smooth transitions, multi-page navigation (Home, About, Resume, Services, Projects, Contact), and a CV download feature.",
    techStack: ["React", "TailwindCSS", "Framer Motion", "Three.js"],
    features: [
      "Fully responsive design",
      "Advanced 3D animations",
      "Smooth page transitions",
      "Multi-page layout (Home, About, Resume, Services, Projects, Contact)",
      "CV download functionality",
    ],
    liveLink: "https://abdullahjs.dev/",
    githubLink: "https://github.com/21014156-068/portfolio/",
  },
];

//services

// All Services
export const services = [
  {
    icon: <Code size={34} />,
    heading: "Web Development",
    desc: `Custom web applications built with modern technologies like React, Node.js, and MongoDB. Responsive, fast, and scalable solutions tailored to your specific needs.`,
    list: [
      "Full-stack web applications",
      "Responsive design for all devices",
      "REST API development",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    icon: <ShoppingCart size={34} />,
    heading: "eCommerce Solutions",
    desc: `Complete online store development with secure payment integration, inventory management, and marketing features to grow your business.`,
    list: [
      "WordPress/WooCommerce stores",
      "Shopify store customization",
      "Payment gateway integration",
      "Dropshipping automation",
    ],
  },
  {
    icon: <Cpu size={34} />,
    heading: "AI Integration",
    desc: `Intelligent solutions powered by artificial intelligence to enhance user experience, automate processes, and provide data-driven insights.`,
    list: [
      "AI-powered chatbots",
      "Image recognition systems",
      "AI-assisted content generation",
      "Predictive analytics",
    ],
  },
  {
    icon: <Zap size={34} />,
    heading: "Additional Services",
    desc: `Comprehensive digital solutions to enhance your online presence and optimize your business operations.`,
    list: [
      "SEO Optimization",
      "Website Maintenance",
      "Performance Optimization",
      "Technical Consulting",
      "API Integration",
    ],
  },
  {
    icon: <Layers size={34} />,
    heading: "MERN Stack Development",
    desc: `End-to-end development of scalable applications using MongoDB, Express.js, React, and Node.js. Seamless workflows from frontend to backend.`,
    list: [
      "Custom full-stack applications",
      "Database schema design & CRUD operations",
      "RESTful API development",
      "Secure authentication & authorization",
    ],
  },
  {
    icon: <Settings size={34} />,
    heading: "Workflow Automation",
    desc: `Boost productivity with automated workflows leveraging AI-assisted tools and modern development practices.`,
    list: [
      "Code acceleration with AI tools",
      "Automated testing & debugging",
      "Task automation scripts",
      "Continuous integration setups",
    ],
  },
  {
    icon: <Globe size={34} />,
    heading: "WordPress & CMS Solutions",
    desc: `Professional WordPress site development with Elementor, plugin integration, and SEO-focused optimization.`,
    list: [
      "Custom WordPress websites",
      "Elementor-based landing pages",
      "Plugin integration & setup",
      "SEO and performance tuning",
    ],
  },
  {
    icon: <Database size={34} />,
    heading: "Database Design & Management",
    desc: `Efficient database structures and secure management solutions with MongoDB.`,
    list: [
      "Database schema planning",
      "Optimized queries & indexing",
      "Data migration & backups",
      "Secure cloud deployment",
    ],
  },
  {
    icon: <LineChart size={34} />,
    heading: "Analytics & Optimization",
    desc: `Monitor, measure, and optimize your website’s performance and user experience using modern analytics tools.`,
    list: [
      "Google Analytics integration",
      "SEO keyword strategy",
      "User behavior tracking",
      "Conversion optimization",
    ],
  },
];
