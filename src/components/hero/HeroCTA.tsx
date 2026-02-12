import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../animations";
import { useBooking } from "../../context/BookingContext";

interface HeroCTAProps {
  onBookDemo?: () => void;
}

/**
 * HeroCTA Component
 *
 * Provides the primary interaction points for the landing page.
 * Features a rotating light border effect on the primary CTA for maximum visual impact.
 */
const HeroCTA: React.FC<HeroCTAProps> = ({ onBookDemo }) => {
  const { openBooking } = useBooking();

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto"
    >
      {/* 
        Rotating Light Border CTA:
        - Outer wrapper: rounded container with overflow-hidden and a spinning conic-gradient child.
        - The gradient creates a "light beam" that orbits the button's perimeter.
        - Inner button: sits on top with a slight inset to reveal the gradient border.
      */}
      <button
        onClick={onBookDemo || openBooking}
        className="group relative inline-flex items-center justify-center rounded-[20px] p-[2px] cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-2xl shadow-brand-primary/20 animate-[pulse-scale_3s_ease-in-out_infinite]"
      >
        {/* Spinning conic gradient — refined for smoothness */}
        <span
          className="absolute -inset-full animate-[spin_4s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 90deg, transparent 0%, transparent 50%, var(--color-brand-primary) 50%, transparent 55%, transparent 100%)",
          }}
        />

        {/* Inner button face — solid background to prevent see-through */}
        <span className="relative z-10 inline-flex items-center justify-center gap-2 px-12 py-3.5 text-lg font-black rounded-[18px] bg-brand-primary text-white border border-white/10 transition-all duration-300 group-hover:bg-brand-primary/90">
          Book Live Demo
        </span>
      </button>
    </motion.div>
  );
};

export default HeroCTA;
