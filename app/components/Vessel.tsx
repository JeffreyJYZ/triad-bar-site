"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { vesselImageLeft } from "@/lib/data";

const stats = [
	{ value: "80g", label: "Net Weight", color: "#C9974C" },
	{ value: "€24", label: "Per Triad", color: "#FDFCFB" },
	{ value: "48h", label: "Climate-Controlled Delivery", color: "#FDFCFB70" },
	{ value: "0", label: "Plastic Used", color: "#4B5320" },
];

export default function Vessel() {
	return (
		<section id="vessel" className="relative py-24 md:py-40 px-6 md:px-10">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
					<motion.div
						className="relative aspect-square overflow-hidden order-2 md:order-1"
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					>
						<Image
							src={vesselImageLeft}
							alt="Matte black triangular packaging for the Triad bar, like a jewelry container"
							fill
							sizes="(min-width: 768px) 50vw, 100vw"
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1614]/30" />
					</motion.div>

					<motion.div
						className="order-1 md:order-2"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-[11px] font-body font-light tracking-[0.35em] uppercase text-[#C9974C]/60 mb-4">
							The Vessel
						</p>
						<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#FDFCFB] tracking-[-0.05em] leading-[0.95] mb-8">
							Not a wrapper.
							<br />A reliquary.
						</h2>
						<p className="text-base md:text-lg font-body font-light text-[#FDFCFB]/50 leading-[1.7] mb-6">
							Each Triad arrives in a matte-black triangular
							vessel, precision-folded from uncoated Japanese
							washi paper. The magnetic closure opens with a
							satisfying resistance — the first act of a tasting
							ritual designed to slow you down.
						</p>
						<p className="text-base md:text-lg font-body font-light text-[#FDFCFB]/50 leading-[1.7] mb-10">
							Inside, the pyramid rests on a recessed slate tray,
							held in place by geometry alone. No plastic. No
							foam. No waste. Just architecture.
						</p>

						<div className="grid grid-cols-2 gap-6 mb-10 py-6 border-y border-[#FDFCFB]/8">
							{stats.map((s) => (
								<div key={s.label}>
									<span
										className="block text-2xl md:text-3xl font-display font-bold"
										style={{ color: s.color }}
									>
										{s.value}
									</span>
									<span className="text-[10px] font-body tracking-[0.2em] uppercase text-[#FDFCFB]/30">
										{s.label}
									</span>
								</div>
							))}
						</div>

						<span className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9974C]/90 text-[#1A1614] text-[13px] font-body font-medium tracking-[0.15em] uppercase min-h-[56px] cursor-default">
							Coming Soon
							<ArrowRight size={16} />
						</span>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
