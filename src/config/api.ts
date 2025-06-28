// Configuração da API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Debug para verificar se a variável está sendo carregada
console.log('API_BASE_URL:', API_BASE_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

export const API_ENDPOINTS = {
  PRICE: (coin: string) => `${API_BASE_URL}/price/${coin}`,
};

export default API_BASE_URL; 