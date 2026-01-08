import React from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { MainGrid } from './components/MainGrid';
import { Sidebar } from './components/Sidebar';
import { useDashboardData } from './hooks/useDashboardData';

const App: React.FC = () => {
  const { data, loading } = useDashboardData();

  if (loading || !data) {
    return (
      <div className="h-screen w-screen bg-background-dark flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="size-12 rounded-full border-4 border-white/10 border-t-primary animate-spin"></div>
          <span className="text-primary font-display tracking-widest text-sm animate-pulse">
            INITIALIZING COCKPIT...
          </span>
        </div>
      </div>
    );
  }

  return (
    <Layout 
      header={<Header metrics={data.financials} />}
      sidebar={<Sidebar metrics={data.wolfMetrics} />}
    >
      <MainGrid streams={data.streams} />
    </Layout>
  );
};

export default App;