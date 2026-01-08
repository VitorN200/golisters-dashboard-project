import React from 'react';
import { FinancialMetrics } from '../types';

interface HeaderProps {
  metrics?: FinancialMetrics;
}

export const Header: React.FC<HeaderProps> = ({ metrics }) => {
  return (
    <header className="glass-panel w-full flex items-center justify-between px-8 h-16 border-b border-white/5 rounded-xl">
      {/* Financial Metrics Strip */}
      <div className="flex flex-1 justify-between items-center h-full">
        {/* Metric 1 */}
        <div className="flex flex-col md:flex-row items-baseline md:gap-3">
          <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">
            Net Liquidity
          </span>
          <span className="text-primary font-bold text-xl tracking-tight glow-text">
            {metrics?.netLiquidity || "$0.00"}
          </span>
        </div>

        <div className="w-px h-8 bg-white/10"></div>

        {/* Metric 2 */}
        <div className="flex flex-col md:flex-row items-baseline md:gap-3">
          <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">
            Liquidity Pools
          </span>
          <span className="text-white font-bold text-xl tracking-tight">
            {metrics?.liquidityPools || 0}%
          </span>
        </div>

        <div className="w-px h-8 bg-white/10"></div>

        {/* Metric 3 */}
        <div className="flex flex-col md:flex-row items-baseline md:gap-3">
          <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">
            Anchor Payout
          </span>
          <span className="text-primary font-bold text-xl tracking-tight">
            {metrics?.anchorPayout || "$0.00"}
          </span>
        </div>
      </div>
    </header>
  );
};