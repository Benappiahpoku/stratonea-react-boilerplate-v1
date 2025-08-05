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
      // <!-- ===== [New Feature] START: Stratonea full color scale ===== -->
      colors: {
        // Stratonea brand colors with full scale
        primary: {
          50: '#F0F3FA',
          100: '#E1E7F5',
          200: '#C3CFEB',
          300: '#A5B7E0',
          400: '#879FD6',
          500: '#6987CC',
          600: '#1F3A8A', // Primary blue
          700: '#152970', // dark variant
          800: '#0C1B56',
          900: '#030D3D',
          DEFAULT: '#1F3A8A'
        },
        secondary: {
          50: '#EDF5FE',
          100: '#DBEAFD',
          200: '#B7D6FB',
          300: '#93C1F9',
          400: '#6FACF7',
          500: '#3B81F6', // Secondary blue
          600: '#2A70E5', // hover variant
          700: '#1B5FD4',
          800: '#0C4EC3',
          900: '#003DB2',
          DEFAULT: '#3B81F6'
        },
        // Standard gray scale
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      // Touch-optimized sizes for Ghanaian mobile users
      spacing: {
        'touch-min': '3rem', // 48px - minimum touch target
        'touch-safe': '4rem' // 64px - comfortable touch area
      },
      borderRadius: {
        stratonea: '0.375rem' // Consistent border-radius
      }
      // <!-- ===== [New Feature] END: Stratonea full color scale ===== -->
    }
  },
  plugins: [],
}