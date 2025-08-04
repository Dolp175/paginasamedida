// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        5000: "5000ms",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      opacity: ["group-hover"],
      transform: ["group-hover"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
