const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-white': 'rgb(234, 234, 234)',
        'theme-blue-50': 'rgba(96,138,177,0.7)',
        'theme-blue-100': 'rgba(96,138,177,0.8)',
        'theme-black': 'rgb(32, 32, 35)',
      },
      keyframes: {
        travelOrbit: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        unrotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        travelOrbit10: 'travelOrbit 10s infinite linear',
        travelOrbit8: 'travelOrbit 8s infinite linear',
        travelOrbit6: 'travelOrbit 6s infinite linear',
        travelOrbit4: 'travelOrbit 4s infinite linear',
        travelOrbit2: 'travelOrbit 2s infinite linear',
        unrotate10: 'unrotate 10s infinite linear',
        unrotate8: 'unrotate 8s infinite linear',
        unrotate6: 'unrotate 6s infinite linear',
        unrotate4: 'unrotate 4s infinite linear',
        unrotate2: 'unrotate 2s infinite linear',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rotate3d': {
          transform: 'rotate3d(60, 35, 0, 360deg)',
        },
      });
    }),
  ],
};
