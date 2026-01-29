import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { integrationLogos } from "../../constants/integrationData";

// Fixed positions for the 4 visible integration slots
const SLOT_POSITIONS = [
  { x: 0, y: -200, label: "top" },
  { x: 220, y: 0, label: "right" },
  { x: 0, y: 200, label: "bottom" },
  { x: -220, y: 0, label: "left" },
];

const AdaptationLayer: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3]);

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

        <motion.div
          className="absolute bottom-10 left-10 text-[10px] uppercase tracking-widest text-(--muted-foreground) opacity-40 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
        >
          Cluster: Flow
        </motion.div>
      </div>

      {/* CLUSTER 2: CONTEXT */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`ctx-${i}`}
            className="absolute bg-brand-secondary/10 border border-brand-secondary/20 rounded-sm"
            style={{
              width: Math.random() * 40 + 20,
              height: Math.random() * 10 + 4,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[10px] uppercase tracking-widest text-(--muted-foreground) opacity-30 font-medium vertical-rl rotate-180">
          Context Field
        </div>
      </div>

      {/* LAYER 2: ATOMICX */}
      <motion.div
        className="absolute z-10 w-[480px] h-[380px] rounded-[80px] border border-white/5 bg-brand-depth/40 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center"
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
          className="absolute inset-0 rounded-[80px] border-2 border-brand-primary/10 opacity-50"
          animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute bottom-6 flex items-center gap-2 opacity-50">
          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] font-medium text-brand-primary uppercase">
            AtomicX Adaptation Layer
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden pointer-events-none rounded-b-[80px]">
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

      {/* INTEGRATION SLOTS - 4 Fixed Positions with Swapping Animation */}
      <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center">
        {SLOT_POSITIONS.map((position, slotIdx) => {
          const logoIdx = activeIndices[slotIdx];
          const logo = integrationLogos[logoIdx];
          const tilt =
            position.label === "left" ? -6 : position.label === "right" ? 6 : 0;

          return (
            <div
              key={`slot-${slotIdx}`}
              className="absolute"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              {/* Static connection line */}
              <div
                className="absolute left-1/2 top-1/2 w-px origin-center"
                style={{
                  height: Math.sqrt(position.x ** 2 + position.y ** 2) - 40,
                  background:
                    "linear-gradient(to bottom, rgba(6, 182, 212, 0.3), rgba(6, 182, 212, 0.05))",
                  transform: `translate(-50%, -50%) rotate(${Math.atan2(-position.y, -position.x) * (180 / Math.PI) + 90}deg)`,
                }}
              />

              {/* Animated Logo Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={logoIdx}
                  className="relative pointer-events-auto cursor-pointer"
                  initial={{ opacity: 0, scale: 0.5, rotate: tilt * 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: tilt }}
                  exit={{ opacity: 0, scale: 0.5, rotate: -tilt * 2 }}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  {/* Card */}
                  <div
                    className="relative w-14 h-14 rounded-xl bg-(--card) border border-white/10 shadow-xl flex items-center justify-center p-3 group hover:border-brand-primary/50 transition-all duration-300 overflow-hidden"
                    style={{
                      boxShadow: `0 0 20px -5px ${logo.color}33`,
                    }}
                  >
                    {/* Brand color accent background */}
                    <div
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                      style={{ backgroundColor: logo.color }}
                    />

                    <div className="absolute inset-0 rounded-xl bg-linear-to-br from-white/5 to-transparent" />

                    <img
                      src={logo.image}
                      alt={logo.name}
                      className={`w-full h-full object-contain relative z-10 transition-all ${
                        logo.name === "Mailchimp" ? "dark:invert" : ""
                      }`}
                    />

                    {/* Status indicator */}
                    <div
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-(--card) shadow-lg z-20"
                      style={{ backgroundColor: logo.color }}
                    />
                  </div>

                  {/* Label */}
                  <div
                    className="absolute -bottom-5 left-1/2 text-[9px] font-bold tracking-wider text-(--muted-foreground) uppercase whitespace-nowrap opacity-60"
                    style={{
                      transform: `translateX(-50%) rotate(${-tilt}deg)`,
                    }}
                  >
                    {logo.name}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* LAYER 3: YOUR BUSINESS */}
      <div className="relative z-50 flex items-center justify-center">
        <motion.div
          className="relative z-30 w-64 h-32 bg-(--card) rounded-2xl border border-white/10 shadow-xl flex flex-col items-center justify-center p-6 gap-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
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

      {/* CLUSTER 3: SYSTEMS */}
      <motion.div
        className="absolute top-4 left-4 z-10 flex items-center gap-2 p-2 rounded-lg bg-black/20 border border-white/5 backdrop-blur-sm"
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-2 h-2 bg-brand-link rounded-full" />
        <span className="text-[10px] text-white/60 font-mono">CRM: SYNCED</span>
      </motion.div>

      <motion.div
        className="absolute top-10 right-4 z-10 flex items-center gap-2 p-2 rounded-lg bg-black/20 border border-white/5 backdrop-blur-sm"
        animate={{ y: [2, -2, 2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-2 h-2 bg-purple-400 rounded-full" />
        <span className="text-[10px] text-white/60 font-mono">
          CALENDAR: ACTIVE
        </span>
      </motion.div>
    </div>
  );
};

export default AdaptationLayer;
