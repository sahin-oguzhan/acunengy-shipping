import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

async function getPostData(slug) {
  const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  const query = `
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        title
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { id: slug } }),
      next: { revalidate: 10 },
    });
    const json = await res.json();
    return json.data?.post || null;
  } catch (error) {
    console.error('Fetch Post Error:', error);
    return null;
  }
}

export default async function PostDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;

  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const categoryName =
    post.categories?.nodes[0]?.name || (locale === 'tr' ? 'HABERLER' : 'NEWS');
  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === 'tr' ? 'tr-TR' : 'en-US',
    { day: 'numeric', month: 'long', year: 'numeric' },
  );

  return (
    <main className="min-h-screen bg-customBg text-customText pt-36 pb-20 px-6 md:px-12 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full mb-20">
        {/* Geri Dön Butonu */}
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 font-mono text-xs text-customAccent font-bold uppercase mb-8 hover:underline"
        >
          ← {locale === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
        </Link>

        {/* Kategori & Tarih */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-customAccent font-bold uppercase px-3.5 py-1.5 bg-customAccent/10 rounded-full border border-customAccent/20">
            {categoryName}
          </span>
          <span className="font-mono text-xs text-customMuted font-semibold">
            {formattedDate}
          </span>
        </div>

        {/* Başlık */}
        <h1 className="text-3xl md:text-5xl font-black font-heading tracking-tight mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Öne Çıkan Görsel */}
        {post.featuredImage?.node?.sourceUrl && (
          <div className="relative w-full h-[360px] md:h-[520px] rounded-3xl overflow-hidden mb-12 border border-customBorder/80 shadow-2xl">
            <img
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* İçerik */}
        <div
          className="prose dark:prose-invert max-w-none text-customText/90 leading-relaxed text-base md:text-lg space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <Footer locale={locale} />
    </main>
  );
}
