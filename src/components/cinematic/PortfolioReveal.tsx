import React from 'react';

interface PortfolioRevealProps {
  children: React.ReactNode;
  isRevealing: boolean;
}

export const PortfolioReveal: React.FC<PortfolioRevealProps> = ({ children, isRevealing }) => {
  return (
    <div
      className={`transition-opacity duration-1000 ease-out ${
        isRevealing ? 'opacity-100' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  );
};
