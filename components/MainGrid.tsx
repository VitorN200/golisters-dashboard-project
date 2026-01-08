import React from 'react';
import { StreamCard } from './StreamCard';
import { StreamData } from '../types';

interface MainGridProps {
  streams: StreamData[];
}

export const MainGrid: React.FC<MainGridProps> = ({ streams }) => {
  return (
    <section className="h-full w-full">
      {/* 
        Grid Setup: 
        - grid-cols-2: 2 cards wide
        - grid-rows-3: 3 cards tall (total 6)
        - h-full: Forces the grid to consume exactly the Main container height
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-4 h-full w-full">
        {streams.map((stream) => (
          <StreamCard key={stream.id} stream={stream} />
        ))}
      </div>
    </section>
  );
};