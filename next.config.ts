import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.base44.com",
			},
			{
				protocol: "https",
				hostname: "static.vecteezy.com",
			},
		],
	},
};

export default nextConfig;
