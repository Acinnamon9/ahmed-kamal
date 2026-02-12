import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { itemVariants } from "../../animations";
import { useBooking } from "../../context/BookingContext";

interface HeroCTAProps {
  onBookDemo?: () => void;
}

/**
 * HeroCTA Component
 *
 * Provides the primary interaction points for the landing page.
 * Includes a "dual-track" strategy:
 * 1. Direct Conversion (Book Live Demo)
 * 2. Educational (See how it works - jumps to interactive demo)
 */
const HeroCTA: React.FC<HeroCTAProps> = ({ onBookDemo }) => {
  // openBooking: function from global context to trigger the iframe modal
  const { openBooking } = useBooking();

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto"
    >
      {/* Primary Conversion Button: Triggers specialized lead capture flow */}
      <Button
        variant="glass-primary"
        size="xl"
        className="px-12"
        onClick={onBookDemo || openBooking}
      >
        Book Live Demo
      </Button>

      {/* Secondary Anchor Button: Redirects to the product walkthrough section */}
      {/* <Button as="a" href="#demo" variant="glass" size="xl" className="px-12">
        See how it works
      </Button> */}
    </motion.div>
  );
};

export default HeroCTA;
