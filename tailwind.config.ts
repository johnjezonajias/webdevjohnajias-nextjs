import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'small': ['0.875rem', {
        lineHeight: '1.2',
        fontWeight: '400',
      }],
      'base': ['1rem', {
        lineHeight: '1.2',
        fontWeight: '400',
      }],
      'blog': ['1.125rem', {
        lineHeight: '1.2',
        fontWeight: '300',
      }],
      'links': ['0.875rem', {
        lineHeight: '1.2',
        fontWeight: '300',
      }],
      'hints': ['0.75rem', {
        lineHeight: '1.2',
        fontWeight: '300',
      }],
      '4xl': ['1.5rem', {
        lineHeight: '1.2',
        fontWeight: '400',
      }],
      '5xl': ['2.5rem', {
        lineHeight: '1.1',
        fontWeight: '700',
      }],
      '6xl': ['4rem', {
        lineHeight: '1.04',
        fontWeight: '700',
      }],
      '7xl': ['5rem', {
        lineHeight: '1.4',
        fontWeight: '900',
      }],
      '8xl': ['7.5rem', {
        lineHeight: '0.88',
        fontWeight: '900',
      }],
      '9xl': ['12.5rem', {
        lineHeight: '1.25',
        fontWeight: '900',
      }],
      '10xl': ['18rem', {
        lineHeight: '0.84',
        fontWeight: '900',
      }]
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
