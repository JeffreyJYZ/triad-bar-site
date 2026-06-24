export type Layer = {
	id: string;
	label: string;
	subtitle: string;
	description: string;
	origin: string;
	cacao: string;
	snap: string;
	color: string;
	image: string;
};

export type Filling = {
	id: string;
	name: string;
	description: string;
	color: string;
	image: string;
};

export type Pillar = {
	number: string;
	title: string;
	stat: string;
	statLabel: string;
	description: string;
};

const M = "https://media.base44.com/images/public/6a3a3ae86be07351bf17fb54";

export const heroImage = `${M}/824f4cecc_generated_3445a77f.png`;
export const vesselImageLeft = `${M}/32fe9de09_generated_0117a4e6.png`;
export const vesselImageRight = `${M}/824f4cecc_generated_3445a77f.png`;

export const layers: Layer[] = [
	{
		id: "apex",
		label: "The Apex",
		subtitle: "Top Layer",
		description:
			"Single-origin Ecuadorian cocoa butter, 33% cacao butter. A thin, crystalline ivory shell tempered to an audible 5,100 Hz snap - the sound of perfection breaking open.",
		origin: "Esmeraldas, Ecuador",
		cacao: "33%",
		snap: "5,100 Hz",
		color: "#F5E6D3",
		image: `https://static.vecteezy.com/system/resources/thumbnails/047/829/976/small/white-chocolate-on-transparent-background-free-png.png`,
	},
	{
		id: "middle",
		label: "The Core",
		subtitle: "Middle Layer",
		description:
			"The heart of every Triad. Where viscous salted caramel meets aerated pistachio mousse or dark berry ganache - your chosen filling suspended between two walls of tempered chocolate.",
		origin: "Bronte, Sicily",
		cacao: "58%",
		snap: "Molten",
		color: "#7D2242",
		image: `${M}/47df75ad4_generated_1237f540.png`,
	},
	{
		id: "base",
		label: "The Foundation",
		subtitle: "Base Layer",
		description:
			"A thick, structural base of 85% Venezuelan dark chocolate. Roasted at low altitude for 72 hours to develop volcanic depth and a finish that lingers for eleven seconds.",
		origin: "Barlovento, Venezuela",
		cacao: "85%",
		snap: "3,800 Hz",
		color: "#4B5320",
		image: `${M}/4f01a0bac_generated_ed1fd82e.png`,
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
			image: `${M}/47df75ad4_generated_1237f540.png`,
		},
		{
			id: "berry-ganache",
			name: "Dark Berry Ganache",
			description: "Wild blackberry and 64% Peruvian dark chocolate",
			color: "#7D2242",
			image: `${M}/badec4138_generated_bb1b1d50.png`,
		},
    {
      id: "pistachio",
      name: "Pistachio Mousse",
      description: "Aerated Bronte pistachio with Sicilian sea salt",
      color: "#4B5320",
      image: `${M}/1ca4351e1_generated_10daebd9.png`,
    },
    {
      id: "white-chocolate",
      name: "White Chocolate",
      description: "33% single-origin cocoa butter, Tahitian vanilla bean",
      color: "#F5E6D3",
      image: `${M}/99c508c61_generated_4a4ba360.png`,
    },
  ],
  core: [
		{
			id: "hazelnut-praline",
			name: "Hazelnut Praline",
			description: "Piedmont hazelnuts roasted and caramelized at 165°C",
			color: "#C9974C",
			image: `${M}/4f01a0bac_generated_ed1fd82e.png`,
		},
		{
			id: "tahini-honey",
			name: "Tahini & Honey",
			description: "Ethiopian sesame tahini swirled with thyme honey",
			color: "#B8860B",
			image: `${M}/f64b1b669_generated_a16abff8.png`,
		},
    {
      id: "raspberry-coulis",
      name: "Raspberry Coulis",
      description: "Concentrated Driscoll raspberry with pink peppercorn",
      color: "#7D2242",
      image: `${M}/badec4138_generated_bb1b1d50.png`,
    },
  ],
  base: [
		{
			id: "dark-85",
			name: "85% Venezuelan Dark",
			description: "Barlovento beans, 72-hour low-altitude roast",
			color: "#2C1810",
			image: `${M}/99c508c61_generated_4a4ba360.png`,
		},
		{
			id: "dark-72",
			name: "72% Ecuadorian Single",
			description: "Esmeraldas cacao with floral high notes",
			color: "#3D2B1F",
			image: `${M}/4f01a0bac_generated_ed1fd82e.png`,
		},
    {
      id: "milk-caramel",
      name: "Caramelized Milk",
      description: "Slow-caramelized Swiss milk chocolate, 42%",
      color: "#8B6914",
      image: `${M}/47df75ad4_generated_1237f540.png`,
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
		stat: "4,200 Hz",
		statLabel: "Audible Frequency",
		description:
			"Tempered at precisely 31.5°C - the crystalline threshold where cocoa butter forms Type V crystals. The result: a clean, resonant break that announces the quality before the first taste.",
	},
	{
		number: "02",
		title: "The Melt",
		stat: "33.8°C",
		statLabel: "Melt Point",
		description:
			"Engineered to dissolve at body temperature. The shell yields exactly 2.3 seconds after contact with the palate, releasing the inner stratum in a controlled cascade of flavor.",
	},
	{
		number: "03",
		title: "The Linger",
		stat: "11 sec",
		statLabel: "Finish Duration",
		description:
			"A finish that persists for eleven seconds - dark fruit, toasted earth, and a whisper of volcanic mineral. Each layer releases its flavor at a different moment in the decay.",
	},
	{
		number: "04",
		title: "The Vessel",
		stat: "∠ 51.5°",
		statLabel: "Pyramid Angle",
		description:
			"The geometry is not decorative. The 51.5-degree slope - identical to the Great Pyramid of Giza - distributes structural integrity across three layers, preventing collapse during transit.",
	},
];

export const navLinks = [
	{ label: "The Bar", href: "#stratum" },
	{ label: "The Lab", href: "#lab" },
	{ label: "Build Yours", href: "#builder" },
	{ label: "Spec", href: "#manifesto" },
	{ label: "The Vessel", href: "#vessel" },
	{ label: "Community", href: "#community" },
];
