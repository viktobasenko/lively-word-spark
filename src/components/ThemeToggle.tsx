
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Initialize theme based on local storage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('fitkids-theme');
    
    if (savedTheme === 'dark' || 
        (!savedTheme && 
          window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkTheme(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkTheme(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('fitkids-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('fitkids-theme', 'dark');
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white dark:bg-fitkids-dark-blue shadow-lg hover:shadow-xl transition-all duration-300 text-fitkids-yellow"
      aria-label={isDarkTheme ? "Переключить на светлую тему" : "Переключить на темную тему"}
    >
      {isDarkTheme ? (
        <Sun size={24} className="animate-[spin_1s_ease-in-out]" />
      ) : (
        <Moon size={24} className="animate-[spin_1s_ease-in-out]" />
      )}
    </button>
  );
};

export default ThemeToggle;
