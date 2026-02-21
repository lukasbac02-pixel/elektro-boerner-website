"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Startseite" },
    { href: "/ueber-mich", label: "Über mich" },
  ];

  const serviceLinks = [
    { href: "/dienstleistungen/beratung-planung", label: "Beratung & Planung" },
    { href: "/dienstleistungen/installationen", label: "Installationen" },
    { href: "/dienstleistungen/kontrollen", label: "Kontrollen" },
    { href: "/dienstleistungen/telefon-internet", label: "Telefon & Internet" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo_boerner.png"
              alt="Elektro Börner Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gray-900"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <Link
                href="/dienstleistungen"
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/dienstleistungen")
                    ? "text-gray-900"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Dienstleistungen
                <ChevronDown className="h-4 w-4" />
              </Link>

              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 pt-2">
                <div className="w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === link.href
                          ? "text-primary bg-primary/5"
                          : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/kontakt">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Kontakt
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-gray-900"
                      : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-2">
                <Link
                  href="/dienstleistungen"
                  className={`text-sm font-medium transition-colors ${
                    pathname === "/dienstleistungen"
                      ? "text-gray-900"
                      : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dienstleistungen
                </Link>
                <div className="pl-4 flex flex-col gap-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm transition-colors ${
                        pathname === link.href
                          ? "text-primary"
                          : "text-gray-600"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Kontakt
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
