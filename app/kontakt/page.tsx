import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { CONTACT } from "@/lib/constants";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren } from "@/components/motion/stagger-children";

export const metadata: Metadata = {
  title: "Kontakt – Elektriker in Betschwanden & Umgebung",
  description:
    "Kontaktieren Sie Elektro Börner GmbH in Betschwanden GL. Telefon, E-Mail oder Kontaktformular – wir beraten Sie gerne zu Ihrem Elektroprojekt.",
  alternates: { canonical: "https://www.elektro-börner.ch/kontakt" },
};

export default function KontaktPage() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Kontakt
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fragen, Projekt oder Offerte? Melden Sie sich bei uns.
          </p>
        </FadeIn>

        <StaggerChildren className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-primary/10 shadow-lg h-full">
            <CardContent className="p-4 md:p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-4">Telefon</h3>
              <div className="space-y-2">
                {CONTACT.phone.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="block text-gray-700 hover:text-primary transition-colors"
                  >
                    {p.display}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/10 shadow-lg h-full">
            <CardContent className="p-4 md:p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-4">E-Mail</h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-gray-700 hover:text-primary transition-colors break-all"
              >
                {CONTACT.email}
              </a>
            </CardContent>
          </Card>

          <Card className="border-primary/10 shadow-lg h-full">
            <CardContent className="p-4 md:p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-4">Adresse</h3>
              <p className="text-gray-700">
                {CONTACT.address.street}
                <br />
                {CONTACT.address.zip} {CONTACT.address.city}
              </p>
            </CardContent>
          </Card>
        </StaggerChildren>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <h2 className="text-2xl font-bold mb-6">Kontaktformular</h2>
            <Card className="border-primary/10 shadow-lg h-full">
              <CardContent className="p-4 md:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <h2 className="text-2xl font-bold mb-6">Standort</h2>
            <Card className="border-primary/10 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src={CONTACT.map.embedUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Standort Elektro Börner"
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </CardContent>
            </Card>
            <div className="mt-4">
              <a
                href={CONTACT.map.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                In grösserer Karte anzeigen
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
