/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan all JS/TS/JSX/TSX files inside src/
    "./public/index.html"           // Also scan your main HTML file
  ],
  theme: {
    
    extend: {
      colors: {
        // Brand Colors (Mithila-inspired)
        primary: '#800000',       // Deep Maroon (main brand)
        primaryLight: '#E34234',  // Vibrant Red-Orange (accent)
        accent: '#FFD700',        // Gold (highlights, buttons)
        background: '#FAF3E0',    // Light Cream (background)
        textPrimary: '#2E2E2E',   // Dark Gray (main text)
        textLight: '#FAF3E0',     // Off-white/cream (navbar text)

        // Semantic Colors (soft & earthy tones)
        success: {
          DEFAULT: '#4CAF50',     // Green
          light: '#A5D6A7',       // Light green
          dark: '#2E7D32',        // Dark green
        },
        warning: {
          DEFAULT: '#FFB300',     // Amber/Gold
          light: '#FFD54F',       // Light amber
          dark: '#FFA000',        // Dark amber
        },
        danger: {
          DEFAULT: '#E34234',     // Vibrant Red-Orange (same as primaryLight)
          light: '#FF8A65',       // Light red-orange
          dark: '#D32F2F',        // Dark red
        },
        info: {
          DEFAULT: '#0288D1',     // Blue
          light: '#4FC3F7',       // Light blue
          dark: '#01579B',        // Dark blue
        },

        // Neutral Grays for UI
        grayLight: '#F5F5F5',     // Light gray background
        gray: '#9E9E9E',          // Medium gray
        grayDark: '#616161',      // Dark gray
      },
    },
  },
  plugins: [],
};

