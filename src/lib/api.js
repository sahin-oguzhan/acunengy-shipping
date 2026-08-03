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
      # 1. Ana Sayfa ACF Alanları
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
            specializationsHeaderGroup {
              badge
              title
              description
            }
            industriesHeaderGroup {
              badge
              title
              description
            }
            fleetHeaderGroup {
              badge
              title
              description
            }
            newsHeaderGroup {
              badge
              title
              description
              btnText
            }
            contactGroup {
              badge
              title
              description
              phone
              email
              address
              whatsapp
            }
          }
        }
      }

      # 2. Hizmetler CPT
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

      # 3. Uzmanlıklar CPT
      specializations(where: { language: $language }, first: 20) {
        nodes {
          id
          title
          slug
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
          specFields {
            kategori
            ikonAdi
            description
          }
        }
      }

      # 4. Sektörler CPT
      industries(where: { language: $language }, first: 20) {
        nodes {
          id
          title
          slug
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }

      # 5. Filo / Gemiler CPT
      vessels(where: { language: $language }, first: 30) {
        nodes {
          id
          title
          slug
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
          fleetFields {
            category
            vesselType
            vesselStatus
          }
        }
      }

      # 6. WordPress Standart Posts (Yazılar)
      posts(where: { language: $language }, first: 3) {
        nodes {
          id
          title
          slug
          uri
          date
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const data = await fetchAPI(query, { variables: { language: langEnum } });

  const allPages = data?.pages?.nodes || [];
  const rawServices = data?.services?.nodes || [];
  const rawSpecs = data?.specializations?.nodes || [];
  const rawIndustries = data?.industries?.nodes || [];
  const rawFleet = data?.vessels?.nodes || [];
  const rawPosts = data?.posts?.nodes || [];

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

  const filteredServices = rawServices.filter((s) =>
    currentLang === 'en' ? s.uri?.includes('/en/') : !s.uri?.includes('/en/'),
  );

  const filteredSpecs = rawSpecs.filter((s) =>
    currentLang === 'en' ? s.uri?.includes('/en/') : !s.uri?.includes('/en/'),
  );

  const filteredIndustries = rawIndustries.filter((i) =>
    currentLang === 'en' ? i.uri?.includes('/en/') : !i.uri?.includes('/en/'),
  );

  const filteredFleet = rawFleet.filter((f) =>
    currentLang === 'en' ? f.uri?.includes('/en/') : !f.uri?.includes('/en/'),
  );

  const filteredPosts = rawPosts.filter((p) =>
    currentLang === 'en' ? p.uri?.includes('/en/') : !p.uri?.includes('/en/'),
  );

  return {
    pageFields: homeNode?.homepageFields || null,
    servicesList: filteredServices,
    fleetList: filteredFleet,
    industriesList: filteredIndustries,
    specializationsList: filteredSpecs,
    newsList: filteredPosts,
  };
}
