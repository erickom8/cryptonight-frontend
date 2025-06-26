# 🚀 Guia Completo - Deploy no Vercel

## Passo a Passo Detalhado

### 1. Preparação do Projeto

Certifique-se de que seu projeto está no GitHub:
```bash
cd cryptonight-frontend
git add .
git commit -m "Configuração para deploy no Vercel"
git push origin main
```

### 2. Configuração no Vercel

1. **Acesse o Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

2. **Importe o Projeto**
   - Clique em "New Project"
   - Selecione o repositório `cryptonight-frontend`
   - O Vercel detectará automaticamente que é um projeto React

3. **Configure o Build**
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Configure as Variáveis de Ambiente**
   - Clique em "Environment Variables"
   - Adicione:
     ```
     Name: REACT_APP_API_URL
     Value: https://seu-backend-url.com
     Environment: Production, Preview, Development
     ```

### 3. Deploy

1. **Clique em "Deploy"**
2. **Aguarde o build** (geralmente 2-3 minutos)
3. **Acesse sua URL** (ex: `https://cryptonight-frontend.vercel.app`)

### 4. Configuração de Domínio (Opcional)

1. **Vá em Settings > Domains**
2. **Adicione seu domínio personalizado**
3. **Configure os registros DNS** conforme instruções do Vercel

## 🔧 Troubleshooting

### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Confirme se o comando `npm run build` funciona localmente

### Erro de CORS
- Certifique-se de que o backend está configurado com CORS
- Verifique se a URL da API está correta

### Variáveis de Ambiente
- As variáveis devem começar com `REACT_APP_`
- Após alterar variáveis, faça um novo deploy

## 📱 Testando o Deploy

1. **Acesse a URL do Vercel**
2. **Verifique se a aplicação carrega**
3. **Teste as funcionalidades**:
   - Seleção de moedas
   - Atualização de preços
   - Responsividade

## 🔄 Deploy Automático

O Vercel fará deploy automático sempre que você:
- Fizer push para a branch `main`
- Criar um Pull Request
- Fizer alterações no código

## 📊 Monitoramento

- **Analytics**: Vercel Analytics (gratuito)
- **Logs**: Acesse em Functions > View Function Logs
- **Performance**: Lighthouse scores automáticos

## 🆘 Suporte

- [Documentação Vercel](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Status Page](https://vercel-status.com) 