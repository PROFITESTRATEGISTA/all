# Instruções para Deploy na Locaweb

## 1. Configuração do Supabase

1. Crie uma conta no [Supabase](https://supabase.com)
2. Crie um novo projeto
3. Obtenha as credenciais de API (URL e chave anônima)
4. Atualize o arquivo `.env` com suas credenciais reais:

```
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
```

## 2. Build do Projeto

1. Execute o comando de build:

```bash
npm run build
```

2. Isso gerará uma pasta `dist` com os arquivos estáticos do seu site

## 3. Upload para a Locaweb

1. Acesse o painel de controle da Locaweb
2. Vá para o gerenciador de arquivos do seu domínio
3. Faça upload de todos os arquivos da pasta `dist` para a pasta raiz do seu domínio

## 4. Configuração do Domínio

1. No painel da Locaweb, configure seu domínio para apontar para a pasta onde você fez o upload dos arquivos
2. Certifique-se de que o arquivo `.htaccess` está configurado corretamente para redirecionar todas as rotas para o `index.html`

## 5. Configuração do .htaccess

Crie um arquivo `.htaccess` na raiz do seu domínio com o seguinte conteúdo:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 6. Gerenciamento de Usuários

1. Acesse a área de administração em `seu-dominio.com/admin/users`
2. O login padrão de administrador é:
   - Email: admin@example.com
   - Senha: (defina uma senha forte no Supabase)

3. No Supabase, você pode gerenciar usuários diretamente pelo painel de controle:
   - Vá para Authentication > Users
   - Aqui você pode ver todos os usuários registrados, desativar contas, redefinir senhas, etc.

## 7. Configuração de Emails

Para configurar emails de confirmação e recuperação de senha:

1. No Supabase, vá para Authentication > Email Templates
2. Personalize os modelos de email conforme necessário
3. Configure um provedor de email SMTP nas configurações do Supabase

## Observações Importantes

- Este é um aplicativo de página única (SPA), então todas as rotas devem ser redirecionadas para o index.html
- Certifique-se de que seu servidor suporta HTTPS para segurança
- Mantenha suas chaves do Supabase seguras e nunca as exponha no código do cliente
