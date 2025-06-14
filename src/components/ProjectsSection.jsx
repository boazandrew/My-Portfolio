import { ArrowRight, ExternalLink, Github } from "lucide-react";
import BusBookingApp from "../assets/Projects/Bus-Booking-And-Management-System.png";
import CDPChatbot from "../assets/Projects/CDP-Chatbot.png";
import GuviInternship from "../assets/Projects/Guvi-Internship.png";
import MimicingGoogleSheets from "../assets/Projects/Mimicing-Google-Sheets.png";
import WebProjects from "../assets/Projects/Web-Development-Projects.png";

const projects = [
  {
    id: 1,
    title: "Bus Booking & Management System",
    description:
      "A full-stack application to manage bus reservations, schedules, and user roles using Spring Boot, Hibernate, and MySQL.",
    image: BusBookingApp,
    tags: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    demoUrl: "#",
    gitHubUrl:
      "https://github.com/boazandrew/Bus-Booking-and-Management-System",
  },
  {
    id: 2,
    title: "Google Sheets Clone",
    description:
      "A dynamic React-based UI that mimics Google Sheets, featuring cell formulas, auto-updates, and drag-fill functionality. Built as part of an interview task.",
    image: MimicingGoogleSheets,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://mimicing-google-sheets.netlify.app/",
    gitHubUrl: "https://github.com/boazandrew/Mimicing-Google-Sheets",
  },
  {
    id: 3,
    title: "CDP Chatbot",
    description:
      "An interactive chatbot system built with React/Tailwind CSS/TypeScript for guiding user flows based on input logic. Developed as part of an interview challenge.",
    image: CDPChatbot,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://cdn-chatbot-creation.netlify.app/",
    gitHubUrl: "https://github.com/boazandrew/CDP-ChatBot",
  },
  {
    id: 4,
    title: "GUVI Login & Signup System",
    description:
      "A complete user authentication flow with PHP & JavaScript featuring form validation, password toggle, and role selection.",
    image: GuviInternship,
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    demoUrl: "#",
    gitHubUrl: "https://github.com/boazandrew/Guvi_Internship",
  },
  {
    id: 5,
    title: "JavaScript & CSS Mini Projects",
    description:
      "A collection of multiple mini web projects using HTML, CSS, and JavaScript to demonstrate core UI and DOM manipulation concepts.",
    image: WebProjects,
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "#",
    gitHubUrl: "https://github.com/boazandrew/Web_Development_Projects",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few of my recent projects—each thoughtfully built to blend
          functionality, performance, and clean design. From interview
          challenges to full-stack systems, these projects reflect my hands-on
          learning and passion for crafting intuitive digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-0">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                <div className="mt-auto pt-2">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/boazandrew/" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">Check My Github <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  );
};
