import React from 'react';
import FadeIn from '@/components/FadeIn';

export default function News({ dict, locale, wpData }) {
  const displayBadge =
    wpData?.newsBadge || dict?.badge || 'MARKET INTELLIGENCE';
  const displayTitle = wpData?.newsTitle || dict?.title || 'News & Insights';
  const displayDesc =
    wpData?.newsDesc ||
    dict?.description ||
    'Corporate updates, heavy-lift logistics analysis, and global maritime market trends.';
  const displayBtn = dict?.viewAll || 'VIEW ALL INSIGHTS';

  // WordPress'ten gelen dinamik haber listesi (boşsa fallback eklenebilir)
  const dynamicPosts = wpData?.newsList || [];

  // YEDEK HABER LİSTESI (WP'den veri gelmezse görünecek kurumsal Fallback)
  const fallbackPosts = [
    {
      id: 'post-1',
      date: 'OCT 28, 2023',
      category: 'INDUSTRY UPDATE',
      title: 'Decarbonization in Maritime Logistics: The 2024 IMO Outlook',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=600&auto=format&fit=crop', // Container ship/Engineering
    },
    {
      id: 'post-2',
      date: 'OCT 15, 2023',
      category: 'OPERATIONS',
      title: 'Heavy-Lift Fleet Expansion: Acunengy Titan Joins the Fleet',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop', // Crane ship
    },
    {
      id: 'post-3',
      date: 'SEP 30, 2023',
      category: 'MARKET TRENDS',
      title: 'Offshore Wind Logistics: Managing the Scale of 15MW Turbines',
      readTime: '8 min read',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop', // Wind Farm
    },
  ];

  const finalPosts = dynamicPosts.length > 0 ? dynamicPosts : fallbackPosts;

  return (
    <section className="py-24 px-6 md:px-16 bg-customSurface border-t border-customBorder transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs text-customAccent tracking-widest uppercase mb-3 block font-semibold">
                {displayBadge}
              </span>
              <h2 className="text-3xl md:text-5xl text-customText font-bold font-heading tracking-tight">
                {displayTitle}
              </h2>
            </div>
            <p className="text-customMuted text-sm md:text-base max-w-md leading-relaxed">
              {displayDesc}
            </p>
          </div>
        </FadeIn>

        {/* 3 Haber Kartı Grid (Premium B2B Kart Mimarisi) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {finalPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1} direction="up">
              <div className="bg-customCard p-6 md:p-8 rounded-lg border border-customBorder hover:border-customAccent/50 transition-all duration-300 flex flex-col justify-between h-full group shadow-md hover:shadow-xl hover:-translate-y-1.5">
                <div>
                  {/* Tarih, Kategori ve Okuma Süresi Paneli */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-customBorder">
                    <span className="font-mono text-[10px] text-customMuted font-medium uppercase tracking-wider">
                      {post.date}
                    </span>
                    <span className="font-mono text-[10px] text-customMuted uppercase font-medium">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Kategori Rozeti */}
                  <span className="font-mono text-[11px] text-customAccent font-bold uppercase tracking-widest bg-customAccent/10 px-3 py-1 rounded border border-customAccent/30 inline-block mb-4">
                    {post.category}
                  </span>

                  {/* Başlık (Ultra-Net) */}
                  <h3 className="text-xl font-bold font-heading text-customText mb-12 leading-snug group-hover:text-customAccent transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                </div>

                {/* Alt Kısım: Link/İkon */}
                <div className="flex items-center justify-between pt-6 border-t border-customBorder mt-auto">
                  <a
                    href="#"
                    className="font-mono text-xs text-customText font-bold flex items-center gap-2 group-hover:gap-3 group-hover:text-customAccent transition-all uppercase tracking-wider"
                  >
                    Read Analysis{' '}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* "View All" Butonu (Center) */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2.5 font-mono text-xs text-white bg-[#0B2341] hover:bg-[#12325A] border border-[#0B2341] px-8 py-4 rounded-sm transition-all font-bold uppercase tracking-wider shadow-lg"
          >
            {displayBtn}
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
