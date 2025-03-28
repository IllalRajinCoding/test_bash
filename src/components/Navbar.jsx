import Logo from "../assets/react.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Link =()=> {
  
}

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center transition-all duration-300 group">
        <img
          className="mx-2 w-10 transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_60px_rgba(186,230,253,1)]"
          src={Logo}
          alt=""
        />
      </div>
      <div className="m-8 text-white flex items-center justify-center gap-4 text-2xl hover:text-10xl">
        <FaLinkedin className="hover:text-4xl duration-300 transition-all" />
        <FaGithub className="hover:text-4xl duration-300 transition-all" />
        <FaSquareXTwitter className="hover:text-4xl duration-300 transition-all" />
        <FaInstagram className="hover:text-4xl duration-300 transition-all" />
      </div>
    </nav>
  );
};

export default Navbar;
