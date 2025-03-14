# Configuração de DNS para teste.profitestrategista.com.br na Locaweb

## Registros CNAME a serem adicionados

| Tipo  | Nome/Host | Valor/Destino                   |
|-------|-----------|--------------------------------|
| CNAME | teste     | profitestrategista.netlify.app  |

## Instruções

1. Acesse o painel de controle da Locaweb
2. Navegue até a seção de DNS do seu domínio profitestrategista.com.br
3. Adicione o registro CNAME conforme a tabela acima
4. Aguarde a propagação do DNS (pode levar até 48 horas)

## Verificação

Após a propagação, você pode verificar se o registro está funcionando corretamente usando:

```
nslookup teste.profitestrategista.com.br
```

Ou através de ferramentas online como https://dnschecker.org

## Observações

- Esse subdomínio "teste" permite que você valide o site antes de substituir o site principal
- Certifique-se de que o domínio também está configurado no painel do Netlify como um domínio personalizado
- No Netlify, vá em Site settings > Domain management > Add custom domain e adicione teste.profitestrategista.com.br
