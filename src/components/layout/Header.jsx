import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/codemindailogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "AI", path: "/services/ai" },
        { name: "Python", path: "/services/python" },
        { name: "Learning", path: "/services/learning" },
      ],
    },
    { name: "eCommerce Website", path: "/ecommerce-website" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Our Products", path: "/our-products" },
    { name: "Get Quote", path: "/get-quote" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) =>
            item.submenu ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <Link
                  to={item.path}
                  className="flex items-center text-light font-medium cursor-pointer"
                >
                  {item.name}
                  <ChevronDown size={16} className="ml-1" />
                </Link>

                {/* Submenu */}
                {serviceOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-light shadow-lg rounded-md py-2 w-44">
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="block px-4 py-2 text-primary hover:bg-secondary hover:text-dark transition"
                        onClick={() => setServiceOpen(false)} // 👈 closes on click
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="relative text-light font-medium group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </Link>
            )
          )}

          {/* Contact Us Button */}
          <Link
            to="/contact-us"
            className="ml-4 px-4 py-2 rounded-full bg-secondary text-dark font-semibold 
            hover:bg-light hover:scale-105 transition-all duration-300 shadow-md"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-light"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 py-4 px-6 bg-primary animate-slideDown">
          {navItems.map((item, index) =>
            item.submenu ? (
              <div key={index}>
                <button
                  className="flex justify-between items-center w-full text-light"
                  onClick={() => setServiceOpen(!serviceOpen)}
                >
                  {item.name} <ChevronDown size={16} />
                </button>
                {serviceOpen && (
                  <div className="pl-4 mt-2 flex flex-col space-y-2">
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="text-light hover:text-secondary"
                        onClick={() => {
                          setIsOpen(false); // 👈 closes mobile menu
                          setServiceOpen(false);
                        }}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="text-light hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {item.name}
              </Link>
            )
          )}
          {/* Contact Us Button (Mobile) */}
          <Link
            to="/contact-us"
            className="px-4 py-2 rounded-full bg-secondary text-dark font-semibold 
            hover:bg-light hover:scale-105 transition-all duration-300 shadow-md text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
