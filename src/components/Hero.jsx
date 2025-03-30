import { HERO_CONTENT } from "../constants/index.js";
import profilePict from "../assets/AnimeProfile.jpg";
import { motion } from "framer-motion";
import TypingEffect from "../fitur/TypingEffect.jsx";


const Hero = () => {
  return (
    <div className=" pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full px-4 mb-8 lg:mb-0 lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <TypingEffect
              text={"I'm Robbanie Hillaly Kurniadien"}
              speed={100}
              delay={2000}
            />
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-sm lg:text-4xl tracking-tight text-transparent text-center lg:text-left"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="my-2 max-w-xl py-6 font-ligh whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}t text-white tracking-tighter lg:text-left text-sm lg:text"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={profilePict}
              alt="profile"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
