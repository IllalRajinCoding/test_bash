import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function TypingEffect() {
  return (
    <motion.div
      className="typing-effect-container text-2xl lg:text-5xl" // Tambahkan class untuk styling lebih lanjut jika perlu
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <TypeAnimation
        sequence={[
          "I'm Robbanie Hillaly Kurniadien",
          1000,
          "I'm a Frontend Developer",
          1000,
          () => {
            console.log("Done typing!");
          },
        ]}
        speed={20
        }
        wrapper={motion.span}
        cursor={true}
        repeat={Infinity}
        className="typing-text text-" // Tambahkan class untuk styling teks
        initial={{ opacity: 0.5, scale: 0.9, textShadow: "0 0 0px rgba(255, 255, 255, 0)" }}
        animate={{
          opacity: 1,
          scale: 1,
          textShadow: "0 0 10px rgba(255, 255, 255, 0.9)",
        }}
        transition={{ duration: 0.3, ease: "backOut" }}
      />
    </motion.div>
  );
}