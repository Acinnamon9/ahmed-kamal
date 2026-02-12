import React from "react";
import { motion } from "framer-motion";

interface TimelineTrackProps {
  progressPercent: number;
}

/**
 * TimelineTrack
 * Renders the central axes and progress overlay.
 */
const TimelineTrack: React.FC<TimelineTrackProps> = ({ progressPercent }) => {
  return (
    <div className="relative w-full h-1">
      {/* Main Horizontal Line (Background Track) */}
      <div className="absolute top-0 left-[10%] w-[80%] h-full bg-(--foreground)/15 rounded-full hidden md:block" />

      {/* 
        Progress Line (Animated Overlay):
        Starts at the center of the first dot (10%) and covers 80% of the total width.
      */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${progressPercent * 80}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-0 left-[10%] h-full bg-brand-primary rounded-full origin-left hidden md:block shadow-[0_0_20px_var(--color-brand-primary)] z-0"
      />
    </div>
  );
};

export default TimelineTrack;
