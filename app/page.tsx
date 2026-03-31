"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Wrench, ClipboardList, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const serviceCards = [
  { icon: Wrench, title: "Installationen", desc: "Umfangreiches Angebot an Installationsservices", href: "/dienstleistungen/installationen" },
  { icon: ClipboardList, title: "Beratung und Planung", desc: "Kompetente Beratung und Planung", href: "/dienstleistungen/beratung-planung" },
  { icon: Phone, title: "Telefon und Internet", desc: "Dienstleistungen für Telefon- und Internetsysteme", href: "/dienstleistungen/telefon-internet" },
  { icon: Shield, title: "Kontrollen mit Sicherheitsnachweis", desc: "Periodische Kontrollen für Ihre Sicherheit", href: "/dienstleistungen/kontrollen" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function HomePage() {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/main_image.webp"
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

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meine Dienstleistungen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ich arbeite seit über 40 Jahren als Elektroinstallateur. Durch die langjährige Tätigkeit konnte ich viel Erfahrung sammeln und habe mich konstant weitergebildet.
            </p>
          </AnimatedSection>

          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {serviceCards.map((service, i) => {
              const Icon = service.icon;
              const card = (
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                  <CardContent className="p-8 text-center flex flex-col flex-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-1">{service.desc}</p>
                    <Link href={service.href} className="mt-auto">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        Mehr erfahren
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );

              if (prefersReducedMotion) return <div key={service.href}>{card}</div>;

              return (
                <motion.div
                  key={service.href}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                >
                  {card}
                </motion.div>
              );
            })}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/dienstleistungen">
              <Button size="lg">Alle Dienstleistungen anzeigen</Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="flex justify-center">
              <Card className="border-primary/20 shadow-xl overflow-hidden w-full max-w-md">
                <div className="relative aspect-square">
                  <Image src="/portrait.webp" alt="Stefan Börner" fill className="object-cover" />
                </div>
              </Card>
            </AnimatedSection>
            <AnimatedSection>
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt aufnehmen</h2>
            <p className="text-lg text-gray-600">Ich freue mich auf Ihre Anfrage</p>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="border-primary/10 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <ContactForm />
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
