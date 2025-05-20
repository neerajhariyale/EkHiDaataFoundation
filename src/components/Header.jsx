import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ngologo from '../assets/logo.png';
import { Menu, X } from 'lucide-react'; // Icon package like lucide-react or heroicons

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Drives', path: '/drive' },
    { name: 'Join Us', path: '/joinus' },
  ];

  return (
    <div className="w-full shadow-md  ">
      <div className="flex justify-between border-none items-center px-4 py-3 md:px-10 max-w-screen-xl mx-auto">

        {/* Logo */}
        <div>
          <img
            src={ngologo}
            alt="Logo"
            className="h-18 w-18 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <p
              key={item.path}
              className={`cursor-pointer transition duration-100 ${
                isActive(item.path)
                  ? 'border-b-2 border-red-500 font-semibold text-red-600'
                  : 'hover:border-b-2 hover:border-red-500'
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </p>
          ))}
        </div>

        {/* Donate Button */}
        <div className="hidden md:flex">
          <button
            className="bg-red-500 rounded-full h-10 w-32 text-white hover:bg-red-700 transition"
            onClick={() => navigate('/donate')}
          >
            Donate
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow-md">
          {menuItems.map((item) => (
            <p
              key={item.path}
              className={`cursor-pointer text-lg ${
                isActive(item.path)
                  ? 'text-red-600 font-semibold underline'
                  : 'hover:text-red-500'
              }`}
              onClick={() => {
                navigate(item.path);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.name}
            </p>
          ))}
          <button
            className="bg-red-500 rounded-full px-6 py-2 text-white hover:bg-red-700"
            onClick={() => {
              navigate('/donate');
              setIsMobileMenuOpen(false);
            }}
          >
            Donate
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
