'use client'

import { useEffect, useState } from 'react';
import { calculateBrightness, findBackgroundElement } from '@/lib/dom';

const LIGHT_COLOR = 'rgb(255, 255, 255)';
const DARK_COLOR = 'rgb(0, 0, 0)';

export function useAdaptiveColor(headerId: string, defaultColor: string = DARK_COLOR) {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    const handleColorChange = () => {
      const headerElement = document.getElementById(headerId);
      if (!headerElement) return;

      const headerBottom = headerElement.getBoundingClientRect().bottom;
      const targetElement = document.elementFromPoint(
        window.innerWidth / 2,
        headerBottom + 1
      );

      const backgroundElement = findBackgroundElement(targetElement);

      if (backgroundElement) {
        const bgColor = window.getComputedStyle(backgroundElement).getPropertyValue('background-color');
        const brightness = calculateBrightness(bgColor);
        setColor(brightness < 50 ? LIGHT_COLOR : DARK_COLOR);
      } else {
        setColor(defaultColor);
      }
    };

    window.addEventListener('scroll', handleColorChange);
    window.addEventListener('resize', handleColorChange);

    handleColorChange();

    return () => {
      window.removeEventListener('scroll', handleColorChange);
      window.removeEventListener('resize', handleColorChange);
    };
  }, [headerId, defaultColor]);

  return color;
}
