"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/navigation";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Kontakt
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fragen, Projekt oder Offerte? Melden Sie sich bei uns.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-primary/10 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-4">Telefon</h3>
                <div className="space-y-2">
                  <a
                    href="tel:+41555503265"
                    className="block text-gray-700 hover:text-primary transition-colors"
                  >
                    055 550 32 65
                  </a>
                  <a
                    href="tel:+41799046943"
                    className="block text-gray-700 hover:text-primary transition-colors"
                  >
                    079 904 69 43
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-4">E-Mail</h3>
                <a
                  href="mailto:elektro_boerner@bluewin.ch"
                  className="text-gray-700 hover:text-primary transition-colors break-all"
                >
                  elektro_boerner@bluewin.ch
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/10 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-4">Adresse</h3>
                <p className="text-gray-700">
                  Bahnhofstrasse 4<br />
                  8777 Betschwanden
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Kontaktformular</h2>
              <Card className="border-primary/10 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="rounded-lg"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Nachricht senden
                    </Button>
                    {formSubmitted && (
                      <p className="text-sm text-green-600 text-center">
                        Vielen Dank! Ihre Nachricht wurde gesendet.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Standort</h2>
              <Card className="border-primary/10 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=9.023%2C46.944%2C9.028%2C46.948&layer=mapnik&marker=46.945946%2C9.025424"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Standort Elektro Börner"
                  ></iframe>
                </CardContent>
              </Card>
              <div className="mt-4">
                <a
                  href="https://www.openstreetmap.org/#map=19/46.945946/9.025424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  In grösserer Karte anzeigen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
