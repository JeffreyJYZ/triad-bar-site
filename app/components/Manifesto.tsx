"use client";

import { motion } from "motion/react";

const specs = [
	{
		group: "Physical",
		rows: [
			{ label: "Net Weight", value: "80", unit: "g" },
			{ label: "Bar Length", value: "62", unit: "mm" },
			{ label: "Bar Width", value: "54", unit: "mm" },
			{ label: "Bar Height", value: "38", unit: "mm" },
			{ label: "Pyramid Slope", value: "51.5", unit: "°" },
			{ label: "Layer Count", value: "3", unit: "strata" },
		],
	},
	{
		group: "Composition",
		rows: [
			{ label: "Cacao (Base)", value: "85", unit: "%" },
			{ label: "Cacao (Core)", value: "58", unit: "%" },
			{ label: "Cacao (Apex)", value: "33", unit: "%" },
			{ label: "Cocoa Butter Origin", value: "Esmeraldas", unit: "EC" },
			{ label: "Vanilla Source", value: "Madagascar", unit: "MG" },
			{ label: "Sea Salt", value: "Guérande", unit: "FR" },
		],
	},
	{
		group: "Acoustic",
		rows: [
			{ label: "Resonant Snap (Base)", value: "3,800", unit: "Hz" },
			{ label: "Resonant Snap (Apex)", value: "5,100", unit: "Hz" },
			{ label: "Tempering Temp.", value: "31.5", unit: "°C" },
			{ label: "Crystal Form", value: "Type V", unit: "polymorph" },
		],
	},
	{
		group: "Thermal",
		rows: [
			{ label: "Melt Point", value: "33.8", unit: "°C" },
			{ label: "Storage Temp.", value: "14 – 18", unit: "°C" },
			{ label: "Service Temp.", value: "20 – 22", unit: "°C" },
		],
	},
	{
		group: "Logistics",
		rows: [
			{ label: "Shelf Life", value: "9", unit: "months" },
			{ label: "Lead Time", value: "48", unit: "h" },
			{ label: "Vessel Material", value: "Washi", unit: "JP" },
			{ label: "Vessel Finish", value: "Matte", unit: "black" },
			{ label: "Batch Size", value: "200", unit: "units" },
		],
	},
	{
		group: "Energy",
		rows: [
			{ label: "Energy", value: "486", unit: "kcal" },
			{ label: "of which Saturates", value: "21.4", unit: "g" },
			{ label: "Carbohydrate", value: "38.2", unit: "g" },
			{ label: "of which Sugars", value: "29.6", unit: "g" },
			{ label: "Protein", value: "7.8", unit: "g" },
			{ label: "Salt", value: "0.32", unit: "g" },
		],
	},
];

export default function Manifesto() {
	return (
		<section
			id="manifesto"
			className="relative py-24 md:py-40 px-6 md:px-10 overflow-hidden"
		>
			<div className="max-w-7xl mx-auto relative">
				<motion.div
					className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<div>
						<p className="text-[11px] font-body font-light tracking-[0.35em] uppercase text-[#C9974C]/60 mb-4">
							Technical Specification
						</p>
						<h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#FDFCFB] tracking-[-0.05em] leading-[0.95]">
							Spec
							<br />
							Sheet.
						</h2>
					</div>
					<div className="md:text-right font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#FDFCFB]/40 leading-[1.8]">
						<div>
							<span className="text-[#FDFCFB]/25">Model </span>
							<span className="text-[#C9974C]">
								TRIAD—01 / Rev. C
							</span>
						</div>
						<div>
							<span className="text-[#FDFCFB]/25">Issued </span>
							<span>2026 · Q2</span>
						</div>
						<div>
							<span className="text-[#FDFCFB]/25">Origin </span>
							<span>Dubai, AE</span>
						</div>
						<div>
							<span className="text-[#FDFCFB]/25">Status </span>
							<span className="text-[#4B5320]">● RELEASED</span>
						</div>
					</div>
				</motion.div>

				<motion.div
					className="border border-[#FDFCFB]/10 bg-[#1A1614]"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.8, delay: 0.1 }}
				>
					<div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#FDFCFB]/10">
						{specs.slice(0, 3).map((g, gi) => (
							<div
								key={g.group}
								className={`p-6 md:p-8 ${
									gi < 2
										? "md:border-r border-b md:border-b-0 border-[#FDFCFB]/10"
										: ""
								}`}
							>
								<div className="flex items-center justify-between mb-5 pb-3 border-b border-[#FDFCFB]/10">
									<span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C9974C]/70">
										§ {String(gi + 1).padStart(2, "0")}
									</span>
									<span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FDFCFB]/40">
										{g.group}
									</span>
								</div>
								<dl className="space-y-2.5">
									{g.rows.map((r) => (
										<div
											key={r.label}
											className="flex items-baseline justify-between gap-4"
										>
											<dt className="text-[11px] font-body font-light text-[#FDFCFB]/45 leading-tight">
												{r.label}
											</dt>
											<dd className="flex items-baseline gap-1.5 font-mono text-[12px] md:text-[13px] text-[#FDFCFB] whitespace-nowrap">
												<span>{r.value}</span>
												<span className="text-[9px] tracking-[0.15em] uppercase text-[#FDFCFB]/30">
													{r.unit}
												</span>
											</dd>
										</div>
									))}
								</dl>
							</div>
						))}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3">
						{specs.slice(3).map((g, gi) => (
							<div
								key={g.group}
								className={`p-6 md:p-8 ${
									gi < 2
										? "md:border-r border-b md:border-b-0 border-[#FDFCFB]/10"
										: ""
								}`}
							>
								<div className="flex items-center justify-between mb-5 pb-3 border-b border-[#FDFCFB]/10">
									<span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C9974C]/70">
										§ {String(gi + 4).padStart(2, "0")}
									</span>
									<span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#FDFCFB]/40">
										{g.group}
									</span>
								</div>
								<dl className="space-y-2.5">
									{g.rows.map((r) => (
										<div
											key={r.label}
											className="flex items-baseline justify-between gap-4"
										>
											<dt className="text-[11px] font-body font-light text-[#FDFCFB]/45 leading-tight">
												{r.label}
											</dt>
											<dd className="flex items-baseline gap-1.5 font-mono text-[12px] md:text-[13px] text-[#FDFCFB] whitespace-nowrap">
												<span>{r.value}</span>
												<span className="text-[9px] tracking-[0.15em] uppercase text-[#FDFCFB]/30">
													{r.unit}
												</span>
											</dd>
										</div>
									))}
								</dl>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-[#FDFCFB]/30"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<span>
						<span className="text-[#FDFCFB]/20">Drawn </span>
						<span>2026-04-12</span>
					</span>
					<span>
						<span className="text-[#FDFCFB]/20">Approved </span>
						<span className="text-[#C9974C]/60">M. Hauri / QC</span>
					</span>
					<span>
						<span className="text-[#FDFCFB]/20">Sheet </span>
						<span>01 / 01</span>
					</span>
				</motion.div>
			</div>
		</section>
	);
}
