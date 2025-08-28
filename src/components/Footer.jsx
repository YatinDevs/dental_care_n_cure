import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  MapPin,
  Briefcase,
  Code,
  BookOpen,
  BarChart3,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Services", path: "/services" },
    { label: "Training", path: "/training" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contactus" },
  ];

  const services = [
    { label: "Software Development", path: "/services/development" },
    { label: "Website Development", path: "/services/website" },
    { label: "Digital Marketing", path: "/services/marketing" },
    { label: "Bulk SMS Services", path: "/services/sms" },
  ];

  const trainingPrograms = [
    { label: "Full-Stack Development", path: "/training/fullstack" },
    { label: "Data Science", path: "/training/datascience" },
    { label: "Digital Marketing", path: "/training/digital-marketing" },
    { label: "Cloud Computing", path: "/training/cloud" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      label: "Facebook",
      url: "https://facebook.com/richsystemsolutions",
    },
    {
      icon: <Twitter size={18} />,
      label: "Twitter",
      url: "https://twitter.com/richsystems",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      url: "https://linkedin.com/company/rich-system-solutions",
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      url: "https://instagram.com/richsystemsolutions",
    },
    {
      icon: <Youtube size={18} />,
      label: "YouTube",
      url: "https://youtube.com/richsystemsolutions",
    },
  ];

  return (
    <footer className="bg-[#1A317F] text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <div className="mb-6 flex items-center">
            <Code className="text-white mr-2" size={28} />
            <span className="text-xl font-bold">RICH Solutions</span>
          </div>
          <p className="text-[#C4CBD3] mb-6">
            RICH System Solutions provides innovative software development,
            digital marketing, and IT training services to help businesses grow
            and succeed in the digital age.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon, label, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <span className="text-[#48A93B] mr-2">•</span>
                <button
                  onClick={() => navigate(link.path)}
                  className="text-[#C4CBD3] hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <span className="text-[#48A93B] mr-2">•</span>
                <button
                  onClick={() => navigate(service.path)}
                  className="text-[#C4CBD3] hover:text-white transition-colors text-left"
                >
                  {service.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
          <ul className="space-y-4 text-[#C4CBD3]">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#48A93B] mt-1 flex-shrink-0" />
              <span>
                4th Floor, Akravi Disha, 401, opposite Hotel City Pride,
                Tilakwadi, Nashik, Maharashtra 422002
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#48A93B]" />
              <a
                href="mailto:info@richsystemsolutions.com"
                className="hover:text-white transition-colors"
              >
                info@richsystemsolutions.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#48A93B]" />
              <a
                href="tel:+91XXXXXXXXXX"
                className="hover:text-white transition-colors"
              >
                +91 XXXXXXXXXX
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-[#48A93B]" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-[#8493BC] border-t border-[#2A3F8F] pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            RICH System Solutions Pvt. Ltd.
          </span>
          . All Rights Reserved.{" "}
          <button
            onClick={() => navigate("/privacy-policy")}
            className="text-[#48A93B] hover:underline"
          >
            Privacy Policy
          </button>{" "}
          |{" "}
          <button
            onClick={() => navigate("/terms")}
            className="text-[#48A93B] hover:underline"
          >
            Terms of Service
          </button>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
