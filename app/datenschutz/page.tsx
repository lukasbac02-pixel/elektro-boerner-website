"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo_boerner.png"
                alt="Elektro Börner Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Startseite
              </Link>
              <Link
                href="/ueber-mich"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Über mich
              </Link>
              <Link
                href="/dienstleistungen"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Dienstleistungen
              </Link>
              <Link href="/kontakt">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Kontakt
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Datenschutzerklärung
            </h1>
          </div>

          <Card className="border-primary/10 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Verantwortliche Stelle
                  </h2>
                  <p className="mb-2">
                    Verantwortliche Stelle im Sinne der Datenschutzgesetze,
                    insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
                  </p>
                  <p className="mb-1">
                    <strong>Elektro Börner GmbH</strong>
                  </p>
                  <p className="mb-1">Bahnhofstrasse 4</p>
                  <p className="mb-1">8777 Betschwanden</p>
                  <p className="mb-1">
                    <strong>Telefon:</strong> 055 550 32 65
                  </p>
                  <p className="mb-1">
                    <strong>E-Mail:</strong>{" "}
                    <a
                      href="mailto:elektro_boerner@bluewin.ch"
                      className="text-primary hover:underline"
                    >
                      elektro_boerner@bluewin.ch
                    </a>
                  </p>
                  <p>
                    <strong>WebSite:</strong> https://www.elektro-boerner.ch/
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Allgemeiner Hinweis
                  </h2>
                  <p className="mb-4">
                    Gestützt auf Artikel 13 der schweizerischen Bundesverfassung
                    und den datenschutzrechtlichen Bestimmungen des Bundes
                    (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz
                    ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer
                    persönlichen Daten. Die Betreiber dieser Seiten nehmen den
                    Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend der
                    gesetzlichen Datenschutzvorschriften sowie dieser
                    Datenschutzerklärung.
                  </p>
                  <p className="mb-4">
                    In Zusammenarbeit mit unseren Hosting-Providern bemühen wir
                    uns, die Datenbanken so gut wie möglich vor fremden Zugriffen,
                    Verlusten, Missbrauch oder vor Fälschung zu schützen.
                  </p>
                  <p className="mb-4">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet
                    (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                    aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                    Zugriff durch Dritte ist nicht möglich.
                  </p>
                  <p>
                    Durch die Nutzung dieser Website erklären Sie sich mit der
                    Erhebung, Verarbeitung und Nutzung von Daten gemäss der
                    nachfolgenden Beschreibung einverstanden. Diese Website kann
                    grundsätzlich ohne Registrierung besucht werden. Dabei werden
                    Daten wie beispielsweise aufgerufene Seiten bzw. Namen der
                    abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken
                    auf dem Server gespeichert, ohne dass diese Daten unmittelbar
                    auf Ihre Person bezogen werden. Personenbezogene Daten,
                    insbesondere Name, Adresse oder E-Mail-Adresse werden soweit
                    möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung
                    erfolgt keine Weitergabe der Daten an Dritte.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Datenschutzerklärung für Kontaktformular
                  </h2>
                  <p>
                    Senden Sie über diese Website per Kontaktformular Anfragen,
                    werden Ihre Angaben aus dem Kontaktformular, inklusive der von
                    Ihnen dort angegebenen Kontaktdaten, für die Bearbeitung der
                    Anfrage und für den Fall von Anschlussfragen bei uns
                    gespeichert. Ohne Einwilligung ihrerseits werden diese Daten
                    nicht weitergegeben.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Bearbeitung von Personendaten
                  </h2>
                  <p className="mb-4">
                    Personendaten sind alle Angaben, die sich auf eine bestimmte
                    oder bestimmbare Person beziehen. Eine betroffene Person ist
                    eine Person, über die Personendaten bearbeitet werden.
                    Bearbeiten umfasst jeden Umgang mit Personendaten, unabhängig
                    von den angewandten Mitteln und Verfahren, insbesondere das
                    Aufbewahren, Bekanntgeben, Beschaffen, Löschen, Speichern,
                    Verändern, Vernichten und Verwenden von Personendaten.
                  </p>
                  <p>
                    Wir bearbeiten Personendaten im Einklang mit dem
                    schweizerischen Datenschutzrecht. Im Übrigen bearbeiten wir –
                    soweit und sofern die EU-DSGVO anwendbar ist – Personendaten
                    gemäss folgenden Rechtsgrundlagen im Zusammenhang mit Art. 6
                    Abs. 1 DSGVO: Bearbeitung von Personendaten mit Einwilligung
                    der betroffenen Person, zur Erfüllung eines Vertrages, zur
                    Erfüllung einer rechtlichen Verpflichtung, um lebenswichtige
                    Interessen zu schützen, und um die berechtigten Interessen von
                    uns oder von Dritten zu wahren.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Datenschutzerklärung für Cookies
                  </h2>
                  <p className="mb-4">
                    Diese Website verwendet Cookies. Das sind kleine Textdateien,
                    die es möglich machen, auf dem Endgerät des Nutzers
                    spezifische, auf den Nutzer bezogene Informationen zu
                    speichern, während er die Website nutzt. Cookies ermöglichen
                    es, insbesondere Nutzungshäufigkeit und Nutzeranzahl der Seiten
                    zu ermitteln, Verhaltensweisen der Seitennutzung zu
                    analysieren, aber auch unser Angebot kundenfreundlicher zu
                    gestalten.
                  </p>
                  <p>
                    Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des
                    Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl
                    der Dienste, vor allem im Fall des Trackings, über die
                    US-amerikanische Seite http://www.aboutads.info/choices/ oder
                    die EU-Seite http://www.youronlinechoices.com/ erklärt werden.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Datenschutzerklärung für SSL-/TLS-Verschlüsselung
                  </h2>
                  <p className="mb-4">
                    Diese Website nutzt aus Gründen der Sicherheit und zum Schutz
                    der Übertragung vertraulicher Inhalte, wie zum Beispiel der
                    Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                    SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                    erkennen Sie daran, dass die Adresszeile des Browsers von
                    "http://" auf "https://" wechselt und an dem Schloss-Symbol in
                    Ihrer Browserzeile.
                  </p>
                  <p>
                    Wenn die SSL bzw. TLS Verschlüsselung aktiviert ist, können die
                    Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
                    werden.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Verwendung von Google Maps
                  </h2>
                  <p>
                    Diese Website nutzt das Angebot von Google Maps. Dadurch können
                    wir Ihnen interaktive Karten direkt in der Website anzeigen und
                    ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.
                    Durch den Besuch auf der Website erhält Google die Information,
                    dass Sie die entsprechende Unterseite unserer Website
                    aufgerufen haben. Weitere Informationen zu Zweck und Umfang der
                    Datenerhebung und ihrer Verarbeitung durch Google erhalten Sie
                    unter: www.google.de/intl/de/policies/privacy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Rechte betroffener Personen
                  </h2>
                  <p className="mb-4">
                    Sie haben das Recht auf Bestätigung, Auskunft, Berichtigung,
                    Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
                    und Widerspruch. Möchten Sie diese Rechte in Anspruch nehmen,
                    können Sie sich hierzu jederzeit an uns wenden.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Urheberrechte
                  </h2>
                  <p>
                    Die Urheber- und alle anderen Rechte an Inhalten, Bildern,
                    Fotos oder anderen Dateien auf der Website, gehören
                    ausschliesslich dem Betreiber dieser Website oder den speziell
                    genannten Rechteinhabern. Für die Reproduktion von sämtlichen
                    Dateien, ist die schriftliche Zustimmung des
                    Urheberrechtsträgers im Voraus einzuholen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Allgemeiner Haftungsausschluss
                  </h2>
                  <p className="mb-4">
                    Alle Angaben unseres Internetangebotes wurden sorgfältig
                    geprüft. Wir bemühen uns, unser Informationsangebot aktuell,
                    inhaltlich richtig und vollständig anzubieten. Trotzdem kann
                    das Auftreten von Fehlern nicht völlig ausgeschlossen werden,
                    womit wir keine Garantie für Vollständigkeit, Richtigkeit und
                    Aktualität von Informationen auch journalistisch-redaktioneller
                    Art übernehmen können.
                  </p>
                  <p>
                    Der Herausgeber übernimmt ebenfalls keine Verantwortung und
                    Haftung für die Inhalte und die Verfügbarkeit von Website
                    Dritter, die über externe Links dieser Website erreichbar sind.
                    Für den Inhalt der verlinkten Seiten sind ausschliesslich deren
                    Betreiber verantwortlich.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Änderungen
                  </h2>
                  <p>
                    Wir können diese Datenschutzerklärung jederzeit ohne
                    Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf
                    unserer Website publizierte Fassung.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Fragen an den Datenschutzbeauftragten
                  </h2>
                  <p>
                    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte
                    eine E-Mail oder wenden Sie sich direkt an die für den
                    Datenschutz zu Beginn der Datenschutzerklärung aufgeführten,
                    verantwortlichen Person in unserer Organisation.
                  </p>
                </div>

                <p className="text-sm text-gray-600 mt-8">
                  Zürich, 07.01.2021
                  <br />
                  Quelle: SwissAnwalt
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
