import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          50: "#F6F5F2",
          100: "#EDEAE3",
          200: "#D9D4C8",
          300: "#A8A299",
          400: "#6E6A62",
          500: "#3D3A34",
          600: "#2A2722",
          700: "#1C1A16",
          800: "#121110",
          900: "#0A0A0A",
        },
        bone: {
          DEFAULT: "#FAFAF7",
          50: "#FDFDFB",
          100: "#FAFAF7",
          200: "#F3F1EB",
          300: "#E8E4DC",
          400: "#D0CABE",
        },
        accent: {
          DEFAULT: "#B89968",
          50: "#F9F3E9",
          100: "#F1E6CF",
          200: "#E2CCA1",
          300: "#D4B37A",
          400: "#C5A173",
          500: "#B89968",
          600: "#9A7F54",
          700: "#7B6443",
          800: "#5C4B33",
          900: "#3E3222",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em", fontWeight: "300" }],
        "display-lg": ["clamp(2rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "300" }],
        "display-md": ["clamp(1.65rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.01em", fontWeight: "400" }],
        "display-sm": ["clamp(1.375rem, 2.5vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.005em", fontWeight: "500" }],
        "eyebrow": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.28em", fontWeight: "500" }],
        "label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.24em", fontWeight: "600" }],
        "body": ["1rem", { lineHeight: "1.7", letterSpacing: "-0.005em", fontWeight: "400" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.7", letterSpacing: "-0.005em", fontWeight: "400" }],
      },
      letterSpacing: {
        "widest-plus": "0.32em",
        "mega": "0.42em",
      },
      spacing: {
        "section": "clamp(5rem, 10vw, 9rem)",
        "section-lg": "clamp(7rem, 14vw, 12rem)",
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
      },
      maxWidth: {
        "shell": "1440px",
        "prose-narrow": "62ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(12px)", opacity: "0.4" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scale-in": "scale-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scroll-hint": "scroll-hint 2.2s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
