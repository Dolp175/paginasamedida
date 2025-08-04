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
        DEFAULT: {
          css: {
            h2: {
              display: 'flex',
              alignItems: 'center',
              gap: theme('spacing.3'),
            },
            'h2::before': {
              content: '""',
              width: theme('spacing.3'),
              height: theme('spacing.3'),
              backgroundColor: theme('colors.purple.600'),
              borderRadius: theme('borderRadius.full'),
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
