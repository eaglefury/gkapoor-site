import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4, Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sourceCode = Source_Code_Pro({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gaurav Kapoor — Engineering Lead",
    template: "%s | Gaurav Kapoor",
  },
  description:
    "Portfolio of Gaurav Kapoor — engineering lead with 20+ years of experience building scalable software systems.",
  openGraph: {
    title: "Gaurav Kapoor — Engineering Lead",
    description:
      "Portfolio of Gaurav Kapoor — engineering lead with 20+ years of experience building scalable software systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gaurav Kapoor",
              jobTitle: "Engineering Lead",
              url: "https://gauravkapoor.dev",
              sameAs: [
                "https://www.linkedin.com/in/gaurravk",
                "https://github.com/eaglefury",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${sourceSans.variable} ${sourceSerif.variable} ${sourceCode.variable} antialiased`}
      >
        <ThemeProvider>
          <Nav />
          <main className="mx-auto max-w-4xl px-6">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
