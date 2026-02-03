import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * LayoutToggle Component
 *
 * A fixed UI component (bottom-left) that allows users to toggle between
 * Light (Horizon) and Dark (Midnight) themes.
 */
const LayoutToggle: React.FC = () => {
  // useTheme hook: Accesses the global theme state and the toggle function
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-8 left-8 z-200 flex flex-col gap-3">
      {/* 
        Main Glass Container:
        Using backdrop-blur and specific theme-aware border/card colors.
      */}
      <div className="bg-(--card)/80 backdrop-blur-xl p-4 rounded-3xl border border-(--border) shadow-2xl flex flex-col gap-5 w-64">
        {/* Theme Mode Switch Section */}
        <div className="flex items-center justify-between group">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-(--muted-foreground)/60 leading-none mb-1">
              Appearance
            </span>
            <div className="flex items-center gap-2">
              {/* Dynamic Icon based on current theme */}
              {isDark ? (
                <Moon size={14} className="text-brand-primary" />
              ) : (
                <Sun size={14} className="text-brand-primary" />
              )}
              {/* Specialized theme names: Midnight for Dark, Horizon for Light */}
              <span className="text-xs font-bold text-(--foreground) uppercase tracking-tighter">
                {isDark ? "Midnight" : "Horizon"}
              </span>
            </div>
          </div>

          {/* 
            The Interactive Toggle Switch:
            Uses Framer Motion for a spring-animated sliding pill.
          */}
          <button
            onClick={toggleTheme}
            className="relative w-12 h-6 bg-brand-primary/10 rounded-full flex items-center p-1 transition-colors hover:bg-brand-primary/20"
          >
            <motion.div
              animate={{ x: !isDark ? 24 : 0 }} // Slides right for Light mode
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-4 h-4 bg-brand-primary rounded-full shadow-lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutToggle;
