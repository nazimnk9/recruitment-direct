"use client";

import { motion } from "framer-motion";
import { HardHat, Truck, Wrench, Factory, Briefcase, Heart, GraduationCap, Monitor } from "lucide-react";

const sectors = [
  { name: "Construction", icon: HardHat },
  { name: "Engineering", icon: Wrench },
  { name: "Logistics", icon: Truck },
  { name: "Industrial", icon: Factory },
  { name: "Commercial", icon: Briefcase },
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: GraduationCap },
  { name: "IT & Technical", icon: Monitor },
];

export default function SectorsSection() {
  return (
    <section id="sectors" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-14"
        >
          Sectors We Supply
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-hover p-8 flex flex-col items-center gap-4 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <sector.icon className="w-[37px] h-[37px] text-[#1D4ED8]" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{sector.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
