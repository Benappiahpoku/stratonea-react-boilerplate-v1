/**
 * Tailwind CSS Configuration for Stratonea Excalidraw App
 * - Scans all HTML, JS, TS, JSX, and TSX files in src/ and root for utility classes
 * - Ghana mobile-first: touch-optimized spacing, Stratonea brand colors
 * - See Stratonea guidelines for best practices
 */
export default {
  // <!-- ===== [Fix] START ===== -->
  // Expanded content paths to include all possible file types used in React/Vite projects
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}", // Scan all JS/TS/JSX/TSX/CSS files in src/
  ],
  // <!-- ===== [Fix] END ===== -->
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F3A8A",
          light: "#3651A5",
          dark: "#152970",
          hover: "#18307A",
        },
        secondary: {
          DEFAULT: "#3B81F6",
          light: "#5C97F8",
          dark: "#2A6BD7",
          hover: "#2A70E5",
        },
      },
      spacing: {
        "touch-min": "3rem", // 48px - minimum touch target
        "touch-safe": "4rem", // 64px - comfortable touch area
      },
      borderRadius: {
        stratonea: "0.375rem", // Consistent border-radius
      },
    },
  },
  plugins: [],
}