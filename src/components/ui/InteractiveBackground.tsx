import React, { useEffect } from "react";
import {
  useMotionValue,
  useSpring,
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { throttle } from "../../lib/utils";

/**
 * InteractiveBackground Component
 *
 * Provides a highly dynamic, multi-layered background with mouse-trailing
 * effects and scroll-linked parallax orbs.
 *
 * Performance Optimizations:
 * - Uses 'useReducedMotion' to disable heavy animations on supporting devices.
 * - Throttles mouse movement updates to ~60fps to reduce Main Thread load.
 */
const InteractiveBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Motion values to track the current mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useScroll: tracks page scroll position for parallax effects
  const { scrollYProgress } = useScroll();

  /**
   * Static Depth Orbs (Parallax):
   * These orbs move vertically at different speeds relative to the user's scroll.
   * orb1Y: moves upwards as you scroll down.
   * orb2Y: moves downwards as you scroll down.
   */
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  /**
   * Multi-Layered Mouse Trailing:
   * By using different 'stiffness' and 'damping' settings for each layer,
   * we create a "liquid" trail effect where various colors follow the cursor
   * at slightly different speeds/delays.
   */
  const springConfig = { stiffness: 40, damping: 20 }; // Shared config for efficiency
  const primaryX = useSpring(mouseX, springConfig);
  const primaryY = useSpring(mouseY, springConfig);

  const secondaryX = useSpring(mouseX, { stiffness: 25, damping: 25 });
  const secondaryY = useSpring(mouseY, { stiffness: 25, damping: 25 });

  const tertiaryX = useSpring(mouseX, { stiffness: 15, damping: 30 });
  const tertiaryY = useSpring(mouseY, { stiffness: 15, damping: 30 });

  const quaternaryX = useSpring(mouseX, { stiffness: 20, damping: 30 });
  const quaternaryY = useSpring(mouseY, { stiffness: 20, damping: 30 });

  // Update mouse position on global move event (Throttled)
  useEffect(() => {
    // Throttle to ~60fps (16ms) to avoid overloading the JS thread
    const handleMouseMove = throttle((e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }, 16);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Fallback for Reduced Motion: A subtle, static gradient mesh
  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-linear-to-b from-(--background) to-transparent">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-primary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-brand-success/5 blur-[120px] rounded-full" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 
        Layer 1: Primary Cyan Signal
        The fastest following layer, provides immediate feedback.
      */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-25 dark:opacity-20 blur-[120px]"
        style={{
          x: primaryX,
          y: primaryY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, var(--color-brand-primary) 0%, transparent 70%)",
        }}
      />

      {/* Layer 2: Deep Cerulean (Medium Delay) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-[0.15] blur-[100px]"
        style={{
          x: secondaryX,
          y: secondaryY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, oklch(62.42% 0.172 243.39) 0%, transparent 70%)",
        }}
      />

      {/* Layer 3: Mint Ambient (Slow Delay, Largest) */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-15 dark:opacity-10 blur-[130px]"
        style={{
          x: tertiaryX,
          y: tertiaryY,
          translateX: "-55%",
          translateY: "-45%",
          background:
            "radial-gradient(circle, var(--color-brand-success) 0%, transparent 70%)",
        }}
      />

      {/* Layer 4: Electric Violet (Deepest Delay) */}
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full opacity-[0.25] dark:opacity-[0.18] blur-[90px]"
        style={{
          x: quaternaryX,
          y: quaternaryY,
          translateX: "-40%",
          translateY: "-60%",
          background:
            "radial-gradient(circle, var(--color-electric-accent) 0%, transparent 70%)",
        }}
      />

      {/* 
        Static Background Decoration Orbs:
        Slowly floating circles that add subtle color to the page periphery.
      */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[10%] left-[10%]"
      >
        <div className="w-[400px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full animate-float-orb" />
      </motion.div>

      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-[10%] right-[10%]"
      >
        <div className="w-[500px] h-[500px] bg-brand-success/5 blur-[120px] rounded-full animate-float-orb-reverse" />
      </motion.div>
    </div>
  );
};

export default InteractiveBackground;
