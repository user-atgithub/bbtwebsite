import { useEffect, useRef, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';  // Importing the FaUser icon
import { authContext } from '../../Assets/context/authContext';
import logo from '../../Assets/images/logo.png';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/technicians', display: 'Find a Technician' },
  { path: '/services', display: 'Services' },
  { path: '/reviews', display: 'Reviews' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 80) {
          headerRef.current.classList.add('sticky__header');
        } else {
          headerRef.current.classList.remove('sticky__header');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  };

  useEffect(() => {
    handleStickyHeader();
  }, []);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('show__menu');
    }
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/home">
              <img src={logo} alt="Logo" className="cursor-pointer" />
            </Link>
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Right */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="flex items-center gap-2">
                {/* Greeting */}
                <span className="text-textColor text-[16px] font-[600]">
                  Hey, {user?.name || "User"}!
                </span>

                {/* Profile Photo or Icon */}
                <Link to={role === "technician" ? "/technicians/profile/me" : "/users/profile/me"}>
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer flex items-center justify-center bg-gray-200">
                  {user?.photo ? (
  <img
    src={user.photo}
    className="w-full h-full rounded-full"
    alt="User"
  />
) : (
  // Person Icon
  <FaUser className="w-6 h-6 text-black" />
)}
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <FaUser className="w-[20px] h-[20px] text-primaryColor cursor-pointer" />  {/* Person Icon */}
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
