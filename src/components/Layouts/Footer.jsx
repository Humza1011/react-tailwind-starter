/* eslint-disable react/no-unescaped-entities */
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { title: "About Us", href: "#" },
  { title: "Services", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Contact Us", href: "#" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-xl mb-4">Your Company</h2>
          <p className="text-gray-400">
            Creating solutions for today's challenges.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          <p className="text-gray-400">Email: contact@yourcompany.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        &copy; {currentYear} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
