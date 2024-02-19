/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  prefix: 'rvx-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0043DD',
          150: '#000511',
          140: '#002079',
          130: '#000F33',
          120: '#002477',
          110: '#002E99',
          100: '#0039BB',
          80: '#004DFF',
          70: '#2265FF',
          60: '#447DFF',
          50: '#6694FF',
          40: '#88ACFF',
          30: '#AAC4FF',
          20: '#CCDBFF',
          10: '#EEF3FF'
        },
        secondary: {
          DEFAULT: '#FF554D',
          150: '#4D0300',
          140: '#800600',
          130: '#B30800',
          120: '#E60A00',
          110: '#FF241A',
          80: '#FF8580',
          60: '#FFB6B3',
          40: '#FFCECC',
          20: '#FFE7E5',
          10: '#FFEFEE'
        },
        neutral: {
          DEFAULT: '#BDBDBD',
          900: '#212121',
          800: '#424242',
          700: '#616161',
          600: '#757575',
          500: '#9E9E9E',
          400: '#BDBDBD',
          300: '#E0E0E0',
          200: '#EEEEEE',
          100: '#F5F5F5',
          50: '#FAFAFA'
        },
        danger: {
          DEFAULT: '#D50000',
          700: '#D32F2F',
          50: '#FFEBEE'
        },
        success: {
          DEFAULT: '#009900',
          500: '#4CAF50',
          50: '#E8F5E 9'
        },
        warning: {
          DEFAULT: '#FF6D00',
          500: '#FF9100',
          50: '#FFF3E0'
        }
      },
      spacing: {
        space5: '0.5rem',
        space8: '0.8rem',
        space12: '1.2rem',
        space16: '1.6rem',
        space20: '2rem',
        space24: '2.4rem',
        space28: '2.8rem',
        space30: '3rem',
        space32: '3.2rem',
        space34: '3.4rem',
        space40: '4rem'
      },
      fontSize: {
        base: '62.5%',
        normal: '1.6rem'
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      },
      boxShadow: {
        DEFAULT:
          '0px 12px 42px -4px rgba(24, 39, 75, 0.12), 0px 8px 18px -6px rgba(24, 39, 75, 0.12)',
        100: '0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)',
        200: '0px 8px 8px -4px rgba(24, 39, 75, 0.08), 0px 4px 6px -4px rgba(24, 39, 75, 0.12)',
        300: '0px 8px 16px -6px rgba(24, 39, 75, 0.08), 0px 6px 8px -6px rgba(24, 39, 75, 0.12)',
        400: '0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.12)',
        500: '0px 10px 32px -4px rgba(24, 39, 75, 0.10), 0px 6px 14px -6px rgba(24, 39, 75, 0.12)',
        700: '0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)',
        800: '0px 18px 88px -4px rgba(24, 39, 75, 0.14), 0px 8px 28px -6px rgba(24, 39, 75, 0.12)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addBase, theme }) {
      addBase({
        html: { fontSize: theme('fontSize.base'), scrollBehavior: 'smooth' },
        body: {
          fontSize: theme('fontSize.normal'),
          fontFamily: theme('fontFamily.nunito')
        },
        h1: {
          fontFamily: theme('fontFamily.nunito'),
          fontSize: '2.4rem',
          lineHeight: '3.4rem'
        },
        h2: {
          fontFamily: theme('fontFamily.nunito'),
          fontSize: '2.2rem',
          lineHeight: '3.5rem'
        },
        h3: {
          fontFamily: theme('fontFamily.nunito'),
          fontSize: '2rem',
          lineHeight: '3.2rem'
        },
        h4: {
          fontFamily: theme('fontFamily.nunito'),
          fontSize: '1.8rem',
          lineHeight: '2.9rem'
        },
        h5: {
          fontFamily: theme('fontFamily.nunito'),
          fontSize: '1.6rem',
          lineHeight: '2.6rem'
        }
      })
    })
  ]
}
