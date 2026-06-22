import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { dentistSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  applicationName: siteConfig.name,
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/icon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101E38"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans" suppressHydrationWarning>
        <SEOJsonLd data={dentistSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
