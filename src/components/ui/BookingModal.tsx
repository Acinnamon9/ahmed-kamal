import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Loader2 } from "lucide-react";
import { useBooking } from "../../context/BookingContext";

const BOOKING_URL = "https://link.quickadpro.com/widget/bookings/atomicx";

const BookingModal: React.FC = () => {
  const { isOpen, closeBooking } = useBooking();
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Reset loading state when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* Decorative Glows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/30 rounded-full blur-[150px] pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-orange/30 rounded-full blur-[120px] pointer-events-none"
          />

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ delay: 0.1 }}
            onClick={closeBooking}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 z-[10000] group border border-white/10"
          >
            <X
              size={24}
              className="group-hover:rotate-90 transition-transform duration-300"
            />
          </motion.button>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-[10000] w-full max-w-4xl h-[85vh] max-h-[750px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-4 left-6 flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-tight">
                  Book Your Demo
                </h3>
                <p className="text-white/50 text-xs font-medium">
                  Choose a time that works for you
                </p>
              </div>
            </div>

            {/* Scan Lines Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5 z-30">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
            </div>

            {/* Loading State */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-20"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="mb-4"
                  >
                    <Loader2 className="w-10 h-10 text-brand-primary" />
                  </motion.div>
                  <p className="text-white/60 text-sm font-medium">
                    Loading calendar...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* iFrame */}
            <iframe
              src={BOOKING_URL}
              onLoad={handleIframeLoad}
              className="w-full h-full border-0 pt-14"
              title="Book a Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default BookingModal;
