
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'small' | 'regular';
}

const Logo = ({ size = 'regular' }: LogoProps) => {
  const isSmall = size === 'small';
  
  // Return just the text, no logo as requested
  return (
    <Link to="/" className="flex items-center gap-3">
      {isSmall && <span className="text-lg md:text-2xl font-bold text-black dark:text-white">FITKIDS</span>}
    </Link>
  );
};

export default Logo;
