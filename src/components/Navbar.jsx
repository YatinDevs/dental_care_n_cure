// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronDown } from "lucide-react";

// You'll want to create your dental logo component
import Logo from "./Logo";

const primaryColor = "#F9C74F"; // A bright, cheerful yellow
const secondaryColor = "#495057"; // A dark gray for contrast
const accentColor = "#4CAF50"; // A professional green

const navItems = [
  { label: "Home", path: "/" },
  { label: "Treatments", path: "/treatments" },
  { label: "Patient Safety", path: "/patient-safety" },
  { label: "Our Team", path: "/our-team" },
  { label: "Patient Reviews", path: "/reviews" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* Top CTA Bar */}
      <div
        className="bg-white/90 backdrop-blur-sm text-sm px-4 fixed top-0 left-0 w-full z-[100] border-b border-gray-200"
        style={{ display: scrolled ? "none" : "block" }}
      >
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex items-center space-x-4 text-gray-700">
            <div className="flex items-center">
              <Mail size={14} className="mr-1" style={{ color: accentColor }} />
              <span className="hidden sm:inline">info@dentalwebsite.com</span>
            </div>
            <div className="flex items-center">
              <Phone
                size={14}
                className="mr-1"
                style={{ color: accentColor }}
              />
              <span className="hidden sm:inline">+1 (555) 123-4567</span>
            </div>
          </div>
          <Link to="/contact">
            <button
              className="px-4 py-2 text-white rounded-lg transition-colors duration-300 font-semibold text-xs"
              style={{ backgroundColor: primaryColor }}
            >
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full left-0 transition-all duration-300 z-[90] ${
          scrolled
            ? "bg-white/90 shadow-md backdrop-blur-sm top-0"
            : "bg-white/90 backdrop-blur-sm"
        }`}
        style={{ top: scrolled ? "0" : "30px" }}
      >
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="cursor-pointer">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-2 font-medium text-gray-800">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? `text-white font-semibold`
                      : `hover:bg-gray-100 hover:text-gray-800`
                  }`}
                  style={{
                    backgroundColor:
                      location.pathname === item.path
                        ? accentColor
                        : "transparent",
                    color:
                      location.pathname === item.path
                        ? "white"
                        : secondaryColor,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 p-2 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-[110] shadow-xl p-6 space-y-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={toggleMenu}>
              <Logo />
            </Link>
            <button onClick={toggleMenu} className="text-gray-800 p-2">
              <X size={28} />
            </button>
          </div>
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={toggleMenu}
                className={`block text-lg font-medium py-3 px-2 rounded transition-colors ${
                  location.pathname === item.path
                    ? `text-white font-semibold`
                    : `hover:bg-gray-100 hover:text-gray-800`
                }`}
                style={{
                  backgroundColor:
                    location.pathname === item.path
                      ? accentColor
                      : "transparent",
                  color:
                    location.pathname === item.path ? "white" : secondaryColor,
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <button
                onClick={toggleMenu}
                className="w-full mt-4 px-4 py-3 text-white rounded-lg font-semibold transition-colors duration-300"
                style={{ backgroundColor: primaryColor }}
              >
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
