import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

interface NavbarMobileMenuProps {
  mobileMenuOpen: boolean;
  navLinks: { label: string; href: string }[];
  activeSection: string;
  scrollToSection: (href: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

/**
 * NavbarMobileMenu Component
 *
 * Renders the vertical menu for mobile users.
 * Uses Framer Motion's AnimatePresence to handle height/opacity entrance
 * and exit animations.
 */
const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  mobileMenuOpen,
  navLinks,
  activeSection,
  scrollToSection,
  setMobileMenuOpen,
}) => {
  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 16 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          className="lg:hidden overflow-hidden relative z-10"
        >
          {/* Menu container with top separator */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 pb-3 sm:pb-4 border-t border-(--border) pt-4 sm:pt-5 md:pt-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Button
                  key={link.label}
                  as="a"
                  href={link.href}
                  variant="glass"
                  className={cn(
                    "w-full justify-start py-3 sm:py-3.5 md:py-4 px-4 sm:px-5 md:px-6 border-white/5 text-sm sm:text-base",
                    isActive &&
                      "bg-(--foreground)/5 text-brand-primary border-brand-primary/20",
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    setMobileMenuOpen(false); // Close menu after navigation
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
            {/* Primary Action Button for Mobile: Opens the external Ravan.ai scheduler */}
            <Button
              variant="glass-primary"
              size="lg"
              className="w-full rounded-2xl sm:rounded-[20px] py-3 sm:py-3.5 md:py-4 text-sm sm:text-base"
              onClick={() => {
                setMobileMenuOpen(false);
                window.open("https://atomicx.ravan.ai/book", "_blank");
              }}
            >
              Book Demo
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobileMenu;
