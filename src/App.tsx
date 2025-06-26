import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import { API_ENDPOINTS } from './config/api';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Import cryptocurrency logos
import bitcoinLogo from './images/bitcoin-btc-logo.png';
import ethereumLogo from './images/ethereum-eth-logo.png';
import bnbLogo from './images/bnb-bnb-logo.png';
import dogecoinLogo from './images/dogecoin-doge-logo.png';
import xrpLogo from './images/xrp-xrp-logo.png';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CoinData {
  moeda: string;
  preco: string;
  data: string;
  hora: string;
}

const coins = ['bitcoin', 'ethereum', 'bnb', 'dogecoin', 'xrp'];
const coinNames = {
  bitcoin: 'Bitcoin',
  ethereum: 'Ethereum',
  bnb: 'BNB',
  dogecoin: 'Dogecoin',
  xrp: 'XRP',
};

const coinImages = {
  bitcoin: bitcoinLogo,
  ethereum: ethereumLogo,
  bnb: bnbLogo,
  dogecoin: dogecoinLogo,
  xrp: xrpLogo,
};

function App() {
  const [selectedCoin, setSelectedCoin] = useState('bitcoin');
  const [prices, setPrices] = useState<{ [key: string]: CoinData }>({});
  const [loading, setLoading] = useState(true);
  const [priceHistory, setPriceHistory] = useState<{ [key: string]: string[] }>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const newPrices: { [key: string]: CoinData } = {};
        for (const coin of coins) {
          const response = await axios.get(API_ENDPOINTS.PRICE(coin));
          newPrices[coin] = response.data;
          
          setPriceHistory(prev => ({
            ...prev,
            [coin]: [...(prev[coin] || []), response.data.preco].slice(-10)
          }));
        }
        setPrices(newPrices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prices:', error);
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  // const getChartData = (coin: string) => ({
  //   labels: Array.from({ length: priceHistory[coin]?.length || 0 }, (_, i) => i + 1),
  //   datasets: [
  //     {
  //       label: `${coinNames[coin as keyof typeof coinNames]} Price`,
  //       data: priceHistory[coin] || [],
  //       borderColor: 'rgb(75, 192, 192)',
  //       tension: 0.1,
  //     },
  //   ],
  // });

  // const chartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top' as const,
  //     },
  //   },
  //   scales: {
  //     y: {
  //       beginAtZero: false,
  //     },
  //   },
  // };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="app">
        <div className="container">
          <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
              <h2>CryptoNight</h2>
            </div>
            <div className="sidebar-content">
              <div className="sidebar-nav">
                <div className="nav-item active">
                  <span className="icon">📊</span>
                  <span>Dashboard</span>
                </div>
                <div className="nav-item">
                  <span className="icon">👤</span>
                  <span>Perfil</span>
                </div>
                <div className="nav-item">
                  <span className="icon">⚙️</span>
                  <span>Configurações</span>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="dashboard">
              <div className="coin-info">
                <div className="coin-card">
                  <img 
                    src={coinImages[selectedCoin as keyof typeof coinImages]} 
                    alt={coinNames[selectedCoin as keyof typeof coinNames]}
                    className="coin-logo"
                  />
                  <div className="coin-details">
                    <h2>{coinNames[selectedCoin as keyof typeof coinNames]}</h2>
                    <p className="price">{prices[selectedCoin]?.preco || 'Loading...'}</p>
                    <p className="last-update">
                      Last updated: {prices[selectedCoin]?.hora || 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="chart-container">
                  <h1>HI</h1>
                </div>
              </div>
            </div>

          <div className="panel-coins-notices">
            <div className="notices">
              <h3>Noticias</h3>
            </div>
            <div className="coin-selector">
              <ul className="coin-list">
                <h3>Outras Moedas</h3>
                {coins.map((coin) => (
                  <li 
                    key={coin}
                    className={`coin-item ${selectedCoin === coin ? 'selected' : ''}`}
                    onClick={() => setSelectedCoin(coin)}
                  >
                    <img 
                      src={coinImages[coin as keyof typeof coinImages]} 
                      alt={coinNames[coin as keyof typeof coinNames]}
                      className="coin-icon"
                    />
                    <div className="coin-info">
                      <h4>{coinNames[coin as keyof typeof coinNames]}</h4>
                      <p>{prices[coin]?.preco || 'Loading...'}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
