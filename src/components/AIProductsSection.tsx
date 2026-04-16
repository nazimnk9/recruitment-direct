import { motion } from "framer-motion";
import Image from "next/image";
import callpilotLogo from "@/assets/callpilot_logo.png";
import { Phone, Users, Clock, Zap, ShieldCheck, Bot } from "lucide-react";

const features = [
  { icon: Phone, text: "Answer high volumes of calls instantly" },
  { icon: Users, text: "Screen applicants and qualify enquiries automatically" },
  { icon: Clock, text: "Eliminate repetitive calls and admin workload" },
  { icon: Zap, text: "Capture leads without missing opportunities" },
  { icon: ShieldCheck, text: "Reduce staffing and operational costs" },
  { icon: Bot, text: "Operate 24/7 without downtime" },
];

export default function AIProductsSection() {
  return (
    <section id="ai-products" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-[40px]"
        >
          AI Voice Calls for Any Business
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-foreground/70 max-w-3xl mx-auto mb-14"
        >
          Automate calls, screen applicants and handle high volumes of enquiries 24/7 using AI voice technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-hover p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-left"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <Image src={callpilotLogo} alt="CallPilot" className="w-full h-full object-contain" unoptimized />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              CallPilot – AI Call Automation
            </h3>
            <ul className="space-y-[20px] mb-[20px]">
              {features.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/80 font-medium">{f.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 italic mb-[30px]">
              Built for any business managing high call volumes, repetitive enquiries or applicant screening.
            </p>
            <a
              href="https://callpilot.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-metallic block md:inline-block w-full md:w-auto text-base px-8 py-3.5 text-center"
            >
              AI Call Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
