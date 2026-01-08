import { useState, useEffect } from 'react';
import { DashboardData } from '../types';

const MOCK_DATA: DashboardData = {
  financials: {
    netLiquidity: "$1,240,500.00",
    liquidityPools: 84,
    anchorPayout: "$45,200.00"
  },
  wolfMetrics: {
    latency: 24,
    systemStatus: 'NOMINAL',
    deadAirTime: "00:04:12",
    whaleCount: 8,
    lookupToPayerRatio: "340:1",
    pixSuccessRate: 98.5,
    anchorBurn: {
      accumulatedPayout: "$124k",
      dailyRevenue: "$210k"
    }
  },
  streams: [
    {
      id: '1',
      name: 'Streamer Alpha',
      status: 'live',
      viewers: 4200,
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwjA0fLCkVKmu58E08Oct2FSGh1boCipcGp9wxk-0_cbpqCGv7ufUq-LTtOUU7-J_GR1eaxCvfr8Gs8sHUEgQsPI3jJykZfh_tZH4g7m9yuo58VHiYGxQQhHgeGt2JUa_QdrB5fdTjO0lch_kPnmsOZF_vZxfGUOmbpfmloMqR13a6X6OC7QoIId6szZsRuiJNpRAFKuWQZRi52CSn2co6Z3jjynqkpq55U0MO0oqars1Nke1Am43frTmzxQBC_3Re6haX9PcuDWw',
      trapStatus: 'Active',
      hookLevel: 'High',
      signalQuality: 'HD'
    },
    {
      id: '2',
      name: 'Streamer Beta',
      status: 'live',
      viewers: 3100,
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDweNFvEdapxyhPaKu4R3QTU3Fv048g9oZzV0PMvB8y5ngU-lMTPgJFoHe2gMNAreVJcNVetXCb9P7Qj0ZY_U6AvvYfTVwEWlf0Elm1bKelg6b84U2y8Aq3qPME8hG7X5wKVRfUVP75ZSY7C_EW96s4Qwzxecf_QWEwI7CwRl07KXfq_qLJifUqQApOLYt1eD1yRNtP3PvgQ4EswYZNA8RKn6CR_6jDJ6EzEYkAuoMuVKA2sElA8PXfhNNkiPaEjjU0bKs-k6ukWks',
      trapStatus: 'Active',
      hookLevel: 'Med',
      signalQuality: 'HD'
    },
    {
      id: '3',
      name: 'Signal Lost',
      status: 'dead',
      viewers: 0,
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC2qa_133tkpJ6MHUd6-kwg2gipJxtuc96MAk1-LLdWY7BbOyKXyQ1s_lNNphfxGK2lrAt4jR56rZQDNFtsvB3Q2S4UVG-a2RTVX_S7Va6XKkmUj5ezKDJh7dc1sgCe1e_9Dyew5d83EeS33Nn8GDF8QUHuBMR7JPvP4ZJrWY5CJItZDxxauxJI4WDBcTlwRasxCF0aMP862VCyQcpjDcT8rSShlhnLjFjDzmr3qfUjQ9BWiuIeHP7ynmX8SMzDc0FPDmANertC2k',
      trapStatus: 'FAILED',
      hookLevel: 'None',
      signalQuality: 'Lost'
    },
    {
      id: '4',
      name: 'Streamer Delta',
      status: 'live',
      viewers: 2800,
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB29a7JUuyJhyKKNlPEbWDkksq_1qtYjGI9k1cpDSZQUr2prvZ7Uo2D7xyeBoQ_pApmGo_49zYNDj9JAnGKfae_9qgU1yZ_NYYDVOdz_OUG_vEZF-tJuMjmBWBzpQrWRai3JeRae-LC9wSqQ7m0mpoHrtAQb622Ogii61vlowguoXJLdOxmKPBDxkHy8IYdxXPqLEQjUGblbbZkdbb_puVUHoKl2hr7UHORTNyLtJUjnQD76F3LB9O0-QyvhWbyvNCiIjfcdHolwM8',
      trapStatus: 'Active',
      hookLevel: 'High',
      signalQuality: 'HD'
    },
    {
      id: '5',
      name: 'Streamer Echo',
      status: 'live',
      viewers: 1500,
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6wohkwpUY-hUDjz06a3laPdCQi3USDGU47aHkhA9l2LOwN03G6srhSOLn5DBER7O0gHJon5gYa4OjUmEV0s2TCLagFCeA1dX0iK3ZnieU64u-oy5BMBgb9kQPIwDy5JiQjV3OdNVH2zRPRfM8zkxJylC7EW4-IZJG20q8QhdvB_JzfVsj8Egheqh0hLZ1veUf48-GyUrtntIQTYolSdxd7O6w-oezjpQ2mcddqC3Thhy6_NYVrolzhus76jS46PxigNCKTX1M16A',
      trapStatus: 'Active',
      hookLevel: 'Low',
      signalQuality: 'SD'
    },
    {
      id: '6',
      name: 'Streamer Foxtrot',
      status: 'live',
      viewers: 3200,
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXMC2EIiX6XIHyWNgZoZJvMDHA8YmpWy7eTZ3NGbwA6G9pjweQeCn-dsAt9GlgqHbR4lkqmOyj5x-Wq_vP3rwY2-vhVgSMmxsXvrEk6EN30zatOAGl_JlgB2_A8v2jRVcLVyvVdwSol3tWhxnl5FuGB7uWzZ-JEDna29aKFML2umbM934rVjDHv2z5S8EsDrILLcSTGuXKZm1d5eQNZ1W4o2d7pYoC1xX8pBAptCR_J7gwhsgUfJyM1hbgiNID0qtu7HjtY0LRLms',
      trapStatus: 'Active',
      hookLevel: 'Med',
      signalQuality: 'HD'
    }
  ]
};

export const useDashboardData = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network latency
    const timer = setTimeout(() => {
      setData(MOCK_DATA);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
};