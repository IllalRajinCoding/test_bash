import { motion, useAnimation } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaPhp } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiPython } from "react-icons/si";
import { useEffect, useRef } from "react";

const skills = [
  { icon: <SiMongodb className="text-7xl text-green-400" />, name: "MongoDB" },
  { icon: <SiExpress className="text-7xl text-gray-400" />, name: "Express" },
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React" },
  { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js" },
  { icon: <SiTypescript className="text-7xl text-blue-500" />, name: "Typescript" },
  { icon: <FaPhp className="text-7xl text-blue-500" />, name: "PHP" },
  { icon: <SiPython className="text-7xl text-yellow-500" />, name: "Python" },
];

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const scrollWidth = ref.current.scrollWidth;
    const offsetWidth = ref.current.offsetWidth;
    
    const sequence = async () => {
      await controls.start({
        x: -scrollWidth / 2,
        transition: { 
          duration: 200, 
          ease: "linear", 
          repeat: Infinity, 
          repeatType: "loop" 
        }
      });
    };

    sequence();
  }, [controls]);

  return (
    <div className="border-b border-neutral-800 pb-4 ">
      <h2 className="my-20 text-center text-4xl text-white">Skills</h2>
      <div className="relative overflow-hidden py-8">
        <motion.div
          ref={ref}
          className="flex gap-8"
          animate={controls}
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 rounded-2xl border-2 border-neutral-800 p-8 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col items-center">
                {skill.icon}
                <p className="mt-4 text-center text-lg text-white">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;