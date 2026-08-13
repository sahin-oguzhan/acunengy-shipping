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
            approachGroup {
              badge
              title
              description
              item1Title
              item1Desc
              item2Title
              item2Desc
              item3Title
              item3Desc
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
            aboutGroup {
              badge
              title
              description
              card1Title
              card1Desc
              card2Title
              card2Desc
              metric1Value
              metric1Label
              metric2Value
              metric2Label
            }
            statsGroup {
              stat1Val
              stat1Lbl
              stat2Val
              stat2Lbl
              stat3Val
              stat3Lbl
              stat4Val
              stat4Lbl
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
            category
            code
            description
            iconName
            statsValue
            statsLabel
          }
        }
      }

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
          industryFields {
            tag
            description
          }
        }
      }

      posts(where: { language: $language }, first: 20) {
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

  const filteredPosts = rawPosts
    .filter((p) =>
      currentLang === 'en' ? p.uri?.includes('/en/') : !p.uri?.includes('/en/'),
    )
    .slice(0, 3);

  return {
    pageFields: homeNode?.homepageFields || null,
    servicesList: filteredServices,
    industriesList: filteredIndustries,
    specializationsList: filteredSpecs,
    newsList: filteredPosts,
  };
}
