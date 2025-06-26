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

# Verificar se o build funciona
echo "🔨 Testando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build realizado com sucesso!"
else
    echo "❌ Erro no build. Verifique os erros acima."
    exit 1
fi

# Verificar se o Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📥 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Fazer deploy
echo "🌐 Fazendo deploy no Vercel..."
vercel --prod

echo "🎉 Deploy concluído!"
echo "📝 Lembre-se de configurar a variável REACT_APP_API_URL no dashboard do Vercel" 