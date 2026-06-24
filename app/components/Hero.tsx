"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroImage } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="A monumental chocolate pyramid bar on cracked dark slate, dramatic chiaroscuro lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1614]/40 via-[#1A1614]/20 to-[#1A1614]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="text-[11px] md:text-[13px] font-body font-light tracking-[0.35em] uppercase text-[#C9974C]/80 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The World&apos;s First Architecturally Stratified Chocolate
        </motion.p>
        <motion.h1
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.06em] text-[#FDFCFB] leading-[0.9]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          TRIAD
        </motion.h1>
        <motion.p
          className="mt-6 md:mt-8 text-base md:text-lg font-body font-light text-[#FDFCFB]/50 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Three layers. Three fillings. One monumental bite.
          <br className="hidden md:block" />
          Ascend the pyramid of flavor.
        </motion.p>
        <motion.a
          href="#stratum"
          className="inline-flex items-center gap-3 mt-10 md:mt-14 px-8 py-4 bg-[#C9974C] text-[#1A1614] text-[13px] font-body font-medium tracking-[0.15em] uppercase hover:bg-[#d4a65e] transition-all duration-300 min-h-[56px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Begin the Ascent
          <ArrowRight size={16} />
        </motion.a>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-[#1A1614]"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </section>
  );
}
