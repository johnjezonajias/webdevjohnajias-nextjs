'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { calculateBrightness, findBackgroundElement, getInitialSectionColor } from '@/lib/dom';

const LIGHT_COLOR = 'rgb(255, 255, 255)';
const DARK_COLOR = 'rgb(0, 36, 25)';

export default function ScrollProgress() {
  const [colorBrightness, setColorBrightness] = useState<number>(50);
  const [progress, setProgress] = useState<number>(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const progressBarColor = colorBrightness < 50 ? LIGHT_COLOR : DARK_COLOR;

  useLayoutEffect(() => {
    const getBackgroundColor = () => {
      const progressBarElement = progressBarRef.current;
      const progressTrackElement = progressTrackRef.current;
      if (!progressBarElement || !progressTrackRef) return DARK_COLOR; // Default brightness if no element found.

      const targetElement = document.elementFromPoint(
        progressBarElement.getBoundingClientRect().left - 1,
        progressBarElement.getBoundingClientRect().top + (progressTrackElement?.getBoundingClientRect().height || 0)
      );

      const backgroundElement = findBackgroundElement(targetElement);
      if (!backgroundElement) return DARK_COLOR; // Default brightness if no background found.

      const bgColor = window.getComputedStyle(backgroundElement, null).getPropertyValue('background-color');
      return bgColor;
    };

    const handleProgress = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;

      setProgress(scroll);
      setColorBrightness(calculateBrightness(getBackgroundColor()));
    };

    window.addEventListener('scroll', handleProgress);

    return () => {
      window.removeEventListener('scroll', handleProgress);
    };
  }, []);

  useEffect(() => {
    setColorBrightness(calculateBrightness(getInitialSectionColor()));
  }, [pathname]);

  return (
    <div ref={progressBarRef} className='w-[3px] h-[20vh] fixed top-1/2 left-[2.1875rem] -translate-y-2/4 hidden rounded-md z-40 md:block'>
      <div className='absolute top-0 left-0 w-full h-full opacity-30 rounded-md' style={{ backgroundColor: progressBarColor }} />
      <div ref={progressTrackRef} className='absolute top-0 left-0 w-full rounded-md' style={{ backgroundColor: progressBarColor, height: `${progress * 100}%` }} />
    </div>
  );
}
