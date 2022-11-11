/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    screens: {
     
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1155px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl':'1670px',
      'vxl':'2560px'
    },
    animation: {
      'movement': 'movement 5s ease-in-out',
      'slidedown': 'slidedown 5s ease-in-out',
      'bounce': 'bounce 1s infinite',
      'wiggle': 'wiggle 1s ease-in-out infinite',
      'spin':'spin 6s linear infinite',
      'pulse':'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    },
    keyframes: {
      spin: {
        '0%':{transform: 'rotate(0deg)'},
        '100%':{transform: 'rotate(360deg)'}
      },
      pulse: {
        '0%, 100%': {
          opacity: '1'
        },
        '50%': {
          opacity: '.5'
      }
    },
      movement: {
        '0%': { transform: 'translateX(-30%)'  },
        '50%': { transform: 'scale(1.1)' },
        '100%': { transform: 'translateX(0%)' },
      },
      slidedown: {
        '0%': { transform: 'translateY(-40%)'  },
        '50%': { transform: 'scale(1.3)' },
        '100%': { transform: 'translateY(0%)' },
      },
      bounce:{
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
        },
        '50%': {
          transform: 'translateY(0)'}
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-8deg)' },
        '50%': { transform: 'rotate(8deg)' },
      }
    }
  },

  fontFamily: {
    quicksand: ["Quicksand", "sans-serif"],
  },
  plugins: [require('tw-elements/dist/plugin')],
}
