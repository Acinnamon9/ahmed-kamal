import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic, Loader2, Sparkles, Video, Smartphone } from "lucide-react";
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
            className="relative z-[10000] w-full max-w-6xl h-[90vh] max-h-[780px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row"
          >
            {/* Close Button - Moved Inside */}
            <button
              onClick={closeBooking}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 z-[10001] border border-white/10 group backdrop-blur-md"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Left Side: Booking Section */}
            <div className="relative flex-1 h-full min-h-[400px] md:min-h-0 bg-white">
              {/* Scan Lines Overlay (subtle texture) */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
              </div>

              {/* Loading State - scoped to calendar */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 backdrop-blur-sm"
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
                      Initializing secure booking...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* iFrame */}
              <iframe
                src={BOOKING_URL}
                onLoad={handleIframeLoad}
                className="w-full h-full border-0"
                title="Book a Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            {/* Right Side: Info Section */}
            <div className="w-full md:w-[380px] lg:w-[420px] p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 bg-black/40 backdrop-blur-md relative overflow-hidden">
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="w-12 h-12 rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/10"
                >
                  <Mic className="w-6 h-6 text-brand-primary" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                    Deploy Your <span className="text-brand-primary">AI Persona</span>
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    Master your outreach with AI agents that handle phone calls with human-level nuance and social media presenters that maintain your presence 24/7.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  {[
                    { icon: Smartphone, text: "Phone Agents (Sub-100ms Latency)" },
                    { icon: Video, text: "AI Social Media Presenters" },
                    { icon: Sparkles, text: "Digital Identity & Voice Cloning" },
                    { icon: Mic, text: "Cross-Platform Brand Integration" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3.5 group"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-brand-primary/50 transition-colors">
                        <item.icon className="w-3.5 h-3.5 text-brand-primary" />
                      </div>
                      <span className="text-white/80 text-sm font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-10 pt-8 border-t border-white/5"
                >
                  <p className="text-white/40 text-xs italic leading-relaxed">
                    "The transition to AI voice agents was seamless. Our digital identity has never been stronger."
                  </p>
                  <p className="text-white/30 text-[10px] mt-2 font-medium uppercase tracking-[0.2em]">
                    — Strategic Identity Partners
                  </p>
                </motion.div>
              </div>

              {/* Subtle background glow for the text area */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/5 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-0" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default BookingModal;
