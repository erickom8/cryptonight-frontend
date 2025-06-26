# CryptoNight Frontend

Frontend React para o projeto CryptoNight - aplicação de monitoramento de preços de criptomoedas.

## 🚀 Deploy no Vercel

### Pré-requisitos
- Conta no [Vercel](https://vercel.com)
- Backend hospedado e funcionando
- Git configurado

### Passos para Deploy

1. **Fork/Clone o repositório**
   ```bash
   git clone <seu-repositorio>
   cd cryptonight-frontend
   ```

2. **Configure as variáveis de ambiente no Vercel**
   - Acesse o dashboard do Vercel
   - Vá em Settings > Environment Variables
   - Adicione a variável:
     - **Name**: `REACT_APP_API_URL`
     - **Value**: URL do seu backend (ex: `https://seu-backend.herokuapp.com`)

3. **Deploy automático**
   - Conecte seu repositório GitHub ao Vercel
   - O Vercel detectará automaticamente que é um projeto React
   - Configure o build command: `npm run build`
   - Configure o output directory: `build`

4. **Deploy manual (opcional)**
   ```bash
   npm install
   npm run build
   # Faça upload da pasta build para o Vercel
   ```

### Configuração Local

1. **Instale as dependências**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente**
   ```bash
   cp env.example .env.local
   # Edite o .env.local com a URL do seu backend
   ```

3. **Execute o projeto**
   ```bash
   npm start
   ```

## 📁 Estrutura do Projeto

```
src/
├── config/
│   └── api.ts          # Configuração da API
├── images/             # Logos das criptomoedas
├── App.tsx            # Componente principal
└── ...
```

## 🔧 Configurações

### Variáveis de Ambiente
- `REACT_APP_API_URL`: URL do backend (obrigatória)

### Scripts Disponíveis
- `npm start`: Executa o projeto em modo desenvolvimento
- `npm run build`: Gera build de produção
- `npm test`: Executa os testes

## 🌐 URLs da API

O frontend consome as seguintes rotas do backend:
- `GET /price/{coin}`: Obtém o preço atual de uma criptomoeda

## 📱 Funcionalidades

- Dashboard em tempo real com preços de criptomoedas
- Seleção de diferentes moedas (Bitcoin, Ethereum, BNB, Dogecoin, XRP)
- Interface responsiva e moderna
- Atualização automática a cada 30 segundos

## 🛠️ Tecnologias

- React 19
- TypeScript
- Material-UI
- Chart.js
- Axios
- Vercel (deploy)
