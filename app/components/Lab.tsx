"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { labCards } from "@/lib/data";

const snapImg = `/img/dark-85.png`;
const vesselImg = `/img/vessel-left.png`;

export default function Lab() {
	return (
		<section id="lab" className="relative py-24 md:py-40">
			<div className="mx-auto mb-16 max-w-7xl px-6 md:mb-24 md:px-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<p className="font-body text-gold/60 mb-4 text-[11px] font-light tracking-[0.35em] uppercase">
						The Confectionary Lab
					</p>
					<h2 className="font-display text-foreground text-4xl leading-[0.95] font-bold tracking-tighter md:text-6xl lg:text-7xl">
						Anatomy of
						<br />a Bite.
					</h2>
				</motion.div>
			</div>

<div
			className="flex scrollbar-none gap-6 overflow-x-auto px-6 pb-8 md:gap-10 md:px-10"
		>
				{labCards.map((card, i) => (
					<motion.div
						key={card.number}
						className="bg-background border-foreground/8 group relative w-[85vw] shrink-0 snap-start border p-8 sm:w-[60vw] md:w-[40vw] md:p-10 lg:w-[30vw]"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.6, delay: i * 0.1 }}
					>
						<span className="font-display text-foreground/3 absolute top-4 right-6 text-[80px] leading-none font-bold select-none md:text-[100px]">
							{card.number}
						</span>
						<div className="mb-8">
							<span className="font-body text-gold/50 text-[10px] tracking-[0.25em] uppercase">
								Phase {card.number}
							</span>
						</div>
						<h3 className="font-display text-foreground mb-3 text-2xl font-bold tracking-[-0.03em] md:text-3xl">
							{card.title}
						</h3>
						<div className="mb-6 flex items-baseline gap-2">
							<span className="font-display text-gold text-3xl font-bold md:text-4xl">
								{card.stat}
							</span>
							<span className="font-body text-foreground/30 text-[10px] tracking-[0.15em] uppercase">
								{card.statLabel}
							</span>
						</div>
<p className="font-body text-foreground/70 text-sm leading-[1.7] font-light">
						{card.description}
					</p>
						<div className="from-gold absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-linear-to-r to-transparent transition-transform duration-700 group-hover:scale-x-100" />
					</motion.div>
				))}
			</div>

			<div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-6 px-6 md:mt-32 md:grid-cols-2 md:px-10">
				<motion.div
					className="relative aspect-4/3 overflow-hidden"
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<Image
						src={snapImg}
						alt="Extreme close-up of a chocolate bar snapping in half showing crystalline structure"
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						className="object-cover"
					/>
					<div className="from-background/70 absolute inset-0 bg-linear-to-t to-transparent" />
					<span className="font-body text-foreground/40 absolute bottom-4 left-4 text-[10px] tracking-[0.2em] uppercase">
						The Snap — Clean Break
					</span>
				</motion.div>
				<motion.div
					className="relative aspect-4/3 overflow-hidden"
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<Image
						src={vesselImg}
						alt="Minimalist matte-black triangular packaging for the Triad chocolate bar"
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						className="object-cover"
					/>
					<div className="from-background/70 absolute inset-0 bg-linear-to-t to-transparent" />
					<span className="font-body text-foreground/40 absolute bottom-4 left-4 text-[10px] tracking-[0.2em] uppercase">
						The Vessel — Matte Black
					</span>
				</motion.div>
			</div>
		</section>
	);
}
