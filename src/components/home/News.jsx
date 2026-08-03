'use client';

import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';

export default function News({ dict, locale, wpData }) {
  // 1. ACF Başlık Bilgileri
  const headerData = wpData?.pageFields?.newsHeaderGroup;
  const displayBadge = headerData?.badge || '';
  const displayTitle = headerData?.title || '';
  const displayDesc = headerData?.description || '';
  const displayBtn =
    headerData?.btnText || (locale === 'tr' ? 'TÜM HABERLER' : 'VIEW ALL NEWS');

  // 2. Doğrudan WordPress Posts (Yazılar) Verisi
  const rawPosts = wpData?.newsList || [];

  const finalPosts = rawPosts.map((post, index) => {
    const formattedDate = post.date
      ? new Date(post.date)
          .toLocaleDateString(locale === 'en' ? 'en-US' : 'tr-TR', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
          .toUpperCase()
      : '';

    const firstCategory =
      post.categories?.nodes?.[0]?.name ||
      (locale === 'tr' ? 'HABERLER' : 'NEWS');

    return {
      id: post.id || `post-${index}`,
      title: post.title,
      slug: post.slug,
      date: formattedDate,
      category: firstCategory,
      readTime: locale === 'tr' ? '5 dk okuma' : '5 min read',
      image: post.featuredImage?.node?.sourceUrl || '',
    };
  });

  // Veri yoksa bileşeni gizle
  if (!displayTitle && !displayBadge && finalPosts.length === 0) {
    return null;
  }

  const readAnalysisText = locale === 'tr' ? 'DETAYLI OKU' : 'READ ANALYSIS';

  return (
    <section className="py-28 px-6 md:px-16 bg-customSurface/60 border-t border-customBorder/80 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-customBg/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* BAŞLIK ALANI */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              {displayBadge && (
                <span className="inline-block font-mono text-xs md:text-sm text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
                  {displayBadge}
                </span>
              )}
              {displayTitle && (
                <h2 className="text-3xl md:text-5xl text-customText font-black font-heading tracking-tight">
                  {displayTitle}
                </h2>
              )}
            </div>
            {displayDesc && (
              <p className="text-customMuted text-base md:text-lg max-w-md leading-relaxed font-normal">
                {displayDesc}
              </p>
            )}
          </div>
        </FadeIn>

        {/* HABER KARTLARI (POSTS) GRID */}
        {finalPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {finalPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1} direction="up">
                <Link
                  href={`/${locale}/${post.slug}`}
                  className="relative h-[480px] rounded-3xl overflow-hidden border border-customBorder/80 bg-slate-950 shadow-2xl flex flex-col justify-between p-8 group cursor-pointer hover:border-customAccent/60 transition-all duration-300 hover:-translate-y-2 block"
                >
                  {/* ARKA PLAN GÖRSELİ */}
                  {post.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                  )}

                  {/* GRADYAN MASKESİ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 transition-all duration-300" />

                  {/* ÜST KISIM: KATEGORİ VE OKUMA SÜRESİ */}
                  <div className="relative z-20 flex items-center justify-between">
                    {post.category && (
                      <span className="font-mono text-xs text-white font-bold uppercase tracking-widest bg-black/70 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                        {post.category}
                      </span>
                    )}
                    <span className="font-mono text-xs text-white/90 font-semibold bg-black/70 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md ml-auto">
                      {post.readTime}
                    </span>
                  </div>

                  {/* ALT KISIM: TARİH VE BAŞLIK */}
                  <div className="relative z-10 text-white">
                    {post.date && (
                      <span className="font-mono text-xs text-gray-300 block mb-2 font-semibold">
                        {post.date}
                      </span>
                    )}

                    <h3 className="text-xl md:text-2xl font-black font-heading text-white mb-6 leading-snug group-hover:text-[#38bdf8] transition-colors line-clamp-3 tracking-tight drop-shadow-md">
                      {post.title}
                    </h3>

                    <div className="pt-5 border-t border-white/20 flex items-center justify-between">
                      <span className="font-mono text-xs text-white group-hover:text-[#38bdf8] font-extrabold flex items-center gap-2 transition-all uppercase tracking-wider">
                        {readAnalysisText}{' '}
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform text-[#38bdf8]">
                          arrow_forward
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}

        {/* VIEW ALL / DÜĞME ALANI */}
        <div className="text-center">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2.5 font-mono text-xs text-customText hover:text-white bg-customBg/80 hover:bg-customAccent border border-customBorder hover:border-customAccent px-8 py-4 rounded-2xl transition-all font-extrabold uppercase tracking-widest shadow-lg backdrop-blur-xl"
          >
            {displayBtn}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
