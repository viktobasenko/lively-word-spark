
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'regular';
}

const Logo = ({ size = 'regular' }: LogoProps) => {
  const isSmall = size === 'small';
  
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className={isSmall ? "w-8 h-8" : "w-12 h-12"}>
        <img src="/img/logo.svg" alt="FITKIDS Logo" className="w-full h-full object-contain" />
      </div>
      {isSmall && <span className="text-lg md:text-2xl font-bold text-black">FITKIDS</span>}
    </Link>
  );
};

export default Logo;
