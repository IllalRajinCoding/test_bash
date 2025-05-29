import { HERO_CONTENT } from "../constants/index.js"; // Pastikan path ini benar
import profilePict from "../assets/AnimeProfile.jpg"; // Pastikan path ini benar
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
        <div className="w-full px-4 mb-8 lg:mb-0 lg:w-1/2 flex justify-center lg:justify-start">
          <div className="flex flex-col pt-25 items-center lg:items-start text-center lg:text-left">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent" // Efek gradient pada teks nama
            >
              Hallo, im Robbanie Hillaly Kurniadien
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="my-2 max-w-xl py-6 text-xl lg:text-2xl text-neutral-300 font-semibold tracking-tight" // Sedikit penyesuaian teks
            >
              Full Stack Dev
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="my-2 max-w-xl py-6 text-lg lg:text-xl text-neutral-400 leading-relaxed" // Penyesuaian line height
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 lg:p-8 flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={profilePict}
            alt="profile"
            className="max-w-full h-auto rounded-lg shadow-md lg:max-w-md" // Tambahkan max-w-md untuk membatasi ukuran gambar di desktop
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
