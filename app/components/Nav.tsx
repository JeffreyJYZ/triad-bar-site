"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { useSelection } from "./SelectionContext";

export default function Nav() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { selection } = useSelection();
	const allChosen = selection.base && selection.core && selection.apex;

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
				scrolled
					? "border-foreground/5 bg-background/85 border-b backdrop-blur-md"
					: "bg-transparent"
			}`}
		>
			<nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-28 md:px-10">
				<a
					href="#top"
					aria-label="Triad home"
					className="block transition-opacity hover:opacity-80"
				>
					<Image
						src="/logo.png"
						alt="Triad"
						width={112}
						height={118}
						className="h-20 w-auto md:h-24"
						priority
					/>
				</a>

				<ul className="hidden items-center gap-8 md:flex">
					{navLinks.map((l) => (
						<li key={l.href}>
							<a
								href={l.href}
								className="font-body text-foreground/60 hover:text-gold text-sm font-light transition-colors"
							>
								{l.label}
							</a>
						</li>
					))}
				</ul>

				<a
					href={allChosen ? "#vessel" : "#builder"}
					className={`font-body ml-4 hidden min-h-[48px] items-center gap-2 px-5 py-3 text-[12px] font-medium tracking-[0.15em] uppercase transition-all duration-300 md:inline-flex ${
						allChosen
							? "bg-gold text-background hover:bg-gold-light"
							: "border-foreground/20 text-foreground/50 hover:border-gold/60 hover:text-gold border"
					}`}
				>
					{allChosen ? "Order Now" : "Choose Your Triad"}
				</a>

				<button
					className="text-foreground md:hidden"
					onClick={() => setOpen((v) => !v)}
					aria-label="Toggle menu"
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</nav>

			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="border-foreground/5 bg-background overflow-hidden border-t md:hidden"
					>
						<ul className="flex flex-col px-6 py-4">
							{navLinks.map((l) => (
								<li key={l.href}>
									<a
										href={l.href}
										onClick={() => setOpen(false)}
										className="font-body text-foreground/70 hover:text-gold block py-3 text-sm font-light transition-colors"
									>
										{l.label}
									</a>
								</li>
							))}
							<li>
								<a
									href={allChosen ? "#vessel" : "#builder"}
									onClick={() => setOpen(false)}
									className={`font-body mt-2 block py-3 text-[13px] font-medium tracking-[0.15em] uppercase transition-colors ${
										allChosen
											? "text-gold"
											: "text-foreground/50"
									}`}
								>
									{allChosen
										? "Order Now"
										: "Choose Your Triad"}
								</a>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
