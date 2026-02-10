import React, { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    // Generate a fixed number of heart indices for stable rendering
    setHearts(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="min-h-screen w-full bg-rose-50 flex flex-col items-center justify-center text-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="heart-bg">
        {hearts.map((h) => (
          <div
            key={h}
            className="heart"
            style={{
              left: `${(h * 7.5) % 100}%`, // Distribute across screen
              width: `${15 + (h % 5) * 5}px`,
              height: `${15 + (h % 5) * 5}px`,
              animationDelay: `${h * 0.8}s`,
              animationDuration: `${12 + (h % 7) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-5xl px-4 py-8 z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;