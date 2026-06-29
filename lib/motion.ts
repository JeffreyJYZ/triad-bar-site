import type { Variants, Transition } from "motion/react";

export const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: EASE },
	},
};

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const fadeLeft: Variants = {
	hidden: { opacity: 0, x: -40 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const fadeRight: Variants = {
	hidden: { opacity: 0, x: 40 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 1.08 },
	visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: EASE } },
};

export const maskUp: Variants = {
	hidden: { y: "110%" },
	visible: {
		y: 0,
		transition: { duration: 0.9, ease: EASE },
	},
};

export const container: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.1 },
	},
};

export const containerStaggerL: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12, delayChildren: 0.1 },
	},
};

export const viewportOnce = { once: true, margin: "-80px" } as const;