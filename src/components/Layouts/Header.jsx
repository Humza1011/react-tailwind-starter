import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { getUserData } from "../../utils/auth";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = getUserData();

  // Navigation links data with paths for react-router-dom
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary p-6 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-3xl">Company Name</div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-white font-semibold hover:text-green-200 transition duration-150"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center">
          <span className="text-white font-semibold mr-2">{user.name}</span>
          <img
            src={user.imageURL}
            alt="Profile avatar"
            className="h-8 w-8 rounded-full"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <IoCloseSharp /> : <CgMenu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-primary shadow-md py-4 px-6 z-50 flex flex-col items-center md:hidden"
        >
          <nav>
            <ul className="flex flex-col space-y-4 w-full text-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white font-semibold hover:text-green-200 transition duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center mt-4 gap-4">
            <span className="text-white font-semibold">{user.name}</span>
            <img
              src={user.imageURL}
              alt="Profile avatar"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
