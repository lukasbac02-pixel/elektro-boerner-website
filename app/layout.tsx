import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elektro Börner – Ihr Elektroinstallateur in Betschwanden',
  description: 'Elektro Börner GmbH – Professionelle Elektroinstallationen, Kontrollen und Beratung im Glarnerland.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">{children}<script defer src="https://analytics-dashboard-lb.netlify.app/tracker.js" data-tid="elbo01"></script></body>
    </html>
  );
}
