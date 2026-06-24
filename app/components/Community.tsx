"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Check, Users } from "lucide-react";
import { fillings, builderSteps, type Filling } from "@/lib/data";

type LayerKey = "apex" | "core" | "base";

// Seed counts so the community board looks alive without a backend.
const SEED: Record<LayerKey, Record<string, number>> = {
	apex: { "salted-caramel": 412, "berry-ganache": 287, pistachio: 351 },
	core: {
		"hazelnut-praline": 398,
		"tahini-honey": 213,
		"raspberry-coulis": 264,
	},
	base: { "dark-85": 327, "dark-72": 241, "milk-caramel": 189 },
};

export default function Community() {
	const [layer, setLayer] = useState<LayerKey>("base");
	const [votes, setVotes] =
		useState<Record<LayerKey, Record<string, number>>>(SEED);
	const [myVotes, setMyVotes] = useState<Partial<Record<LayerKey, string>>>(
		{},
	);
	const [casting, setCasting] = useState<string | null>(null);

	useEffect(() => {
		try {
			const saved = localStorage.getItem("triad_votes");
			if (saved) setMyVotes(JSON.parse(saved));
			const savedCounts = localStorage.getItem("triad_vote_counts");
			if (savedCounts) setVotes(JSON.parse(savedCounts));
		} catch {}
	}, []);

	const cast = (f: Filling) => {
		if (myVotes[layer]) return;
		setCasting(f.id);
		const next = {
			...votes,
			[layer]: { ...votes[layer], [f.id]: (votes[layer][f.id] ?? 0) + 1 },
		};
		setVotes(next);
		const myNext = { ...myVotes, [layer]: f.id };
		setMyVotes(myNext);
		try {
			localStorage.setItem("triad_votes", JSON.stringify(myNext));
			localStorage.setItem("triad_vote_counts", JSON.stringify(next));
		} catch {}
		setTimeout(() => setCasting(null), 500);
	};

	const options = fillings[layer];
	const layerVotes = options;
	const total = layerVotes.reduce(
		(acc, f) => acc + (votes[layer][f.id] ?? 0),
		0,
	);
	const sorted = [...options].sort(
		(a, b) => (votes[layer][b.id] ?? 0) - (votes[layer][a.id] ?? 0),
	);

	return (
		<section id="community" className="relative py-24 md:py-40 px-6 md:px-10">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="mb-12 md:mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
				>
					<p className="text-[11px] font-body font-light tracking-[0.35em] uppercase text-[#C9974C]/60 mb-4">
						Community Strata
					</p>
					<h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#FDFCFB] tracking-[-0.05em] leading-[0.95] mb-6">
						The People&apos;s
						<br />
						Pyramid.
					</h2>
					<p className="text-base md:text-lg font-body font-light text-[#FDFCFB]/40 max-w-xl leading-relaxed">
						Cast your vote for each layer. See which fillings
						the community is choosing.
					</p>
				</motion.div>

				<div className="flex gap-1 mb-10">
					{builderSteps.map((s) => (
						<button
							key={s.key}
							onClick={() => setLayer(s.key)}
							className={`flex-1 py-4 px-3 text-left transition-all duration-500 border-t-2 ${
								layer === s.key
									? "border-[#C9974C] bg-[#C9974C]/5"
									: "border-[#FDFCFB]/10 hover:border-[#FDFCFB]/25"
							}`}
						>
							<span className="block text-[10px] font-body tracking-[0.2em] uppercase text-[#FDFCFB]/40 mb-1">
								{s.subtitle}
							</span>
							<span
								className={`block text-sm md:text-base font-display tracking-[-0.02em] transition-colors duration-300 ${
									layer === s.key
										? "text-[#C9974C]"
										: "text-[#FDFCFB]/60"
								}`}
							>
								{s.label}
							</span>
						</button>
					))}
				</div>

				<div className="flex items-center justify-between mb-8">
					<div className="flex items-center gap-3">
						<Users size={16} className="text-[#C9974C]/50" />
						<span className="text-sm font-body font-light text-[#FDFCFB]/40">
							{total} vote{total === 1 ? "" : "s"} cast on this
							layer
						</span>
					</div>
					{myVotes[layer] && (
						<span className="text-[11px] font-body tracking-[0.15em] uppercase text-[#C9974C]/60">
							✓ You&apos;ve voted
						</span>
					)}
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={layer}
						className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
					>
						{sorted.map((f, idx) => {
							const count = votes[layer][f.id] ?? 0;
							const pct = total > 0 ? (count / total) * 100 : 0;
							const mine = myVotes[layer] === f.id;
							const canVote = !myVotes[layer];
							const leading = idx === 0 && count > 0;
							return (
								<motion.div
									key={f.id}
									layout
									className={`relative border overflow-hidden transition-all duration-500 ${
										mine
											? "border-[#C9974C]/40"
											: leading
												? "border-[#C9974C]/20"
												: "border-[#FDFCFB]/8"
									}`}
								>
									<div className="aspect-[4/3] relative overflow-hidden">
										<Image
											src={f.image}
											alt={`Macro texture of ${f.name}`}
											fill
											sizes="(min-width: 768px) 33vw, 100vw"
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/30 to-transparent" />
										{leading && (
											<div className="absolute top-4 left-4 px-3 py-1 bg-[#C9974C] text-[#1A1614] text-[10px] font-body font-medium tracking-[0.15em] uppercase">
												Leading
											</div>
										)}
										{mine && (
											<div className="absolute top-4 right-4 w-8 h-8 bg-[#C9974C] rounded-full flex items-center justify-center">
												<Check
													size={14}
													className="text-[#1A1614]"
												/>
											</div>
										)}
										<span className="absolute bottom-3 right-4 text-4xl font-display font-bold text-[#FDFCFB]/[0.08] leading-none">
											{String(idx + 1).padStart(2, "0")}
										</span>
									</div>
									<div className="p-5 md:p-6">
										<h4 className="font-display text-lg md:text-xl font-bold text-[#FDFCFB] tracking-[-0.02em] mb-1">
											{f.name}
										</h4>
										<p className="text-xs font-body font-light text-[#FDFCFB]/40 leading-relaxed mb-5">
											{f.description}
										</p>
										<div className="mb-5">
											<div className="flex justify-between items-baseline mb-2">
												<span className="text-2xl font-display font-bold text-[#C9974C]">
													{pct.toFixed(0)}%
												</span>
												<span className="text-[11px] font-body text-[#FDFCFB]/30">
													{count} vote
													{count === 1 ? "" : "s"}
												</span>
											</div>
											<div className="h-1.5 bg-[#FDFCFB]/8 rounded-full overflow-hidden">
												<motion.div
													className="h-full rounded-full"
													style={{
														background: mine
															? "#C9974C"
															: leading
																? "linear-gradient(90deg, #C9974C, #d4a65e)"
																: "#FDFCFB",
														opacity: mine
															? 1
															: leading
																? 0.7
																: 0.3,
													}}
													initial={{ width: 0 }}
													animate={{
														width: `${pct}%`,
													}}
													transition={{
														duration: 0.8,
														ease: [
															0.22, 1, 0.36, 1,
														],
													}}
												/>
											</div>
										</div>
										<button
											onClick={() => cast(f)}
											disabled={
												!canVote || casting === f.id
											}
											className={`w-full py-3.5 text-[12px] font-body font-medium tracking-[0.15em] uppercase min-h-[48px] transition-all duration-300 ${
												mine
													? "bg-[#C9974C]/10 text-[#C9974C] cursor-default"
													: canVote
														? "bg-[#FDFCFB]/5 text-[#FDFCFB]/70 hover:bg-[#C9974C] hover:text-[#1A1614]"
														: "bg-transparent text-[#FDFCFB]/20 cursor-default"
											}`}
										>
											{casting === f.id
												? "Casting."
												: mine
													? "Your Choice"
													: canVote
														? "Vote"
														: "Voted"}
										</button>
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
