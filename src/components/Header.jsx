import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.webp";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = (
    <ul
      className={`md:flex ml-auto md:gap-14 ${
        isMobile && !showMenu ? "hidden" : "ml-auto bg-transparent"
      }`}
    >
      <li className="transition-all hover:text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="transition-all hover:text-white">
        <Link to="/about"> About us</Link>
      </li>
      <li className="transition-all hover:text-white">
        <Link to="/contact">Contact us</Link>
      </li>
      <button className=" border-2 border-white px-4 md:py-2 py-1 hover:bg-white hover:text-black rounded-sm transition-all ">
        <Link to="/user/signup">Sign up</Link>
      </button>
    </ul>
  );

  return (
    <nav className="md:flex items-center justify-between text-gray-400 px-5 py-2 md:py-6 shadow-xl font-bold">
      <Link to="/">
        <h2 className="text-md hover:text-white transition-all md:text-xl">Somil Gupta</h2>
      </Link>
      {isMobile ? (
        <div className="">
          <img
            src={hamburger}
            alt="hamburger"
            className="size-10 ml-auto -mt-6"
            onClick={() => setShowMenu(!showMenu)}
          />
          {menuItems}
        </div>
      ) : (
        menuItems
      )}
    </nav>
  );
};

export default Header;
