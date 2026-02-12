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
    <footer className="bg-gray-950 border-t border-white/5 pt-24 pb-12 text-gray-400 text-sm relative overflow-hidden">
      {/* Dark mode background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.1),transparent_40%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-20">
          <FooterBrand />
          <FooterNav
            platformLinks={footerPlatformLinks}
            companyLinks={footerCompanyLinks}
            contactInfo={footerContactInfo}
          />
        </div>

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
