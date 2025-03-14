import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Menu,
  X,
  Calendar,
  Home,
  Package,
  Briefcase,
  Copy,
  Users,
  BarChart2,
  Info,
  Phone,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Robôs", href: "/robots", icon: BarChart2 },
    { name: "Packs de Estratégias", href: "/strategy-packs", icon: Package },
    { name: "Mesa Proprietária", href: "/proprietary-desk", icon: Briefcase },
    { name: "Copy Invest", href: "/copy-invest", icon: Copy },
    { name: "Comunidade", href: "/community", icon: Users },
  ];

  const secondaryNavigation = [];

  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="logo.svg" alt="Profit Estrategista" className="h-10" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:gap-x-1">
            <div className="flex border-b border-gray-200 w-full">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium px-4 py-3 flex items-center gap-1 ${active ? "text-primary border-b-2 border-primary -mb-px" : "text-gray-700 hover:text-primary"}`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}

              {secondaryNavigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium px-4 py-3 flex items-center gap-1 ${active ? "text-primary border-b-2 border-primary -mb-px" : "text-gray-700 hover:text-primary"}`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <Button
              onClick={openWhatsApp}
              variant="outline"
              className="hidden md:inline-flex gap-2"
            >
              <img
                src="/whatsapp-icon-fixed.png"
                alt="WhatsApp"
                className="h-5 w-5 object-contain"
              />
              WhatsApp
            </Button>

            <Button
              variant="outline"
              className="hidden md:inline-flex gap-2"
              onClick={() =>
                window.open(
                  "https://profitestrategista.rds.land/demo",
                  "_blank",
                )
              }
            >
              <Calendar className="h-4 w-4" />
              Agendar Demo
            </Button>

            <div className="hidden md:flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full">
                <Link to="/login">Login</Link>
              </Button>

              <Button asChild className="w-full">
                <Link to="/signup">Começar Agora</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-base font-medium py-2 flex items-center gap-2 ${active ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}

              {secondaryNavigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-base font-medium py-2 flex items-center gap-2 ${active ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}

              <div className="pt-4 flex flex-col gap-2">
                <Button
                  onClick={openWhatsApp}
                  variant="outline"
                  className="w-full flex items-center gap-2 justify-center"
                >
                  <img
                    src="/whatsapp-icon-new.png"
                    alt="WhatsApp"
                    className="h-5 w-5"
                  />
                  WhatsApp
                </Button>

                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2 justify-center"
                  onClick={() =>
                    window.open(
                      "https://profitestrategista.rds.land/demo",
                      "_blank",
                    )
                  }
                >
                  <Calendar className="h-4 w-4" />
                  Agendar Demo
                </Button>

                <Button asChild variant="outline" className="w-full">
                  <Link to="/login">Login</Link>
                </Button>

                <Button asChild className="w-full">
                  <Link to="/signup">Começar Agora</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
