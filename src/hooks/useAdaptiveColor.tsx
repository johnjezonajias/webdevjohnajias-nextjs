'use client'

import { useEffect, useState } from 'react';
import { calculateBrightness, findBackgroundElement } from '@/lib/dom';

const LIGHT_COLOR = 'rgb(255, 255, 255)';
const DARK_COLOR = 'rgb(0, 0, 0)';

export function useAdaptiveColor(headerId: string) {
  const [color, setColor] = useState(DARK_COLOR);
  const [colorHasBeenSet, setColorHasBeenSet] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setColor(prefersDarkMode ? LIGHT_COLOR : DARK_COLOR);
    setColorHasBeenSet(true);

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
        setColor(prefersDarkMode ? DARK_COLOR : LIGHT_COLOR);
      }
    };

    const handleInitialColorSetting = () => {
      if (!colorHasBeenSet) {
        handleColorChange();
        setColorHasBeenSet(true);
      }
    };

    window.addEventListener('scroll', handleInitialColorSetting);
    window.addEventListener('resize', handleInitialColorSetting);

    return () => {
      window.removeEventListener('scroll', handleInitialColorSetting);
      window.removeEventListener('resize', handleInitialColorSetting);
    };
  }, [headerId]);

  return color;
}
