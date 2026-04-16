"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import networkRailLogo from "@/assets/network-rail-logo.svg";
import kierLogo from "@/assets/kier-logo.svg";
import nhsLogo from "@/assets/nhs-logo.png";
import balfourBeattyLogo from "@/assets/balfour-beatty-logo.svg";

const companies = [
  { name: "Network Rail", url: "https://www.networkrail.co.uk/", logo: networkRailLogo },
  { name: "Kier", url: "https://www.kier.co.uk/", logo: kierLogo },
  { name: "NHS", url: "https://www.nhs.uk/", logo: nhsLogo },
  { name: "Balfour Beatty", url: "https://www.balfourbeatty.com/", logo: balfourBeattyLogo },
];

export default function TrustedBySection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest uppercase text-primary mb-10"
        >
          Trusted by Leading Companies
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {companies.map((company, i) => (
            <motion.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <Image src={company.logo} alt={company.name} className="h-10 md:h-14 w-auto max-w-[160px] object-contain" unoptimized />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
