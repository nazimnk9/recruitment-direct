"use client";

import { motion } from "framer-motion";
import { FileText, Bot, ShieldCheck, UserCheck, Send } from "lucide-react";

const steps = [
  { icon: FileText, label: "Applicant Applies" },
  { icon: Bot, label: "AI Call’s Instantly & Screens 24/7" },
  { icon: ShieldCheck, label: "Qualification & I.D Check" },
  { icon: UserCheck, label: "Consultant Verification" },
  { icon: Send, label: "Fast CV Submission" },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-16"
        >
          How Our AI Recruitment Works
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 md:flex-nowrap">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center gap-3 min-w-[120px] md:min-w-[130px] lg:min-w-[170px] px-1 md:px-2"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center relative flex-shrink-0"
                  style={{ animation: "pulse-glow 3s ease-in-out infinite", animationDelay: `${i * 0.5}s` }}
                >
                  <step.icon className="w-7 h-7 md:w-9 md:h-9 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <p className="text-xs md:text-sm font-semibold text-foreground max-w-[110px] md:max-w-[140px] leading-tight">{step.label}</p>
              </motion.div>

              {i < steps.length - 1 && (
                <>
                  {/* Horizontal Connector - Laptop, Tablet, Desktop */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                    className="hidden md:block w-8 lg:w-16 h-0.5 bg-primary/30 origin-left mx-[-10px] lg:mx-2"
                    style={{
                      background: "linear-gradient(90deg, hsl(217, 90%, 46%), hsla(217, 90%, 46%, 0.2))",
                    }}
                  />
                  {/* Vertical Connector - Mobile */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                    className="md:hidden w-0.5 h-12 bg-primary/30 origin-top my-4"
                    style={{
                      background: "linear-gradient(180deg, hsl(217, 90%, 46%), hsla(217, 90%, 46%, 0.2))",
                    }}
                  />
                </>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <a href="#contact" className="btn-metallic inline-block text-base px-10 py-4">
            AI Hire Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
