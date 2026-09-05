import React from 'react';
import { M3Ripple } from './M3Ripple';

export type M3ButtonVariant = 'filled' | 'outlined' | 'tonal' | 'text' | 'fab';

interface M3ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: M3ButtonVariant;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const M3Button: React.FC<M3ButtonProps> = ({
  variant = 'filled',
  icon,
  children,
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
  ...props
}) => {
  let variantStyles = '';
  let sizeStyles = '';

  switch (variant) {
    case 'filled':
      variantStyles =
        'bg-[#005CBB] text-white hover:bg-[#004A99] hover:m3-elevation-2 active:bg-[#003875] shadow-sm';
      break;
    case 'outlined':
      variantStyles =
        'border border-[#757780] text-[#1A1C1E] hover:bg-[#005CBB]/8 hover:border-[#005CBB] active:bg-[#005CBB]/12';
      break;
    case 'tonal':
      variantStyles =
        'bg-[#D8E2FF] text-[#001D33] hover:bg-[#C2D4FF] hover:m3-elevation-1 active:bg-[#B3C9FF]';
      break;
    case 'text':
      variantStyles = 'text-[#005CBB] hover:bg-[#005CBB]/10 active:bg-[#005CBB]/16';
      break;
    case 'fab':
      variantStyles =
        'bg-[#EADDFF] text-[#6750A4] m3-elevation-3 hover:m3-elevation-4 active:m3-elevation-2 rounded-2xl hover:bg-[#D8C4B6] font-semibold border border-[#6750A4]/20';
      break;
  }

  switch (size) {
    case 'sm':
      sizeStyles = variant === 'fab' ? 'p-3' : 'px-4 py-1.5 text-xs font-medium rounded-full';
      break;
    case 'md':
      sizeStyles = variant === 'fab' ? 'p-4' : 'px-6 py-2.5 text-sm font-medium rounded-full';
      break;
    case 'lg':
      sizeStyles = variant === 'fab' ? 'p-5' : 'px-8 py-3.5 text-base font-semibold rounded-full';
      break;
  }

  return (
    <button
      className={`relative inline-flex items-center justify-center gap-2 transition-all duration-200 select-none overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB] focus-visible:ring-offset-2 ${variantStyles} ${sizeStyles} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      <M3Ripple color={variant === 'filled' || variant === 'fab' ? 'rgba(255,255,255,0.25)' : 'rgba(26,86,219,0.15)'} />
      {icon && <span className="shrink-0 leading-none">{icon}</span>}
      {children && <span className="whitespace-nowrap tracking-wide">{children}</span>}
    </button>
  );
};
