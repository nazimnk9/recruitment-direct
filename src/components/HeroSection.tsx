"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(217, 90%, 46%), transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-title text-3xl md:text-4xl lg:text-5xl mb-6 text-black"
        >
          <strong>UK Recruitment Agency</strong> Delivering Temporary, Contract & Permanent Staff – Faster with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-10"
        >
          20+ years supplying staff across construction, engineering, logistics, education, healthcare and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-metallic text-base px-8 py-3.5">Request Staff</a>
          <a href="https://callpilot.pro/" target="_blank" rel="noopener noreferrer" className="btn-metallic text-base px-8 py-3.5">
            AI Call Test
          </a>
          <a href="#contact" className="btn-metallic text-base px-8 py-3.5">Book a Call</a>
        </motion.div>
      </div>
    </section>
  );
}
