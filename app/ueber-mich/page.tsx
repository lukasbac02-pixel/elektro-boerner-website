"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, Building2, Calendar, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function UeberMichPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Über mich
            </h1>
            <div className="flex justify-center mb-8">
              <Card className="border-primary/20 shadow-xl overflow-hidden w-full max-w-sm">
                <div className="relative aspect-square">
                  <Image src="/portrait.png" alt="Stefan Börner" fill className="object-cover" />
                </div>
              </Card>
            </div>
            <h2 className="text-2xl font-semibold text-primary mb-2">Stefan Börner</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Eidg. dipl. Elektroinstallateur
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/10 shadow-lg h-full">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Firma</h3>
                <p className="text-gray-700">Elektro Börner GmbH</p>
                <p className="text-sm text-gray-600 mt-1">
                  Geschäftsführer & Inhaber
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-lg h-full">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">35+ Jahre</h3>
                <p className="text-gray-700">Erfahrung</p>
                <p className="text-sm text-gray-600 mt-1">
                  als Elektroinstallateur
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-lg h-full">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Standort</h3>
                <p className="text-gray-700">Betschwanden</p>
                <p className="text-sm text-gray-600 mt-1">Glarnerland</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/10 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Qualifikation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Ich arbeite seit über 35 Jahren als Elektroinstallateur. Durch die langjährige Tätigkeit konnte ich viel Erfahrung sammeln und habe mich konstant weitergebildet. 2011 eröffnete ich als eidg. dipl. Elektroinstallateur mit Elektro Börner GmbH meine eigene Firma und beschäftigte zeitweise mehrere Mitarbeiter. Die Elektro Börner GmbH ist Ihr Elektroinstallateur nicht nur für Privatpersonen, sondern auch für Gewerbe und Industrie und für die öffentliche Hand.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Ich werde in meiner Arbeit unterstützt von Karin Börner (Büro) und Sisach für die Buchhaltung. Je nach Auftragslage werden zusätzlich temporäre Mitarbeiter angestellt. Die Elektro Börner GmbH legt grossen Wert auf Qualität und Zuverlässigkeit. Das Unternehmen setzt auf moderne Technologien und innovative Lösungen, um den höchsten Ansprüchen gerecht zu werden.
                </p>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-primary/10 shadow-lg h-full lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Berufserfahrung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold min-w-[100px]">
                        ab 2011
                      </span>
                      <span>Geschäftsführer & Inhaber Elektro Börner GmbH</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold min-w-[100px]">
                        2014–2018
                      </span>
                      <span>Leiter Baustrom bei KLL Linthal</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold min-w-[100px]">
                        2012
                      </span>
                      <span>Weiterbildung zum eidg. dipl. Elektroinstallateur</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold min-w-[100px]">
                        2011
                      </span>
                      <span>Weiterbildung zum Elektro-Projektleiter Installation und Sicherheit</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold min-w-[100px]">
                        2009
                      </span>
                      <span>Weiterbildung zum Elektro-Sicherheitsberater</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold min-w-[100px]">
                        2007
                      </span>
                      <span>Weiterbildung zum Elektro-Installateur/Teamleiter</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-semibold min-w-[100px]">
                        2004–2006
                      </span>
                      <span>
                        Ausbildung Elektroinstallateur, Gewerbliche
                        Berufsschule Wetzikon
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/10 shadow-lg h-full lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Mitgliedschaften
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      VSEI
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      electrosuisse
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      eev
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
