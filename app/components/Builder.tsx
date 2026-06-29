"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { fillings, builderSteps, type Filling } from "@/lib/data";
import { useSelection } from "./SelectionContext";

export default function Builder() {
	const [step, setStep] = useState(0);
	const { selection, setSelection } = useSelection();

	const current = builderSteps[step];
	const options = fillings[current.key];
	const chosen = selection[current.key] ?? null;
	const allChosen = selection.base && selection.core && selection.apex;

	const pick = (f: Filling) =>
		setSelection((s) => ({ ...s, [current.key]: f }));

	return (
		<section id="builder" className="relative px-6 py-24 md:px-10 md:py-40">
			<div className="mx-auto max-w-7xl">
				<motion.div
					className="mb-16 md:mb-24"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<p className="font-body text-gold/60 mb-4 text-[11px] font-light tracking-[0.35em] uppercase">
						The Pyramid Builder
					</p>
					<h2 className="font-display text-foreground text-4xl leading-[0.95] font-bold tracking-tighter md:text-6xl lg:text-7xl">
						Construct
						<br />
						Your Triad.
					</h2>
				</motion.div>

				<div className="mb-12 flex items-center gap-0 md:mb-16">
					{builderSteps.map((p, g) => (
						<div key={p.key} className="contents">
							<button
								onClick={() => {
							if (g <= step) setStep(g);
						}}
								className={`flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
									g === step
										? "opacity-100"
										: g < step
											? "cursor-pointer opacity-60"
											: "cursor-default opacity-20"
								}`}
								disabled={g > step}
							>
								<div
									className={`font-body flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
										g < step
											? "bg-gold border-gold text-background"
											: g === step
												? "border-gold text-gold"
												: "border-foreground/20 text-foreground/20"
									}`}
								>
									{g < step ? <Check size={14} /> : g + 1}
								</div>
								<div className="hidden text-left sm:block">
									<span className="font-body text-foreground/30 block text-[10px] tracking-[0.15em] uppercase">
										{p.subtitle}
									</span>
									<span
										className={`font-body block text-sm ${
											g === step
												? "text-foreground"
												: "text-foreground/50"
										}`}
									>
										{p.label}
									</span>
								</div>
							</button>
							{g < builderSteps.length - 1 && (
								<div
									className={`mx-2 h-px flex-1 transition-colors duration-500 ${
										g < step
											? "bg-gold/40"
											: "bg-foreground/10"
									}`}
								/>
							)}
						</div>
					))}
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={current.key}
						className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
					>
						{options.map((p) => {
							const selected = chosen?.id === p.id;
							return (
								<motion.button
									key={p.id}
									onClick={() => pick(p)}
									className={`group relative overflow-hidden border p-0 text-left transition-all duration-500 ${
										selected
											? "border-gold ring-gold/30 ring-1"
											: "border-foreground/8 hover:border-foreground/20"
									}`}
									whileHover={{ scale: 1.01 }}
									whileTap={{ scale: 0.99 }}
								>
									<div className="relative aspect-4/3 overflow-hidden">
										<Image
											src={p.image}
											alt={`Macro texture of ${p.name}`}
											fill
											sizes="(min-width: 768px) 33vw, 100vw"
											className="object-cover transition-transform duration-700 group-hover:scale-105"
										/>
										<div className="from-background via-background/40 absolute inset-0 bg-linear-to-t to-transparent" />
										{selected && (
											<motion.div
												className="bg-gold absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full"
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												transition={{
													type: "spring",
													stiffness: 400,
													damping: 15,
												}}
											>
												<Check
													size={14}
													className="text-background"
												/>
											</motion.div>
										)}
									</div>
									<div className="p-5 md:p-6">
										<h4 className="font-display text-foreground mb-1 text-lg font-bold tracking-[-0.02em] md:text-xl">
											{p.name}
										</h4>
<p className="font-body text-foreground/70 text-xs leading-relaxed font-light">
										{p.description}
									</p>
									</div>
								</motion.button>
							);
						})}
					</motion.div>
				</AnimatePresence>

				<div className="mt-10 flex items-center justify-between md:mt-14">
					<button
						onClick={() => setStep((p) => Math.max(0, p - 1))}
						className={`font-body text-foreground/40 hover:text-foreground/70 min-h-14 px-6 text-sm tracking-widest uppercase transition-colors ${
							step === 0 ? "invisible" : ""
						}`}
					>
						Previous Layer
					</button>
					{allChosen ? (
						<a
							href="#vessel"
							className="bg-gold text-background font-body hover:bg-gold-light inline-flex min-h-14 items-center gap-3 px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase transition-all duration-300"
						>
							Complete Your Triad
							<ArrowRight size={16} />
						</a>
					) : (
						<button
							onClick={() =>
								chosen && setStep((p) => Math.min(2, p + 1))
							}
							className={`font-body min-h-14 px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
								chosen
									? "bg-gold text-background hover:bg-gold-light"
									: "bg-foreground/5 text-foreground/20 cursor-not-allowed"
							}`}
							disabled={!chosen}
						>
							Next Layer
						</button>
					)}
				</div>

				{(selection.base || selection.core || selection.apex) && (
					<motion.div
						className="border-foreground/8 mt-12 border-t pt-8 md:mt-16"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<p className="font-body text-foreground/30 mb-4 text-[10px] tracking-[0.25em] uppercase">
							Your Construction
						</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
							{builderSteps.map((p) => (
								<div
									key={p.key}
									className="flex items-center gap-3"
								>
									<div
										className={`h-3 w-3 rounded-full ${
											selection[p.key]
												? "bg-gold"
												: "bg-foreground/10"
										}`}
									/>
									<div>
										<span className="font-body text-foreground/30 block text-[10px] tracking-[0.15em] uppercase">
											{p.subtitle}
										</span>
										<span className="font-body text-foreground/70 text-sm">
											{selection[p.key]?.name ??
												"Not selected"}
										</span>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</section>
	);
}
