import React from 'react';
import { WolfMetrics } from '../types';

interface SidebarProps {
  metrics?: WolfMetrics;
}

export const Sidebar: React.FC<SidebarProps> = ({ metrics }) => {
  return (
    <aside className="w-full h-full glass-panel rounded-xl flex flex-col p-5 border border-white/5 justify-between">
      
      {/* 1. Traffic Light / Latency */}
      <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex justify-between items-center shrink-0">
        <div className="flex flex-col">
          <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Latency</span>
          <span className="text-xl font-bold text-white">
            {metrics?.latency || 0}
            <span className="text-sm text-white/40 font-normal ml-1">ms</span>
          </span>
        </div>
        <div className="flex gap-2 bg-black/40 p-2 rounded-lg border border-white/5">
          <div className={`size-3 rounded-full ${metrics?.systemStatus === 'NOMINAL' ? 'bg-primary shadow-neon-green' : 'bg-primary/20'}`}></div>
          <div className={`size-3 rounded-full ${metrics?.systemStatus === 'WARNING' ? 'bg-yellow-500 shadow-lg' : 'bg-yellow-500/20'}`}></div>
          <div className={`size-3 rounded-full ${metrics?.systemStatus === 'CRITICAL' ? 'bg-danger shadow-neon-red' : 'bg-danger/20'}`}></div>
        </div>
      </div>

      {/* 2. Dead Air % */}
      <div className="bg-[#1a0f0f] p-4 rounded-xl border border-danger/30 flex flex-col gap-1 shadow-neon-red shrink-0">
         <div className="flex justify-between items-start">
          <span className="text-xs text-danger/60 font-bold uppercase tracking-wider">Dead Air Time</span>
          <span className="material-symbols-outlined text-danger text-lg animate-pulse">timer</span>
        </div>
        <span className="text-2xl font-mono font-bold text-danger tracking-widest">
          {metrics?.deadAirTime || "00:00:00"}
        </span>
      </div>

      {/* 3. Whale Count */}
      <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col gap-1 relative overflow-hidden group shrink-0">
        <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-5xl text-primary">tsunami</span>
        </div>
        <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Whale Count</span>
        <div className="flex items-baseline gap-2">
           <span className="text-3xl font-bold text-primary tracking-tight glow-text">
            {metrics?.whaleCount || 0}
           </span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-1 mt-1">
          <div className="bg-primary h-1 rounded-full w-[65%] shadow-neon-green"></div>
        </div>
      </div>

      {/* 4. Lookup-to-Payer Ratio */}
      <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col gap-1 shrink-0">
        <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Lookup : Payer</span>
        <div className="flex justify-between items-end">
           <span className="text-2xl font-bold text-white tracking-tight font-mono">
            {metrics?.lookupToPayerRatio || "0:0"}
           </span>
           <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">Optimal</span>
        </div>
      </div>

      {/* 5. Pix Success % */}
      <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col gap-1 shrink-0">
        <div className="flex justify-between items-start">
          <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Pix Success</span>
          <span className="material-symbols-outlined text-primary text-lg">verified</span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            {metrics?.pixSuccessRate || 0}%
          </span>
          <span className="text-[10px] text-primary mb-1.5">Target Met</span>
        </div>
        <div className="w-full flex gap-1 mt-1">
           {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i} 
                className={`h-1 flex-1 rounded-sm ${i < 9 ? 'bg-primary' : 'bg-white/10'}`} 
              />
           ))}
        </div>
      </div>

      {/* 6. Anchor Burn */}
      <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col gap-3 shrink-0">
        <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Anchor Burn</span>
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
               <span className="text-[10px] text-white/40">Accumulated</span>
               <span className="text-lg font-bold text-white">{metrics?.anchorBurn?.accumulatedPayout || "$0"}</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col items-end">
               <span className="text-[10px] text-white/40">Daily Rev</span>
               <span className="text-lg font-bold text-primary">{metrics?.anchorBurn?.dailyRevenue || "$0"}</span>
            </div>
        </div>
      </div>

      {/* 7. Voice Command Input (Anchored at bottom via flex justify-between, but explicit mt-auto ensures safety) */}
      <div className="relative group shrink-0">
        <input
          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20 font-mono"
          placeholder="Execute Command..."
          type="text"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition-colors">
          <span className="material-symbols-outlined text-[18px] block">
            mic
          </span>
        </button>
      </div>

    </aside>
  );
};