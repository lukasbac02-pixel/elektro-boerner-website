import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${CONTACT.company}, ${CONTACT.address.full}.`,
  alternates: { canonical: "https://www.elektro-boerner.ch/impressum" },
};

export default function ImpressumPage() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Impressum</h1>
        </div>

        <Card className="border-primary/10 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold mb-4">Info</h2>
              <div className="space-y-2 mb-8">
                <p>
                  <strong>Name oder Firma:</strong> {CONTACT.company}
                </p>
                <p>
                  <strong>Adresse:</strong> {CONTACT.address.full}
                </p>
                <p>
                  <strong>Telefon:</strong> {CONTACT.phone[0].display}
                </p>
                <p>
                  <strong>E-Mail-Adresse:</strong>{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-primary hover:underline"
                  >
                    {CONTACT.email}
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
  );
}
