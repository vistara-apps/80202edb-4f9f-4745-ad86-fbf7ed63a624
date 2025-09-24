import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(220, 86%, 52%)',
          foreground: 'hsl(220, 86%, 52%)',
        },
        accent: {
          DEFAULT: 'hsl(140, 79%, 50%)',
          foreground: 'hsl(140, 79%, 50%)',
        },
        background: 'hsl(225, 7%, 95%)',
        foreground: 'hsl(225, 7%, 13%)',
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(225, 7%, 13%)',
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(225, 7%, 13%)',
        },
        border: 'hsl(225, 7%, 90%)',
        input: 'hsl(225, 7%, 90%)',
        ring: 'hsl(220, 86%, 52%)',
        destructive: {
          DEFAULT: 'hsl(358, 79%, 53%)',
          foreground: 'hsl(358, 79%, 53%)',
        },
        muted: {
          DEFAULT: 'hsl(225, 7%, 60%)',
          foreground: 'hsl(225, 7%, 40%)',
        },
        secondary: {
          DEFAULT: 'hsl(225, 7%, 90%)',
          foreground: 'hsl(225, 7%, 40%)',
        },
      },
      borderRadius: {
        lg: '16px',
        md: '10px',
        sm: '6px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
