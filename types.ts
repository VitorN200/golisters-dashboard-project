export interface StreamData {
  id: string;
  name: string;
  status: 'live' | 'dead';
  viewers: number;
  thumbnail: string;
  trapStatus: 'Active' | 'FAILED' | 'Inactive';
  hookLevel: 'High' | 'Med' | 'Low' | 'None';
  signalQuality: 'HD' | 'SD' | 'Lost';
}

export interface WolfMetrics {
  latency: number; // ms
  systemStatus: 'NOMINAL' | 'WARNING' | 'CRITICAL';
  deadAirTime: string; // e.g., "04:20"
  whaleCount: number;
  lookupToPayerRatio: string; // e.g. "450:12"
  pixSuccessRate: number; // Percentage 0-100
  anchorBurn: {
    accumulatedPayout: string;
    dailyRevenue: string;
  };
}

export interface FinancialMetrics {
  netLiquidity: string;
  liquidityPools: number; // Percentage
  anchorPayout: string;
}

export interface DashboardData {
  streams: StreamData[];
  wolfMetrics: WolfMetrics;
  financials: FinancialMetrics;
}