'use client'

import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useAdaptiveColor } from '@/hooks/useAdaptiveColor';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const color = useAdaptiveColor('siteHeader');

  return (
    <div className="flex items-center justify-center">
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="hidden"
        />
        <span
          className={cn(
            'bg-light-secondary w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out dark:bg-dark-shade',
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          )}
        >
          <span
            className={cn(
              'bg-light-primary w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out dark:bg-dark-primary',
              darkMode ? 'translate-x-6' : 'translate-x-0'
            )}
          ></span>
        </span>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300" style={{ color }}>
          {darkMode ? 'Dark' : 'Light'}
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
