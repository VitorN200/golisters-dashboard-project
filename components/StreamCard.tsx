import React from 'react';
import { StreamData } from '../types';

interface StreamCardProps {
  stream: StreamData;
}

export const StreamCard: React.FC<StreamCardProps> = ({ stream }) => {
  const isLive = stream.status === 'live';
  const isDead = stream.status === 'dead';

  // Base container styles
  // Removed "aspect-video" to allow the card to stretch to the grid cell height
  const containerClasses = isDead
    ? "bg-[#1a0f0f] rounded-xl overflow-hidden border-2 border-danger animate-dead-pulse flex flex-col shadow-neon-red relative w-full h-full"
    : "bg-surface-dark rounded-xl overflow-hidden border border-white/5 flex flex-col shadow-lg group relative w-full h-full";

  return (
    <div className={containerClasses}>
      {/* Dead Overlay Effect */}
      {isDead && (
        <div className="absolute inset-0 bg-danger/5 pointer-events-none z-10 animate-pulse"></div>
      )}

      {/* Image Container */}
      <div className={`relative flex-1 bg-black/40 min-h-0 ${isDead ? 'grayscale brightness-50' : ''}`}>
        <div
          className={`absolute inset-0 bg-cover bg-center ${isLive ? 'opacity-80' : ''}`}
          style={{ backgroundImage: `url('${stream.thumbnail}')` }}
        ></div>

        {/* Top Status Badges */}
        <div className={`absolute top-3 ${isDead ? 'right-3 z-20' : 'left-3 flex gap-2'}`}>
          {isLive && (
            <>
              <span className="bg-black/60 backdrop-blur-sm text-primary border border-primary/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
                <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>{' '}
                Live
              </span>
              {stream.signalQuality === 'HD' && (
                <span className="bg-black/60 backdrop-blur-sm text-white/70 border border-white/10 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                  HD
                </span>
              )}
            </>
          )}

          {isDead && (
            <span className="bg-danger text-black px-2 py-1 rounded text-xs font-bold uppercase flex items-center gap-1 shadow-lg animate-bounce">
              <span className="material-symbols-outlined text-sm">warning</span>{' '}
              DEAD TIME
            </span>
          )}
        </div>

        {/* Bottom Info Gradient */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12 z-20">
          <h3 className={`font-bold text-lg mb-1 truncate ${isDead ? 'text-danger tracking-widest uppercase' : 'text-white'}`}>
            {stream.name}
          </h3>

          <div className="flex justify-between items-end">
            <div className="flex gap-2">
              {isDead ? (
                <div className="px-2 py-0.5 rounded bg-danger/20 border border-danger/40 text-danger text-xs font-bold">
                  Trap: FAILED
                </div>
              ) : (
                <>
                  <div className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary text-xs">
                    Trap: {stream.trapStatus}
                  </div>
                  <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60 text-xs">
                    Hook: {stream.hookLevel}
                  </div>
                </>
              )}
            </div>
            
            <span className={`material-symbols-outlined ${isDead ? 'text-danger' : 'text-white/40'}`}>
              {isDead ? 'signal_cellular_connected_no_internet_4_bar' : 'signal_cellular_alt'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};