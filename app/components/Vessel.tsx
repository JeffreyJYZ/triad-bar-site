"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { vesselImageLeft, builderSteps, fillings } from "@/lib/data";
import { useSelection } from "./SelectionContext";

const stats = [
	{ value: "80g", label: "Net Weight", color: "#C9974C" },
	{ value: "AED 20", label: "Per Triad", color: "#FDFCFB" },
	{ value: "48h", label: "Climate-Controlled Delivery", color: "#FDFCFB70" },
	{ value: "0", label: "Plastic Used", color: "#C9974C" },
];

function buildMailto(selection: ReturnType<typeof useSelection>["selection"]) {
	const lines = builderSteps.map((s) => {
		const picked = selection[s.key];
		const name = picked?.name ?? fillings[s.key][0].name;
		const tag = picked ? "" : " (default)";
		return `- ${s.label}: ${name}${tag}`;
	});
	const body = `Hello,\n\nI would like to order the following Triad configuration:\n\n${lines.join("\n")}\n\nThank you.`;
	return `mailto:Yizhou6651@dubaicollege.org?subject=${encodeURIComponent("Triad Order Inquiry")}&body=${encodeURIComponent(body)}`;
}

export default function Vessel() {
	const { selection } = useSelection();
	const href = buildMailto(selection);

	return (
		<section id="vessel" className="relative px-6 py-24 md:px-10 md:py-40">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
					<motion.div
						className="relative order-2 aspect-square overflow-hidden md:order-1"
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
						<div className="to-background/30 absolute inset-0 bg-linear-to-r from-transparent" />
					</motion.div>

					<motion.div
						className="order-1 md:order-2"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="font-body text-gold/60 mb-4 text-[11px] font-light tracking-[0.35em] uppercase">
							The Vessel
						</p>
						<h2 className="font-display text-foreground mb-8 text-4xl leading-[0.95] font-bold tracking-tighter md:text-5xl lg:text-6xl">
							Not a wrapper.
							<br />A reliquary.
						</h2>
<p className="font-body text-foreground/75 mb-6 text-base leading-[1.7] font-light md:text-lg">
						Each Triad arrives in a matte-black triangular
						vessel, precision-folded from uncoated Japanese
						washi paper. The magnetic closure opens with a
						satisfying resistance — the first act of a tasting
						ritual designed to slow you down.
					</p>
					<p className="font-body text-foreground/75 mb-10 text-base leading-[1.7] font-light md:text-lg">
						Inside, the pyramid rests on a recessed slate tray,
						held in place by geometry alone. No plastic. No
						foam. No waste. Just architecture.
					</p>

						<div className="border-foreground/8 mb-10 grid grid-cols-2 gap-6 border-y py-6">
							{stats.map((s) => (
								<div key={s.label}>
									<span
										className="font-display block text-2xl font-bold md:text-3xl"
										style={{ color: s.color }}
									>
										{s.value}
									</span>
									<span className="font-body text-foreground/30 text-[10px] tracking-[0.2em] uppercase">
										{s.label}
									</span>
								</div>
							))}
						</div>

						<a
							href={href}
							className="font-body bg-gold/90 text-background hover:bg-gold-light inline-flex min-h-14 items-center gap-3 px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase transition-colors"
						>
							Order Your Triad
							<ArrowRight size={16} />
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
