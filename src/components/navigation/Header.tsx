import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from '../Logo';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { Button } from '@/components/ui/button';
// Удалим Vk, так как он не экспортируется из lucide-react

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full py-4 px-6 md:px-10 transition-all duration-300 z-50',
        isScrolled
          ? 'bg-white/90 dark:bg-fitkids-dark-blue/90 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-10" />

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" currentPath={location.pathname}>
            Главная
          </NavLink>
          <NavLink to="/about" currentPath={location.pathname}>
            О нас
          </NavLink>
          <NavLink to="/register" currentPath={location.pathname}>
            Записаться
          </NavLink>
        </div>

        {/* ВКонтакте и мобильное меню */}
        <div className="flex items-center gap-4">
          <a
            href="https://vk.com/clubfitkids"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ВКонтакте"
          >
            <img
              src="/vk-logo.svg"
              alt="ВКонтакте"
              className="w-6 h-6 text-black dark:text-white"
            />
          </a>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
