/*
  PostCSS Configuration for Stratonea Excalidraw App
  - Uses Tailwind CSS v3 (stable version)
  - Includes autoprefixer for cross-browser compatibility
  - Optimized for mobile-first Ghana users (Android 6.0+)
*/

export default {
  plugins: {
    // ===== FIXED: Using tailwindcss instead of @tailwindcss/postcss =====
    // This is the correct plugin name for Tailwind CSS v3
    tailwindcss: {},
    
    // Autoprefixer adds vendor prefixes for better browser compatibility
    // Important for older Android devices common in Ghana
    autoprefixer: {},
  },
}