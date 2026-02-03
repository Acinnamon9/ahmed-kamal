import React from "react";
import { Section, Container } from "./ui/Layout";
import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import AdaptationLayer from "./approach/AdaptationLayer";

/**
 * Approach Component
 *
 * Explains the "Philosophy" of AtomicX: adapting AI to fit existing
 * user workflows rather than forcing users to change.
 */
const Approach: React.FC = () => {
  return (
    <Section
      className="py-24 md:py-32 relative overflow-hidden bg-transparent"
    >
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Brand Narrative & Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <Badge
              variant="outline"
              className="mb-8 border-brand-primary/30 text-brand-primary uppercase tracking-[0.2em] bg-brand-primary/5"
            >
              Core Philosophy
            </Badge>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--foreground) tracking-tighter mb-8 leading-[1.1]">
              We Adapt AI to{" "}
              <span className="text-brand-primary">Your Business</span>.
              <br />
              <span className="opacity-40">Not the Other Way Around.</span>
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-(--muted-foreground) font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p className="text-(--foreground)">
                Most AI platforms ship rigid workflows and expect your team to
                adjust.
                <strong className="text-brand-primary"> AtomicX</strong> sits
                between the AI and your business — making sure the system bends,
                not you.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 justify-center lg:justify-start">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="glass-primary"
                  size="lg"
                  onClick={() =>
                    window.open("https://atomicx.ravan.ai/book", "_blank")
                  }
                  className="w-full md:w-auto px-6 md:px-8 py-4 font-black tracking-wider md:tracking-widest rounded-2xl text-[10px] md:text-xs whitespace-normal md:whitespace-nowrap"
                >
                  <span className="flex items-center gap-2">
                    START YOUR ADAPTATION
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </Button>
              </div>

              {/* 
                Micro-proof indicators:
                Quick bullet points underneath the main CTA to reduce friction 
                and provide immediate technical reassurance.
              */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-(--muted-foreground) justify-center lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
                  Live in 72 hours
                </span>
                <span className="opacity-30">·</span>
                <span>Works with any CRM</span>
                <span className="opacity-30">·</span>
                <span className="text-brand-primary font-medium">
                  Human-in-the-loop
                </span>
              </div>
            </div>
          </motion.div>

          {/* 
            Right Side: AdaptationLayer Visual Metaphor 
            A custom component that visually demonstrates the 'flexibility' concept.
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-full"
          >
            <AdaptationLayer />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Approach;
