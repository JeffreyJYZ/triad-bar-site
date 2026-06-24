"use client";

import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Footer() {
	return (
		<footer className="relative py-16 md:py-24 px-6 md:px-10 border-t border-[#FDFCFB]/5">
			<div
				className="absolute top-0 left-0 right-0 h-16 bg-[#1A1614]"
				style={{
					clipPath: "polygon(0 0, 100% 0, 100% 100%)",
					marginTop: "-64px",
				}}
			/>
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
					<div className="md:col-span-2">
						<Image
							src="/logo.png"
							alt="Triad"
							width={280}
							height={294}
							className="h-40 w-auto md:h-48 mb-4"
						/>
						<p className="text-sm font-body font-light text-[#FDFCFB]/30 leading-relaxed max-w-sm">
							The world&apos;s first architecturally stratified
							chocolate experience. Handcrafted in small batches.
							Delivered in climate-controlled vessels.
						</p>
					</div>
					<div>
						<span className="block text-[10px] font-body tracking-[0.25em] uppercase text-[#C9974C]/60 mb-4">
							Explore
						</span>
						<div className="flex flex-col gap-3">
							{navLinks.map((l) => (
								<a
									key={l.href}
									href={l.href}
									className="text-sm font-body font-light text-[#FDFCFB]/40 hover:text-[#C9974C] transition-colors"
								>
									{l.label}
								</a>
							))}
						</div>
					</div>
					<div>
						<span className="block text-[10px] font-body tracking-[0.25em] uppercase text-[#C9974C]/60 mb-4">
							Contact
						</span>
						<div className="flex flex-col gap-3">
							<span className="text-sm font-body font-light text-[#FDFCFB]/40">
								Yizhou6651@dubaicollege.org
							</span>
							<span className="text-sm font-body font-light text-[#FDFCFB]/40">
								+41 44 123 45 67
							</span>
							<span className="text-sm font-body font-light text-[#FDFCFB]/25">
								Dubai, UAE
							</span>
						</div>
					</div>
				</div>
				<div className="mt-16 pt-8 border-t border-[#FDFCFB]/5 flex flex-col sm:flex-row items-center justify-between gap-4">
					<span className="text-[11px] font-body text-[#FDFCFB]/20">
						© 2026 Triad Confections AG. All rights reserved.
					</span>
					<div className="flex items-center gap-6">
						<span className="text-[11px] font-body text-[#FDFCFB]/20">
							Privacy Policy
						</span>
						<span className="text-[11px] font-body text-[#FDFCFB]/20">
							Terms of Service
						</span>
						<span className="text-[11px] font-body text-[#FDFCFB]/20">
							Shipping Info
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
