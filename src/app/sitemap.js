async function fetchNewsSlugs() {
  const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  const query = `
    query GetSitemapPosts {
      posts(first: 100) {
        nodes {
          slug
          uri
        }
      }
    }
  `;

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    return json.data?.posts?.nodes || [];
  } catch (error) {
    console.error('Sitemap Fetch Error:', error);
    return [];
  }
}

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acunengy.com';

  // Statik Sayfalar (TR ve EN)
  const staticPages = ['', '/news', '/privacy', '/terms'];
  const locales = ['tr', 'en'];

  const staticUrls = [];

  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      staticUrls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      });
    });
  });

  // Dinamik Haber/Blog Sayfaları
  const posts = await fetchNewsSlugs();
  const newsUrls = posts.map((post) => {
    const isEn = post.uri?.includes('/en/');
    const locale = isEn ? 'en' : 'tr';

    return {
      url: `${baseUrl}/${locale}/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  return [...staticUrls, ...newsUrls];
}
