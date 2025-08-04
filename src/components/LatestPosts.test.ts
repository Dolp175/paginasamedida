import { render } from '@astrojs/test';
import { expect, test } from 'vitest';
import LatestPosts from './LatestPosts.astro';

test('renders LatestPosts heading', async () => {
  const { container } = await render(LatestPosts);
  expect(container.querySelector('h2')?.textContent).toContain('Últimos');
});

test('shows three articles', async () => {
  const { container } = await render(LatestPosts);
  const articles = container.querySelectorAll('article');
  expect(articles.length).toBe(3);
});
