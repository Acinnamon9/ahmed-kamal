import React from "react";

/**
 * NavbarGlassFilter Component
 *
 * Defines a custom SVG filter used to achieve the advanced 'frosted glass' look.
 * Unlike standard backdrop-blur, this adds fractal noise and displacement
 * to simulate realistic, imperfect glass texture.
 */
const NavbarGlassFilter: React.FC = () => {
  return (
    <svg
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        pointerEvents: "none", // Ensures the SVG doesn't block interactions
      }}
    >
      <filter id="frosted-filter" primitiveUnits="objectBoundingBox">
        {/* Generates a grain/noise pattern for the glass texture */}
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
          numOctaves="3"
          result="noise"
        />
        {/* Core Gaussian blur applied to the navigation background */}
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.005" result="blur" />
        {/* 
          Displacement Map: 
          Uses the 'noise' to slightly distort the 'blur'.
          The <animate> tags dynamically increase this distortion when 
          the user hovers over the navbar container.
        */}
        <feDisplacementMap
          in="blur"
          in2="noise"
          scale="0.02"
          xChannelSelector="R"
          yChannelSelector="G"
        >
          <animate
            attributeName="scale"
            to="0.04"
            dur="0.3s"
            begin="navbar-container.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="scale"
            to="0.02"
            dur="0.3s"
            begin="navbar-container.mouseout"
            fill="freeze"
          />
        </feDisplacementMap>
      </filter>
    </svg>
  );
};

export default NavbarGlassFilter;
