import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";
import { useBooking } from "../../context/BookingContext";

interface NavbarDesktopLinksProps {
  navLinks: { label: string; href: string }[];
  activeSection: string;
  scrollToSection: (href: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

const NavbarDesktopLinks: React.FC<NavbarDesktopLinksProps> = ({
  navLinks,
  activeSection,
  scrollToSection,
  setMobileMenuOpen,
}) => {
  // useBooking Context: Provides the trigger to launch the demo scheduler modal
  const { openBooking } = useBooking();

  return (
    <div className="hidden lg:flex items-center gap-1 xl:gap-2 pointer-events-auto">
      {navLinks.map((link) => {
        /**
         * isActive Logic:
         * Compares the current scroll-tracked active section against the link's href.
         */
        const isActive = activeSection === link.href.replace("#", "");
        return (
          <Button
            key={link.label}
            onClick={() => {
              scrollToSection(link.href);
              setMobileMenuOpen(false); // Ensure menu state is reset
            }}
            variant="glass"
            size="lg"
            className={cn(
              "text-[10px] xl:text-[11px] font-bold tracking-wider uppercase px-3 xl:px-5 py-3 transition-all",
              isActive
                ? "bg-(--foreground)/10 border-(--foreground)/20 text-(--foreground) -translate-y-px shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                : "bg-transparent border-transparent text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--foreground)/5",
            )}
          >
            <span className="relative">
              {link.label}
              {/* 
                Active Section Indicator:
                Uses Framer Motion's layoutId for a fluid, 'sliding' transition 
                between navigation items as the user scrolls or clicks.
              */}
              {isActive && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </span>
          </Button>
        );
      })}
      <div className="h-6 w-px bg-(--border) mx-2 xl:mx-4"></div>
      <Button
        variant="glass-primary"
        size="xl"
        className="px-6 xl:px-8 rounded-[20px]"
        onClick={openBooking}
      >
        Book Demo
      </Button>
    </div>
  );
};

export default NavbarDesktopLinks;
