
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavLink = ({ to, currentPath, children }: NavLinkProps) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "relative py-1 text-base font-medium transition-colors",
        isActive 
          ? "text-fitkids-yellow" 
          : "text-gray-700 dark:text-gray-100 hover:text-fitkids-yellow dark:hover:text-fitkids-yellow"
      )}
    >
      {children}
      <span 
        className={cn(
          "absolute bottom-0 left-0 w-full h-0.5 bg-fitkids-yellow transform origin-left transition-transform duration-300",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </Link>
  );
};

export default NavLink;
