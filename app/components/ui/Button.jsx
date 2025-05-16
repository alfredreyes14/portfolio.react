import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  onClick, 
  primary = false, 
  className = '', 
  type = 'button',
  disabled = false 
}) => {
  const baseStyles = "inline-block px-6 py-3 font-medium text-sm rounded-md transition-all duration-200 focus:outline-none";
  const primaryStyles = "bg-primary text-white hover:bg-primary/90";
  const secondaryStyles = "bg-transparent border border-foreground text-foreground hover:bg-foreground hover:bg-opacity-10";
  
  const styles = `${baseStyles} ${primary ? primaryStyles : secondaryStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 