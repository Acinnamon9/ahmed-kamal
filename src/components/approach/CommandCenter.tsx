import React from "react";
import { motion } from "framer-motion";
import DashboardPanel from "./DashboardPanel";

const CommandCenter: React.FC = () => {
  return (
    <div className="relative aspect-square rounded-[40px] border border-(--border) bg-(--card)/40 backdrop-blur-xl overflow-hidden flex items-center justify-center p-12 shadow-2xl">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />

      <div className="absolute inset-0 bg-linear-to-br from-brand-primary/10 via-transparent to-brand-depth/20" />

      {/* Radar Sweep */}
      <motion.div
        className="absolute inset-0 z-0 origin-center opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, var(--brand-primary) 20deg, transparent 30deg)",
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle,var(--brand-primary)_1px,transparent_1px)] bg-size-[30px_30px]" />

      {/* Central Hub - Command Center Node */}
      <motion.div
        className="relative z-10 w-36 h-36 rounded-3xl bg-(--card) border-2 border-brand-primary/40 flex flex-col items-center justify-center p-4 text-center shadow-[0_0_50px_rgba(var(--brand-primary-rgb),0.3)] overflow-hidden"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Hub Scan Line */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-brand-primary/50 z-20"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
          <span className="text-[8px] font-bold text-brand-success tracking-tighter uppercase">
            Operational
          </span>
        </div>
        <div className="text-lg font-black text-(--foreground) leading-none uppercase tracking-tighter">
          Your
          <br />
          Business
        </div>
        <div className="mt-2 text-[7px] font-mono text-brand-primary/60 tracking-widest uppercase">
          ID: ATX-0922
        </div>

        {/* Orbiting Dashboard Indicators */}
        <div className="absolute inset-0 -m-12 border border-brand-primary/10 rounded-full" />
        <div className="absolute inset-0 -m-24 border border-brand-primary/5 rounded-full" />
      </motion.div>

      {/* Satellite Dashboard Panels */}
      {/* Top: Your Customers */}
      <DashboardPanel
        title="Your Customers"
        status="LIVE FEED"
        className="top-10 left-1/2 -translate-x-1/2"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex gap-0.5 h-1.5 items-end">
          {[40, 70, 50, 90, 60, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-brand-success/40"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </DashboardPanel>

      {/* Right: Your Sales */}
      <DashboardPanel
        title="Your Sales"
        status="ACTIVE"
        statusColor="brand-primary"
        statusText="88% SYNC"
        className="right-10 top-1/2 -translate-y-1/2"
        animate={{ x: [5, -5, 5] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="w-full bg-(--muted) h-1 rounded-full overflow-hidden">
          <motion.div
            className="bg-brand-primary h-full"
            animate={{ width: ["0%", "88%"] }}
            transition={{ duration: 2, delay: 1 }}
          />
        </div>
      </DashboardPanel>

      {/* Left: Your CRM */}
      <DashboardPanel
        title="Your CRM"
        status="CONNECTED"
        statusColor="brand-link"
        className="left-10 top-1/2 -translate-y-1/2"
        animate={{ x: [-5, 5, -5] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="space-y-0.5">
          <div className="w-full h-px bg-brand-link/30" />
          <div className="w-2/3 h-px bg-brand-link/30" />
          <div className="w-full h-px bg-brand-link/30" />
        </div>
      </DashboardPanel>

      {/* Bottom: Human Layer */}
      <DashboardPanel
        title="Human Layer"
        status="MONITORED"
        statusColor="white/80"
        statusText="STANDBY"
        className="bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [5, -5, 5] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <div className="flex justify-center items-center gap-1">
          <div className="w-full h-1 bg-(--muted) relative rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-(--foreground)/10"
              animate={{ left: ["-100%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>
      </DashboardPanel>
    </div>
  );
};

export default CommandCenter;
