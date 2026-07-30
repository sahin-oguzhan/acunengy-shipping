import React from 'react';

const industriesData = [
  {
    title: 'Wind Energy',
    description: 'Renewable energy logistics & marine support.',
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2VXzHFpmXARNEFGOWi0b2eChN9kg5dy6GFBnxJIlsFEFEzzMFnyIypOGAmEqHO4Bn_whfPhV2k-qz2EBfA_6lw0IdhIfi7XV0en2YYZAv0Lg5XH4yulCDZkUU2yteg-BFdifNW3LsGOpoQJPOcN2q32YkCEgAYJmh5YWSnQCwtv1A1EUmDdKfyaDrkhZmm3OIF48d5ZWBSA_yG4oj_ptag2xE48NbP2k-5URCMBXbPEg-CZITFDI7')",
  },
  {
    title: 'Oil & Gas',
    description: 'Offshore supply and specialized equipment transport.',
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdHWULrqjTjnrB3Ii9IwRwP3cMS03TMoBE7QJ6jvR0uZl0uE7hNrQ8SYeX-a3rWMUucLx-1gV6plOUeekz7uPaNdFTK8utxJbcelV8qOhUSpEOaLgVqIttK0MgZ1r15opXs9llcRTb1DC1xBb59ZCOxMYqzDMqnGhVsz9FNFg8vOQI4u1W_9YMQGmCpNYJr52eTyNR7Y5vnBAH6tPgeOXYgl-_2Uszp7hNTKFhL55wdt8hP10RTLx9')",
  },
  {
    title: 'Construction',
    description: 'Global machinery distribution and oversized cargo.',
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUHLGPBufgVVLfWTRwu4dGvDk9C9WxkYkV_m-QJp_dg0uz3i5-R-JWVGtEQ6T4XWW9Not875wbvEumaXrbb-y7zHNIFo22eL4ghu8Vv9_4Sh1qG1TQX1zo5VcGhjSbLdXAKXMaw2xXe_f5UudB8AxoJQtYi6ZtvaMkvEcIx3oINgbnoHBPAJPeFsG_e0EgzubbJLqXZ5PYoxUaB1zg39XB4tOOlsTcFAa-DPEV6Nk1r0QS4MvfNzyw')",
  },
  {
    title: 'Marine',
    description: 'Vessel maintenance, bunkering, and technical ops.',
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB95PvZsKMhN69H625sgZu9MtcVrItzhaB_Xu-4JKnPsSJiDWknBPa-vJT0Gu6TPqFKZ0TbmcAT5cIiKXFauPFQLKNPSWVd2vowl5Q6_JNJ4ESyv07AWmY4tho-T8jWM3pesHyI6b3v0-ye-Bk3M4NKo-EPUP_42Zoe-tyQQcDvYB1xzT8VCqkwXjCILNWXMa4xcKY8IVwLGsQff9zcFuNr4Csz1xSFzyqVpP0M7EIZtQqBN5NDSKM6')",
  },
];

export default function Industries() {
  return (
    <section className="py-24 px-6 md:px-16 bg-customSurface">
      {/* Üst Başlık ve Buton Alanı */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="font-mono text-sm text-customMuted tracking-widest uppercase mb-4 block font-medium">
            Key Sectors
          </span>
          <h2 className="text-3xl md:text-5xl text-customText font-bold leading-tight font-heading">
            Tailored Solutions for Global Industries
          </h2>
        </div>
        <button className="font-mono text-sm text-customText border-b-2 border-customText pb-1 hover:text-customAccent hover:border-customAccent transition-all font-bold uppercase tracking-wider">
          VIEW ALL SECTORS
        </button>
      </div>

      {/* Sektörler Gridi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industriesData.map((industry, index) => (
          <div
            key={index}
            className="relative h-[450px] overflow-hidden group rounded-sm"
          >
            {/* Arka Plan Görseli */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: industry.image }}
            ></div>

            {/* Karartma Maskesi*/}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-300"></div>

            {/* İçerik (Başlık ve gizli açıklama) */}
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <h4 className="text-white text-2xl font-bold font-heading mb-2">
                {industry.title}
              </h4>

              {/* Açıklama: Başlangıçta aşağıda (translate-y-4) ve görünmez (opacity-0). Hover olunca görünür. */}
              <p className="text-white/80 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
