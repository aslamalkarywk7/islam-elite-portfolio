import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { ShadowConfig } from '../types';

export interface NeumorphicBoxProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: ReactNode;
  variant?: 'raised' | 'raised-lg' | 'raised-sm' | 'inset' | 'inset-deep' | 'convex' | 'concave' | 'glowing';
  shadowConfig?: ShadowConfig;
  hoverable?: boolean;
  clickable?: boolean;
  active?: boolean;
  className?: string;
  pill?: boolean;
}

export const NeumorphicBox: React.FC<NeumorphicBoxProps> = ({
  children,
  variant = 'raised',
  shadowConfig,
  hoverable = false,
  clickable = false,
  active = false,
  className = '',
  pill = false,
  ...props
}) => {
  // If active is true, override variant to inset or glowing
  const effectiveVariant = active ? 'inset-deep' : variant;

  // Base class mapping
  const variantClasses: Record<string, string> = {
    'raised': 'neu-raised',
    'raised-lg': 'neu-raised-lg',
    'raised-sm': 'neu-raised-sm',
    'inset': 'neu-inset',
    'inset-deep': 'neu-inset-deep',
    'convex': 'neu-convex',
    'concave': 'neu-concave',
    'glowing': 'neu-glow-blue',
  };

  const roundedClass = pill ? 'rounded-full' : 'rounded-2xl';
  const interactiveClass = clickable ? 'cursor-pointer select-none transition-all duration-300' : '';
  const hoverClass = hoverable && !active ? 'hover:scale-[1.015] hover:neu-glow-blue' : '';

  // Custom inline shadow if shadowConfig is provided
  let customStyle: React.CSSProperties = {};
  if (shadowConfig) {
    const { distance, blur, intensity, lightAngle, bgTone } = shadowConfig;
    const rad = (lightAngle * Math.PI) / 180;
    const dx = Math.round(distance * Math.cos(rad));
    const dy = Math.round(distance * Math.sin(rad));
    
    // Calculate light and dark shadow colors based on bgTone
    const darkAlpha = Math.min(0.85, 0.45 * intensity);
    const lightAlpha = Math.min(0.98, 0.85 * intensity);

    if (effectiveVariant === 'inset' || effectiveVariant === 'inset-deep') {
      customStyle = {
        boxShadow: `inset ${dx}px ${dy}px ${blur}px rgba(160, 155, 144, ${darkAlpha}), inset ${-dx}px ${-dy}px ${blur}px rgba(255, 255, 255, ${lightAlpha})`,
      };
    } else if (effectiveVariant === 'glowing') {
      customStyle = {
        boxShadow: `${dx}px ${dy}px ${blur}px rgba(160, 155, 144, ${darkAlpha}), ${-dx}px ${-dy}px ${blur}px rgba(255, 255, 255, ${lightAlpha}), 0 0 24px rgba(59, 130, 246, 0.45)`,
      };
    } else {
      customStyle = {
        boxShadow: `${dx}px ${dy}px ${blur}px rgba(160, 155, 144, ${darkAlpha}), ${-dx}px ${-dy}px ${blur}px rgba(255, 255, 255, ${lightAlpha})`,
      };
    }
  }

  return (
    <motion.div
      whileTap={clickable ? { scale: 0.98 } : undefined}
      className={`relative ${roundedClass} ${variantClasses[effectiveVariant] || 'neu-raised'} ${interactiveClass} ${hoverClass} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </motion.div>
  );
};
