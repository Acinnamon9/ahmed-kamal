import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { integrationLogos } from "../../constants/integrationData";

const AdaptationLayer: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices((prev) => {
        const totalLogos = integrationLogos.length;
        const swapPair = Math.random() > 0.5 ? [0, 2] : [1, 3];

        const newIndices = [...prev];
        swapPair.forEach((slotIdx) => {
          let nextIdx = (newIndices[slotIdx] + 4) % totalLogos;
          let attempts = 0;
          while (newIndices.includes(nextIdx) && attempts < totalLogos) {
            nextIdx = (nextIdx + 1) % totalLogos;
            attempts++;
          }
          newIndices[slotIdx] = nextIdx;
        });

        return newIndices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible">
      {/* CLUSTER 1: FLOW */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute bottom-0 left-1/2 w-0.5 bg-linear-to-t from-transparent via-brand-primary/20 to-brand-primary/40"
              style={{
                height: "40%",
                left: `${40 + i * 4}%`,
                filter: "blur(1px)",
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                height: ["30%", "45%", "35%"],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* LAYER 2: ATOMICX */}
      <motion.div
        className="absolute z-10 w-[480px] h-[480px] rounded-full border border-(--border)/50 bg-brand-depth/40 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        animate={{
          boxShadow: [
            "0 0 20px -5px rgba(var(--brand-primary-rgb), 0.1)",
            "0 0 40px -10px rgba(var(--brand-primary-rgb), 0.2)",
            "0 0 20px -5px rgba(var(--brand-primary-rgb), 0.1)",
          ],
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-brand-primary/10 opacity-50"
          animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute bottom-6 flex items-center gap-2 opacity-50">
          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] font-medium text-brand-primary uppercase">
            AtomicX Adaptation Layer
          </span>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full">
          <motion.div
            className="absolute bottom-[-10px] left-1/4 w-2 h-2 bg-rose-500/50 rounded-full blur-[2px]"
            animate={{ y: -60, scale: 0, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-[-10px] right-1/4 w-3 h-3 bg-amber-500/50 rounded-full blur-[1px]"
            animate={{ y: -80, scale: 0, opacity: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
          />
        </div>
      </motion.div>

      {/* INTEGRATION ORBIT - Circular motion around the center */}
      <motion.div
        className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(6)].map((_, slotIdx) => {
          const logoIdx = activeIndices[slotIdx % activeIndices.length];
          const logo = integrationLogos[logoIdx % integrationLogos.length];

          // Calculate circular positions statically within the rotating parent
          const radius = 240;
          const angle = slotIdx * (360 / 6);
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={`slot-${slotIdx}`}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* Dynamic connection line pointing inwards to the center */}
              <div
                className="absolute left-1/2 top-1/2 w-px origin-top transition-all duration-1000"
                style={{
                  height: radius - 60,
                  background:
                    "linear-gradient(to bottom, rgba(6, 182, 212, 0.6), transparent)",
                  transform: `rotate(${angle + 90}deg)`,
                }}
              />

              {/* Counter-rotating Logo Card to stay upright */}
              <motion.div
                className="relative pointer-events-auto cursor-pointer"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={logoIdx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.2, zIndex: 100 }}
                    className="relative w-14 h-14 rounded-xl bg-(--card) border border-(--border) shadow-xl flex items-center justify-center p-3 group hover:border-brand-primary transition-all duration-300 overflow-hidden"
                    style={{
                      boxShadow: `0 0 20px -5px ${logo.color}33`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                      style={{ backgroundColor: logo.color }}
                    />
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className={`w-full h-full object-contain relative z-10 transition-all ${logo.name === "Mailchimp" ? "dark:invert" : ""
                        }`}
                    />
                    <div
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-(--card) shadow-lg z-20"
                      style={{ backgroundColor: logo.color }}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-wider text-(--muted-foreground) uppercase whitespace-nowrap opacity-60">
                  {logo.name}
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* LAYER 3: YOUR BUSINESS - The Central Nucleus */}
      <div className="relative z-50 flex items-center justify-center">
        <motion.div
          className="relative z-30 w-56 h-56 bg-brand-depth border border-(--border) rounded-full shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col items-center justify-center p-8 gap-3 text-center overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          animate={{
            boxShadow: [
              "0 0 30px rgba(6,182,212,0.1)",
              "0 0 60px rgba(6,182,212,0.2)",
              "0 0 30px rgba(6,182,212,0.1)",
            ],
          }}
        >
          {/* Internal rotating glass shine */}
          <motion.div
            className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-white/5"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
            <motion.div
              className="w-px h-8 bg-linear-to-t from-brand-primary/50 to-brand-primary/0"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-px h-8 bg-linear-to-t from-brand-primary/50 to-brand-primary/0"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>

          <h3 className="text-xl font-bold text-(--foreground) tracking-tight">
            YOUR BUSINESS
          </h3>

          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-medium text-(--muted-foreground) uppercase tracking-wider">
              Uninterrupted
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdaptationLayer;
