import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Software Engineer specializing in full-stack development with expertise in React.js, Next.js, Node.js, and PostgreSQL. With hands-on experience in designing scalable systems, automating workflows, and optimizing performance, I thrive in building innovative solutions that enhance efficiency and user experience. My journey has been fueled by a deep curiosity for solving complex problems, and I am always eager to learn and adopt new technologies.`;

export const ABOUT_TEXT = `As a dedicated Software Engineer, I have worked on developing scalable and efficient web applications, leveraging technologies like React.js, Next.js, Node.js, PostgreSQL, and SpringBoot. My expertise spans frontend and backend development, API design, and system scalability. I am passionate about optimizing processes, automating workflows, and improving system performance. I enjoy collaborating with teams, contributing to open-source projects, and staying updated with emerging technologies. Beyond coding, I love problem-solving, exploring new innovations, and mentoring aspiring developers.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Engineer",
    company: "Société Générale",
    description: `Contributed to the development of the Service Level Management (SLM) system, leveraging React.js, SpringBoot, and PostgreSQL for efficient SLA management. Implemented automated notifications and outage alerts using SMTP protocols, improving response times and streamlining approval workflows. Designed and integrated a robust data archival process using SCAD for long-term storage, optimizing system scalability.`,
    technologies: [
      "React.js",
      "SpringBoot",
      "PostgreSQL",
      "Javascript",
      "Node.js",
      "SCAD",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Sofware Developer",
    company: "Decodes",
    description: `Developed a full-stack web application integrating the MERN stack with Docker to enhance container management without system dependencies. Designed and implemented DevOps automation by executing Docker commands directly through the interface, streamlining containerization workflows.`,
    technologies: ["MERN Stack", "Docker", "DevOps", "MongoDB"],
  },
  {
    year: "2021 - 2022",
    role: "Softeare Developer",
    company: "Venrate",
    description: `Developed robust indexers to track DeFi protocol data, tackling complex protocol mechanics and real-time analytics. Optimized blockchain data pipelines to ensure reliability and accuracy. Designed and enhanced data retrieval systems to support high-volume on-chain analytics for better decision-making.`,
    technologies: ["Blockchain", "React.js", "Ceramic"],
  },
];

export const PROJECTS = [
  {
    title: "Pizza Bite",
    image: project1,
    description:
      "A fully functional e-commerce website with features like pizza's listing, shopping cart, and user authentication and payment gateway",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Simple Pament System",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "C-101, Candeur Landmark, Bangaluru",
  phoneNo: "+91 706-095-7511",
  email: "gogl.aditya25@gmail.com",
};
