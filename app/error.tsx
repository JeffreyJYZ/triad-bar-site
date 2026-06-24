"use client";

export default function Error({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="flex items-center justify-center min-h-[60vh] px-6">
			<div className="text-center max-w-lg">
				<h1 className="font-display text-3xl font-bold text-[#C9974C] mb-4">
					Something fractured.
				</h1>
				<p className="text-sm text-[#FDFCFB]/40 mb-8 leading-relaxed">
					An unexpected error occurred. Our confectioners have been
					notified.
				</p>
				<button
					onClick={() => reset()}
					className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9974C] text-[#1A1614] text-[13px] font-medium tracking-[0.15em] uppercase hover:bg-[#d4a65e] transition-colors"
				>
					Retry
				</button>
			</div>
		</div>
	);
}
