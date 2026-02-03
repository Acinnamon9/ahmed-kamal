import React from "react";
import { ProofCaseStudy } from "../../../constants/proofData";

interface IntelligencePaneProps {
  activeStudy: ProofCaseStudy;
}

/**
 * IntelligencePane
 * Detailed view for the selected case study.
 */
const IntelligencePane: React.FC<IntelligencePaneProps> = ({ activeStudy }) => {
  return (
    <div className="relative bg-(--card)/30 backdrop-blur-xl border border-(--border)/30 rounded-[32px] p-6 md:p-8 overflow-hidden shadow-2xl">
      {/* Visual Depth: soft corner glow and top divider line */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-link/5 rounded-full blur-[100px] -mr-32 -mt-32" />
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-link/20 to-transparent" />

      {/* Header: Displays Client Source Logo & Meta status */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 relative z-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {activeStudy.sourceLogo ? (
              <img
                src={activeStudy.sourceLogo}
                alt={activeStudy.logo}
                className="h-8 w-auto grayscale brightness-200"
              />
            ) : (
              <span className="text-2xl font-black text-(--foreground) tracking-tighter">
                {activeStudy.logo}
              </span>
            )}
            <span className="text-[9px] font-black text-brand-link uppercase tracking-widest px-2 py-0.5 bg-brand-link/10 border border-brand-link/20 rounded">
              Operational Log
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-(--foreground) uppercase tracking-tighter leading-none max-w-xl">
            {activeStudy.title}
          </h3>
        </div>
      </div>

      {/* Metrics Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">
        {activeStudy.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border transition-all duration-500 group hover:bg-brand-link/10 hover:border-brand-link/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] bg-(--muted)/20 border-(--border)/30"
          >
            <span className="block text-2xl font-black tracking-tighter mb-0.5 transition-colors duration-300 group-hover:text-brand-success text-(--foreground)">
              {metric.value}
            </span>
            <span className="block text-[9px] font-black text-(--muted-foreground) uppercase tracking-[0.2em]">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {/* Situation vs Protocol Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-t border-(--border)/30 pt-8 relative z-10">
        <div className="bg-brand-error/5 border border-brand-error/10 p-6 rounded-2xl backdrop-blur-sm">
          <span className="text-[12px] font-mono font-black text-brand-error uppercase tracking-[0.2em] block mb-3 text-center">
            [ 01 / SITUATION ]
          </span>
          <p className="text-base md:text-lg text-brand-error/80 leading-relaxed font-medium text-justify">
            {activeStudy.challenge}
          </p>
        </div>
        <div className="bg-brand-success/5 border border-brand-success/10 p-6 rounded-2xl backdrop-blur-sm">
          <span className="text-[12px] font-mono font-black text-brand-success uppercase tracking-[0.2em] block mb-3 text-center">
            [ 02 / PROTOCOL ]
          </span>
          <p className="text-base md:text-lg text-brand-success/90 leading-relaxed font-medium text-justify">
            {activeStudy.solution}
          </p>
        </div>
      </div>

      {/* Authenticated Statement */}
      <div className="relative p-6 md:p-8 rounded-2xl bg-(--card)/40 border border-(--border)/30 z-10 group hover:border-brand-link/30 transition-colors duration-500">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <div className="flex flex-row md:flex-col items-center justify-center gap-3 shrink-0 md:w-40 md:border-r border-white/10 md:pr-6">
            <div className="w-12 h-12 rounded-full bg-brand-link/20 flex items-center justify-center font-black text-brand-link text-lg shadow-[0_0_20px_rgba(34,211,238,0.15)] mb-0 md:mb-2">
              {activeStudy.author.charAt(0)}
            </div>
            <div className="text-center">
              <cite className="not-italic font-black text-(--foreground) text-xs block uppercase tracking-tight mb-1">
                {activeStudy.author}
              </cite>
              <span className="text-[9px] text-brand-link font-black uppercase tracking-[0.2em] leading-tight block">
                {activeStudy.role}
              </span>
            </div>
          </div>

          <div className="relative flex-1 text-center md:text-left">
            <div className="hidden md:block absolute -top-4 -left-2 text-brand-link/20">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
              </svg>
            </div>
            <blockquote className="text-lg md:text-xl font-medium text-(--foreground) italic leading-relaxed relative z-10 pl-0 md:pl-8">
              "{activeStudy.testimonial}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligencePane;
