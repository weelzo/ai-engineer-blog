/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    // ... your content configuration
  ],
  theme: {
    extend: {
      // Add dark mode specific colors if needed
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        // Example dark mode colors
        dark: {
          bg: '#1a1a1a',
          text: '#ffffff'
        }
      }
    },
  },
  // ... rest of your config
} 