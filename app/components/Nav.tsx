"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Nav() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

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
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? "bg-[#1A1614]/85 backdrop-blur-md border-b border-[#FDFCFB]/5"
					: "bg-transparent"
			}`}
		>
			<nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
				<a
					href="#top"
					aria-label="Triad home"
					className="block hover:opacity-80 transition-opacity"
				>
					<Image
						src="/logo.png"
						alt="Triad"
						width={56}
						height={59}
						className="h-10 w-auto md:h-12"
						priority
					/>
				</a>

				<ul className="hidden md:flex items-center gap-8">
					{navLinks.map((l) => (
						<li key={l.href}>
							<a
								href={l.href}
								className="text-sm font-body font-light text-[#FDFCFB]/60 hover:text-[#C9974C] transition-colors"
							>
								{l.label}
							</a>
						</li>
					))}
				</ul>

				<button
					className="md:hidden text-[#FDFCFB]"
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
						className="md:hidden overflow-hidden bg-[#1A1614] border-t border-[#FDFCFB]/5"
					>
						<ul className="flex flex-col px-6 py-4">
							{navLinks.map((l) => (
								<li key={l.href}>
									<a
										href={l.href}
										onClick={() => setOpen(false)}
										className="block py-3 text-sm font-body font-light text-[#FDFCFB]/70 hover:text-[#C9974C] transition-colors"
									>
										{l.label}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
