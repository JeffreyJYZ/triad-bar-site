"use client";

import { motion } from "motion/react";
import { pillars } from "@/lib/data";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-24 md:py-40 px-6 md:px-10 overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-full h-full opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(51.5deg, transparent, transparent 80px, #C9974C 80px, #C9974C 81px)",
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] font-body font-light tracking-[0.35em] uppercase text-[#C9974C]/60 mb-4">
            The Brand Manifesto
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#FDFCFB] tracking-[-0.05em] leading-[0.95] mb-6">
            Eight Pillars
            <br />
            of a Monolith.
          </h2>
          <p className="text-base md:text-lg font-body font-light text-[#FDFCFB]/40 max-w-xl leading-relaxed">
            Not a chocolate bar. A brand world. This is the architecture of how we become bigger than the category itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#FDFCFB]/8 border border-[#FDFCFB]/8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              className="relative bg-[#1A1614] p-8 md:p-10 group hover:bg-[#1A1614]/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
              <div
                className="absolute top-0 left-0 w-16 h-[2px] bg-[#C9974C] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                style={{ transform: "rotate(51.5deg) scaleX(0)" }}
              />
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-body tracking-[0.25em] uppercase text-[#C9974C]/50">
                  Pillar {p.number}
                </span>
                <span className="text-5xl md:text-6xl font-display font-bold text-[#FDFCFB]/[0.04] leading-none">
                  {p.number}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#FDFCFB] tracking-[-0.03em] mb-4">
                {p.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-xl md:text-2xl font-display font-bold text-[#C9974C]">
                  {p.stat}
                </span>
                <span className="text-[10px] font-body tracking-[0.15em] uppercase text-[#FDFCFB]/30">
                  {p.statLabel}
                </span>
              </div>
              <p className="text-sm font-body font-light text-[#FDFCFB]/45 leading-[1.7]">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
