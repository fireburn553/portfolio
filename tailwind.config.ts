// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // We are only using the app directory, so we only need this path.
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config