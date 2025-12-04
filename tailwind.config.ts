import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // xs: "360px",
        // sm: "525px",
        md: "769px",
      },
      container: {
        center: true,
        screens: {
          default: "328px",
          sm: "520px",
          md: "672px",
          lg: "1024px",
          xl: "1320px",
          "2xl": "1320px",
        },
      },
      width: {
        "4.5": "18px",
        "13.5": "60px",
        "half-container": "328px",
        "half-container-sm": "520px",
        "half-container-md": "672px",
        "half-container-lg": "512px",
        "half-container-xl": "660px",
        // "half-container-2xl": "660px",
      },
      backgroundSize: {
        "size-mobile": "248px",
        "size-tablet": "338px",
        "size-desktop": "291px",
        "size-large-desktop": "510px",
        "size-cover": "cover",
      },
      backgroundPosition: {
        "position-counter": "-20px center",
      },
      backgroundImage: {
        "hero-earth": "url('/images/earth.svg')",
        "counter-map": "url('/images/home/bg-counter.jpg')",
      },
      fontFamily: {
        clearSans: ["var(--font-clear-sans)", "sans-serif"],
        barlow: ["var(--font-barlow-condensed)", "sans-serif"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        accent: "var(--accent-color)",

        backgroundPrimary: "var(--background-primary)",
        backgroundSecondary: "var(--background-secondary)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
      },
      lineHeight: {
        "6.5": "24px",
        "9.5": "38px",
        "10.5": "44px",
        "11": "50.4px",
        "16.5": "65px",
        "19.5": "78px",
      },
      fontSize: {
        // base: ['16px', { lineHeight: '27px' }],
        lg: ["18px", { lineHeight: "27px" }],
        "2.5xl": "28px",
        "3.5xl": "32px",
        "4.5xl": "40px",
        "5.4xl": "54px",
        "5.5xl": "56px",
        "7.5xl": "80px",
      },
      letterSpacing: {
        tightest: "-1.2px",
        tighter: "-0.2px",
      },
      spacing: {
        "2.5": "10px",
        "3.5": "14px",
        "5.5": "22px",
        "6.5": "26px",
        "7.5": "30px",
        "8.5": "34px",
        "10.5": "42px",
        "11.5": "46px",
        "14.5": "60px",
        "16.1": "68px",
        "16.5": "72px",
        "20.1": "84px",
        "20.2": "86px",
        "20.5": "94px",
        "24.1": "100px",
        "24.5": "100px",
        "137": "548px",
      },
      boxShadow: {
        "job-description":
          "0px 0px 1px 0px rgba(8, 60, 130, 0.06), 0px 0px 25px 0px rgba(30, 34, 40, 0.04);",
        "accordion-shadow": "0px 5px 35px 0px rgba(30, 34, 40, 0.07)",
        "contact-us": "0px 0px 100px 0px rgba(0, 0, 0, 0.05)",
        "team-card":
          "0px 0px 26px 0px rgba(30, 34, 40, 0.04), 0px 0px 2px 0px rgba(8, 60, 130, 0.06);",
      },
    },
  },
  plugins: [nextui()],
  mode: "jit",
  corePlugins: {
    preflight: true,
  },
};
export default config;
