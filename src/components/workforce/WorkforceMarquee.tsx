import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { workforceRoles } from "../../constants/workforceData";
import RoleCard from "./RoleCard";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

/**
 * WorkforceMarquee Component
 *
 * An interactive, draggable infinite slider for AI agent dossiers.
 * Automatically scrolls at a constant velocity but can be manipulated
 * by the user through dragging or hovering.
 */
const WorkforceMarquee: React.FC = () => {
  // Motion values for high-performance sub-pixel animation
  const baseX = useMotionValue(0);
  const isHovered = useRef(false);
  const isDragging = useRef(false);

  // Smooth spring physics for the scroll movement
  const x = useSpring(baseX, {
    damping: 50,
    stiffness: 400,
  });

  // Seamless wrapping logic (cycles between -25% and -50%)
  const wrappedX = useTransform(x, (v) => `${wrap(-25, -50, v)}%`);

  /**
   * AUTOMATION LOOP:
   * Moves the marquee continuously to the left unless the user
   * is specifically interacting with it.
   */
  useAnimationFrame((_, delta) => {
    if (!isHovered.current && !isDragging.current) {
      baseX.set(baseX.get() - 0.005 * (delta / 16));
    }
  });

  return (
    <div
      className="group/marquee relative mb-24 cursor-grab active:cursor-grabbing overflow-hidden"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      {/* Side Overlays: Gradient masks to fade cards at the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-(--background) via-(--background)/90 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-(--background) via-(--background)/90 to-transparent z-20" />

      {/* Helper Tooltip: Revealed on hover to suggest interactivity */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/marquee:opacity-100 transition-all duration-500 pointer-events-none z-30">
        <div className="px-5 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full backdrop-blur-md flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">
            Drag to Explore Workforce
          </span>
        </div>
      </div>

      <motion.div
        className="flex gap-8 px-6 sm:px-12"
        style={{ x: wrappedX, width: "fit-content" }}
        drag="x" // Enables manual swiping/dragging
        onDragStart={() => (isDragging.current = true)}
        onDragEnd={() => (isDragging.current = false)}
        onDrag={(_, info) => {
          // Manual drag pushes the base motion value for physical response
          baseX.set(baseX.get() + info.delta.x * 0.02);
        }}
      >
        {/* Quadrupled data to ensure infinite scroll coverage */}
        {[
          ...workforceRoles,
          ...workforceRoles,
          ...workforceRoles,
          ...workforceRoles,
        ].map((role, idx) => (
          <div
            key={`${role.id}-${idx}`}
            className="w-[85vw] md:w-[600px] shrink-0 select-none"
          >
            <RoleCard role={role} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkforceMarquee;
