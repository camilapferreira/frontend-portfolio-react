/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        violet: '#834ed2',
        'dark-violet': '#381073',
        'dark-navy': '#020c1b',
        'light-purple': 'rgb(220, 200, 223)',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'soft-white': '#e6f1ff',
        'accent-blue': '#57cbff',
        'accent-green': '#64ffda',
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #020c1b 3.2%, #381073 90.3%)',
      },
      boxShadow: {
        'accent': '4px 4px 0 0 #64ffda',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
  },
  plugins: [],
};
