"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", role: "", sector: "", location: "", quantity: "", duration: "", requirement: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will be in touch shortly.");
    setForm({ name: "", company: "", phone: "", email: "", role: "", sector: "", location: "", quantity: "", duration: "", requirement: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-[10px] border-2 border-primary/20 focus:border-primary focus:outline-none font-body text-foreground bg-background transition-colors text-sm";

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left Column - Contact Info (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6 pt-2"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground">Get in Touch</h2>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground/70 leading-relaxed">
                  Recruitment Direct UK Limited<br />
                  Herkimer House Mill Road<br />
                  Industrial Estate Linlithgow<br />
                  EH49 7SF
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:01324613198" className="text-foreground/70 hover:text-primary transition-colors block">01324 613198</a>
                  <a href="tel:07590882626" className="text-foreground/70 hover:text-primary transition-colors block">07590 882626</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:sales@rd1.co.uk" className="text-foreground/70 hover:text-primary transition-colors">sales@rd1.co.uk</a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - AI Hire Now Form (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">AI Hire Now</h2>
            <p className="text-foreground/60 text-sm mb-6">
              Submit your requirements and receive screened, consultant-verified candidates quickly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className={inputClass} />
                <input type="text" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required className={inputClass} />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className={inputClass} />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className={inputClass} />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Role Required" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required className={inputClass} />
                <select value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })} required className={inputClass + (!form.sector ? " text-muted-foreground" : "")}>
                  <option value="" disabled>Sector</option>
                  <option>Construction</option>
                  <option>Logistics & Distribution</option>
                  <option>Engineering</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Industrial & Manufacturing</option>
                  <option>Commercial & Office Support</option>
                  <option>IT & Technology</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                <input type="text" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required className={inputClass} />
                <input type="text" placeholder="No. of Staff" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} className={inputClass} />
                <select value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className={inputClass + (!form.duration ? " text-muted-foreground" : "")}>
                  <option value="" disabled>Duration</option>
                  <option>1 Day</option>
                  <option>1 Week</option>
                  <option>1 Month</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>Permanent</option>
                </select>
              </div>
              <textarea
                placeholder="Additional Requirements"
                value={form.requirement}
                onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                rows={3}
                className={inputClass + " resize-none"}
              />
              <button type="submit" className="btn-metallic w-full py-4 text-base">
                Submit & Get Candidates
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
