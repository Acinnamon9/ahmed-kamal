import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../animations";

const HeroRobotHead: React.FC = () => {
    return (
        <motion.div variants={itemVariants} className="mb-6 relative">
            <div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full" />
            <img
                src="/robot-head.png"
                alt="AI Robot"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain mx-auto relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] opacity-80"
            />
        </motion.div>
    );
};

export default HeroRobotHead;
