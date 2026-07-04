import missCoffeeImage from "../assets/images/image.png";
import miniCalcImage from "../assets/images/mini-calc.jpg";

const projects = [
  {
    id: 1,
    title: "Miss. W Coffe",
    description: "Online coffee shop platform for Miss. W Coffe with product catalog, ordering, and admin dashboard.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/wohiba-mohammedreshid/Miss.W-coffe.git",
    demo: "https://miss-w-coffe-backend.onrender.com/",
    image: missCoffeeImage,
  },
  {
    id: 2,
    title: "Academic Registration System",
    description: "Course registration system for students with enrollment, schedules, and transcript tracking.",
    category: "Backend",
    tags: ["Node.js", "Express", "PostgreSQL", "REST API"],
    github: "https://github.com/wohiba-mohammedreshid/academic-registration-system.git",
    demo: "https://academic-registration.example.com",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "My-E-Commerce",
    description: "Responsive online store with product catalog, shopping cart, and checkout flow.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "Stripe", "Firebase"],
    github: "https://github.com/wohiba-mohammedreshid/My-E-Commerce.git",
    demo: "https://ecommerce-store.example.com",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "mini-Calc.App",
    description: "Lightweight calculator app with the essential arithmetic operations and a simple UI.",
    category: "Frontend",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/wohiba-mohammedreshid/mini-Calc.App.git",
    demo: "https://mini-calc-app.example.com",
    image: miniCalcImage,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React, showcasing projects, blog posts, and contact details.",
    category: "Frontend",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.example.com",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  },
];

export default projects;
