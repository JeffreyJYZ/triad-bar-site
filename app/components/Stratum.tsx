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
			className="relative py-24 md:py-40 px-6 md:px-10 overflow-hidden"
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="mb-16 md:mb-24"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<p className="text-[11px] font-body font-light tracking-[0.35em] uppercase text-[#C9974C]/60 mb-4">
						The Architecture
					</p>
					<h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#FDFCFB] tracking-[-0.05em] leading-[0.95]">
						Three Strata.
						<br />
						One Monument.
					</h2>
				</motion.div>

				<div className="flex gap-1 mb-12 md:mb-16">
					{layers.map((l, i) => (
						<button
							key={l.id}
							onClick={() => setActive(i)}
							className={`flex-1 py-4 px-3 text-left transition-all duration-500 border-t-2 ${
								active === i
									? "border-[#C9974C] bg-[#C9974C]/5"
									: "border-[#FDFCFB]/10 hover:border-[#FDFCFB]/25"
							}`}
						>
							<span className="block text-[10px] font-body tracking-[0.2em] uppercase text-[#FDFCFB]/40 mb-1">
								{l.subtitle}
							</span>
							<span
								className={`block text-sm md:text-base font-display tracking-[-0.02em] transition-colors duration-300 ${
									active === i
										? "text-[#C9974C]"
										: "text-[#FDFCFB]/60"
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
						className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
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
							<div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/60 to-transparent" />
							<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
								<div>
									<span className="block text-[10px] font-body tracking-[0.2em] uppercase text-[#FDFCFB]/40">
										Cacao
									</span>
									<span className="text-3xl md:text-4xl font-display font-bold text-[#FDFCFB]">
										{layer.cacao}
									</span>
								</div>
								<div className="text-right">
									<span className="block text-[10px] font-body tracking-[0.2em] uppercase text-[#FDFCFB]/40">
										Snap Factor
									</span>
									<span className="text-lg md:text-xl font-body font-light text-[#C9974C]">
										{layer.snap}
									</span>
								</div>
							</div>
						</div>

						<div>
							<h3 className="font-display text-3xl md:text-5xl font-bold text-[#FDFCFB] tracking-[-0.04em] mb-6">
								{layer.label}
							</h3>
							<p className="text-base md:text-lg font-body font-light text-[#FDFCFB]/50 leading-[1.7] mb-8">
								{layer.description}
							</p>
							<div className="flex items-center gap-6 pt-6 border-t border-[#FDFCFB]/10">
								<div>
									<span className="block text-[10px] font-body tracking-[0.2em] uppercase text-[#FDFCFB]/30 mb-1">
										Origin
									</span>
									<span className="text-sm font-body text-[#C9974C]">
										{layer.origin}
									</span>
								</div>
								<div className="w-px h-8 bg-[#FDFCFB]/10" />
								<div>
									<span className="block text-[10px] font-body tracking-[0.2em] uppercase text-[#FDFCFB]/30 mb-1">
										Concentration
									</span>
									<span className="text-sm font-body text-[#FDFCFB]/70">
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
