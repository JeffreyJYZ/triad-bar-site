"use client";

import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Footer() {
	return (
		<footer className="border-foreground/5 relative border-t px-6 py-16 md:px-10 md:py-24">
			<div
				className="bg-background absolute top-0 right-0 left-0 h-16"
				style={{
					clipPath: "polygon(0 0, 100% 0, 100% 100%)",
					marginTop: "-64px",
				}}
			/>
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-16">
					<div className="md:col-span-2">
						<Image
							src="/logo.png"
							alt="Triad"
							width={280}
							height={294}
							className="mb-4 h-40 w-auto md:h-48"
						/>
						<p className="font-body text-foreground/30 max-w-sm text-sm leading-relaxed font-light">
							The world&apos;s first architecturally stratified
							chocolate experience. Handcrafted in small batches.
							Delivered in climate-controlled vessels.
						</p>
					</div>
					<div>
						<span className="font-body text-gold/60 mb-4 block text-[10px] tracking-[0.25em] uppercase">
							Explore
						</span>
						<div className="flex flex-col gap-3">
							{navLinks.map((l) => (
								<a
									key={l.href}
									href={l.href}
									className="font-body text-foreground/40 hover:text-gold text-sm font-light transition-colors"
								>
									{l.label}
								</a>
							))}
						</div>
					</div>
					<div>
						<span className="font-body text-gold/60 mb-4 block text-[10px] tracking-[0.25em] uppercase">
							Contact
						</span>
						<div className="flex flex-col gap-3">
							<span className="font-body text-foreground/40 text-sm font-light">
								Yizhou6651@dubaicollege.org
							</span>
							<span className="font-body text-foreground/25 text-sm font-light">
								Dubai, UAE
							</span>
						</div>
					</div>
				</div>
				<div className="border-foreground/5 mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
					<span className="font-body text-foreground/20 text-[11px]">
						© 2026 Triad Confections LLC. All rights reserved.
					</span>
					<div className="flex items-center gap-6">
						<span className="font-body text-foreground/20 text-[11px]">
							Privacy Policy
						</span>
						<span className="font-body text-foreground/20 text-[11px]">
							Terms of Service
						</span>
						<span className="font-body text-foreground/20 text-[11px]">
							Shipping Info
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
