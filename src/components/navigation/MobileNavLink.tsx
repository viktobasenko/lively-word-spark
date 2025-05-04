
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MobileNavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

const MobileNavLink = ({ to, currentPath, children }: MobileNavLinkProps) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "w-full text-center py-2 text-lg font-medium",
        isActive 
          ? "text-fitkids-yellow font-bold" 
          : "text-gray-900"
      )}
    >
      {children}
    </Link>
  );
};

export default MobileNavLink;
