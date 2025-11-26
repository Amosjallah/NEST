import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* Top Bar */}
      <div className="bg-montessori-primary text-white text-xs md:text-sm py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex space-x-6 font-medium">
            <span className="flex items-center gap-2"><Phone size={14} /> {SCHOOL_INFO.phone}</span>
            <span className="flex items-center gap-2"><Clock size={14} /> {SCHOOL_INFO.hours}</span>
          </div>
          <div className="flex space-x-4">
             <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-montessori-accent transition font-medium">{SCHOOL_INFO.email}</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-montessori-neutral/95 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <div className="w-12 h-12 bg-montessori-secondary rounded-2xl rotate-3 flex items-center justify-center text-white font-bold text-2xl font-hand shadow-md">
                AN
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-montessori-dark leading-none font-hand">Ample's Nest</span>
                <span className="text-xs text-montessori-primary tracking-[0.2em] font-bold uppercase mt-0.5">Montessori</span>
              </div>
            </NavLink>

            {/* Desktop Links */}
            <nav className="hidden md:flex space-x-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-montessori-primary shadow-sm'
                        : 'text-montessori-dark hover:text-montessori-primary hover:bg-white/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-montessori-dark hover:text-montessori-primary focus:outline-none bg-white/50 p-2 rounded-xl"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-montessori-neutral shadow-xl transition-all duration-300 ease-in-out z-30 ${
          isOpen ? 'max-h-screen opacity-100 border-b border-stone-200' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-6 py-4 rounded-xl text-lg font-bold ${
                  isActive
                    ? 'bg-montessori-primary text-white shadow-md'
                    : 'text-montessori-dark hover:bg-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-6 mt-4 border-t border-stone-200">
             <div className="flex flex-col gap-3 text-sm text-montessori-dark font-medium px-6 pb-6">
                <div className="flex items-center gap-3"><Phone size={18} className="text-montessori-secondary" /> {SCHOOL_INFO.phone}</div>
                <div className="flex items-center gap-3"><Clock size={18} className="text-montessori-secondary" /> {SCHOOL_INFO.hours}</div>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;