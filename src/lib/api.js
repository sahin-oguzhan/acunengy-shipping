// WordPress API adresi
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getHomePageData(locale = 'en') {
  try {
    const slug = locale === 'tr' ? 'ana-sayfa' : 'home';

    const res = await fetch(`${API_URL}/pages?slug=${slug}&_embed`, {
      next: { revalidate: 10 },
    });

    if (!res.ok) throw new Error('Ana sayfa verileri alınamadı');

    const pages = await res.json();

    if (pages.length > 0) {
      const page = pages[0];
      const acf = page.acf || {};

      return {
        // Hero
        heroBadge: acf.hero_badge,
        heroTitle: acf.hero_title,
        heroTitle2: acf.hero_title2,
        heroSubtitle: acf.hero_subtitle,
        heroBtnQuote: acf.hero_btn_quote,
        heroBtnServices: acf.hero_btn_services,

        // About
        aboutBadge: acf.about_badge,
        aboutTitle1: acf.about_title1,
        aboutTitle2: acf.about_title2,
        aboutDesc1: acf.about_desc1,
        aboutDesc2: acf.about_desc2,

        // Services
        servicesBadge: acf.services_badge,
        servicesTitle: acf.services_title,
        servicesDesc: acf.services_desc,
        servicesBtn: acf.services_btn,
        servicesList: [
          {
            icon: 'anchor',
            title: acf.service_1_title,
            desc: acf.service_1_desc,
          },
          {
            icon: 'directions_boat',
            title: acf.service_2_title,
            desc: acf.service_2_desc,
          },
          {
            icon: 'precision_manufacturing',
            title: acf.service_3_title,
            desc: acf.service_3_desc,
          },
          {
            icon: 'architecture',
            title: acf.service_4_title,
            desc: acf.service_4_desc,
          },
          {
            icon: 'wind_power',
            title: acf.service_5_title,
            desc: acf.service_5_desc,
          },
          {
            icon: 'support_agent',
            title: acf.service_6_title,
            desc: acf.service_6_desc,
          },
        ],
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
