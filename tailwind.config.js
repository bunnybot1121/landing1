/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Refined pastel base colors (softer, more desaturated)
        'pastel': {
          'cream': '#FAF8F5',
          'mint': '#F0F8F4',
          'lavender': '#F4F0F8',
          'peach': '#F8F4F0',
          'sky': '#F0F4F8',
        },
        
        // Neon accents (used sparingly for focal elements only)
        'neon': {
          'cyan': '#00E5FF',
          'pink': '#FF0080',
          'green': '#00FF88',
        },
        
        // Neutral system with improved contrast ratios
        'neutral': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '900' }],
        'display-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '800' }],
        'display-md': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'minimal': '0 1px 3px rgba(0,0,0,0.05)',
        'lift': '0 4px 12px rgba(0,0,0,0.08)',
        'neon-subtle': '0 0 10px rgba(0, 229, 255, 0.3)',
      },
      animation: {
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}