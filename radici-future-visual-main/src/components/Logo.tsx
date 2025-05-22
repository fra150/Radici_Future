
import React from 'react';

interface LogoProps {
  darkMode: boolean;
}

export const Logo: React.FC<LogoProps> = ({ darkMode }) => {
  return (
    <div className="flex items-center">
      <div className="size-8 mr-2">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
        </svg>
      </div>
      <div className="relative">
        <h2 className={`text-lg font-bold leading-tight ${darkMode ? 'text-white' : 'text-[#111418]'}`}>
          Radici Future
        </h2>
        <div className="absolute -top-1 right-0 flex">
          {darkMode ? (
            // French flag colors for dark mode
            <span className="text-xs font-bold">
              <span className="text-blue-500">F</span>
              <span className="text-white">R</span>
            </span>
          ) : (
            // Italian flag colors for light mode
            <span className="text-xs font-bold">
              <span className="text-green-500">I</span>
              <span className="text-white bg-red-500 px-0.5">T</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
