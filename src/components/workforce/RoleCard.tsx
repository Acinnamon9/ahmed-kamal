import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/Card";
import InteractiveTilt from "../ui/InteractiveTilt";
import RoleCardPortrait from "./RoleCardPortrait";
import RoleCardInfo from "./RoleCardInfo";
import RoleCardMetrics from "./RoleCardMetrics";
import Modal from "../ui/Modal";

interface Metric {
  value: string;
  label: string;
}

interface Role {
  id: string;
  title: string;
  icon: React.ReactNode;
  replaces: string;
  replacesValue: string;
  features: string[];
  metrics?: Metric[];
  image?: string;
}

interface RoleCardProps {
  role: Role;
}

/**
 * RoleCard Component
 *
 * Redesigned into a high-end "AI Agent Dossier".
 * Each card represents a specialized AI agent with its own capabilities,
 * replacement targets, and projected efficiency metrics.
 *
 * Uses React.memo to prevent unnecessary re-renders during layout transitions
 * or marquee animations.
 */
const RoleCard: React.FC<RoleCardProps> = React.memo(({ role }) => {
  // isModalOpen: controls the expanded 'dossier' view of the AI agent
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <InteractiveTilt className="h-full">
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="w-full h-full text-left focus:outline-hidden group/card"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Card
            variant="white"
            className="group relative overflow-hidden bg-(--card-surface)/80 backdrop-blur-2xl border border-(--border) hover:border-brand-orange/40 transition-all duration-700 h-full p-px rounded-[24px]"
          >
            {/* Iridescent Outer Border Effect: Reveals on hover for a premium "tech" feel */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-orange/20 via-transparent to-brand-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="relative bg-(--card-elevated)/80 rounded-[23px] h-full flex flex-col overflow-hidden">
              {/* Header Image/Icon area */}
              <div className="relative h-32 md:h-40 shrink-0 w-full overflow-hidden">
                <RoleCardPortrait
                  image={role.image}
                  title={role.title}
                  icon={role.icon}
                />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover/card:bg-brand-orange/5 transition-colors duration-500" />
              </div>

              {/* Main content: Information and key metrics preview */}
              <CardContent className="flex-1 p-4 md:p-6 flex flex-col">
                <RoleCardInfo
                  title={role.title}
                  replaces={role.replaces}
                  features={role.features}
                />
                <div className="mt-auto">
                  <RoleCardMetrics metrics={role.metrics} />
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.button>
      </InteractiveTilt>

      {/* 
        The Dossier Modal:
        An expanded view that allows deeper inspection of the agent's 
        capabilities and technical specs.
      */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row h-full max-h-[90vh]"
        >
          {/* Left: Interactive Portrait Area with "Online" status indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full md:w-1/2 h-64 md:h-auto relative bg-black/20 overflow-hidden group/portrait"
          >
            {role.image ? (
              <motion.img
                src={role.image}
                alt={role.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-brand-orange/5">
                <div className="text-brand-orange opacity-20 transform scale-[5]">
                  {role.icon}
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-8 left-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-brand-success animate-pulse" />
                <span className="text-xs font-black tracking-widest text-brand-success uppercase">
                  Agent Online
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter uppercase whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {role.title}
              </h2>
            </motion.div>
          </motion.div>

          {/* Right: Technical Details & Capabilities Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-(--modal-elevated)/95 backdrop-blur-xl overflow-y-auto"
          >
            {/* Status Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mb-8"
            >
              <div className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-4">
                Workforce Deployment Status
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-(--muted-foreground) uppercase tracking-widest mb-1">
                  Replacement Target
                </div>
                <div className="text-xl font-bold text-(--foreground) uppercase tracking-tight">
                  {role.replaces}
                </div>
              </div>
            </motion.div>

            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mb-8"
            >
              <div className="text-[10px] font-black text-(--muted-foreground) uppercase tracking-[0.3em] mb-6">
                Expertise & Capabilities
              </div>
              <div className="grid grid-cols-1 gap-4">
                {role.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + i * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-start gap-4 p-3 rounded-lg bg-white/5 border border-white/5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shadow-[0_0_8px_rgba(var(--brand-orange-rgb),0.5)]" />
                    <p className="text-sm font-medium text-(--foreground)/90 leading-snug">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Performance Metrics Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.7 + role.features.length * 0.1,
              }}
              className="mt-auto"
            >
              <div className="text-[10px] font-black text-(--muted-foreground) uppercase tracking-[0.3em] mb-6">
                Efficiency Metrics
              </div>
              <RoleCardMetrics metrics={role.metrics} />
            </motion.div>
          </motion.div>
        </motion.div>
      </Modal>
    </>
  );
});

RoleCard.displayName = "RoleCard";

export default RoleCard;
