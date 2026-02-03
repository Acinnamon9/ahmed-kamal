import React, { useState } from "react";
import { Section, Container } from "./ui/Layout";
import { motion, AnimatePresence } from "framer-motion";
import FAQItem from "./faq/FAQItem";
import FAQHeader from "./faq/FAQHeader";
import { faqCategories } from "../constants/faqData";
import { cn } from "../lib/utils";

/**
 * FAQ Component
 *
 * Provides categorized information using an "Operational Intelligence" interface.
 * Users can switch between pillars (categories) like Architecture, Logistics, etc.,
 * with smooth transitions between question sets.
 */
const FAQ: React.FC = () => {
  // activeTab: tracks the currently selected FAQ category ID
  const [activeTab, setActiveTab] = useState(faqCategories[0].id);

  // activeCategory: derived data for the currently selected category object
  const activeCategory =
    faqCategories.find((cat) => cat.id === activeTab) || faqCategories[0];

  return (
    <Section id="faq" className="font-jakarta py-24 md:py-32 bg-transparent">
      <Container>
        {/* Main Glassmorphic FAQ Container */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden py-10 px-6 md:px-12">
          {/* Internal gradient overlay for depth */}
          <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 via-transparent to-brand-primary/5 pointer-events-none" />

          <FAQHeader />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16 max-w-6xl mx-auto relative z-10">
            {/* 
              Operational Pillars Sidebar:
              Allows users to navigate through different technical themes.
            */}
            <div className="lg:w-1/3 flex flex-col gap-2">
              <div className="mb-6 px-4">
                <span className="text-[10px] font-black text-brand-link uppercase tracking-[0.3em] opacity-80">
                  Operational Pillars
                </span>
              </div>

              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar gap-2 pb-4 lg:pb-0">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={cn(
                      "relative text-left px-5 py-4 rounded-xl transition-all duration-500 whitespace-nowrap lg:whitespace-normal group",
                      activeTab === category.id
                        ? "bg-brand-link/10 border border-brand-link/20"
                        : "hover:bg-brand-link/5 border border-transparent hover:border-brand-link/10",
                    )}
                  >
                    <div className="flex flex-col gap-1">
                      <span
                        className={cn(
                          "text-[12px] font-bold tracking-tighter transition-colors duration-300",
                          activeTab === category.id
                            ? "text-brand-link"
                            : "text-(--muted-foreground)",
                        )}
                      >
                        {category.category}
                      </span>
                      <span
                        className={cn(
                          "text-[9px] font-black uppercase tracking-widest transition-opacity duration-300",
                          activeTab === category.id
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-40",
                        )}
                      >
                        {category.items.length} Intelligence Points
                      </span>
                    </div>

                    {/* Active vertical tab indicator */}
                    {activeTab === category.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-brand-link hidden lg:block rounded-r-full"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 
              Intelligence Pane:
              Displays the FAQ list for the active category.
              AnimatePresence ensures smooth 'entry/exit' when switching tabs.
            */}
            <div className="lg:w-2/3 flex flex-col min-h-[500px]">
              <div className="mb-6 px-4 flex items-center justify-between border-b border-(--border)/30 pb-4">
                <h3 className="text-xl font-black text-(--foreground) uppercase tracking-tighter">
                  {activeCategory.category.split(" / ")[1]}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-link animate-pulse" />
                  <span className="text-[10px] font-black uppercase text-brand-link tracking-widest">
                    Live Sync
                  </span>
                </div>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="flex flex-col">
                      {activeCategory.items.map((item, idx) => (
                        <FAQItem key={idx} question={item.q}>
                          {item.a}
                        </FAQItem>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
