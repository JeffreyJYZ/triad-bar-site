"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	heroImage,
	vesselImageLeft,
	layers,
	fillings,
} from "@/lib/data";
import type { ReactNode } from "react";

const srcs: string[] = Array.from(
	new Set([
		heroImage,
		vesselImageLeft,
		...layers.map((l) => l.image),
		...Object.values(fillings)
			.flat()
			.map((f) => f.image),
		"/img/vessel-left.png",
		"/img/dark-85.png",
		"/logo.png",
	]),
);

export default function ImageGate({ children }: { children: ReactNode }) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		let cancelled = false;
		Promise.all(
			srcs.map(
				(src) =>
					new Promise<void>((resolve) => {
						const img = new Image();
						img.onload = () => resolve();
						img.onerror = () => resolve();
						img.src = src;
					}),
			),
		).then(() => {
			if (!cancelled) setReady(true);
		});
		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<>
			<AnimatePresence>
				{!ready && (
					<motion.div
						className="bg-background fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6"
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					>
						<motion.div
							aria-hidden
							className="relative h-10 w-10"
							animate={{ rotate: 180 }}
							transition={{
								duration: 1.4,
								repeat: Infinity,
								ease: [0.22, 1, 0.36, 1],
							}}
							style={{
								clipPath:
									"polygon(50% 0, 100% 100%, 0 100%)",
								background:
									"linear-gradient(120deg, #C9974C, #d4a65e)",
							}}
						/>
						<motion.span
							className="text-gold/70 font-display text-[11px] tracking-[0.35em] uppercase"
							animate={{ opacity: [0.3, 1, 0.3] }}
							transition={{
								duration: 1.4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							Tempering…
						</motion.span>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: ready ? 1 : 0 }}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
			>
				{children}
			</motion.div>
		</>
	);
}