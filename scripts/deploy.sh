#!/bin/bash

# Script de Deploy para Vercel
echo "🚀 Iniciando deploy do CryptoNight Frontend..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: package.json não encontrado. Execute este script na pasta cryptonight-frontend"
    exit 1
fi

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Fazer build
echo "🔨 Fazendo build..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build realizado com sucesso!"
    echo "📁 Pasta build criada com sucesso"
    echo ""
    echo "🌐 Para fazer deploy no Vercel:"
    echo "1. Acesse https://vercel.com"
    echo "2. Importe este projeto"
    echo "3. Configure a variável REACT_APP_API_URL"
    echo "4. Deploy automático será feito"
else
    echo "❌ Erro no build. Verifique os erros acima."
    exit 1
fi

echo ""
echo "�� Script concluído!" 