"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { layers } from "@/lib/data";

export default function Stratum() {
	const [active, setActive] = useState(0);
	const layer = layers[active];

	return (
		<section
			id="stratum"
			className="relative overflow-hidden px-6 py-24 md:px-10 md:py-40"
		>
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="mb-16 md:mb-24"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<p className="font-body text-gold/60 mb-4 text-[11px] font-light tracking-[0.35em] uppercase">
						The Architecture
					</p>
					<h2 className="font-display text-foreground text-4xl leading-[0.95] font-bold tracking-tighter md:text-6xl lg:text-7xl">
						Three Strata.
						<br />
						One Monument.
					</h2>
				</motion.div>

				<div
					role="tablist"
					aria-label="Chocolate strata"
					className="mb-12 flex gap-1 md:mb-16"
				>
					{layers.map((l, i) => (
						<button
							key={l.id}
							role="tab"
							id={`tab-${l.id}`}
							aria-selected={active === i}
							aria-controls={`panel-${l.id}`}
							onClick={() => setActive(i)}
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
						</button>
					))}
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={layer.id}
						className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						<div className="relative aspect-square overflow-hidden">
							<Image
								src={layer.image}
								alt={`Macro texture of ${layer.label} filling`}
								fill
								sizes="(min-width: 768px) 50vw, 100vw"
								className="object-cover"
							/>
							<div className="from-background/60 absolute inset-0 bg-linear-to-t to-transparent" />
							<div className="absolute right-6 bottom-6 left-6 flex items-end justify-between">
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
							</div>
						</div>

						<div>
							<h3 className="font-display text-foreground mb-6 text-3xl font-bold tracking-[-0.04em] md:text-5xl">
								{layer.label}
							</h3>
<p className="font-body text-foreground/75 mb-8 text-base leading-[1.7] font-light md:text-lg">
							{layer.description}
						</p>
							<div className="border-foreground/10 flex items-center gap-6 border-t pt-6">
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
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
