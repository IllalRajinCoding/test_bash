import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-2xl">Contact</h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
