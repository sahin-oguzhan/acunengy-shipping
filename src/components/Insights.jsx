import React from 'react';

export default function Insights({ dict }) {
  const articles = [
    {
      category: dict?.art1Cat,
      title: dict?.art1Title,
      description: dict?.art1Desc,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDjpuE0SwBV4iVDfS4H1gpUyyCvYJf60JwsBvEbwNnRqYWHCvTQ5LDZdVZg-h_mJz_gBR0IL2IxbtNOIwPpVgtuiwt7vzD1qUSAtAddjicI6Pbt6EA67rVQaAhRrlOipeBooo18A91lJcY3c4tGc68_zsNhnxVkWSGjpuKDmfZab77dyuC5tS0ptHYobGwB27zrL51LwZzt5XK5FbGrkAFLdlDLgoLptMCGrJTUwpUgO4o3cEvaee0A',
    },
    {
      category: dict?.art2Cat,
      title: dict?.art2Title,
      description: dict?.art2Desc,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAl-sKy6ROYCUpIkoWZd6DiZPqingiTU17ByLNmkZLipR02WSySWKMgEKYbA0Vpo8wCh3QVbqwfXMWIglH996QA939dSMax1uMk_3JJE9VHD5AOfK2ycKcsN0D-ewiX_VeJY83SLhiF3xDCy_WSi3WpnpBRoIzzwClg1VYPzpLx0TNpRJXDPylD7w8NkFzJHbs8GKRoHbtqvm5a16w7R3IKs-Ccn0G9iNfAEuXu3y_y1qAolnLNhUxX',
    },
    {
      category: dict?.art3Cat,
      title: dict?.art3Title,
      description: dict?.art3Desc,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC-_MfOJCJq-YcRdMQuj-us6C6goW_kaMaaS_g0l4U_b8Si-e4TlR5Noj9EGuuZ7gOKRaK0OB-TvVeNVG8ruVB_KARwt9rruNXMs6JU376zkDWg8PoYRjNVcQFGa2f8WuPUE-1ZAVfM01Vzbb38anbpddGv3mSRNaJ8iRO3BTU4RQTDS4MfFkLAokNqOujXJokFHlBmd8959u_sU16vW6DP0hMRdzH_zKXnW_kQ8iuVu098yAH3TfPF',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-customSurface">
      {/* Üst Başlık ve "Tüm Makaleler" Butonu */}
      <div className="flex justify-between items-end mb-16 border-b border-customBorder pb-6">
        <h2 className="text-3xl md:text-5xl text-customText font-bold font-heading">
          {dict?.title}
        </h2>
        <button className="font-mono text-sm text-customText border-b-2 border-transparent hover:border-customAccent hover:text-customAccent transition-all uppercase tracking-widest font-bold hidden md:block">
          {dict?.btnAllArticles}
        </button>
      </div>

      {/* 3'lü Haber Gridi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {articles.map((article, index) => (
          <div key={index} className="group cursor-pointer flex flex-col">
            {/* Görsel */}
            <div className="h-64 overflow-hidden mb-6 rounded-sm border border-customBorder">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={article.title}
                src={article.image}
              />
            </div>

            {/* Kategori Etiketi */}
            <span className="font-mono text-xs text-customMuted mb-3 block uppercase tracking-widest font-bold">
              {article.category}
            </span>

            {/* Başlık */}
            <h4 className="text-xl font-bold text-customText mb-4 font-heading group-hover:text-customAccent transition-colors line-clamp-2">
              {article.title}
            </h4>

            {/* Açıklama */}
            <p className="text-customMuted text-sm leading-relaxed line-clamp-2">
              {article.description}
            </p>
          </div>
        ))}
      </div>

      {/* Sadece mobilde görünen "Tüm Makaleler" butonu */}
      <button className="mt-10 font-mono text-sm text-customText border-b-2 border-customText hover:border-customAccent hover:text-customAccent transition-all uppercase tracking-widest font-bold block md:hidden mx-auto">
        {dict?.btnAllArticles}
      </button>
    </section>
  );
}
