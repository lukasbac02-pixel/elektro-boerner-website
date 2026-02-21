"use client";

import Link from "next/link";
import { Wrench, Shield, Phone, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";

export default function DienstleistungenPage() {
  const services = [
    {
      title: "Beratung & Planung",
      description: "Professionelle Beratung und sorgfältige Planung für Ihr Elektroprojekt. Von der ersten Idee bis zur Umsetzung begleiten wir Sie kompetent.",
      icon: Lightbulb,
      href: "/dienstleistungen/beratung-planung",
    },
    {
      title: "Installationen",
      description: "Fachgerechte Installation von Elektrosystemen, Solaranlagen, E-Mobility-Lösungen und Wärmepumpen für moderne und nachhaltige Energieversorgung.",
      icon: Wrench,
      href: "/dienstleistungen/installationen",
    },
    {
      title: "Kontrollen",
      description: "Periodische Sicherheitskontrollen und Prüfungen Ihrer Elektroinstallation gemäss NIV. Für Ihre Sicherheit und gesetzliche Compliance.",
      icon: Shield,
      href: "/dienstleistungen/kontrollen",
    },
    {
      title: "Telefon & Internet",
      description: "Installation und Wartung von Telefon- und Internetanschlüssen. Moderne Kommunikationslösungen für Ihr Zuhause oder Büro.",
      icon: Phone,
      href: "/dienstleistungen/telefon-internet",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Dienstleistungen
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von der Erstberatung bis zur periodischen Kontrolle – alles aus
              einer Hand
            </p>
          </div>

          <Card className="border-primary/20 shadow-lg bg-gradient-to-br from-white to-primary/5 mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Ist Ihre Elektroinstallation fit für die Zukunft?
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">
                  Sie wollen eine Solaranlage auf Ihrem Dach installieren. Oder
                  eine Lademöglichkeit für ein Hybrid-/vollelektrisches Fahrzeug
                  in Ihrer Garage schaffen? Die alte Ölheizung tut es nicht mehr,
                  eine Wärmepumpe ist als saubere Lösung angesagt. Küche und Bad
                  sind in die Jahre gekommen. Neue sparsame Küchengeräte müssen
                  her ...
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Ist Ihre Elektroinstallation dafür fit?
                </h3>
                <p className="text-gray-700 mb-4">
                  Zentraler Bestandteil Ihrer Installation ist die
                  Elektroverteilung. In vielen Wohnbauten sind immer noch
                  asbesthaltige Eternit-Tableaus verbaut. Ein Nachrüsten von
                  Sicherungen, Fehlerstromschutzschaltern etc. ist nahezu
                  unmöglich resp. mit sehr hohem Aufwand verbunden.
                </p>
                <p className="text-gray-700 mb-4">
                  Um eine sichere, zeitgemässe Elektroinstallation zu
                  verwirklichen, ist es erforderlich, das gesamte System als sog.
                  TN-S auszuführen (3- resp. 5-adrige Leitungen mit separat
                  geführtem grün-gelb gekennzeichnetem Schutzleiter). Eine solche
                  Installation eignet sich dann auch für die Anwendung der
                  Fehlerstromschutzschaltung (vorgeschrieben für Steckdosen aussen
                  und in Dusche/Bad seit 1985, für alle Steckdosen seit 2010, für
                  die gesamte Lichtinstallation seit 2020.)
                </p>
                <p className="text-gray-700 mb-4">
                  Derart «fit gemachte» Elektroinstallationen müssen Sie zudem
                  nur alle 20 Jahre periodisch prüfen lassen. Bei alten (2- resp.
                  4-adrigen) Installationen ist diese Kontrolle alle 5 Jahre
                  Vorschrift.
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-6">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Oberster Grundsatz ist Ihre Sicherheit.
                  </p>
                  <p className="text-gray-700">
                    Fragen Sie uns, wir beraten Sie gerne.
                  </p>
                </div>
                <p className="text-gray-700 mt-6 text-sm">
                  Gerne führen wir auch die oben erwähnten Kontrollen für Sie
                  aus, natürlich nicht dort, wo wir als Installateur tätig waren
                  – dann können wir Ihnen jedoch kompetente Fachkollegen
                  empfehlen.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Link href={service.href}>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        Mehr erfahren
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
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
