import { defineConfig } from 'vitest/config';
import astro from '@astrojs/vitest';

export default defineConfig({
  plugins: [astro()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
