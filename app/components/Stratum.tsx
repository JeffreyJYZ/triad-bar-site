"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { layers } from "@/lib/data";
import { fadeUp, fadeRight, container, viewportOnce } from "@/lib/motion";

export default function Stratum() {
	const [active, setActive] = useState(0);
	const layer = layers[active];
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

	return (
		<section
			ref={sectionRef}
			id="stratum"
			className="relative overflow-hidden px-6 py-24 md:px-10 md:py-40"
		>
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="mb-16 md:mb-24"
					initial="hidden"
					whileInView="visible"
					viewport={viewportOnce}
					variants={container}
				>
					<motion.p
						className="font-body text-gold/60 mb-4 text-[11px] font-light tracking-[0.35em] uppercase"
						variants={fadeUp}
					>
						The Architecture
					</motion.p>
					<div className="overflow-hidden">
						<motion.h2
							className="font-display text-foreground text-4xl leading-[0.95] font-bold tracking-tighter md:text-6xl lg:text-7xl"
							variants={fadeUp}
						>
							Three Strata.
							<br />
							One Monument.
						</motion.h2>
					</div>
				</motion.div>

				<motion.div
					role="tablist"
					aria-label="Chocolate strata"
					className="mb-12 flex gap-1 md:mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={viewportOnce}
					variants={container}
				>
					{layers.map((l, i) => (
						<motion.button
							key={l.id}
							role="tab"
							id={`tab-${l.id}`}
							aria-selected={active === i}
							aria-controls={`panel-${l.id}`}
							onClick={() => setActive(i)}
							variants={fadeUp}
							whileHover={{ y: -2 }}
							className={`flex-1 border-t-2 px-3 py-4 text-left transition-all duration-500 ${
								active === i
									? "border-gold bg-gold/5"
									: "border-foreground/10 hover:border-foreground/25"
							}`}
						>
							<span className="font-body text-foreground/40 mb-1 block text-[10px] tracking-[0.2em] uppercase">
								{l.subtitle}
							</span>
							<span
								className={`font-display block text-sm tracking-[-0.02em] transition-colors duration-300 md:text-base ${
									active === i
										? "text-gold"
										: "text-foreground/60"
								}`}
							>
								{l.label}
							</span>
						</motion.button>
					))}
				</motion.div>

				<AnimatePresence mode="wait">
					<motion.div
						key={layer.id}
						className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
						initial="hidden"
						animate="visible"
						exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
						variants={container}
					>
						<motion.div
							className="relative aspect-square overflow-hidden"
							variants={{
								hidden: { opacity: 0, scale: 1.05 },
								visible: {
									opacity: 1,
									scale: 1,
									transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
								},
							}}
						>
							<motion.div
								className="absolute inset-0"
								style={{ y: imgY }}
							>
								<Image
									src={layer.image}
									alt={`Macro texture of ${layer.label} filling`}
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
									className="object-cover"
								/>
							</motion.div>
							<div className="from-background/60 absolute inset-0 bg-linear-to-t to-transparent" />
							<motion.div
								className="absolute right-6 bottom-6 left-6 flex items-end justify-between"
								variants={fadeUp}
							>
								<div>
									<span className="font-body text-foreground/40 block text-[10px] tracking-[0.2em] uppercase">
										Cacao
									</span>
									<span className="font-display text-foreground text-3xl font-bold md:text-4xl">
										{layer.cacao}
									</span>
								</div>
								<div className="text-right">
									<span className="font-body text-foreground/40 block text-[10px] tracking-[0.2em] uppercase">
										Snap Factor
									</span>
									<span className="font-body text-gold text-lg font-light md:text-xl">
										{layer.snap}
									</span>
								</div>
							</motion.div>
						</motion.div>

						<motion.div variants={fadeRight}>
							<motion.h3
								className="font-display text-foreground mb-6 text-3xl font-bold tracking-[-0.04em] md:text-5xl"
								variants={fadeUp}
							>
								{layer.label}
							</motion.h3>
							<motion.p
								className="font-body text-foreground/75 mb-8 text-base leading-[1.7] font-light md:text-lg"
								variants={fadeUp}
							>
								{layer.description}
							</motion.p>
							<motion.div
								className="border-foreground/10 flex items-center gap-6 border-t pt-6"
								variants={fadeUp}
							>
								<div>
									<span className="font-body text-foreground/30 mb-1 block text-[10px] tracking-[0.2em] uppercase">
										Origin
									</span>
									<span className="font-body text-gold text-sm">
										{layer.origin}
									</span>
								</div>
								<div className="bg-foreground/10 h-8 w-px" />
								<div>
									<span className="font-body text-foreground/30 mb-1 block text-[10px] tracking-[0.2em] uppercase">
										Concentration
									</span>
									<span className="font-body text-foreground/70 text-sm">
										{layer.cacao} Pure Cacao
									</span>
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
