import React from "react";
import { Container } from "./ui/Layout";
import { useTheme } from "../contexts/ThemeContext";
import {
  footerPlatformLinks,
  footerCompanyLinks,
  footerContactInfo,
  footerSocialLinks,
} from "../constants/footerData";
import FooterBrand from "./footer/FooterBrand";
import FooterNav from "./footer/FooterNav";
import FooterBottom from "./footer/FooterBottom";

/**
 * Footer Component
 *
 * Provides site-wide navigation, branding, and legal information.
 * It is forced to have a 'dark' aesthetic irrespective of the current theme
 * to provide a solid visual anchor at the bottom of the page.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer
      data-theme="dark" // Forces dark mode variables for the footer area
      className="bg-brand-depth border-t border-(--border) pt-24 pb-12 px-5 text-(--muted-foreground) text-sm"
    >
      <Container>
        {/* Upper Footer: Branding and multi-column navigation */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-20">
          <FooterBrand />

          <FooterNav
            platformLinks={footerPlatformLinks}
            companyLinks={footerCompanyLinks}
            contactInfo={footerContactInfo}
          />
        </div>

        {/* Lower Footer: Copyright, Theme Toggle, and Social Links */}
        <FooterBottom
          currentYear={currentYear}
          theme={theme}
          toggleTheme={toggleTheme}
          socialLinks={footerSocialLinks}
        />
      </Container>
    </footer>
  );
};

export default Footer;
