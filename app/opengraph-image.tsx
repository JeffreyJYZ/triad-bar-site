import { ImageResponse } from "next/og";

export const alt =
	"Triad Bar — the world's first architecturally stratified chocolate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				background: "#1A1614",
				color: "#FDFCFB",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "flex-start",
				padding: "0 96px",
				position: "relative",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: 8,
					height: "100%",
					background: "#C9974C",
				}}
			/>
			<div
				style={{
					fontSize: 28,
					letterSpacing: 12,
					textTransform: "uppercase",
					color: "#C9974C",
					marginBottom: 24,
				}}
			>
				Triad Bar
			</div>
			<div
				style={{
					fontSize: 220,
					fontWeight: 900,
					letterSpacing: -12,
					lineHeight: 0.9,
					margin: 0,
					color: "#FDFCFB",
				}}
			>
				TRIAD
			</div>
			<div
				style={{
					fontSize: 36,
					color: "rgba(253,252,251,0.65)",
					marginTop: 28,
					fontWeight: 300,
				}}
			>
				One bite, three strata.
			</div>
		</div>,
		{ ...size },
	);
}
