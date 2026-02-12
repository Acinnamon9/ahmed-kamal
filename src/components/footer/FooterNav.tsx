import React from "react";
import Button from "../ui/Button";

interface FooterLink {
  label: string;
  href: string;
}

interface ExternalLink {
  email?: string;
  phone?: string;
  address?: {
    label: string;
    href: string;
  };
}

interface FooterNavProps {
  platformLinks: FooterLink[];
  companyLinks: FooterLink[];
  contactInfo: ExternalLink;
}

/**
 * FooterNav Component
 * Renders the navigation columns for Platform, Company, and Contact info.
 */
const FooterNav: React.FC<FooterNavProps> = ({
  platformLinks,
  companyLinks,
  contactInfo,
}) => {
  return (
    <>
      <div>
        <h4 className="text-white text-lg font-black mb-8 tracking-tight transition-colors">
          Platform
        </h4>
        <ul className="space-y-4">
          {platformLinks.map((link, idx) => (
            <li key={idx}>
              <Button
                as="a"
                href={link.href}
                variant="link"
                className="justify-start"
              >
                {link.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white text-lg font-black mb-8 tracking-tight transition-colors">
          Company
        </h4>
        <ul className="space-y-4">
          {companyLinks.map((link, idx) => {
            const isExternal = link.href.startsWith("http");
            return (
              <li key={idx}>
                <Button
                  as="a"
                  href={link.href}
                  variant="link"
                  className="justify-start"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h4 className="text-white text-lg font-black mb-8 tracking-tight transition-colors">
          Contact
        </h4>
        <ul className="space-y-4 font-bold">
          {contactInfo.email && (
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-brand-primary transition-all duration-300 no-underline"
              >
                {contactInfo.email}
              </a>
            </li>
          )}
          {contactInfo.phone && (
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="text-gray-400 hover:text-brand-primary transition-all duration-300 no-underline"
              >
                {contactInfo.phone}
              </a>
            </li>
          )}
          {contactInfo.address && (
            <li>
              <a
                href={contactInfo.address.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-primary transition-all duration-300 no-underline"
              >
                {contactInfo.address.label}
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default FooterNav;
