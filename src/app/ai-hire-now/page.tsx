"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Zap, Users, ShieldCheck, Clock, Send,
  FileText, Bot, UserCheck, CheckCircle,
  Truck, HardHat, Wrench, GraduationCap, Heart, Factory, Briefcase, Monitor,
  TrendingUp, Cpu, PhoneCall, Settings, Database
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(217,90%,46%), transparent)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.h1 {...fadeUp} className="section-title text-4xl md:text-5xl lg:text-6xl mb-5">
          Hire Staff Instantly with AI
        </motion.h1>
        <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
          Get pricing, screen applicants and secure qualified staff faster than traditional recruitment.
        </motion.p>

        <motion.ul {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-foreground/80">
          {["Instant staffing pricing", "AI applicant screening", "Consultant verified applicants", "Fast CV submission"].map(t => (
            <li key={t} className="flex items-center gap-2 text-sm md:text-base font-medium">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {t}
            </li>
          ))}
        </motion.ul>

        <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
          <a href="#ai-hire-cta" className="btn-metallic text-base px-10 py-4 inline-block">AI Hire Now</a>
          <p className="text-sm text-foreground/50 mt-4">AI speed. Consultant verified. Fast submission.</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── BENEFITS STRIP ─── */
function BenefitsStrip() {
  const items = [
    { icon: Zap, label: "Instant Pricing" },
    { icon: Bot, label: "AI Screening" },
    { icon: ShieldCheck, label: "Consultant Verified" },
    { icon: Clock, label: "Faster Hiring" },
  ];
  return (
    <section className="py-8 border-y border-primary/10 bg-background">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
        {items.map((b, i) => (
          <motion.div key={b.label} {...fadeUp} transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-semibold text-foreground">{b.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    { icon: FileText, label: "Enter role requirements" },
    { icon: Zap, label: "Get instant pricing" },
    { icon: Bot, label: "AI contacts and screens applicants" },
    { icon: UserCheck, label: "Consultant verifies applicants" },
    { icon: Send, label: "Fast CV submission" },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2 {...fadeUp} className="section-title mb-4">Simple. Fast. Built for Speed.</motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mt-14">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <motion.div {...fadeUp} transition={{ delay: i * 0.12 }} className="flex flex-col items-center gap-3 min-w-[140px]">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center relative"
                  style={{ animation: "pulse-glow 3s ease-in-out infinite", animationDelay: `${i * 0.5}s` }}>
                  <s.icon className="w-7 h-7 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <p className="text-sm font-semibold text-foreground max-w-[130px]">{s.label}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.3, duration: 0.5 }}
                  className="hidden md:block w-16 h-0.5 origin-left mx-2"
                  style={{ background: "linear-gradient(90deg, hsl(217,90%,46%), hsla(217,90%,46%,0.2))" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── AI + VERIFICATION ─── */
function AIVerification() {
  const points = [
    "Every applicant is contacted immediately by AI.",
    "Role-specific questions are asked automatically.",
    "Responses are captured and assessed instantly.",
    "Consultants review and verify every applicant before submission.",
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 {...fadeUp} className="section-title mb-10">AI Screening with Consultant Verification</motion.h2>
        <div className="space-y-4 mb-8">
          {points.map((p, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
              className="card-hover p-5 flex items-start gap-4 text-left">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/80 font-medium">{p}</p>
            </motion.div>
          ))}
        </div>
        <motion.p {...fadeUp} className="text-lg font-heading font-semibold text-primary">
          Ensuring speed without compromising quality.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── SECTORS ─── */
function Sectors() {
  const sectors = [
    { name: "Logistics & Distribution", icon: Truck },
    { name: "Construction", icon: HardHat },
    { name: "Engineering", icon: Wrench },
    { name: "Education", icon: GraduationCap },
    { name: "Healthcare", icon: Heart },
    { name: "Industrial & Manufacturing", icon: Factory },
    { name: "Commercial & Office Support", icon: Briefcase },
    { name: "IT & Technology", icon: Monitor },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2 {...fadeUp} className="section-title mb-14">Supplying Staff Across 8 Key UK Sectors</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <motion.div key={s.name} {...fadeUp} transition={{ delay: i * 0.07 }}
              className="card-hover p-8 flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm">{s.name}</h3>
            </motion.div>
          ))}
        </div>
        <motion.p {...fadeUp} className="text-foreground/60 mt-10 font-medium">
          Scalable supply across both public and private sector clients.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── VALUE ─── */
function ValueSection() {
  const values = [
    "50% reduction in recruitment time",
    "No waiting for quotes",
    "No manual screening",
    "Faster time-to-fill roles",
    "Higher quality applicants",
    "Consultant-reviewed before submission",
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 {...fadeUp} className="section-title mb-12">Faster Hiring. Better Results.</motion.h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
              className="card-hover p-5 flex items-center gap-4 text-left">
              <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground/80 font-medium">{v}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TRUST ─── */
function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 {...fadeUp} className="section-title mb-6">20+ Years Supplying Staff Across the UK</motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-lg text-foreground/70 mb-4 max-w-2xl mx-auto">
          UK-wide coverage delivering temporary, contract and permanent staff across multiple sectors.
        </motion.p>
        <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="font-heading font-semibold text-primary text-lg">
          Trusted by public and private sector clients.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── TECH ─── */
function TechSection() {
  const tech = [
    { icon: Zap, text: "Instant pricing engine" },
    { icon: PhoneCall, text: "AI voice screening" },
    { icon: Bot, text: "Automated applicant qualification" },
    { icon: ShieldCheck, text: "Consultant verification layer" },
    { icon: Database, text: "CRM integration" },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 {...fadeUp} className="section-title mb-12">Powered by AI Recruitment Technology</motion.h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {tech.map((t, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
              className="card-hover p-5 flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <t.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground/80 font-medium">{t.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section id="ai-hire-cta" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2 {...fadeUp} className="section-title mb-8">Need Staff Now?</motion.h2>
        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a href="#ai-hire-cta" className="btn-metallic text-base px-10 py-4">AI Hire Now</a>
          <a href="/#contact" className="btn-metallic text-base px-10 py-4">Speak to a Consultant</a>
        </motion.div>
        <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-sm text-foreground/50">
          No obligation. Immediate response.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── STICKY MOBILE CTA ─── */
function StickyMobileCTA() {
  return (
    <div className="fixed bottom-20 left-0 right-0 z-40 md:hidden px-4 pb-2">
      <a href="#ai-hire-cta" className="btn-metallic w-full text-center block text-base py-3.5">
        AI Hire Now
      </a>
    </div>
  );
}

/* ─── PAGE ─── */
export default function AIHireNow() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BenefitsStrip />
      <HowItWorks />
      <AIVerification />
      <Sectors />
      <ValueSection />
      <TrustSection />
      <TechSection />
      <FinalCTA />
      <Footer />
      <FloatingElements />
      <StickyMobileCTA />
    </div>
  );
}
