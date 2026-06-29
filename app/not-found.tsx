import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex flex-1 items-center justify-center px-6 py-32">
			<div className="max-w-lg text-center">
				<p className="font-body text-gold/80 mb-6 text-[11px] font-light tracking-[0.35em] uppercase">
					Error 404
				</p>
				<h1 className="font-display text-foreground mb-6 text-5xl leading-[0.9] font-black tracking-[-0.06em] md:text-7xl">
					This stratum
					<br />
					doesn&apos;t exist.
				</h1>
				<p className="font-body text-foreground/65 mx-auto mb-10 max-w-md text-base leading-relaxed font-light md:text-lg">
					The layer you tried to reach crumbled away. Return to the
					monument and begin again.
				</p>
				<Link
					href="/"
					className="font-body bg-gold text-background hover:bg-gold-light inline-flex min-h-14 items-center gap-3 px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase transition-colors"
				>
					Return to the Apex
				</Link>
			</div>
		</main>
	);
}
