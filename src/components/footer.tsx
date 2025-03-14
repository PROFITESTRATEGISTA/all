import { Container } from "@/components/ui/container";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "/about" },
        { name: "Nosso Time", href: "/team" },
        { name: "Carreiras", href: "/careers" },
        { name: "Contato", href: "/contact" },
      ],
    },
    {
      title: "Produtos",
      links: [
        { name: "Robôs de Trading", href: "/robots" },
        { name: "Packs de Estratégias", href: "/strategy-packs" },
        { name: "Comunidade", href: "/community" },
        { name: "Packs de Estratégias", href: "/strategy-packs" },
        { name: "Resultados", href: "/results" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
        { name: "Tutoriais", href: "/tutorials" },
        { name: "Suporte", href: "/support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Termos de Uso", href: "/terms" },
        { name: "Política de Privacidade", href: "/privacy" },
        { name: "Aviso de Risco", href: "/risk" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src="logo.svg" alt="Profit Estrategista" className="h-12" />
            </Link>
            <p className="text-gray-400 mb-6">
              Soluções automatizadas para o mercado financeiro, desenvolvidas
              por traders para traders.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <a
                href="mailto:contato@profitestrategista.com.br"
                className="hover:text-white transition-colors"
              >
                contato@profitestrategista.com.br
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-400" />
              <a
                href="tel:+551199999999"
                className="hover:text-white transition-colors"
              >
                +55 11 9999-9999
              </a>
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-medium text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Profit Estrategista. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
