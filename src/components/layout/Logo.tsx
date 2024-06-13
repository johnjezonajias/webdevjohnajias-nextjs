'use client';

import React from 'react';
import { useAdaptiveColor } from '@/hooks/useAdaptiveColor';

type LogoProps = {
  variant?: 'adaptive' | 'default';
  fontSize?: string;
};

const Logo: React.FC<LogoProps> = ({ variant = 'default', fontSize = '2.125rem' }) => {
  const adaptiveColor = useAdaptiveColor('siteHeader');
  const color = variant === 'adaptive' ? adaptiveColor : 'inherit';

  return (
    <div className="flex items-center">
      <span className="tracking-tighter font-bold" style={{ color, fontSize }}>
        webdev:JOHN
      </span>
    </div>
  );
};

export default Logo;
