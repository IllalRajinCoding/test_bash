import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: "CSS" },
    {
      icon: <SiTailwindcss className="text-4xl text-cyan-400" />,
      name: "Tailwind",
    },
    { icon: <FaReact className="text-4xl text-blue-400" />, name: "React" },
    { icon: <FaPhp className="text-4xl text-purple-500" />, name: "PHP" },
    { icon: <FaJs className="text-4xl text-yellow-400" />, name: "JavaScript" },
    { icon: <SiMysql className="text-4xl text-blue-300" />, name: "MySQL" },
    { icon: <FaNodeJs className="text-4xl text-green-500" />, name: "Node.js" },
    { icon: <FaGitAlt className="text-4xl text-red-500" />, name: "Git" },
    { icon: <SiNextdotjs className="text-4xl text-white" />, name: "Next.js" },
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="my-20 text-center text-4xl">
          Tech & <span className="text-neutral-500">Skill</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-neutral-700 rounded-full">
                  {skill.icon}
                </div>
                <h3 className="text-xl  mb-2">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
