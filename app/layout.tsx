import type { Metadata } from "next";
import { Playfair_Display, Inter_Tight } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triadbar.com"),
  title: {
    default: "Triad Bar",
    template: "%s · Triad Bar",
  },
  description:
    "An architectural, multi-stratified chocolate experience allowing you to custom-build your own artisan pyramid bar, one decadent layer at a time.",
  applicationName: "Triad Bar",
  keywords: [
    "Triad Bar",
    "architectural chocolate",
    "stratified chocolate",
    "pyramid chocolate",
    "artisan chocolate",
    "single-origin cacao",
  ],
  openGraph: {
    type: "website",
    url: "https://triadbar.com",
    siteName: "Triad Bar",
    title: "Triad Bar",
    description:
      "An architectural, multi-stratified chocolate experience allowing you to custom-build your own artisan pyramid bar, one decadent layer at a time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triad Bar",
    description:
      "An architectural, multi-stratified chocolate experience allowing you to custom-build your own artisan pyramid bar, one decadent layer at a time.",
  },
  alternates: { canonical: "https://triadbar.com" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1A1614] text-[#FDFCFB] font-body">
        {children}
      </body>
    </html>
  );
}
