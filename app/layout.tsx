import type { Metadata } from "next";
import { Playfair_Display, Inter_Tight } from "next/font/google";
import "./globals.css";
import MotionProvider from "./components/MotionProvider";

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
	metadataBase: new URL("https://triad-bar.vercel.app"),
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
		url: "https://triad-bar.vercel.app",
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
	alternates: { canonical: "https://triad-bar.vercel.app" },
	robots: { index: true, follow: true },
};

const productJsonLd = {
	"@context": "https://schema.org",
	"@type": "Product",
	name: "Triad Bar",
	description:
		"Architecturally stratified three-layer pyramid chocolate bar. Single-origin cacao, custom-built fillings.",
	brand: { "@type": "Brand", name: "Triad Confections" },
	category: "Chocolate",
	image: ["https://triad-bar.vercel.app/img/hero.png"],
	offers: {
		"@type": "Offer",
		price: "100",
		priceCurrency: "AED",
		availability: "https://schema.org/PreOrder",
		url: "https://triad-bar.vercel.app/#vessel",
	},
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
			<body className="font-body bg-background text-foreground flex min-h-full flex-col">
				<MotionProvider>{children}</MotionProvider>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(productJsonLd),
					}}
				/>
			</body>
		</html>
	);
}
