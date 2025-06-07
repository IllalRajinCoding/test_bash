import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import pdf from "../assets/piagam.pdf";
import no from "../assets/error.svg";

export const NOTFOUND = {
  img: no
}

export const HERO_CONTENT = `Learn and learn that is motivation for me to be a good man. I just like coding, drawing, ethical hacking and learn machine learning, cause i love mathematics.`;

export const ABOUT_TEXT = `I am student at STT Terpadu Nurul Fikri semester 2, study program Technic Informatika, and I am interested in Machine Learning. I am learning and practicing every day to improve my skills.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Illuslator",
    company: "Freelance",
    description: `I Accept project illuslator fan art anime or something same`,
    technologies: ["Ibis Paint", "Traditional"],
    certificateUrl: null

  },
  {
    year: "2021 - 2024",
    role: "Design Grafis",
    company: "Freelance",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Pixellab", "Alight Motion", "Figma", "Adobe Photoshop"],
    certificateUrl: null
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Led full-stack development of an e-commerce platform as part of a 4-person team for STT Terpadu Nurul Fikri semester project. Implemented both frontend interfaces using Tailwind CSS and backend functionality with PHP/MySQL, handling user authentication, product management, and order processing.",
    technologies: ["HTML", "CSS", "Tailwindcss", "PHP", "MySql"],
  },
  {
    title: "Puskesmas Website",
    image: project2,
    description:
      "Developed a comprehensive healthcare management system with a team of 4. Implemented CRUD operations, user authentication, and appointment scheduling. Built responsive frontend with Tailwind CSS and handled backend logic for data management.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "Indonesian, West Java, Bogor",
  phoneNo: "+628 57181 15734",
  email: "roxyuciha@gmail.com",
};
