import React from "react";
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
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/3 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-link/2 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    </>
  );
};

export default HeroBackground;
