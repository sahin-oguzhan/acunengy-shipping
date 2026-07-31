import React from 'react';
import { getHomePageData, getPosts } from '@/lib/api';

export default async function Insights({ dict, locale }) {
  // WordPress'ten hem ana sayfa başlık verilerini hem de son 3 makaleyi çekiyoruz
  const [wpData, posts] = await Promise.all([
    getHomePageData(locale),
    getPosts(3),
  ]);

  // Başlık Alanları (WP ACF -> JSON Dict -> Fallback)
  const displayBadge = wpData?.insightsBadge || dict?.badge || 'OUR INSIGHTS';
  const displayTitle =
    wpData?.insightsTitle || dict?.title || 'Latest News & Perspectives';
  const displayDesc =
    wpData?.insightsDesc ||
    dict?.description ||
    'Expert analysis and updates from the maritime logistics sector.';
  const displayBtnReadMore = dict?.btnReadMore || 'READ ARTICLE';

  return (
    <section className="py-24 px-6 md:px-16 bg-customBg">
      {/* Başlık Alanı */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <span className="font-mono text-xs md:text-sm text-customMuted tracking-widest uppercase mb-4 block font-medium">
          {displayBadge}
        </span>
        <h2 className="text-3xl md:text-5xl text-customText font-bold mb-6 font-heading tracking-tight">
          {displayTitle}
        </h2>
        <p className="text-customMuted text-base md:text-lg">{displayDesc}</p>
      </div>

      {/* WordPress'ten Gelen Yazıların Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-customSurface p-8 border border-customBorder hover:border-customAccent transition-all duration-300 group shadow-sm hover:shadow-xl rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-customAccent mb-3 block uppercase tracking-wider">
                  MARITIME NEWS
                </span>
                <h3 className="text-xl font-bold font-heading text-customText mb-4 group-hover:text-customAccent transition-colors">
                  {post.title?.rendered}
                </h3>
                <div
                  className="text-customMuted mb-6 text-sm leading-relaxed line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt?.rendered || '',
                  }}
                />
              </div>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-customText font-bold flex items-center gap-2 group-hover:gap-4 group-hover:text-customAccent transition-all uppercase tracking-wider"
              >
                {displayBtnReadMore}{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-customMuted">
            Henüz bir makale eklenmemiş veya WordPress bağlantısı kurulamadı.
          </p>
        )}
      </div>
    </section>
  );
}
