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
        // Stats
        statsList: [
          { value: acf.stat_1_value, label: acf.stat_1_label },
          { value: acf.stat_2_value, label: acf.stat_2_label },
          { value: acf.stat_3_value, label: acf.stat_3_label },
          { value: acf.stat_4_value, label: acf.stat_4_label },
        ],
        // Industries
        industriesBadge: acf.industries_badge,
        industriesTitle: acf.industries_title,
        industriesDesc: acf.industries_desc,
        industriesList: [
          {
            icon: 'directions_boat',
            title: acf.industry_1_title,
            desc: acf.industry_1_desc,
          },
          {
            icon: 'precision_manufacturing',
            title: acf.industry_2_title,
            desc: acf.industry_2_desc,
          },
          {
            icon: 'tsunami',
            title: acf.industry_3_title,
            desc: acf.industry_3_desc,
          },
          {
            icon: 'factory',
            title: acf.industry_4_title,
            desc: acf.industry_4_desc,
          },
        ],
        // EliteAdvantages
        advBadge: acf.adv_badge,
        advTitle1: acf.adv_title1,
        advTitle2: acf.adv_title2,
        advantagesList: [
          { icon: 'schedule', title: acf.adv_1_title, desc: acf.adv_1_desc },
          { icon: 'speed', title: acf.adv_2_title, desc: acf.adv_2_desc },
          {
            icon: 'verified_user',
            title: acf.adv_3_title,
            desc: acf.adv_3_desc,
          },
        ],
        // Insights
        insightsBadge: acf.insights_badge,
        insightsTitle: acf.insights_title,
        insightsDesc: acf.insights_desc,
        //Contact
        contactBadge: acf.contact_badge,
        contactTitle: acf.contact_title,
        contactDesc: acf.contact_desc,
        contactPhone: acf.contact_phone,
        contactEmail: acf.contact_email,
        contactAddress: acf.contact_address,
        contactWhatsapp: acf.contact_whatsapp,
      };
    }
    return null;
  } catch (error) {
    console.error('API Error (getHomePageData):', error);
    return null;
  }
}

export async function getPosts(perPage = 3) {
  try {
    const res = await fetch(`${API_URL}/posts?per_page=${perPage}&_embed`, {
      next: { revalidate: 10 },
    });

    if (!res.ok) throw new Error('WordPress yazıları alınamadı');

    return await res.json();
  } catch (error) {
    console.error('API Error (getPosts):', error);
    return [];
  }
}
