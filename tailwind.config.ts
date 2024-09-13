import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        hgray500: '#737994',
        hblue500: '#8CAAEE',
        hblue900: '#303446',
        javascript: '#F7DF1E',
        typescript: '#3178C6',
        nodejs: '#339933',
        python: '#3776AB',
        react: '#61DAFB',
        nextjs: '#000000',
        nestjs: '#E0234E',
        express: '#404D59',
        django: '#092E20',
        github: '#181717',
        postgresql: '#336791',
      },
      width: {
        120: '3grem',
        125: '31.25rem',
      },
      height: {
        120: '3grem',
        125: '31.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
