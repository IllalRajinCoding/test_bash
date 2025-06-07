import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  const handleItemClick = (certificateUrl) => {
    if (certificateUrl) {
      window.open(certificateUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Sertifikat/Piagam tidak tersedia untuk pengalaman ini.");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-5">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center cursor-pointer" // Tambahkan cursor-pointer
            onClick={() => handleItemClick(experience.certificateUrl)} // Tambahkan onClick handler
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies &&
                experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt04 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;