"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";

export default function BeratungPlanungPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Beratung und Planung</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Kompetente Beratung und Planung</p>
          </div>

          <Card className="border-primary/10 shadow-lg mb-16">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bei der Planung und Kostenschätzung von elektrischen Systemen bieten wir professionelle Lösungen, um
                sicherzustellen, dass Ihr Projekt effizient gestaltet und präzise budgetiert wird. Unser Ansatz umfasst:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">1.</span>
                  <div>
                    <strong>Detailliertes Design:</strong> Massgeschneiderte Planung für effiziente elektrische Systemlayouts.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">2.</span>
                  <div>
                    <strong>Genauigkeit der Kostenabschätzungen:</strong> Klare Aufschlüsselung der Projektkosten zur Sicherstellung der Budgeteinhaltung.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">3.</span>
                  <div>
                    <strong>Individuelle Lösungen:</strong> Elektrische Pläne, die auf Ihre spezifischen Bedürfnisse und Einschränkungen zugeschnitten sind.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">4.</span>
                  <div>
                    <strong>Budgetmanagement:</strong> Effektive Kostenkontrolle, um Ihr Projekt finanziell auf Kurs zu halten.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-6">Für unsere Kunden da sein: Unser Engagement für erstklassigen Service</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Es kann frustrierend sein, nicht genau zu wissen, was Sie für Ihre elektrischen Systeme benötigen.
              Unser Kostenschätzungsservice bietet Ihnen klare und präzise Kostenvoranschläge, damit Sie Ihr
              Projekt ohne unerwartete Überraschungen sicher vorantreiben können.
            </p>
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
