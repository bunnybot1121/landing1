/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'pastel-cream': '#faf8f5',
        'pastel-lavender': '#f0f0ff',
        'pastel-mint': '#f0fff4',
        'pastel-peach': '#fff5f0',
        'pastel-sage': '#f5f8f0',
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff00ff',
        'neon-lime': '#ccff00',
        'neon-orange': '#ff6600',
        'neutral': {
          100: '#f5f5f5',
          300: '#d4d4d4',
          500: '#737373',
          700: '#404040',
          900: '#1a1a1a',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}