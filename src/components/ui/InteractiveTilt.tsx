import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface InteractiveTiltProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/**
 * InteractiveTilt Component
 *
 * Provides a 3D parallax tilting effect to its children based on mouse position.
 * Essential for adding tactile depth to cards and sections.
 */
const InteractiveTilt: React.FC<InteractiveTiltProps> = ({
  children,
  className = "",
  strength = 10,
}) => {
  // Motion values to track normalized mouse coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // useSpring: ensures the tilt doesn't "snap" but moves with physical weight
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // Map the normalized position to rotational degrees
  const rotateX = useTransform(
    mouseY,
    [-0.5, 0.5],
    [`${strength}deg`, `-${strength}deg`],
  );
  const rotateY = useTransform(
    mouseX,
    [-0.5, 0.5],
    [`-${strength}deg`, `${strength}deg`],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    // Calculate percentage distance from center
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset to center when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // Required for 3D rotation of children
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InteractiveTilt;
