import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TopBar } from "@/components/layout/top-bar";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { school } from "@/lib/school";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${school.name} — ${school.motto}`,
    template: `%s · ${school.name}`,
  },
  description:
    "Goodness Royal School, Alagbado Lagos. Creche, Nursery, Primary and Secondary education built on small classes, academic discipline and applied knowledge. Speak to Amarachi in the school office.",
  keywords: [
    "Goodness Royal School",
    "school in Alagbado",
    "primary school Lagos",
    "secondary school Lagos",
    "nursery Alagbado",
    "Casso bus stop school",
  ],
  openGraph: {
    title: `${school.name} — ${school.motto}`,
    description:
      "Creche, Nursery, Primary and Secondary school in Alagbado, Lagos. Applied Knowledge is Power.",
    locale: "en_NG",
    type: "website",
    siteName: school.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>
        <TopBar />
        <Navbar />
        <main id="main" className="flex-1 pb-[4.6rem] lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
