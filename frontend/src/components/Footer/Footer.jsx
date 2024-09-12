import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';  // Keep the logo import
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://www.facebook.com",
    icon: <AiFillFacebook className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://www.instagram.com/bigbeats.inc?igsh=MXBrNXRncGhhMHg1cQ%3D%3D&utm_source=qr",
    icon: <AiOutlineInstagram className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://www.linkedin.com",
    icon: <RiLinkedinFill className="group-hover:text-white w-6 h-6" />,
  },
];

const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/", display: "Blog" },
];

const quickLinks02 = [
  { path: "/technicians", display: "Find a Technician" },
  { path: "/login", display: "Request an Appointment" },
  { path: "/", display: "Find a Location" },
  { path: "/contact", display: "Get an Opinion" },
];

const quickLinks03 = [
  { path: "/", display: "Donate" },
  { path: "/contact", display: "Contact Us" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-8 md:gap-12 mb-8">
          <div className="flex-1">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul className="space-y-4">
              {quickLinks01.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-textColor hover:text-primaryColor">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul className="space-y-4">
              {quickLinks02.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-textColor hover:text-primaryColor">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul className="space-y-4">
              {quickLinks03.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-textColor hover:text-primaryColor">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

{/* Center-aligned Logo, Social Media Links, and Copyright */}
<div className="flex flex-col items-center justify-center text-center">
  {/* Logo centered and resized to 1/2 of its original size */}
  <div className="mb-4">
    <Link to="/home">
      <img src={logo} alt="Logo" className="w-1/2 mx-auto" />
    </Link>
  </div>

  {/* Social Media Icons */}
  <div className="flex gap-4 mb-4">
    {socialLinks.map((link, index) => (
      <a 
        href={link.path} 
        key={index} 
        className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon}
      </a>
    ))}
  </div>

  {/* Copyright Text */}
  <p className="text-center text-[16px] leading-7 font-[400] text-textColor">
    Copyright © {year} developed by Bhuvnesh Magon. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
