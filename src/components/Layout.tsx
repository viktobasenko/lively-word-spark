
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './navigation/Header';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  // Initialize scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      
      {/* Theme Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
