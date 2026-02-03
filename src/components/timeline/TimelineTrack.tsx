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
    <>
      {/* Main Horizontal Line (Background Track) */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-(--foreground)/10 -translate-y-1/2 rounded-full hidden md:block" />

      {/* 
        Progress Line (Animated Overlay):
        Expands horizontally as the user hovers or unlocks more steps.
        Uses 'origin-left' so the scale animation starts from the beginning.
      */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${progressPercent * 100}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-1/2 left-0 h-1 bg-brand-primary -translate-y-1/2 rounded-full origin-left hidden md:block shadow-[0_0_20px_var(--color-brand-primary)] z-0"
      />
    </>
  );
};

export default TimelineTrack;
