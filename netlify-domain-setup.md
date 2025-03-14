# Using Your Existing Domain with Netlify

## Steps to Connect Your Domain to Netlify

1. **Log in to your Netlify account**

2. **Go to your site dashboard**
   - Select the site you want to connect to your domain

3. **Add your custom domain**
   - Go to Site settings > Domain management > Add custom domain
   - Enter your domain name (e.g., profitestrategista.com.br)
   - Click "Add domain"

4. **Configure DNS settings at your domain registrar**
   - Option 1: Use Netlify DNS (recommended)
     - In Netlify, click "Set up Netlify DNS" and follow the instructions to change your nameservers
   
   - Option 2: Keep your current DNS provider (e.g., Locaweb)
     - Add a CNAME record pointing to your Netlify site:
       - Type: CNAME
       - Name/Host: www (or @ for root domain)
       - Value/Target: your-site-name.netlify.app (without trailing period)
     - For root domain, you may need to use an A record pointing to Netlify's load balancer IPs

5. **Wait for DNS propagation**
   - Changes can take up to 48 hours to propagate globally
   - You can check propagation using tools like [dnschecker.org](https://dnschecker.org)

6. **Verify domain ownership**
   - Netlify will automatically verify your domain once DNS is properly configured

7. **Enable HTTPS**
   - Netlify will automatically provision a free SSL certificate via Let's Encrypt

Your existing domain will now be connected to your Netlify site without any additional cost. Netlify provides free SSL certificates and hosting for static sites.
