"use client";

import { motion } from "motion/react";

const tiers = [
	{ qty: 1, price: 20, note: "Single" },
	{ qty: 2, price: 35, note: "Duo" },
	{ qty: 3, price: 50, note: "Trio" },
	{ qty: 5, price: 80, note: "Quinta" },
	{ qty: 10, price: 150, note: "Deca" },
];

export default function Prices() {
	return (
		<section
			id="prices"
			className="relative overflow-hidden px-6 py-24 md:px-10 md:py-40"
		>
			<div className="relative mx-auto max-w-7xl">
				<motion.div
					className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<div>
						<p className="font-body text-gold/60 mb-4 text-[11px] font-light tracking-[0.35em] uppercase">
							Pricing Index
						</p>
						<h2 className="font-display text-foreground text-4xl leading-[0.95] font-bold tracking-tighter md:text-6xl lg:text-7xl">
							By
							<br />
							Count.
						</h2>
					</div>
					<div className="text-foreground/40 font-mono text-[10px] leading-[1.8] tracking-[0.18em] uppercase md:text-right md:text-[11px]">
						<div>
							<span className="text-foreground/25">
								Currency{" "}
							</span>
							<span className="text-gold">AED</span>
						</div>
						<div>
							<span className="text-foreground/25">Bundled </span>
							<span>Yes</span>
						</div>
						<div>
							<span className="text-foreground/25">Status </span>
							<span className="text-[#4B5320]">
								● LIMITED RUN
							</span>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="border-foreground/10 bg-background grid grid-cols-1 border sm:grid-cols-2 lg:grid-cols-5"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.8, delay: 0.1 }}
				>
					{tiers.map((t, i) => (
						<div
							key={t.qty}
							className={`p-8 md:p-10 ${
								i < tiers.length - 1
									? "border-foreground/10 border-b sm:border-b-0 lg:border-r"
									: ""
							}`}
						>
							<div className="border-foreground/10 mb-6 flex items-center justify-between border-b pb-3">
								<span className="text-gold/70 font-mono text-[10px] tracking-[0.25em] uppercase">
									§ {String(i + 1).padStart(2, "0")}
								</span>
								<span className="text-foreground/40 font-mono text-[10px] tracking-[0.25em] uppercase">
									{t.note}
								</span>
							</div>
							<div className="text-foreground mb-2 flex items-baseline gap-2 font-mono">
								<span className="font-display text-3xl font-bold md:text-4xl">
									{t.price}
								</span>
								<span className="text-foreground/40 text-[10px] tracking-[0.2em] uppercase">
									AED
								</span>
							</div>
							<div className="text-foreground/40 font-mono text-[11px] tracking-[0.18em] uppercase">
								/ {t.qty} {t.qty > 1 ? "Triads" : "Triad"}
							</div>
							<div className="font-body text-foreground/30 mt-4 text-[11px] font-light">
								{t.qty > 1
									? `${(t.price / t.qty).toFixed(2)} AED per bar`
									: "Base rate"}
							</div>
						</div>
					))}
				</motion.div>

				<motion.div
					className="text-foreground/30 mt-6 flex flex-col items-start justify-between gap-3 font-mono text-[10px] tracking-[0.18em] uppercase sm:flex-row sm:items-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<span>
						<span className="text-foreground/20">Listed </span>
						<span>2026 · Q2</span>
					</span>
					<span>
						<span className="text-foreground/20">
							Bundle savings{" "}
						</span>
						<span className="text-gold/60">applied at tier</span>
					</span>
					<span>
						<span className="text-foreground/20">Region </span>
						<span>Dubai, AE</span>
					</span>
				</motion.div>
			</div>
		</section>
	);
}
