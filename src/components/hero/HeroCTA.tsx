import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { itemVariants } from "../../animations";
import { useBooking } from "../../context/BookingContext";

interface HeroCTAProps {
  onBookDemo?: () => void;
}

const HeroCTA: React.FC<HeroCTAProps> = ({ onBookDemo }) => {
  const { openBooking } = useBooking();

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row justify-center gap-6 mb-16 w-full sm:w-auto"
    >
      <Button
        variant="glass-primary"
        size="xl"
        className="px-12"
        onClick={onBookDemo || openBooking}
      >
        Book Live Demo
      </Button>
      <Button as="a" href="#demo" variant="glass" size="xl" className="px-12">
        See how it works
      </Button>
    </motion.div>
  );
};

export default HeroCTA;
