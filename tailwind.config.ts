import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Prompt: ["Prompt", "sans-serif"]
      },
      animation: {
        border: 'background ease infinite',
        fadeLeft: 'fadeLeft 0.3s ease-out forwards',
        fadeRight: 'fadeRight 0.3s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeIn2: 'fadeIn 0.3s ease-in-out forwards',
        fadeBottom: 'fadeBottom 0.3s ease-in-out forwards',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

