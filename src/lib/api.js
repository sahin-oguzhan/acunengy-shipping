const API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://dev-acunengy-demo.pantheonsite.io/graphql';

async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 10 },
    });

    const json = await res.json();
    if (json.errors) {
      console.error(
        'GraphQL Hata Detayı:',
        JSON.stringify(json.errors, null, 2),
      );
      return null;
    }
    return json.data;
  } catch (error) {
    console.error('Fetch API Error:', error);
    return null;
  }
}

export async function getHomePageData(locale = 'tr') {
  const currentLang = locale.toLowerCase();
  const langEnum = locale.toUpperCase();

  const query = `
    query GetHomePageData($language: LanguageCodeFilterEnum!) {
      pages(where: { language: $language }, first: 50) {
        nodes {
          id
          title
          slug
          uri
          homepageFields {
            heroGroup {
              heroBadge
              heroTitle
              heroSubtitle
              heroBtnText
              heroVideoUrl
            }
            servicesHeaderGroup {
              badge
              title
              description
              btnText
            }
          }
        }
      }
      services(where: { language: $language }, first: 100) {
        nodes {
          id
          title
          slug
          uri
          serviceFields {
            iconName
            shortDesc
          }
        }
      }
    }
  `;

  const data = await fetchAPI(query, { variables: { language: langEnum } });

  const allPages = data?.pages?.nodes || [];
  const rawServices = data?.services?.nodes || [];

  // Dile göre doğru Ana Sayfa Node'unu seçiyoruz
  let homeNode = allPages.find((p) => {
    if (currentLang === 'en') {
      return p.slug === 'home' || p.uri?.includes('/en/');
    }
    return (
      p.slug === 'ana-sayfa' ||
      p.slug === 'anasayfa' ||
      !p.uri?.includes('/en/')
    );
  });

  if (!homeNode && allPages.length > 0) {
    homeNode = allPages[0];
  }

  // Çift güvenlikli Hizmet listesi süzgeci
  const filteredServices = rawServices.filter((service) => {
    const uri = service.uri || '';
    if (currentLang === 'en') {
      return uri.includes('/en/');
    }
    return !uri.includes('/en/');
  });

  return {
    pageFields: homeNode?.homepageFields || null,
    servicesList: filteredServices,
    fleetList: [],
    industriesList: [],
    specializationsList: [],
  };
}
