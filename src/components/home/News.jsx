'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function News({ dict, locale, wpData }) {
  const displayBadge =
    wpData?.newsBadge || dict?.badge || 'MARKET INTELLIGENCE';
  const displayTitle = wpData?.newsTitle || dict?.title || 'News & Insights';
  const displayDesc =
    wpData?.newsDesc ||
    dict?.description ||
    'Corporate updates, heavy-lift logistics analysis, and global maritime market trends.';
  const displayBtn = dict?.viewAll || 'VIEW ALL INSIGHTS';

  const dynamicPosts = wpData?.newsList || [];

  const fallbackPosts = [
    {
      id: 'post-1',
      date: 'OCT 28, 2023',
      category: 'INDUSTRY UPDATE',
      title: 'Decarbonization in Maritime Logistics: The 2024 IMO Outlook',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'post-2',
      date: 'OCT 15, 2023',
      category: 'OPERATIONS',
      title: 'Heavy-Lift Fleet Expansion: Acunengy Titan Joins the Fleet',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'post-3',
      date: 'SEP 30, 2023',
      category: 'MARKET TRENDS',
      title: 'Offshore Wind Logistics: Managing the Scale of 15MW Turbines',
      readTime: '8 min read',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const finalPosts = dynamicPosts.length > 0 ? dynamicPosts : fallbackPosts;

  return (
    <section className="py-28 px-6 md:px-16 bg-customSurface/60 border-t border-customBorder/80 transition-colors duration-300 relative overflow-hidden">
      {/* Arka plan derinlik efekti */}
      <div className="absolute inset-0 bg-customBg/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Başlık Alanı */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block font-mono text-xs md:text-sm text-customAccent tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full bg-customAccent/10 border border-customAccent/20 font-semibold">
                {displayBadge}
              </span>
              <h2 className="text-3xl md:text-5xl text-customText font-black font-heading tracking-tight">
                {displayTitle}
              </h2>
            </div>
            <p className="text-customMuted text-base md:text-lg max-w-md leading-relaxed font-normal">
              {displayDesc}
            </p>
          </div>
        </FadeIn>

        {/* 3 Haber Kartı Grid (Sinematik Görsel Kart Mimarisi) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {finalPosts.map((post, index) => (
            <FadeIn key={post.id || index} delay={index * 0.1} direction="up">
              <div className="relative h-[480px] rounded-3xl overflow-hidden border border-customBorder/80 bg-slate-950 shadow-2xl flex flex-col justify-between p-8 group cursor-pointer hover:border-customAccent/60 transition-all duration-300 hover:-translate-y-2">
                {/* Arka Plan Görseli */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${post.image || fallbackPosts[0].image})`,
                  }}
                />

                {/* Akıllı Gradyan Maskesi (Koyu Kapsayıcı) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 transition-all duration-300" />

                {/* Üst Kısım: Tarih ve Okuma Süresi (Her iki modda BEYAZ) */}
                <div className="relative z-20 flex items-center justify-between">
                  <span className="font-mono text-xs text-white font-bold uppercase tracking-widest bg-black/70 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-md">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-white/90 font-semibold bg-black/70 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                    {post.readTime}
                  </span>
                </div>

                {/* Alt Kısım: Başlık ve Link (Her iki modda BEYAZ) */}
                <div className="relative z-10 text-white">
                  <span className="font-mono text-xs text-gray-300 block mb-2 font-semibold">
                    {post.date}
                  </span>

                  <h3 className="text-xl md:text-2xl font-black font-heading text-white mb-6 leading-snug group-hover:text-[#38bdf8] transition-colors line-clamp-3 tracking-tight drop-shadow-md">
                    {post.title}
                  </h3>

                  <div className="pt-5 border-t border-white/20 flex items-center justify-between">
                    <a
                      href="#"
                      className="font-mono text-xs text-white group-hover:text-[#38bdf8] font-extrabold flex items-center gap-2 transition-all uppercase tracking-wider"
                    >
                      Read Analysis{' '}
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform text-[#38bdf8]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* "View All" Butonu (Modern Hap Buton) */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2.5 font-mono text-xs text-customText bg-customBg/80 hover:bg-customAccent hover:text-slate-950 border border-customBorder hover:border-customAccent px-8 py-4 rounded-2xl transition-all font-extrabold uppercase tracking-widest shadow-lg backdrop-blur-xl"
          >
            {displayBtn}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
