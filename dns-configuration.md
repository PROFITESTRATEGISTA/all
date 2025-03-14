# Configuração de DNS para profitestrategista.com.br

## Registros CNAME a serem adicionados no seu provedor de hospedagem

| Tipo  | Nome/Host | Valor/Destino                   |
|-------|-----------|--------------------------------|
| CNAME | www       | profitestrategista.netlify.app  |

## Registros A para domínio raiz (se seu provedor não suportar CNAME para domínio raiz)

| Tipo | Nome/Host | Valor/Destino    |
|------|-----------|------------------|
| A    | @         | 75.2.60.5        |
| A    | @         | 99.83.190.102    |

## Instruções

1. Acesse o painel de controle do seu provedor de hospedagem (Locaweb, etc.)
2. Navegue até a seção de DNS do seu domínio profitestrategista.com.br
3. Adicione os registros conforme as tabelas acima
4. Aguarde a propagação do DNS (pode levar até 48 horas)

## Verificação

Após a propagação, você pode verificar se os registros estão funcionando corretamente usando:

```
nslookup www.profitestrategista.com.br
```

Ou através de ferramentas online como https://dnschecker.org

## Observações

- O registro @ representa o domínio raiz (profitestrategista.com.br sem o www)
- Os endereços IP para os registros A são os servidores do Netlify
- Certifique-se de que o domínio também está configurado no painel do Netlify como um domínio personalizado
- No Netlify, vá em Site settings > Domain management > Add custom domain e adicione profitestrategista.com.br e www.profitestrategista.com.br
