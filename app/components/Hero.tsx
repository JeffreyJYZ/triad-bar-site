"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroImage } from "@/lib/data";
import { fadeUp, scaleIn, maskUp, container } from "@/lib/motion";

export default function Hero() {
	const { scrollY } = useScroll();
	const imgY = useTransform(scrollY, [0, 600], [0, 120]);
	const imgScale = useTransform(scrollY, [0, 600], [1, 1.12]);
	const overlayOpacity = useTransform(scrollY, [0, 500], [1, 0]);
	const contentY = useTransform(scrollY, [0, 500], [0, 80]);
	const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

	return (
		<section
			id="top"
			className="relative flex min-h-screen items-center justify-center overflow-hidden"
		>
			<motion.div className="absolute inset-0" style={{ y: imgY }}>
				<motion.div
					className="absolute inset-0"
					initial="hidden"
					animate="visible"
					variants={scaleIn}
				>
					<Image
						src={heroImage}
						alt="A monumental chocolate pyramid bar on cracked dark slate, dramatic chiaroscuro lighting"
						fill
						priority
						sizes="100vw"
						className="object-cover opacity-70"
					/>
				</motion.div>
				<motion.div
					className="absolute inset-0"
					style={{ scale: imgScale }}
				/>
				<div className="from-background/40 via-background/20 to-background absolute inset-0 bg-linear-to-b" />
				<motion.div
					className="bg-background absolute inset-0"
					style={{ opacity: overlayOpacity }}
				/>
			</motion.div>

			<motion.div
				className="relative z-10 mx-auto max-w-4xl px-6 text-center"
				style={{ y: contentY, opacity: contentOpacity }}
				initial="hidden"
				animate="visible"
				variants={container}
			>
				<motion.p
					className="font-body text-gold/80 mb-6 text-[11px] font-light tracking-[0.35em] uppercase md:text-[13px]"
					variants={fadeUp}
				>
					The World&apos;s First Architecturally Stratified Chocolate
				</motion.p>
				<div className="overflow-hidden">
					<motion.h1
						className="font-display text-foreground text-5xl leading-[0.9] font-black tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-9xl"
						variants={maskUp}
					>
						TRIAD
					</motion.h1>
				</div>
				<motion.p
					className="font-body text-foreground/65 mx-auto mt-6 max-w-lg text-base leading-relaxed font-light md:mt-8 md:text-lg"
					variants={fadeUp}
				>
					One bite, three strata.
				</motion.p>
				<motion.a
					href="#stratum"
					className="bg-gold text-background font-body hover:bg-gold-light mt-10 inline-flex min-h-14 items-center gap-3 px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase transition-all duration-300 md:mt-14"
					variants={fadeUp}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					Begin the Ascent
					<ArrowRight size={16} />
				</motion.a>
			</motion.div>

			<div
				className="bg-background absolute right-0 bottom-0 left-0 h-24 md:h-32"
				style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
			/>
		</section>
	);
}
