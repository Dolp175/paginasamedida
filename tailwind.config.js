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
      typography: (theme) => ({
        blog: {
          css: {
            h2: {
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.3xl')[0],
              lineHeight: theme('fontSize.3xl')[1].lineHeight,
              '@screen md': {
                fontSize: theme('fontSize.4xl')[0],
                lineHeight: theme('fontSize.4xl')[1].lineHeight,
              },
            },
          },
        },
      }),
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
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide')
  ],
};
