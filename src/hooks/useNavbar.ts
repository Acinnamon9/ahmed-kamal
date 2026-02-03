import { useState, useEffect } from "react";
import { useWidgetContext } from "../contexts/WidgetContext";

export const navLinks = [
  { label: "Test Drive", href: "#demo" },
  { label: "Platform", href: "#ai-team" },
  { label: "Solutions", href: "#solutions" },
  { label: "Proof", href: "#social-proof" },
  { label: "FAQ", href: "#faq" },
];

/**
 * useNavbar Hook
 *
 * Centralized state and logic for global navigation.
 * Handles:
 * 1. Intersection Observer for 'Active Section' highlighting.
 * 2. Scroll-triggered 'Scrolled' state for navbar glassmorphism.
 * 3. Mobile menu state and smooth-scroll navigation.
 */
export const useNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { shadowRoot } = useWidgetContext();

  /**
   * Intersection Observer Logic:
   * Monitors which section is currently centered in the viewport.
   * rootMargin: Adjusts the detection window to favor sections entering the upper third.
   */
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    const root = shadowRoot || document;

    // observeElements: Attaches observers to the actual section DOM nodes
    const observeElements = () => {
      navLinks.forEach((link) => {
        const sectionId = link.href.replace("#", "");
        const element = root.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    };

    // Initial run
    observeElements();

    /**
     * Mutation Observer:
     * Essential for single-page apps where components might lazy-load
     * or inject after the initial navbar render.
     */
    const mutationObserver = new MutationObserver(observeElements);
    const targetNode = shadowRoot || document.body;
    if (targetNode) {
      mutationObserver.observe(targetNode, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [shadowRoot]);

  /**
   * Scroll Listener Logic:
   * Throttled using requestAnimationFrame (rAF) to prevent main-thread
   * jank during rapid scrolling. Activates the glass effect after 20px.
   */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * scrollToSection:
   * Programmatic smooth-scrolling that accounts for the Shadow DOM
   * environment (important for the upcoming IIFE embed).
   */
  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const root = shadowRoot || document;
    const element = root.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Updates the URL history without a page refresh
      window.history.pushState(null, "", href);
    }
  };

  return {
    isScrolled,
    mobileMenuOpen,
    setMobileMenuOpen,
    activeSection,
    navLinks,
    scrollToSection,
  };
};
