"use client";

import Image from "next/image";
import Link from "next/link";
import { Chrome as Home, Lightbulb, Building, Flame, Sun, Zap, ShieldCheck, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";

export default function InstallationenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Installationen
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Umfangreiches Angebot an Installationsdienstleistungen
            </p>
          </div>

          <Card className="border-primary/10 shadow-lg mb-16">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Unsere Installationsservices bieten umfassende Lösungen, die auf Ihre
                speziellen Bedürfnisse zugeschnitten sind. Wir sind auf eine Reihe von
                Bereichen spezialisiert, die Ihr Zuhause oder Ihr Unternehmen verbessern.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Umbauten</h3>
                    <p className="text-gray-700">
                      Fachgerechte Installation und Umgestaltung, um Ihren Raum nach
                      Ihren Vorstellungen und Anforderungen zu verändern.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Service und Unterhalt
                    </h3>
                    <p className="text-gray-700">
                      Zuverlässige Wartung und Instandhaltung sorgen dafür, dass alle
                      installierten Systeme und Geräte in optimalem Zustand bleiben.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Photovoltaik und E-Auto Ladestation</h3>
                    <p className="text-gray-700">
                      Installation von Solaranlagen zur Nutzung von Sonnenenergie und Heimladestationen für Elektrofahrzeuge. Bei grösseren Projekten werden Partner beigezogen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Beleuchtung und Alarm- und Brandmeldeanlagen</h3>
                    <p className="text-gray-700">
                      Beratung und Installation fortschrittlicher Beleuchtungslösungen sowie professionelle Installation von Sicherheits- und Brandmeldesystemen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hausanlagen</h3>
                    <p className="text-gray-700">
                      Wir bieten individuell abgestimmte Lösungen für sämtliche
                      elektrischen Systeme in Ihrem Zuhause von der Planung bis zur
                      Ausführung.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Überwachungsanlagen
                    </h3>
                    <p className="text-gray-700">
                      Fachkundige Beratung und Installation von Überwachungssystemen, um
                      Ihr Eigentum effektiv zu überwachen und zu schützen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

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
