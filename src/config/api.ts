// Configuração da API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  PRICE: (coin: string) => `${API_BASE_URL}/price/${coin}`,
};

export default API_BASE_URL; 