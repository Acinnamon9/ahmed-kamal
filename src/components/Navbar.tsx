import React from "react";
import { useNavbar } from "../hooks/useNavbar";
import SpotlightEffect from "./ui/SpotlightEffect";
import NavbarGlassFilter from "./navbar/NavbarGlassFilter";
import NavbarDesktopLinks from "./navbar/NavbarDesktopLinks";
import NavbarMobileMenu from "./navbar/NavbarMobileMenu";

const Navbar: React.FC = () => {
  const {
    isScrolled,
    mobileMenuOpen,
    setMobileMenuOpen,
    activeSection,
    navLinks,
    scrollToSection,
  } = useNavbar();

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-4 sm:px-6 md:px-8 lg:px-6 py-4 sm:py-6 md:py-8 pointer-events-none">
      <SpotlightEffect
        id="navbar-container"
        spotlightSize={250}
        spotlightColor="rgba(255, 255, 255, 0.20)"
        className={`max-w-[1400px] mx-auto transition-all duration-500 pointer-events-auto ${
          isScrolled
            ? "glass-navbar-frosted rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-3.5 md:py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.1)]"
            : "bg-transparent border border-transparent px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3"
        }`}
      >
        <div className="flex items-center justify-between relative z-10">
          {/* Logo */}
          <a
            href={import.meta.env.BASE_URL}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <img
              src="https://github.com/Acinnamon9/Client-of-vivek/blob/main/public/assets/AX_logo_transparent.png?raw=true"
              alt="AtomicX"
              className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-(--foreground) tracking-tight">
              AtomicX
            </span>
          </a>

          {/* Desktop Links */}
          <NavbarDesktopLinks
            navLinks={navLinks}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Mobile Toggle */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
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

        {/* Mobile Menu */}
        <NavbarMobileMenu
          mobileMenuOpen={mobileMenuOpen}
          navLinks={navLinks}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </SpotlightEffect>

      {/* SVG Filter for Glass Effect */}
      <NavbarGlassFilter />
    </nav>
  );
};

export default Navbar;
