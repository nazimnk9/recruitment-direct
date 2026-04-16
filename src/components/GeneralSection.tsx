"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import generalImg from "@/assets/general2.jpeg";

export default function GeneralSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-12 max-w-4xl mx-auto"
        >
          AI Speed. Human Verification. Faster Hiring.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
        >
          Our AI contacts and screens applicants instantly, while our consultants verify and approve every worker before submission.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 60px hsla(217, 90%, 46%, 0.12)" }}
        >
          <Image src={generalImg} alt="AI Speed meets Human Verification" className="w-full h-auto" unoptimized />
        </motion.div>
      </div>
    </section>
  );
}
