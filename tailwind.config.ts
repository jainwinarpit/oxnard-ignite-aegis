import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Enhanced Brand colors from logo
        "brand-cyan": "hsl(var(--brand-cyan))",
        "brand-blue": "hsl(var(--brand-blue))",
        "brand-purple": "hsl(var(--brand-purple))",
        "brand-orange": "hsl(var(--brand-orange))",
        "brand-green": "hsl(var(--brand-green))",
        "brand-pink": "hsl(var(--brand-pink))",
        "brand-gold": "hsl(var(--brand-gold))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "brand": "0 15px 35px -5px hsl(var(--brand-cyan) / 0.4)",
        "elegant": "0 8px 25px -3px hsl(var(--foreground) / 0.12)",
        "glow": "0 0 50px hsl(var(--brand-cyan) / 0.3)",
        "premium": "0 20px 40px -10px hsl(var(--brand-blue) / 0.25)",
        "intense": "0 25px 50px -12px hsl(var(--brand-purple) / 0.4)",
        "soft": "0 4px 15px -2px hsl(var(--foreground) / 0.08)",
      },
      backgroundImage: {
        "gradient-brand": "var(--gradient-brand)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-vibrant": "var(--gradient-vibrant)",
        "gradient-premium": "var(--gradient-premium)",
        "gradient-rainbow": "var(--gradient-rainbow)",
        "gradient-gold": "var(--gradient-gold)",
        "gradient-texture": "var(--gradient-texture)",
        "gradient-mesh": "var(--gradient-mesh)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3) rotate(10deg)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05) rotate(-5deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-10px) rotate(1deg)",
          },
          "66%": {
            transform: "translateY(-5px) rotate(-1deg)",
          },
        },
        "gentle-bounce": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-3px)",
          },
        },
        "magnetic-hover": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "rainbow-shift": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "20%": {
            "background-position": "100% 50%",
          },
          "40%": {
            "background-position": "100% 100%",
          },
          "60%": {
            "background-position": "0% 100%",
          },
          "80%": {
            "background-position": "0% 0%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gentle-bounce": "gentle-bounce 2s ease-in-out infinite",
        "magnetic-hover": "magnetic-hover 0.3s ease",
        "rainbow-shift": "rainbow-shift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
