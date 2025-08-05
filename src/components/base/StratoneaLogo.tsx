/*
  stratonealogo.tsx
  Stratonea SVG Logo Component (React/TypeScript)

  - Renders the Stratonea brand logo as an accessible SVG.
  - Accepts a `white` prop to toggle between primary color and white.
  - Mobile-first, touch-optimized, and fully documented for learning.
  - All styling is handled via Tailwind CSS utility classes.
*/

// ===== Types & Interfaces =====
import React from "react";

/**
 * Props for StratoneaLogo
 * @property white - If true, renders the logo in white. Otherwise, uses primary color.
 */
export interface StratoneaLogoProps {
  white?: boolean;
}

// ===== Main Logic =====
/**
 * StratoneaLogo
 * - SVG logo for Stratonea, inspired by Ghana's unity and tech leadership.
 * - Accessible, scalable, and optimized for mobile-first Ghanaian users.
 * - Usage: <StratoneaLogo white={false} />
 */
const StratoneaLogo: React.FC<StratoneaLogoProps> = ({ white = false }) => {
  // Choose color based on prop: white or Tailwind's primary color
  // 'text-primary-dark' and 'text-white' are Tailwind utility classes
  const colorClass = white ? "text-white" : "text-primary-dark";

  return (
    <div
      className={`stratonea-logo inline-flex items-center justify-center ${colorClass}`}
      // Minimum touch target for accessibility (48x48px)
      style={{ minWidth: 48, minHeight: 48 }}
      aria-label="Stratonea Logo"
      role="img"
    >
      {/* 
        SVG logo:
        - Main circle: Ghana's unity
        - 'S' shape: Stratonea
        - Star: Ghana's tech leadership
      */}
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        aria-hidden="true"
        focusable="false"
      >
        {/* Main Circle representing Ghana's unity */}
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        />
        {/* 'S' shape representing Stratonea logo */}
        <path
          d="M30 16C30 14 28 12 24 12C20 12 18 14 18 16C18 20 30 20 30 24C30 26 28 28 24 28C20 28 18 26 18 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
        />
        {/* Star representing Ghana's leadership in African tech */}
        <path
          d="M24 32L25.5 35.5L29.5 36L26.75 38.75L27.5 43L24 41L20.5 43L21.25 38.75L18.5 36L22.5 35.5L24 32Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default StratoneaLogo;

/*
  To use:
    import StratoneaLogo from "@/components/base/stratonealogo";
    <StratoneaLogo white={false} />

  - All styling is via Tailwind utility classes for maintainability and mobile-first workflow.
  - The logo is accessible and touch-optimized for Ghanaian users.
  - To change the color, adjust the `white` prop or update Tailwind's color config.
*/