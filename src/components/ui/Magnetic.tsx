import React, { useRef, useCallback, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  distance?: number;
}

/**
 * Magnetic Component
 *
 * Creates a "magnetic pull" effect where the child element moves toward the mouse
 * when within proximity. Used for high-priority CTA buttons to increase focus.
 */
const Magnetic: React.FC<MagneticProps> = ({ children, distance = 0.15 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Damping/Stiffness settings for a "weighted" feel
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();

      // Calculate the geometric center of the element
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Distance between mouse and center
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      // Trigger the "pull" only when within the target area (using bounding box)
      if (Math.abs(deltaX) < width && Math.abs(deltaY) < height) {
        x.set(deltaX * distance); // Pull toward mouse by a factor of 'distance'
        y.set(deltaY * distance);
      } else {
        x.set(0); // Snap back to center when outside range
        y.set(0);
      }
    },
    [distance, x, y],
  );

  useEffect(() => {
    // Use a window listener so the effect feels responsive even when
    // the mouse is slightly outside the div's initial boundary.
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }}>
      {children}
    </motion.div>
  );
};

export default Magnetic;
