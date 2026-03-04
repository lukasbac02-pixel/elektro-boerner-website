"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, ClipboardList, Phone, Shield, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/main_image.png"
            alt="Elektro Börner bei der Arbeit"
            fill
            className="object-cover brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/5" />
        </div>
        <div className="relative z-10 text-left md:text-center text-white px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 drop-shadow-2xl uppercase"
          >
            Ihr<br className="md:hidden" /> <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">Elektroinstallateur</span><br />
            in Glarus und<br className="md:hidden" /> Umgebung
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-2xl"
          >
            Professionelle Elektroinstallationen, Kontrollen und Beratung für ein sicheres Zuhause. Seit 2012 Ihr zuverlässiger Partner im Glarnerland.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/kontakt">
              <Button size="lg" className="w-full sm:w-auto shadow-2xl bg-primary hover:bg-primary/90 text-white border-2 border-primary">
                Jetzt Beratung anfragen
              </Button>
            </Link>
            <Link href="/dienstleistungen">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-gray-50 shadow-2xl border-2 border-primary text-primary font-semibold">
                Unsere Leistungen
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meine Dienstleistungen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ich arbeite seit über 40 Jahren als Elektroinstallateur. Durch die langjährige Tätigkeit konnte ich viel Erfahrung sammeln und habe mich konstant weitergebildet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardContent className="p-8 text-center flex flex-col flex-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Installationen</h3>
                <p className="text-gray-600 mb-6 flex-1">Umfangreiches Angebot an Installationsservices</p>
                <Link href="/dienstleistungen/installationen" className="mt-auto">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Mehr erfahren
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardContent className="p-8 text-center flex flex-col flex-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                  <ClipboardList className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Beratung und Planung</h3>
                <p className="text-gray-600 mb-6 flex-1">Kompetente Beratung und Planung</p>
                <Link href="/dienstleistungen/beratung-planung" className="mt-auto">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Mehr erfahren
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardContent className="p-8 text-center flex flex-col flex-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Telefon und Internet</h3>
                <p className="text-gray-600 mb-6 flex-1">Dienstleistungen für Telefon- und Internetsysteme</p>
                <Link href="/dienstleistungen/telefon-internet" className="mt-auto">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Mehr erfahren
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardContent className="p-8 text-center flex flex-col flex-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Kontrollen mit Sicherheitsnachweis</h3>
                <p className="text-gray-600 mb-6 flex-1">Periodische Kontrollen für Ihre Sicherheit</p>
                <Link href="/dienstleistungen/kontrollen" className="mt-auto">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Mehr erfahren
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/dienstleistungen">
              <Button size="lg">Alle Dienstleistungen anzeigen</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Card className="border-primary/20 shadow-xl overflow-hidden w-full max-w-md">
                <div className="relative aspect-square">
                  <Image src="/portrait.png" alt="Stefan Börner" fill className="object-cover" />
                </div>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Über mich</h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">Stefan Börner</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Eidg. dipl. Elektroinstallateur mit über 40 Jahren Erfahrung
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Geschäftsführer & Inhaber Elektro Börner GmbH seit 2012</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mitglied bei EIT.swiss, electrosuisse und eev</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Kontinuierliche Weiterbildung und Zertifizierungen</span>
                </li>
              </ul>
              <Link href="/ueber-mich">
                <Button size="lg" variant="outline">Mehr erfahren</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt aufnehmen</h2>
            <p className="text-lg text-gray-600">Ich freue mich auf Ihre Anfrage</p>
          </div>

          <Card className="border-primary/10 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefon</label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Nachricht *</label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
