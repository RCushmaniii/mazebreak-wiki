/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0F1117',
          secondary: '#161923',
          elevated: '#1E2230',
        },
        border: {
          DEFAULT: '#2A2F3E',
        },
        text: {
          primary: '#E8ECF4',
          secondary: '#8B92A8',
          tertiary: '#565D73',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          success: '#22C55E',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
      },
      fontFamily: {
        heading: ['"JetBrains Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      maxWidth: {
        content: '768px',
      },
    },
  },
  plugins: [],
};
