
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md py-6 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-600 mb-2">
          © {new Date().getFullYear()} FITKIDS Тихвин. Все права защищены.
        </p>
        <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-800 underline">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
