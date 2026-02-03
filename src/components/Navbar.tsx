import React from "react";
import { useNavbar } from "../hooks/useNavbar";
import SpotlightEffect from "./ui/SpotlightEffect";
import NavbarGlassFilter from "./navbar/NavbarGlassFilter";
import NavbarDesktopLinks from "./navbar/NavbarDesktopLinks";
import NavbarMobileMenu from "./navbar/NavbarMobileMenu";

/**
 * Navbar Component
 *
 * Provides a sticky navigation experience with a frosted glass effect that
 * activates when the user scrolls down.
 */
const Navbar: React.FC = () => {
  // useNavbar hook: Centralized logic for scroll detection and link management
  const {
    isScrolled, // Boolean: true if page is scrolled past a threshold
    mobileMenuOpen, // State: toggles mobile menu visibility
    setMobileMenuOpen,
    activeSection, // String: current visible section for active link styling
    navLinks, // Array: list of navigation items
    scrollToSection, // Function: smooth scrolls to a target section
  } = useNavbar();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] px-4 sm:px-6 md:px-8 lg:px-6 py-4 sm:py-6 md:py-8 pointer-events-none">
      {/* 
        SpotlightEffect: Creates a subtle light follow effect on the cursor.
        className: Dynamically switches styles based on 'isScrolled' state.
      */}
      <SpotlightEffect
        id="navbar-container"
        spotlightSize={250}
        spotlightColor="rgba(255, 255, 255, 0.20)"
        className={`max-w-[1400px] mx-auto transition-all duration-500 pointer-events-auto ${isScrolled
          ? "glass-navbar-frosted rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-3.5 md:py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.1)]"
          : "bg-transparent border border-transparent px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3"
          }`}
      >
        <div className="flex items-center justify-between relative z-10">
          {/* Brand Logo & Name */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80 cursor-pointer pr-8"
          >
            <img
              src="/assets/AX_logo_transparent.png"
              alt="AtomicX"
              className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-(--foreground) tracking-tight  ">
              AtomicX
            </span>
          </a>

          {/* Desktop Navigation Links: Hidden on smaller screens */}
          <NavbarDesktopLinks
            navLinks={navLinks}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Mobile Menu Toggle Button: Only visible on small screens */}
          <button
            className="lg:hidden p-2.5 sm:p-3 text-(--foreground) focus:outline-none bg-(--muted)/20 rounded-full pointer-events-auto transition-all hover:bg-(--muted)/30 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                // "X" Icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu: Animated overlay */}
        <NavbarMobileMenu
          mobileMenuOpen={mobileMenuOpen}
          navLinks={navLinks}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </SpotlightEffect>

      {/* SVG Filter: Provides the unique glassmorphism visual style */}
      <NavbarGlassFilter />
    </nav>
  );
};

export default Navbar;
