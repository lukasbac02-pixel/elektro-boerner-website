"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
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
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Startseite
              </Link>
              <Link
                href="/ueber-mich"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Über mich
              </Link>
              <Link
                href="/dienstleistungen"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Dienstleistungen
              </Link>
              <Link href="/kontakt">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Kontakt
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
          </div>

          <Card className="border-primary/10 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold mb-4">Info</h2>
                <div className="space-y-2 mb-8">
                  <p>
                    <strong>Name oder Firma:</strong> Elektro Börner GmbH
                  </p>
                  <p>
                    <strong>Adresse:</strong> Bahnhofstrasse 4, 8777 Betschwanden
                  </p>
                  <p>
                    <strong>Telefon:</strong> 055 550 32 65
                  </p>
                  <p>
                    <strong>E-Mail-Adresse:</strong>{" "}
                    <a
                      href="mailto:elektro_boerner@bluewin.ch"
                      className="text-primary hover:underline"
                    >
                      elektro_boerner@bluewin.ch
                    </a>
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">
                  Rechtliche Hinweise
                </h2>
                <p className="mb-4">
                  Diese Website verwendet Cookies. Cookies sind kleine
                  Textdateien, die beim Besuch dieser Website in Ihrem Computer
                  dauerhaft oder temporär gespeichert werden. Zweck der Cookies ist
                  insbesondere die Analyse der Nutzung dieser Website zur
                  statistischen Auswertung sowie für kontinuierliche Verbesserungen.
                  In Ihrem Browser können Sie Cookies in den Einstellungen
                  jederzeit ganz oder teilweise deaktivieren. Bei deaktivierten
                  Cookies stehen Ihnen allenfalls nicht mehr alle Funktionen dieser
                  Website zur Verfügung.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
