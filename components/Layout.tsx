import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; // MainGrid
  header: ReactNode;
  sidebar: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, header, sidebar }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background-dark text-white font-display p-4 gap-4">
      {/* Left Column: Fluid Width, Flex Column for Header + Grid */}
      <div className="flex flex-col flex-1 min-w-0 h-full gap-4">
        <div className="shrink-0">
          {header}
        </div>
        <main className="flex-1 min-h-0">
          {children}
        </main>
      </div>

      {/* Right Column: Fixed Width (Sidebar), Full Height */}
      <div className="w-[340px] shrink-0 h-full">
        {sidebar}
      </div>
    </div>
  );
};