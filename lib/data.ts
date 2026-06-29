export interface Layer {
	id: string;
	label: string;
	subtitle: string;
	description: string;
	origin: string;
	cacao: string;
	snap: string;
	color: string;
	image: string;
}

export interface Filling {
	id: string;
	name: string;
	description: string;
	color: string;
	image: string;
}

export interface Pillar {
	number: string;
	title: string;
	stat: string;
	statLabel: string;
	description: string;
}

export const heroImage = `/img/hero.png`;
export const vesselImageLeft = `/img/vessel-left.png`;
export const vesselImageRight = `/img/vessel.png`;

export const layers: Layer[] = [
	{
		id: "apex",
		label: "The Apex",
		subtitle: "Top Layer",
		description:
			"Single-origin Ecuadorian cocoa butter tempered into a thin ivory couverture. It yields softly at first contact — no hard snap here, just a clean melt that opens the bite.",
		origin: "Esmeraldas, Ecuador",
		cacao: "33%",
		snap: "Soft",
		color: "#F5E6D3",
		image: `/img/core.png`,
	},
	{
		id: "middle",
		label: "The Core",
		subtitle: "Middle Layer",
		description:
			"The heart of every Triad. Where salted caramel meets aerated pistachio mousse or dark berry ganache — your chosen filling suspended between two walls of tempered chocolate.",
		origin: "Bronte, Sicily",
		cacao: "58%",
		snap: "Molten",
		color: "#7D2242",
		image: `/img/core.png`,
	},
	{
		id: "base",
		label: "The Foundation",
		subtitle: "Base Layer",
		description:
			"A thick structural base of 85% Venezuelan dark chocolate. Conched for 72 hours to develop volcanic depth and a long finish that carries dark fruit and toasted earth.",
		origin: "Barlovento, Venezuela",
		cacao: "85%",
		snap: "Clean",
		color: "#4B5320",
		image: `/img/base.png`,
	},
];

export const fillings: Record<"apex" | "core" | "base", Filling[]> = {
	apex: [
		{
			id: "salted-caramel",
			name: "Salted Caramel",
			description:
				"Fleur de sel from Guérande meets aged Normandy butter",
			color: "#C9974C",
			image: `/img/core.png`,
		},
		{
			id: "pistachio",
			name: "Pistachio Praline",
			description: "Bronte pistachio praline with Sicilian sea salt",
			color: "#4B5320",
			image: `/img/pistachio.png`,
		},
		{
			id: "white-chocolate",
			name: "White Couverture",
			description:
				"33% single-origin cocoa butter, Tahitian vanilla bean",
			color: "#F5E6D3",
			image: `/img/core.png`,
		},
	],
	core: [
		{
			id: "hazelnut-praline",
			name: "Hazelnut Praline",
			description: "Piedmont hazelnuts caramelized at 165°C",
			color: "#C9974C",
			image: `/img/base.png`,
		},
		{
			id: "tahini-honey",
			name: "Tahini & Honey",
			description:
				"Stone-ground Ethiopian sesame swirled with thyme honey",
			color: "#B8860B",
			image: `/img/tahini-honey.png`,
		},
		{
			id: "raspberry-coulis",
			name: "Raspberry Coulis",
			description: "Reduced raspberry with pink peppercorn",
			color: "#7D2242",
			image: `/img/raspberry-coulis.png`,
		},
	],
	base: [
		{
			id: "dark-85",
			name: "85% Venezuelan Dark",
			description: "Barlovento beans, 72-hour conche",
			color: "#2C1810",
			image: `/img/dark-85.png`,
		},
		{
			id: "dark-72",
			name: "72% Ecuadorian Single",
			description: "Esmeraldas cacao with floral high notes",
			color: "#3D2B1F",
			image: `/img/base.png`,
		},
		{
			id: "milk-caramel",
			name: "Caramelized Milk",
			description: "Slow-caramelized Swiss milk chocolate, 42%",
			color: "#8B6914",
			image: `/img/core.png`,
		},
	],
};

export const builderSteps = [
	{ key: "apex" as const, label: "The Apex", subtitle: "Top Layer" },
	{ key: "core" as const, label: "The Core", subtitle: "Middle Layer" },
	{ key: "base" as const, label: "The Foundation", subtitle: "Base Layer" },
];

export const labCards: Pillar[] = [
	{
		number: "01",
		title: "The Snap",
		stat: "Clean",
		statLabel: "Audible Break",
		description:
			"Tempered at 31.5°C — the crystalline threshold where cocoa butter forms Type V polymorphs. The base breaks with a clean, resonant crack that signals good temper before the first taste.",
	},
	{
		number: "02",
		title: "The Melt",
		stat: "33.8°C",
		statLabel: "Melt Point",
		description:
			"Engineered to dissolve around body temperature. The shell yields shortly after contact with the palate, releasing the inner stratum in a controlled cascade of flavor.",
	},
	{
		number: "03",
		title: "The Linger",
		stat: "Long",
		statLabel: "Finish Duration",
		description:
			"A long, layered finish — dark fruit, toasted earth, and a whisper of volcanic mineral. Each stratum releases its flavor at a different moment in the decay.",
	},
	{
		number: "04",
		title: "The Vessel",
		stat: "∠ 51.5°",
		statLabel: "Pyramid Angle",
		description:
			"The 51.5° slope — shared with the Great Pyramid of Khufu — is a design gesture, not a structural one. We chose the angle so the bar reads as a monument before it reads as a chocolate.",
	},
];

export const navLinks = [
	{ label: "The Bar", href: "#stratum" },
	{ label: "The Lab", href: "#lab" },
	{ label: "Build Yours", href: "#builder" },
	{ label: "Spec", href: "#manifesto" },
	{ label: "The Vessel", href: "#vessel" },
	{ label: "Prices", href: "#prices" },
	{ label: "Golden Tickets", href: "#tickets" },
];
