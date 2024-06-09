'use client'

import React from 'react';
import { useAdaptiveColor } from '@/hooks/useAdaptiveColor';

export const Logo = () => {
  const color = useAdaptiveColor('siteHeader');

  return (
    <div className="flex items-center">
      <span className="text-[2.125rem] font-bold" style={{ color }}>webdev:JOHN</span>
    </div>
  );
};
