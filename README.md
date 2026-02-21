# Elektro Börner Website

Eine moderne, einseitige Website für Elektro Börner GmbH – Elektrische Lösungen im Glarnerland.

## Features

- ⚡ Modern Swiss design mit Elektro Börner Branding (#c21926)
- 📱 Vollständig responsive für alle Geräte
- 🎨 Animationen mit Framer Motion
- 🎠 Automatisches Referenzen-Karussell
- 🔄 Interaktive Leistungs-Slideshow
- 📋 Kontaktformular
- ♿ Barrierefrei

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Sprache:** TypeScript

## Lokale Entwicklung

### Voraussetzungen

- Node.js 18 oder höher
- npm oder yarn

### Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Website ist dann verfügbar unter [http://localhost:3000](http://localhost:3000)

### Build für Produktion

```bash
# Static Export erstellen
npm run build
```

Der Build-Output wird im `out/` Verzeichnis erstellt.

## Deployment auf Netlify

### Methode 1: Drag & Drop

1. Build erstellen:
   ```bash
   npm run build
   ```

2. Zu [Netlify Drop](https://app.netlify.com/drop) gehen

3. Den `out` Ordner auf die Seite ziehen

### Methode 2: Git-basiert

1. Repository auf GitHub/GitLab/Bitbucket hochladen

2. Bei [Netlify](https://app.netlify.com) einloggen

3. "Add new site" → "Import an existing project" wählen

4. Repository verbinden

5. Netlify erkennt automatisch die Einstellungen aus `netlify.toml`

Die vollständigen Deployment-Anweisungen finden Sie in [DEPLOYMENT.md](DEPLOYMENT.md)

## Projekt-Struktur

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Hauptseite
│   └── globals.css        # Globale Styles
├── components/
│   └── ui/                # shadcn/ui Components
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── gallery4.tsx   # Referenzen Carousel
│       └── ...
├── lib/
│   └── utils.ts           # Utility Functions
├── public/                # Statische Assets
├── netlify.toml          # Netlify Konfiguration
├── next.config.js        # Next.js Konfiguration
└── tailwind.config.ts    # Tailwind Konfiguration
```

## Anpassungen

### Kontaktinformationen ändern

Bearbeiten Sie `app/page.tsx`:

- **Telefon:** Zeile ~433
- **E-Mail:** Zeile ~447

```typescript
// Beispiel
<a href="tel:+41XXXXXXXXX">+41 XX XXX XX XX</a>
<a href="mailto:info@elektro-boerner.ch">info@elektro-boerner.ch</a>
```

### Bilder ersetzen

Ersetzen Sie die Unsplash-Platzhalter URLs in `app/page.tsx`:

- Hero-Bild
- Referenzen-Bilder im `demoReferences` Array
- Leistungen-Bilder im `services` Array
- "Über mich" Bild

### Farben anpassen

Die primäre Markenfarbe (#c21926) ist in `app/globals.css` definiert:

```css
:root {
  --primary: 355 75% 44%; /* #c21926 */
}
```

## Browser-Unterstützung

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## Lizenz

© 2024 Elektro Börner GmbH. Alle Rechte vorbehalten.

## Support

Bei Fragen zum Projekt kontaktieren Sie bitte den Entwickler.
