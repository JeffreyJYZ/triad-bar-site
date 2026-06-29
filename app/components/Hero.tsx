"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroImage } from "@/lib/data";

export default function Hero() {
	return (
		<section
			id="top"
			className="relative flex min-h-screen items-center justify-center overflow-hidden"
		>
			<div className="absolute inset-0">
				<Image
					src={heroImage}
					alt="A monumental chocolate pyramid bar on cracked dark slate, dramatic chiaroscuro lighting"
					fill
					priority
					sizes="100vw"
					className="scale-105 object-cover opacity-70"
				/>
				<div className="from-background/40 via-background/20 to-background absolute inset-0 bg-linear-to-b" />
			</div>

			<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
				<motion.p
					className="font-body text-gold/80 mb-6 text-[11px] font-light tracking-[0.35em] uppercase md:text-[13px]"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					The World&apos;s First Architecturally Stratified Chocolate
				</motion.p>
				<motion.h1
					className="font-display text-foreground text-5xl leading-[0.9] font-black tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-9xl"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1.2,
						delay: 0.5,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					TRIAD
				</motion.h1>
				<motion.p
					className="font-body text-foreground/65 mx-auto mt-6 max-w-lg text-base leading-relaxed font-light md:mt-8 md:text-lg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.9 }}
				>
					One bite, three strata.
				</motion.p>
				<motion.a
					href="#stratum"
					className="bg-gold text-background font-body hover:bg-gold-light mt-10 inline-flex min-h-14 items-center gap-3 px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase transition-all duration-300 md:mt-14"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.2 }}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					Begin the Ascent
					<ArrowRight size={16} />
				</motion.a>
			</div>

			<div
				className="bg-background absolute right-0 bottom-0 left-0 h-24 md:h-32"
				style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
			/>
		</section>
	);
}
