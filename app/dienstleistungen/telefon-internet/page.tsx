import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren } from "@/components/motion/stagger-children";

export const metadata: Metadata = {
  title: "Telefon & Internet – Netzwerk & Telematik im Glarnerland",
  description:
    "Telefon- und Internetinstallationen, Hausanlagen und kleine Büronetzwerke im Glarnerland. Zuverlässige Telematik-Lösungen – Elektro Börner GmbH.",
  alternates: { canonical: "https://www.elektro-boerner.ch/dienstleistungen/telefon-internet" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.elektro-boerner.ch" },
    { "@type": "ListItem", position: 2, name: "Dienstleistungen", item: "https://www.elektro-boerner.ch/dienstleistungen" },
    { "@type": "ListItem", position: 3, name: "Telefon & Internet", item: "https://www.elektro-boerner.ch/dienstleistungen/telefon-internet" },
  ],
};

export default function TelefonInternetPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Telefon und Internet</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Dienstleistungen für Telefon- und Internetsysteme</p>
        </FadeIn>

        <StaggerChildren className="space-y-16">
        <Card className="border-primary/10 shadow-lg">
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

        <Card className="border-primary/10 shadow-lg">
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
                  src="/netzwerk-pic.webp"
                  alt="Kleine Büronetzwerke"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/10 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">Vermittlung von Partnern</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wir verbinden Sie mit erfahrenen Fachleuten und Partnern, die perfekt auf Ihre Projektbedürfnisse
              abgestimmt sind.
            </p>
          </CardContent>
        </Card>
        </StaggerChildren>

        <FadeIn className="text-center mt-16">
          <Link href="/kontakt">
            <Button size="lg">Jetzt Beratung anfragen</Button>
          </Link>
        </FadeIn>
      </div>
    </section>
    </>
  );
}
