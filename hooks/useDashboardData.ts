import { useState, useEffect } from 'react';
import { DashboardData } from '../types';
import { getDashboardData } from '../services/api';

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchStats = async () => {
    try {
      const result = await getDashboardData();
      console.log("Dados recebidos:", result);

      // Verificação de segurança: se o JSON tiver a chave 'dashboard', use ela. 
      // Caso contrário, use o resultado direto.
      if (result && result.dashboard) {
        setData(result.dashboard);
      } else {
        setData(result);
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      // Isso PRECISA rodar para a tela de carregamento sumir
      setLoading(false); 
    }
  };

  fetchStats();
}, []);

  return { data, loading };
}