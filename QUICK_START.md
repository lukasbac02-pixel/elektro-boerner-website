# Quick Start - Netlify Deployment

## 3 Einfache Schritte zur Deployment

### Schritt 1: Projekt herunterladen
Laden Sie das gesamte Projektverzeichnis herunter.

### Schritt 2: Build erstellen (Optional für Drag & Drop)
```bash
cd projekt-ordner
npm install
npm run build
```

### Schritt 3: Auf Netlify deployen

#### Option A: Drag & Drop (Am einfachsten - EMPFOHLEN)

1. Gehen Sie zu: https://app.netlify.com/drop
2. Ziehen Sie den **`out`** Ordner auf die Seite
3. Fertig! Ihre Website ist live

#### Option B: GitHub + Netlify (Für fortlaufende Updates)

1. Erstellen Sie ein neues GitHub Repository
2. Laden Sie das Projekt hoch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/IHR-USERNAME/elektro-boerner.git
   git push -u origin main
   ```
3. Gehen Sie zu: https://app.netlify.com
4. Klicken Sie auf "Add new site" → "Import an existing project"
5. Wählen Sie GitHub und Ihr Repository
6. Netlify erkennt automatisch alle Einstellungen
7. Klicken Sie auf "Deploy site"

## Was passiert bei der Deployment?

Netlify wird:
- ✅ Automatisch `npm install` ausführen
- ✅ Den Build-Befehl `npm run build` ausführen
- ✅ Den `out` Ordner als statische Website hosten
- ✅ Eine kostenlose `.netlify.app` URL bereitstellen
- ✅ Automatisches HTTPS aktivieren

## Nach der Deployment

### 1. Custom Domain hinzufügen (Optional)

1. Gehen Sie zu: Site settings → Domain management
2. Klicken Sie auf "Add custom domain"
3. Geben Sie Ihre Domain ein (z.B. elektro-boerner.ch)
4. Folgen Sie den DNS-Anweisungen von Netlify

### 2. Kontaktdaten aktualisieren

Bearbeiten Sie `app/page.tsx`:
- Zeile ~433: Telefonnummer
- Zeile ~447: E-Mail-Adresse

Nach Änderungen:
```bash
npm run build
```

Dann entweder:
- Neuen Build per Drag & Drop hochladen, ODER
- Changes committen und pushen (bei GitHub-Integration)

### 3. Bilder ersetzen

Ersetzen Sie die Unsplash-Platzhalter mit echten Projektfotos:
- Hero-Bild
- Referenzen-Galerie
- Leistungen-Bilder
- "Über mich" Foto

## Wichtige URLs

- 📦 Netlify Drop: https://app.netlify.com/drop
- 🚀 Netlify Dashboard: https://app.netlify.com
- 📚 Netlify Docs: https://docs.netlify.com

## Hilfe benötigt?

- Siehe `DEPLOYMENT.md` für detaillierte Anweisungen
- Siehe `README.md` für Projekt-Dokumentation
- Netlify Support: https://www.netlify.com/support/

## Kosten

- Netlify Free Tier beinhaltet:
  - ✅ 100 GB Bandwidth/Monat
  - ✅ Unbegrenzte statische Websites
  - ✅ Automatisches HTTPS
  - ✅ Continuous Deployment
  - ✅ Kostenlose `.netlify.app` Subdomain

Für diese statische Website ist der Free Tier vollkommen ausreichend!
