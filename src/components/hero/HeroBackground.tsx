import React from "react";
import { motion } from "framer-motion";
import NeuralNetworkCanvas from "../ui/NeuralNetworkCanvas";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Neural Network Decoration (Canvas) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NeuralNetworkCanvas
          dotColor="#00c2ff"
          lineColor="#00c2ff"
          className="w-full h-full opacity-40 dark:opacity-20"
        />
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/3 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-link/2 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      {/* Background People - Sliding from sides */}
      <motion.div
        initial={{ y: 300, opacity: 0, x: -50 }}
        animate={{ y: 0, opacity: 0.7, x: 0 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 left-0 z-0 w-[25vw] max-w-[450px] pointer-events-none hidden lg:block"
      >
        <img
          src="https://client-of-vivek.vercel.app/assets/Guy.png"
          alt="Guy"
          className="w-full h-auto object-contain filter grayscale-[0.2]"
        />
      </motion.div>

      <motion.div
        initial={{ y: 300, opacity: 0, x: 50 }}
        animate={{ y: 0, opacity: 0.7, x: 0 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 right-0 z-0 w-[25vw] max-w-[450px] pointer-events-none hidden lg:block"
      >
        <img
          src="https://client-of-vivek.vercel.app/assets/Woman.png"
          alt="Woman"
          className="w-full h-auto object-contain filter grayscale-[0.2]"
        />
      </motion.div>
    </>
  );
};

export default HeroBackground;
