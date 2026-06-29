"use client";

import { motion } from "motion/react";
import { Ticket } from "lucide-react";

const facts = [
	{ value: "5", label: "Issued Per Year" },
	{ value: "20", label: "Free Triads Per Ticket" },
	{ value: "∞", label: "Random Allocation" },
];

export default function GoldenTickets() {
	return (
		<section
			id="tickets"
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
							By Invitation Only
						</p>
						<h2 className="font-display text-foreground text-4xl leading-[0.95] font-bold tracking-tighter md:text-6xl lg:text-7xl">
							The
							<br />
							Golden Tickets.
						</h2>
					</div>
					<div className="font-mono text-foreground/40 text-[10px] leading-[1.8] tracking-[0.18em] uppercase md:text-right md:text-[11px]">
						<div>
							<span className="text-foreground/25">Cohort </span>
							<span className="text-gold">2026 · I</span>
						</div>
						<div>
							<span className="text-foreground/25">Drawn </span>
							<span>At Random</span>
						</div>
						<div>
							<span className="text-foreground/25">Status </span>
							<span className="text-[#4B5320]">● UNCLAIMED</span>
						</div>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-16">
					<motion.div
						className="md:col-span-3"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.8, delay: 0.1 }}
					>
						<p className="font-body text-foreground/75 text-base leading-[1.7] font-light md:text-lg">
							Hidden inside five unmarked vessels each year, a
							single foil-stamped card promises twenty Triads of
							the bearer&apos;s choosing — delivered, no questions,
							no invoice. No contest. No list. The draw is
							geometric, not meritocratic: any box leaving the
							lab could be the one.
						</p>
						<p className="font-body text-foreground/75 mt-6 text-base leading-[1.7] font-light md:text-lg">
							We print five because scarcity is honest. We hide
							them because the moment of discovery should belong
							to the holder, not the brand. Open the vessel
							slowly.
						</p>
					</motion.div>

					<motion.div
						className="border-foreground/10 bg-background relative flex flex-col justify-between border p-8 md:col-span-2 md:p-10"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="text-gold/70 mb-6 flex items-center gap-3 pb-4 font-mono text-[10px] tracking-[0.25em] uppercase border-b border-[#C9974C]/20">
							<Ticket size={14} />
							<span>§ Terms of the Ticket</span>
						</div>
						<dl className="mb-8 space-y-4">
							{facts.map((f) => (
								<div
									key={f.label}
									className="flex items-baseline justify-between gap-4"
								>
									<dt className="font-body text-foreground/45 text-[11px] font-light leading-tight">
										{f.label}
									</dt>
									<dd className="font-display text-foreground text-3xl font-bold md:text-4xl">
										{f.value}
									</dd>
								</div>
							))}
						</dl>
						<p className="font-mono text-foreground/30 text-[10px] leading-[1.8] tracking-[0.18em] uppercase">
							Non-transferable · No cash value · Redeemed via
							the mailto order link
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}