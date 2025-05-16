import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Projects", href: "#projects" },
    { id: 5, name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">{"<Aayush Upadhyay/>"}</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
  onClick={toggleDarkMode}
  className="text-2xl ml-4 text-yellow-500 dark:text-yellow-300"
>
  {isDarkMode ? <FaSun /> : <FaMoon />}
</button>

        {/* Hamburger */}
        <div className="md:hidden ml-4 text-2xl text-gray-700 dark:text-gray-200">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 text-gray-700 dark:text-gray-200">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
