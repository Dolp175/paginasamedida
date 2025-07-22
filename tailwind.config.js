// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      display: ['group-hover'],
      opacity: ['group-hover'],
      transform: ['group-hover'],
    },
  },
  plugins: [],
}

