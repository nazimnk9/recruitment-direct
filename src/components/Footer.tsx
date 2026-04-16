import { Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/na.png";

const policyLinks = [
  "Privacy Policy", "Terms", "Cookies", "GDPR", "Modern Slavery", "Health & Safety"
];

export default function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: "#050A14" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image src={logo} alt="Recruitment Direct" className="h-24 w-auto mb-4 shadow-none" unoptimized />
            <p className="text-[#9CA3AF] text-sm mb-4">
              Faster Hiring with AI. Verified by Recruitment Experts.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-[#F9FAFB] mb-3">Contact</h4>
            <div className="text-sm text-[#9CA3AF] leading-relaxed space-y-4">
              <div>
                <p>Recruitment Direct UK Ltd</p>
                <p>Herkimer House</p>
                <p>Mill Road Industrial Estate</p>
                <p>Linlithgow EH49 7SF</p>
              </div>
              <div>
                <p>01324 613198</p>
                <p>07590 882626</p>
                <p>sales@rd1.co.uk</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-[#F9FAFB] mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-[#9CA3AF]">
              <a href="#search-jobs" className="block hover:text-[#F9FAFB] transition-colors">Search Jobs</a>
              <a href="#sectors" className="block hover:text-[#F9FAFB] transition-colors">Sectors</a>
              <a href="#ai-products" className="block hover:text-[#F9FAFB] transition-colors">AI Products</a>
              <a href="#contact" className="block hover:text-[#F9FAFB] transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Policy Links */}
        <div className="border-t border-[#9CA3AF]/10 pt-6 flex flex-wrap justify-center gap-4 text-xs text-[#9CA3AF]/70">
          {policyLinks.map((link, i) => (
            <span key={link}>
              <a href="#" className="hover:text-[#F9FAFB] transition-colors">{link}</a>
              {i < policyLinks.length - 1 && <span className="ml-4">|</span>}
            </span>
          ))}
        </div>

        <p className="text-center text-xs text-[#9CA3AF]/50 mt-4">
          © {new Date().getFullYear()} Recruitment Direct UK Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
