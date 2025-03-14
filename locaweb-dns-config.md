# Configuração de DNS para www.profitestrategista.com.br na Locaweb

## Registros CNAME a serem adicionados

| Tipo  | Nome/Host | Valor/Destino                   |
|-------|-----------|--------------------------------|
| CNAME | www       | profitestrategista.netlify.app  |
| CNAME | @         | profitestrategista.netlify.app  |

## Instruções

1. Acesse o painel de controle da Locaweb
2. Navegue até a seção de DNS do seu domínio profitestrategista.com.br
3. Adicione os registros CNAME conforme a tabela acima
4. Aguarde a propagação do DNS (pode levar até 48 horas)

## Verificação

Após a propagação, você pode verificar se os registros estão funcionando corretamente usando:

```
nslookup www.profitestrategista.com.br
```

Ou através de ferramentas online como https://dnschecker.org

## Observações

- O registro @ representa o domínio raiz (profitestrategista.com.br sem o www)
- Se você estiver usando o Netlify para hospedagem, certifique-se de que o domínio também está configurado no painel do Netlify
