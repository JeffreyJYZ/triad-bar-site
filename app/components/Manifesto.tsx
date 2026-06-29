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
			{ label: "Shelf Life", value: "6–8", unit: "weeks (refrigerated)" },
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
							Technical Specification
						</p>
						<h2 className="font-display text-foreground text-4xl leading-[0.95] font-bold tracking-tighter md:text-6xl lg:text-7xl">
							Spec
							<br />
							Sheet.
						</h2>
					</div>
					<div className="text-foreground/40 font-mono text-[10px] leading-[1.8] tracking-[0.18em] uppercase md:text-right md:text-[11px]">
						<div>
							<span className="text-foreground/25">Model </span>
							<span className="text-gold">TRIAD—01 / Rev. C</span>
						</div>
						<div>
							<span className="text-foreground/25">Issued </span>
							<span>2026 · Q2</span>
						</div>
						<div>
							<span className="text-foreground/25">Origin </span>
							<span>Dubai, AE</span>
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
					className="border-foreground/10 bg-background border"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.8, delay: 0.1 }}
				>
					<div className="border-foreground/10 grid grid-cols-1 border-b md:grid-cols-3">
						{specs.slice(0, 3).map((g, gi) => (
							<div
								key={g.group}
								className={`p-6 md:p-8 ${
									gi < 2
										? "border-foreground/10 border-b md:border-r md:border-b-0"
										: ""
								}`}
							>
								<div className="border-foreground/10 mb-5 flex items-center justify-between border-b pb-3">
									<span className="text-gold/70 font-mono text-[10px] tracking-[0.25em] uppercase">
										§ {String(gi + 1).padStart(2, "0")}
									</span>
									<span className="text-foreground/40 font-mono text-[10px] tracking-[0.25em] uppercase">
										{g.group}
									</span>
								</div>
								<dl className="space-y-2.5">
									{g.rows.map((r) => (
										<div
											key={r.label}
											className="flex items-baseline justify-between gap-4"
										>
											<dt className="font-body text-foreground/45 text-[11px] leading-tight font-light">
												{r.label}
											</dt>
											<dd className="text-foreground flex items-baseline gap-1.5 font-mono text-[12px] whitespace-nowrap md:text-[13px]">
												<span>{r.value}</span>
												<span className="text-foreground/30 text-[9px] tracking-[0.15em] uppercase">
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
										? "border-foreground/10 border-b md:border-r md:border-b-0"
										: ""
								}`}
							>
								<div className="border-foreground/10 mb-5 flex items-center justify-between border-b pb-3">
									<span className="text-gold/70 font-mono text-[10px] tracking-[0.25em] uppercase">
										§ {String(gi + 4).padStart(2, "0")}
									</span>
									<span className="text-foreground/40 font-mono text-[10px] tracking-[0.25em] uppercase">
										{g.group}
									</span>
								</div>
								<dl className="space-y-2.5">
									{g.rows.map((r) => (
										<div
											key={r.label}
											className="flex items-baseline justify-between gap-4"
										>
											<dt className="font-body text-foreground/45 text-[11px] leading-tight font-light">
												{r.label}
											</dt>
											<dd className="text-foreground flex items-baseline gap-1.5 font-mono text-[12px] whitespace-nowrap md:text-[13px]">
												<span>{r.value}</span>
												<span className="text-foreground/30 text-[9px] tracking-[0.15em] uppercase">
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
					className="text-foreground/30 mt-6 flex flex-col items-start justify-between gap-3 font-mono text-[10px] tracking-[0.18em] uppercase sm:flex-row sm:items-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<span>
						<span className="text-foreground/20">Drawn </span>
						<span>2026-04-12</span>
					</span>
					<span>
						<span className="text-foreground/20">Approved </span>
						<span className="text-gold/60">QC HOLD</span>
					</span>
					<span>
						<span className="text-foreground/20">Sheet </span>
						<span>01 / 01</span>
					</span>
				</motion.div>
			</div>
		</section>
	);
}
