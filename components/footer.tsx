import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6 w-full max-w-[200px]">
              <Image
                src="/logo_footer.webp"
                alt="Elektro Börner"
                width={400}
                height={200}
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professionelle Elektroinstallationen, Kontrollen und Beratung für
              ein sicheres Zuhause. Seit 2012 Ihr zuverlässiger Partner im
              Glarnerland.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.zip} {CONTACT.address.city}
                </div>
              </div>
              {CONTACT.phone.map((p) => (
                <div key={p.href} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a
                    href={p.href}
                    className="hover:text-white transition-colors"
                  >
                    {p.display}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Standort</h3>
            <div className="bg-gray-800 rounded-lg overflow-hidden h-48 mb-4">
              <iframe
                src={CONTACT.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Standort Elektro Börner"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
            <Link href="/kontakt">
              <Button
                size="sm"
                variant="outline"
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
              >
                Jetzt kontaktieren
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="hover:text-white transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
            </div>
            <a
              href="https://innoframe.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <span>Website Design by</span>
              <Image
                src="/innoframe-wordmark-light-2048.png"
                alt="innoframe"
                width={2048}
                height={463}
                className="h-3.5 w-auto opacity-70 transition-opacity group-hover:opacity-100"
              />
            </a>
            <p>
              © {new Date().getFullYear()} {CONTACT.company}. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
