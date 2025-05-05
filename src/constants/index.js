import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import pdf from "../assets/piagam.pdf";
import no from "../assets/error.svg";

export const NOTFOUND = {
  img: no
}

export const HERO_CONTENT = `Learn and learn that is motivation for me to be Front-End developer. I just like coding, drawing, ethical hacking and learn machine learning, cause i love mathematics.`;

export const ABOUT_TEXT = `I am student at STT Terpadu Nurul Fikri semester 2, study program Technic Informatika, and I am interested in Front-End development. I am learning and practicing every day to improve my skills. I am also interested in machine learning and ethical hacking.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Illuslator",
    company: "Freelance",
    description: `I Accept project illuslator fan art anime or something same`,
    technologies: ["Ibis Paint", "Traditional"],
    certificateUrl: null

  },
  {
    year: "2023",
    role: "Winner 2st Manga Month Launguage",
    company: "SMAN 1 Babakan Madang",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Offline"],
    certificateUrl: null
  },
  {
    year: "2021 - Present",
    role: "Design Grafis",
    company: "Freelance",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Pixellab", "Alight Motion", "Figma", "Adobe Photoshop"],
    certificateUrl: null
  },
  {
    year: "2025",
    role: "Winner Gold Medal Mathematics",
    company: "KSN - Kejuaraan Sains Nasional",
    description: `Contributed event PUSKESNAS online`,
    technologies: ["Online"],
    certificateUrl: pdf
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
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
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Indonesian, West Java, Bogor",
  phoneNo: "+628 57181 15734",
  email: "roxyuciha@gmail.com",
};
