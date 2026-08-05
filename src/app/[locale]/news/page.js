import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

async function getAllPosts(locale) {
  const API_URL =
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
    'https://dev-acunengy-demo.pantheonsite.io/graphql';

  const langEnum = locale.toUpperCase();

  const query = `
    query GetAllPosts($language: LanguageCodeFilterEnum!) {
      posts(where: { language: $language }, first: 100) {
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

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { language: langEnum } }),
      next: { revalidate: 10 },
    });
    const json = await res.json();
    return json.data?.posts?.nodes || [];
  } catch (error) {
    console.error('Fetch All Posts Error:', error);
    return [];
  }
}

export default async function NewsArchivePage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const currentLang = locale.toLowerCase();

  const rawPosts = await getAllPosts(locale);

  // DİL FİLTRESİ: İngilizce sayfasında URI'sinde /en/ olanlar, Türkçe sayfasında ise olmayanlar filtrelenir.
  const filteredPosts = rawPosts.filter((post) =>
    currentLang === 'en'
      ? post.uri?.includes('/en/')
      : !post.uri?.includes('/en/'),
  );

  const posts = filteredPosts.map((post) => {
    const formattedDate = post.date
      ? new Date(post.date).toLocaleDateString(
          currentLang === 'tr' ? 'tr-TR' : 'en-US',
          { day: 'numeric', month: 'short', year: 'numeric' },
        )
      : '';

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      date: formattedDate,
      category:
        post.categories?.nodes[0]?.name ||
        (currentLang === 'tr' ? 'HABERLER' : 'NEWS'),
      image: post.featuredImage?.node?.sourceUrl || '',
    };
  });

  return (
    <main className="min-h-screen bg-customBg text-customText pt-36 pb-20 px-6 md:px-16 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full mb-20">
        {/* Ana Sayfa Bülten Bölümüne Yönlendiren Link */}
        <Link
          href={`/${locale}#news`}
          className="inline-flex items-center gap-2 font-mono text-xs text-customAccent font-bold uppercase mb-8 hover:underline"
        >
          ← {currentLang === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
        </Link>

        <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-4">
          {currentLang === 'tr'
            ? 'Tüm Haberler & Analizler'
            : 'All News & Insights'}
        </h1>
        <p className="text-customMuted text-base md:text-lg max-w-2xl mb-12">
          {currentLang === 'tr'
            ? 'Denizcilik, lojistik ve ağır nakliyat sektöründen en son gelişmeler.'
            : 'Latest updates and industry insights from maritime, logistics, and heavy lift operations.'}
        </p>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/${locale}/${post.slug}`}
                className="relative h-[420px] rounded-3xl overflow-hidden border border-customBorder/80 bg-slate-950 shadow-2xl flex flex-col justify-between p-8 group cursor-pointer hover:border-customAccent/60 transition-all duration-300 hover:-translate-y-2 block"
              >
                {post.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

                <div className="relative z-20 flex items-center justify-between">
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-widest bg-black/70 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                <div className="relative z-10 text-white">
                  <span className="font-mono text-xs text-gray-300 block mb-2 font-semibold">
                    {post.date}
                  </span>
                  <h3 className="text-xl font-black font-heading text-white leading-snug group-hover:text-[#38bdf8] transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-customMuted font-mono">
            {currentLang === 'tr'
              ? 'Bu dilde henüz haber bulunmuyor.'
              : 'No posts found in this language.'}
          </div>
        )}
      </div>

      <Footer locale={locale} />
    </main>
  );
}
