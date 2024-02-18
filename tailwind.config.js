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
      fontSize: {
        base: '62.5%',
        normal: '1.6rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addBase, theme }) {
      addBase({
        html: { fontSize: theme('fontSize.base') },
        body: { fontSize: theme('fontSize.normal') }
      })
    })
  ]
}
