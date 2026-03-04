"use client";

import Image from "next/image";
import Link from "next/link";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function KontrollenPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Kontrollen mit Sicherheitsnachweis</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Periodische Kontrollen für Ihre Sicherheit</p>
          </div>

          <Card className="border-primary/10 shadow-lg mb-16">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Periodische Kontrollen</h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Wir sind auch im Bereich Installationskontrolle tätig. Diese periodischen Kontrollen sind keine Schikane der Netzbetreiber. Es geht um Ihre Sicherheit.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Denn immer wieder werden Mängel festgestellt, die unbehoben zu Personen- und/oder Sachschäden führen können, wie z.B. einem Brand.
              </p>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-6">Kontrollperioden nach NIV 2018</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-lg">Wohnhäuser (EFH/MFH)</span> – 20 Jahre
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-lg">Gewerbe (Büro, Restaurant, Ladenlokale, Werkstätten usw.)</span> – 10 Jahre
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-lg">Spezielle Anlagen (Tankstellen, feuergefährdete Anlagen, korrosionsgefährliche Anlagen)</span> – 5 Jahre
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-lg">Anlagen mit starker Personenbelegung (Kino, Schulhäuser, grosse Hotels, Einkaufscenter)</span> – 5 Jahre
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-lg">Altanlagen mit Nullung Schema III</span> – 5 Jahre
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-lg">Provisorische Anlagen (Jahrmärkte, Baustellen usw.)</span> – 1 Jahr
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <h4 className="text-xl font-semibold">Bei Wohnhäusern ist noch eine Besonderheit zu beachten:</h4>
                </div>
                <p className="text-gray-700 text-lg pl-9">
                  Erfolgt ein Eigentümerwechsel und liegt die letzte periodische Kontrolle mehr als fünf Jahre zurück, ist eine weitere Kontrolle erforderlich.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/kontakt">
              <Button size="lg">Jetzt Kontrolle anfragen</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
