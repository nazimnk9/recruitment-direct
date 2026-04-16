"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import { Search } from "lucide-react";

const cities = [
  "Glasgow", "Edinburgh", "Falkirk", "Aberdeen", "Dundee", "Stirling", "Perth",
  "London", "Manchester", "Birmingham", "Leeds", "Liverpool", "Newcastle",
  "Sheffield", "Nottingham", "Bristol", "Leicester", "Coventry", "Derby",
  "Cardiff", "Swansea", "Newport", "Belfast", "Derry", "Dublin", "Cork"
].map(c => ({ value: c.toLowerCase(), label: c }));

export default function SearchJobsSection() {
  const [keyword, setKeyword] = useState("");
  const [selectedCities, setSelectedCities] = useState<any[]>([]);

  return (
    <section id="search-jobs" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-2"
        >
          Job Search
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground mb-10"
        >
          Search from our live jobs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col md:flex-row gap-3 items-stretch"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
            <input
              type="text"
              placeholder="Job title, keyword..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-[10px] border-2 border-primary/20 focus:border-primary focus:outline-none font-body text-foreground bg-background transition-colors"
            />
          </div>
          <div className="flex-1">
            <Select
              isMulti
              options={cities}
              value={selectedCities}
              onChange={(val) => setSelectedCities(val as any[])}
              placeholder="Select cities..."
              styles={{
                control: (base, state) => ({
                  ...base,
                  borderRadius: "10px",
                  border: state.isFocused ? "2px solid hsl(217, 90%, 46%)" : "2px solid hsla(217, 90%, 46%, 0.2)",
                  boxShadow: "none",
                  padding: "4px 0",
                  minHeight: "52px",
                  backgroundColor: "hsl(0, 0%, 100%)",
                  "&:hover": { borderColor: "hsl(217, 90%, 46%)" },
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isSelected ? "hsl(217, 90%, 46%)" : state.isFocused ? "hsla(217, 90%, 46%, 0.08)" : "white",
                  color: state.isSelected ? "white" : "hsl(222, 47%, 11%)",
                }),
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: "hsla(217, 90%, 46%, 0.1)",
                  borderRadius: "6px",
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  color: "hsl(217, 90%, 46%)",
                  fontWeight: 500,
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: "hsl(217, 90%, 46%)",
                  "&:hover": { backgroundColor: "hsla(217, 90%, 46%, 0.2)", color: "hsl(217, 90%, 40%)" },
                }),
              }}
            />
          </div>
          <button className="btn-metallic px-8 py-3.5 flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            Search
          </button>
        </motion.div>
      </div>
    </section>
  );
}
