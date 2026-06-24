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
		<section id="builder" className="relative py-24 md:py-40 px-6 md:px-10">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="mb-16 md:mb-24"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<p className="text-[11px] font-body font-light tracking-[0.35em] uppercase text-[#C9974C]/60 mb-4">
						The Pyramid Builder
					</p>
					<h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#FDFCFB] tracking-[-0.05em] leading-[0.95]">
						Construct
						<br />
						Your Triad.
					</h2>
				</motion.div>

				<div className="flex items-center gap-0 mb-12 md:mb-16">
					{builderSteps.map((p, g) => (
						<div key={p.key} className="contents">
							<button
								onClick={() => g <= step && setStep(g)}
								className={`flex items-center gap-3 py-3 px-4 transition-all duration-300 ${
									g === step
										? "opacity-100"
										: g < step
											? "opacity-60 cursor-pointer"
											: "opacity-20 cursor-default"
								}`}
								disabled={g > step}
							>
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body border transition-all duration-300 ${
										g < step
											? "bg-[#C9974C] border-[#C9974C] text-[#1A1614]"
											: g === step
												? "border-[#C9974C] text-[#C9974C]"
												: "border-[#FDFCFB]/20 text-[#FDFCFB]/20"
									}`}
								>
									{g < step ? <Check size={14} /> : g + 1}
								</div>
								<div className="hidden sm:block text-left">
									<span className="block text-[10px] font-body tracking-[0.15em] uppercase text-[#FDFCFB]/30">
										{p.subtitle}
									</span>
									<span
										className={`block text-sm font-body ${
											g === step
												? "text-[#FDFCFB]"
												: "text-[#FDFCFB]/50"
										}`}
									>
										{p.label}
									</span>
								</div>
							</button>
							{g < builderSteps.length - 1 && (
								<div
									className={`flex-1 h-px mx-2 transition-colors duration-500 ${
										g < step
											? "bg-[#C9974C]/40"
											: "bg-[#FDFCFB]/10"
									}`}
								/>
							)}
						</div>
					))}
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={current.key}
						className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
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
									className={`relative text-left p-0 overflow-hidden border transition-all duration-500 group ${
										selected
											? "border-[#C9974C] ring-1 ring-[#C9974C]/30"
											: "border-[#FDFCFB]/8 hover:border-[#FDFCFB]/20"
									}`}
									whileHover={{ scale: 1.01 }}
									whileTap={{ scale: 0.99 }}
								>
									<div className="aspect-[4/3] relative overflow-hidden">
										<Image
											src={p.image}
											alt={`Macro texture of ${p.name}`}
											fill
											sizes="(min-width: 768px) 33vw, 100vw"
											className="object-cover transition-transform duration-700 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/40 to-transparent" />
										{selected && (
											<motion.div
												className="absolute top-4 right-4 w-8 h-8 bg-[#C9974C] rounded-full flex items-center justify-center"
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
													className="text-[#1A1614]"
												/>
											</motion.div>
										)}
									</div>
									<div className="p-5 md:p-6">
										<h4 className="font-display text-lg md:text-xl font-bold text-[#FDFCFB] tracking-[-0.02em] mb-1">
											{p.name}
										</h4>
										<p className="text-xs font-body font-light text-[#FDFCFB]/40 leading-relaxed">
											{p.description}
										</p>
									</div>
								</motion.button>
							);
						})}
					</motion.div>
				</AnimatePresence>

				<div className="flex items-center justify-between mt-10 md:mt-14">
					<button
						onClick={() => setStep((p) => Math.max(0, p - 1))}
						className={`text-sm font-body tracking-[0.1em] uppercase text-[#FDFCFB]/40 hover:text-[#FDFCFB]/70 transition-colors min-h-[56px] px-6 ${
							step === 0 ? "invisible" : ""
						}`}
					>
						Previous Layer
					</button>
					{allChosen ? (
						<a
							href="#vessel"
							className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9974C] text-[#1A1614] text-[13px] font-body font-medium tracking-[0.15em] uppercase hover:bg-[#d4a65e] transition-all duration-300 min-h-[56px]"
						>
							Complete Your Triad
							<ArrowRight size={16} />
						</a>
					) : (
						<button
							onClick={() =>
								chosen && setStep((p) => Math.min(2, p + 1))
							}
							className={`px-8 py-4 text-[13px] font-body font-medium tracking-[0.15em] uppercase min-h-[56px] transition-all duration-300 ${
								chosen
									? "bg-[#C9974C] text-[#1A1614] hover:bg-[#d4a65e]"
									: "bg-[#FDFCFB]/5 text-[#FDFCFB]/20 cursor-not-allowed"
							}`}
							disabled={!chosen}
						>
							Next Layer
						</button>
					)}
				</div>

				{(selection.base || selection.core || selection.apex) && (
					<motion.div
						className="mt-12 md:mt-16 pt-8 border-t border-[#FDFCFB]/8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-[10px] font-body tracking-[0.25em] uppercase text-[#FDFCFB]/30 mb-4">
							Your Construction
						</p>
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
							{builderSteps.map((p) => (
								<div
									key={p.key}
									className="flex items-center gap-3"
								>
									<div
										className={`w-3 h-3 rounded-full ${
											selection[p.key]
												? "bg-[#C9974C]"
												: "bg-[#FDFCFB]/10"
										}`}
									/>
									<div>
										<span className="block text-[10px] font-body tracking-[0.15em] uppercase text-[#FDFCFB]/30">
											{p.subtitle}
										</span>
										<span className="text-sm font-body text-[#FDFCFB]/70">
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
