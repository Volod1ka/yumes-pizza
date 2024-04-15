import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      dark_gray: '#404040',
      dark_red: '#DE4C4C',
      darked_red: '#9B3636',
      light_gray: '#D9D9D9',
      thin_gray: '#B3B3B3',
      transparent: 'transparent',
      white: '#FFF',
    },
    extend: {
      boxShadow: {
        md: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'sm-red': '0px 2px 4px #9B3636',
        'md-red': '0px 4px 4px #9B3636',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
    fontSize: {
      ...defaultTheme.fontSize,
      caption_small: ['12px', { lineHeight: '16px' }],
      caption: ['14px', { lineHeight: '18px' }],
      description: ['16px', { lineHeight: '20px' }],
      heading6: ['18px', { lineHeight: '22px' }],
      heading5: ['20px', { lineHeight: '24px' }],
      heading4: ['22px', { lineHeight: '26px' }],
      heading3: ['24px', { lineHeight: '28px' }],
      heading2: ['28px', { lineHeight: '32px' }],
      heading1: ['32px', { lineHeight: '36px' }],
    },
    // TODO maybe create stack of screens size
    // screens: {
    //   phone: '480px',
    //   tablet: '768px',
    //   laptop: '976px',
    //   desktop: '1440px',
    // },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
