"use client";

export default function TriadError({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="flex min-h-[60vh] items-center justify-center px-6">
			<div className="max-w-lg text-center">
				<h1 className="font-display text-gold mb-4 text-3xl font-bold">
					Something fractured.
				</h1>
				<p className="text-foreground/40 mb-8 text-sm leading-relaxed">
					An unexpected error occurred. Our confectioners have been
					notified.
				</p>
				<button
					onClick={() => reset()}
					className="bg-gold text-background hover:bg-gold-light inline-flex items-center gap-2 px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase transition-colors"
				>
					Retry
				</button>
			</div>
		</div>
	);
}
