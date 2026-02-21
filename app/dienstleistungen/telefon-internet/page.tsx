"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Network, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function TelefonInternetPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo_boerner.png" alt="Elektro Börner Logo" width={180} height={60} className="h-12 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Startseite</Link>
              <Link href="/ueber-mich" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Über mich</Link>
              <Link href="/dienstleistungen" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">Dienstleistungen</Link>
              <Link href="/kontakt">
                <Button size="sm" className="bg-primary hover:bg-primary/90">Kontakt</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Telefon und Internet</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Dienstleistungen für Telefon- und Internetsysteme</p>
          </div>

          <Card className="border-primary/10 shadow-lg mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Hausanlagen</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Wir bieten individuell abgestimmte Lösungen für sämtliche elektrischen Systeme in Ihrem Zuhause.
                Unser Ziel ist es, Ihre Hausinstallation optimal zu gestalten, sodass alle Komponenten reibungslos und
                zuverlässig zusammenarbeiten. Von der Planung bis zur Ausführung sorgen wir dafür, dass Ihre elektrische
                Infrastruktur den höchsten Standards entspricht und Ihre Anforderungen perfekt erfüllt.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/10 shadow-lg mb-16">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Kleine Büronetzwerke</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Wir installieren und optimieren kleine Büronetzwerke für stabile und effiziente
                    Verbindungen in Ihrem Büro.
                  </p>
                </div>
                <div className="relative rounded-lg overflow-hidden h-64">
                  <Image
                    src="/netzwerk-pic.jpg"
                    alt="Kleine Büronetzwerke"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/10 shadow-lg mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Vermittlung von Partnern</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Wir verbinden Sie mit erfahrenen Fachleuten und Partnern, die perfekt auf Ihre Projektbedürfnisse
                abgestimmt sind.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/kontakt">
              <Button size="lg">Jetzt Beratung anfragen</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
