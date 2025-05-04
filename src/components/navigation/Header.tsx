
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from '../Logo';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { Button } from '@/components/ui/button';
import { Vk } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed w-full py-4 px-6 md:px-10 transition-all duration-300 z-50",
      isScrolled 
        ? "bg-white/90 dark:bg-fitkids-dark-blue/90 shadow-md backdrop-blur-md" 
        : "bg-transparent"
    )}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Removed as requested */}
        <div className="w-10"></div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" currentPath={location.pathname}>Главная</NavLink>
          <NavLink to="/about" currentPath={location.pathname}>О нас</NavLink>
          <NavLink to="/register" currentPath={location.pathname}>Записаться</NavLink>
        </div>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="ВКонтакте">
              <Vk className="h-5 w-5 text-black dark:text-white" />
            </Button>
          </a>
          
          {/* Mobile Menu (Hamburger) */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
