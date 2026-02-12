import React from "react";
import { motion } from "framer-motion";

interface RoleCardPortraitProps {
  image?: string;
  title: string;
  icon: React.ReactNode;
}

const RoleCardPortrait: React.FC<RoleCardPortraitProps> = ({
  image,
  title,
  icon,
}) => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-(--card)/80 border-b border-(--border)">
      {image ? (
        <div className="h-full aspect-square md:aspect-auto">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 delay-200 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      ) : (
        <div className="h-full flex items-center justify-center bg-brand-orange/5">
          <div className="text-brand-orange opacity-20 transform scale-[3]">
            {icon}
          </div>
        </div>
      )}

      {/* HUD Corner Accents on Portrait */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-brand-orange/30 group-hover:border-brand-orange/60 transition-colors"></div>
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-brand-orange/30 group-hover:border-brand-orange/60 transition-colors"></div>

      {/* Role Icon Badge */}
      <div className="absolute top-6 right-6 w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center text-white shadow-xl shadow-brand-orange/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
    </div>
  );
};

export default RoleCardPortrait;
