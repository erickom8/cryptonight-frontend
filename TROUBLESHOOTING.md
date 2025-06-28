# 🔧 Troubleshooting - Deploy Vercel

## Problemas Comuns e Soluções

### 1. **"You need to enable JavaScript" aparece no deploy**

**Causa:** Build falhou ou arquivos não foram gerados corretamente

**Soluções:**
- ✅ Verificar se o build local funciona: `npm run build`
- ✅ Verificar logs do Vercel no dashboard
- ✅ Confirmar se todas as dependências estão no `package.json`
- ✅ Verificar se não há erros de TypeScript

### 2. **API não conecta no deploy**

**Causa:** Variáveis de ambiente não configuradas ou CORS

**Soluções:**
- ✅ Configurar `REACT_APP_API_URL` no dashboard do Vercel
- ✅ Verificar se o backend aceita requisições do domínio do Vercel
- ✅ Testar a API diretamente no navegador
- ✅ Verificar logs do console no deploy

### 3. **Build falha no Vercel**

**Causa:** Erros de compilação ou dependências

**Soluções:**
- ✅ Rodar `npm run build` localmente para testar
- ✅ Verificar se todas as dependências estão instaladas
- ✅ Verificar se não há imports quebrados
- ✅ Verificar logs detalhados no Vercel

### 4. **Página em branco no deploy**

**Causa:** Roteamento ou arquivos estáticos não encontrados

**Soluções:**
- ✅ Verificar se o `vercel.json` está configurado corretamente
- ✅ Confirmar se a rota `/(.*)` redireciona para `/index.html`
- ✅ Verificar se os arquivos estáticos estão sendo servidos

## 🔍 Verificações Importantes

### **Antes do Deploy:**
```bash
# 1. Testar build local
npm run build

# 2. Testar servidor local
npm install -g serve
serve -s build

# 3. Verificar se não há erros
npm run test
```

### **No Dashboard do Vercel:**
1. **Settings > Environment Variables**
   - `REACT_APP_API_URL` configurada
   - Valor correto da API

2. **Functions > View Function Logs**
   - Verificar erros de build
   - Verificar erros de runtime

3. **Analytics > Performance**
   - Verificar se a página carrega
   - Verificar tempo de resposta

## 🚨 Erros Específicos

### **"Module not found"**
```bash
# Solução: Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### **"CORS error"**
- Configurar CORS no backend para aceitar `*.vercel.app`
- Adicionar headers corretos

### **"Build timeout"**
- Otimizar dependências
- Remover arquivos desnecessários
- Usar build cache

## 📞 Suporte

Se os problemas persistirem:

1. **Verificar logs do Vercel**
2. **Testar build local**
3. **Verificar configuração da API**
4. **Consultar documentação do Vercel**

## 🎯 Checklist Final

- [ ] Build local funciona (`npm run build`)
- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Backend acessível e com CORS configurado
- [ ] `vercel.json` configurado corretamente
- [ ] Logs do Vercel sem erros críticos
- [ ] Teste de funcionalidade no deploy 