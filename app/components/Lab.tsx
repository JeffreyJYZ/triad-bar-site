"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { labCards } from "@/lib/data";

const M = "https://media.base44.com/images/public/6a3a3ae86be07351bf17fb54";
const snapImg = `${M}/99c508c61_generated_4a4ba360.png`;
const vesselImg = `${M}/32fe9de09_generated_0117a4e6.png`;

export default function Lab() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="lab" className="relative py-24 md:py-40 overflow-hidden" ref={ref}>
      <div className="px-6 md:px-10 max-w-7xl mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] font-body font-light tracking-[0.35em] uppercase text-[#C9974C]/60 mb-4">
            The Confectionary Lab
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#FDFCFB] tracking-[-0.05em] leading-[0.95]">
            Anatomy of
            <br />
            a Bite.
          </h2>
        </motion.div>
      </div>

      <motion.div
        className="flex gap-6 md:gap-10 px-6 md:px-10 pb-8"
        style={{ x }}
      >
        {labCards.map((card, i) => (
          <motion.div
            key={card.number}
            className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] bg-[#1A1614] border border-[#FDFCFB]/8 p-8 md:p-10 relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <span className="text-[80px] md:text-[100px] font-display font-bold text-[#FDFCFB]/[0.03] absolute top-4 right-6 leading-none select-none">
              {card.number}
            </span>
            <div className="mb-8">
              <span className="text-[10px] font-body tracking-[0.25em] uppercase text-[#C9974C]/50">
                Phase {card.number}
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#FDFCFB] tracking-[-0.03em] mb-3">
              {card.title}
            </h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl md:text-4xl font-display font-bold text-[#C9974C]">
                {card.stat}
              </span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase text-[#FDFCFB]/30">
                {card.statLabel}
              </span>
            </div>
            <p className="text-sm font-body font-light text-[#FDFCFB]/40 leading-[1.7]">
              {card.description}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C9974C] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="relative aspect-[4/3] overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={snapImg}
            alt="Extreme close-up of a chocolate bar snapping in half showing crystalline structure"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/70 to-transparent" />
          <span className="absolute bottom-4 left-4 text-[10px] font-body tracking-[0.2em] uppercase text-[#FDFCFB]/40">
            The Snap — 4,200 Hz
          </span>
        </motion.div>
        <motion.div
          className="relative aspect-[4/3] overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={vesselImg}
            alt="Minimalist matte-black triangular packaging for the Triad chocolate bar"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/70 to-transparent" />
          <span className="absolute bottom-4 left-4 text-[10px] font-body tracking-[0.2em] uppercase text-[#FDFCFB]/40">
            The Vessel — Matte Black
          </span>
        </motion.div>
      </div>
    </section>
  );
}
