import { Link } from 'react-router-dom';

type Variant = 'primary' | 'outline' | 'white' | 'ghost-white';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  /** External URL */
  href?: string;
  /** Internal route */
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const base =
  'inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer';

const variants: Record<Variant, string> = {
  primary:      'bg-primary text-white hover:bg-primary-700 active:bg-primary-800',
  outline:      'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  white:        'bg-white text-primary hover:bg-primary-50 active:bg-primary-100',
  'ghost-white':'border-2 border-white/70 text-white hover:bg-white/10',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const cls = [base, variants[variant], sizes[size], disabled && 'opacity-50 pointer-events-none', className]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
