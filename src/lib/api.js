// WordPress API adresi
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getHomePageData(locale = 'en') {
  try {
    const slug = locale === 'tr' ? 'ana-sayfa' : 'home';

    const res = await fetch(`${API_URL}/pages?slug=${slug}&_embed`, {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error('Ana sayfa verileri alınamadı');
    }

    const pages = await res.json();

    if (pages.length > 0) {
      const page = pages[0];
      return {
        heroBadge: page.acf?.hero_badge,
        heroTitle: page.acf?.hero_title,
        heroTitle2: page.acf?.hero_title2,
        heroSubtitle: page.acf?.hero_subtitle,
        heroBtnQuote: page.acf?.hero_btn_left,
        heroBtnServices: page.acf?.hero_btn_right,
      };
    }
    return null;
  } catch (error) {
    console.error('API Error (getHomePageData):', error);
    return null;
  }
}

export async function getInsights(locale = 'en') {
  try {
    const res = await fetch(
      `${API_URL}/posts?_embed&lang=${locale}&per_page=3`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      throw new Error('Failed to fetch insights from WordPress');
    }

    const posts = await res.json();

    return posts.map((post) => ({
      category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'LOGISTICS',
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>?/gm, ''),
      image:
        post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
        '/default-image.jpg',
      slug: post.slug,
    }));
  } catch (error) {
    console.error('API Error (getInsights):', error);
    return [];
  }
}
