import React from "react";

interface RoleCardInfoProps {
  title: string;
  replaces: string;
  features: string[];
}

const RoleCardInfo: React.FC<RoleCardInfoProps> = ({
  title,
  replaces,
  features,
}) => {
  return (
    <div className="mb-3">
      <h3 className="text-lg md:text-xl font-black text-(--foreground) tracking-tighter uppercase leading-tight mb-3 group-hover:text-brand-primary transition-colors duration-500 line-clamp-2 h-10 md:h-12 drop-shadow-xs">
        {title}
      </h3>

      {/* Header Area: Ultra-Compact Inline Status */}
      <div className="flex items-center mb-2">
        <div className="text-[8px] font-black text-brand-primary/80 uppercase tracking-widest drop-shadow-xs">
          {replaces} Replacement
        </div>
      </div>

      {/* Capabilities Manifest: Ultra-Compact & Fixed Height for alignment */}
      <div className="space-y-1.5 mt-4 mb-1 h-[76px] overflow-hidden">
        {features.slice(0, 3).map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 group/feat transition-all duration-300"
          >
            <div className="w-1 h-1 rounded-full bg-brand-primary/30 group-hover/feat:bg-brand-primary transition-colors shadow-xs"></div>
            <p className="text-[11px] md:text-xs text-(--muted-foreground) font-bold group-hover/feat:text-(--foreground) transition-colors line-clamp-1 drop-shadow-xs">
              {feature}
            </p>
          </div>
        ))}
        {/* Placeholder for empty state to maintain height if needed, 
            though usually features are > 3 */}
      </div>
    </div>
  );
};

export default RoleCardInfo;
