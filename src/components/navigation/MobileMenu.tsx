
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MobileNavLink from './MobileNavLink';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  return (
    <div>
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
        aria-label="Открыть меню"
      >
        <div className="w-6 flex flex-col gap-1.5">
          <span className={cn(
            "block h-0.5 bg-gray-800 transition-transform duration-300",
            isOpen ? "transform rotate-45 translate-y-2" : ""
          )} />
          <span className={cn(
            "block h-0.5 bg-gray-800 transition-opacity duration-300",
            isOpen ? "opacity-0" : "opacity-100"
          )} />
          <span className={cn(
            "block h-0.5 bg-gray-800 transition-transform duration-300",
            isOpen ? "transform -rotate-45 -translate-y-2" : ""
          )} />
        </div>
      </button>
      
      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "absolute top-full right-0 left-0 bg-white/95 shadow-lg py-4 px-6 transition-all duration-300 ease-in-out backdrop-blur-md",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="flex flex-col gap-4 items-center">
          <MobileNavLink to="/" currentPath={location.pathname}>Главная</MobileNavLink>
          <MobileNavLink to="/about" currentPath={location.pathname}>О нас</MobileNavLink>
          <MobileNavLink to="/register" currentPath={location.pathname}>Записаться</MobileNavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
