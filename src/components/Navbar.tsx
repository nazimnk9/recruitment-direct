"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Linkedin, Facebook, Menu, X, Zap, Users, Briefcase, UserCheck, Search, ShieldCheck, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import callpilotLogo from "@/assets/callpilot_logo.png";

const aiProducts = [
  {
    title: "CallPilot",
    description: "AI-powered phone calls that screen candidates and handle enquiries 24/7",
    icon: callpilotLogo,
    link: "https://callpilot.pro",
    isImage: true,
  },
  {
    title: "AI Hire Now",
    description: "Instant AI-driven hiring pipeline for rapid staff deployment",
    icon: "⚡",
    link: "/ai-hire-now",
    isImage: false,
  },
  {
    title: "Verify Suppliers",
    description: "AI-powered supplier verification and compliance checking",
    icon: "🔍",
    link: "#contact",
    isImage: false,
  },
];

const clientSubmenu = [
  { title: "AI Hire Now", link: "/ai-hire-now", icon: <Zap className="w-5 h-5 text-primary" /> },
  { title: "Temporary Staffing", link: "#search-jobs", icon: <Users className="w-5 h-5 text-primary" /> },
  { title: "Contract Recruitment", link: "#contact", icon: <Briefcase className="w-5 h-5 text-primary" /> },
  { title: "Permanent Recruitment", link: "#contact", icon: <UserCheck className="w-5 h-5 text-primary" /> },
  { title: "Sectors", link: "#sectors", icon: <Search className="w-5 h-5 text-primary" /> },
  { title: "AI Recruitment", link: "#ai-products", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
  { title: "Why Choose Us", link: "#about", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
];

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Clients", href: "#clients", hasDropdown: true, dropdownItems: clientSubmenu, columns: 2 },
  { label: "Job Search", href: "#job-search" },
  { label: "Sectors", href: "#sectors" },
  { label: "AI Recruitment", href: "#ai-recruitment", hasDropdown: true, dropdownItems: aiProducts, columns: 1 },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="Recruitment Direct" className="h-24 w-auto" unoptimized />
          </Link>

          {/* Center Menu - Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex items-center gap-1">
              {menuItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} className="relative" ref={item.label === activeDropdown ? dropdownRef : null}>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`absolute top-full ${item.columns === 2 ? "left-1/2 -translate-x-1/2" : "left-0"} mt-2 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden p-3 min-w-[280px] ${item.columns === 2 ? "w-[600px]" : "w-[320px]"}`}
                        >
                          <div className={`grid ${item.columns === 2 ? "grid-cols-2 gap-x-6" : "grid-cols-1"} gap-y-1`}>
                            {item.dropdownItems?.map((subItem: any) => (
                              <Link
                                key={subItem.title}
                                href={subItem.link}
                                target={subItem.link?.startsWith("http") ? "_blank" : undefined}
                                rel={subItem.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F5F7FB] transition-all duration-200 group"
                              >
                                <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-colors">
                                  {subItem.isImage ? (
                                    <Image src={subItem.icon} alt={subItem.title} className="w-5 h-5 object-contain" unoptimized />
                                  ) : (
                                    <div className="text-primary">{subItem.icon}</div>
                                  )}
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[14px] font-semibold text-[#111827] leading-tight group-hover:text-primary transition-colors">
                                    {subItem.title}
                                  </span>
                                  {subItem.description && (
                                    <span className="text-[13px] text-[#6B7280] mt-0.5 leading-tight">
                                      {subItem.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
            {/* <div className="h-6 w-px bg-primary/10 mx-2" /> */}
            <div className="flex items-center gap-0.5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:01324613198" className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              <span>01324 613198</span>
            </a>
            <a href="#contact" className="btn-metallic text-sm px-6 py-3">AI Hire Now</a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-primary/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === item.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-4 space-y-1"
                            >
                              {item.dropdownItems?.map((subItem: any) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.link}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    {subItem.isImage ? (
                                      <Image src={subItem.icon} alt={subItem.title} className="w-6 h-6 object-contain" unoptimized />
                                    ) : (
                                      <div className="text-primary">{subItem.icon}</div>
                                    )}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="font-semibold">{subItem.title}</span>
                                    {subItem.description && (
                                      <span className="text-xs text-foreground/50 line-clamp-1">{subItem.description}</span>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-foreground font-medium rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Socials */}
              <div className="flex items-center gap-4 px-4 py-2 border-t border-primary/5 pt-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 transition-opacity hover:opacity-80 rounded-full bg-primary/5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 transition-opacity hover:opacity-80 rounded-full bg-primary/5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>

              {/* Mobile Actions */}
              <div className="grid grid-cols-1 gap-3 px-4 pt-2">
                <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-metallic text-sm py-4 text-center">AI Hire Now</a>
              </div>
              <div className="px-4 pb-2 text-center text-xs text-foreground/60 font-medium">
                Prefer to speak? Call us on <a href="tel:01324613298" className="hover:text-primary transition-colors">01324 613198</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

