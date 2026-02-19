import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pa: {
          bg: '#0d1117',
          'bg-secondary': '#161b22',
          blue: '#4361ee',
          teal: '#2ec4b6',
          light: '#f8fafc',
          'light-muted': '#cbd5e1',
          'border': '#30363d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
