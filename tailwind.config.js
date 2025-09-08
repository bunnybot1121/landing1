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
        // Pastel base colors
        'pastel-pink': '#F8E8F5',
        'pastel-blue': '#E8F4F8',
        'pastel-mint': '#E8F8F5',
        'pastel-peach': '#F8F0E8',
        'pastel-lavender': '#F0E8F8',
        
        // Neon accents (used sparingly)
        'neon-cyan': '#00FFFF',
        'neon-pink': '#FF00FF',
        'neon-green': '#00FF00',
        'neon-yellow': '#FFFF00',
        
        // Neutral grays
        'gray-50': '#FAFAFA',
        'gray-900': '#1A1A1A',
        'gray-800': '#2A2A2A',
        'gray-600': '#666666',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neon': '0 0 10px currentColor',
      },
    },
  },
  plugins: [],
}