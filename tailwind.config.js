/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f2b5b",
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bcd4ff",
          300: "#8eb8ff",
          400: "#5990ff",
          500: "#3366ff",
          600: "#1a44f5",
          700: "#1333e1",
          800: "#162bb6",
          900: "#0f2b5b",
          950: "#0a1a3d",
        },
        secondary: {
          DEFAULT: "#d4a853",
          50: "#fdf9ef",
          100: "#faf0d4",
          200: "#f4dea8",
          300: "#edc872",
          400: "#e5ad3d",
          500: "#d4a853",
          600: "#c08b2d",
          700: "#a06b26",
          800: "#835625",
          900: "#6c4722",
          950: "#3d2410",
        },
        navy: {
          DEFAULT: "#0a1628",
          50: "#eef5ff",
          100: "#d8e8ff",
          600: "#1e3a6e",
          700: "#152c55",
          800: "#0f2040",
          900: "#0a1628",
          950: "#060e1a",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(15, 43, 91, 0.3)',
        'glow-gold': '0 0 40px -10px rgba(212, 168, 83, 0.3)',
        'card': '0 4px 40px -12px rgba(15, 43, 91, 0.12)',
        'card-hover': '0 20px 60px -15px rgba(15, 43, 91, 0.2)',
        'premium': '0 25px 50px -12px rgba(10, 22, 40, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #0f2b5b 0%, #1a3d7a 50%, #0a1a3d 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4a853 0%, #f0d48a 50%, #d4a853 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
