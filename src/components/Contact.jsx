import React from 'react';

export default function Contact() {
  return (
    <section className="relative py-24 overflow-hidden bg-customBg border-t border-customBorder">
      {/* Arka Plan Haritası (Sadece görsel bir doku katar) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBONveGnvoRVEMwiZMsLDSl_IsHYJgsTx83HYglPA899m0IDbC0k-Sglu8GweCxD7Y7U4bNCM8URNOgzpHZanpv06uRJzX8vLI0KPH1i9iWYZ-JbCyQ2MCpu7e7GejNaUuYmofqKqGnPrOv0BDOlj4UBIDfVCCJFgzNuMnZZe7lEc_sKYlRk-KTWl04H2eaBMyerSQyL3yzt-1XC7gn9LN7r5XHdBcJwyEbFf1z_jSK8ZxyC56L9ylC')",
          }}
        ></div>
      </div>

      <div className="relative z-10 px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
        {/* Sol Taraf: İletişim Bilgileri */}
        <div>
          <span className="font-mono text-sm text-customAccent tracking-widest uppercase mb-4 block font-bold">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl text-customText font-bold mb-8 font-heading">
            Secure Your Global Supply Chain
          </h2>
          <p className="text-customMuted text-lg mb-12">
            Contact our global coordination team for immediate quotes, vessel
            tracking, or technical logistics consultations.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-customAccent text-3xl">
                emergency
              </span>
              <div>
                <p className="font-mono text-sm text-customMuted uppercase font-bold">
                  Emergency Support (24/7)
                </p>
                <p className="text-customText text-xl font-bold font-mono mt-1">
                  +90 532 XXX XX XX
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-customAccent text-3xl">
                mail
              </span>
              <div>
                <p className="font-mono text-sm text-customMuted uppercase font-bold">
                  General Inquiries
                </p>
                <p className="text-customText text-xl font-bold font-mono mt-1">
                  shipping@acunengy.com
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-customAccent text-3xl">
                location_on
              </span>
              <div>
                <p className="font-mono text-sm text-customMuted uppercase font-bold">
                  Main Hub Office
                </p>
                <p className="text-customText text-base font-medium mt-1 leading-relaxed">
                  Plaza Cubes Office Solutions, Mistral Tower, Konak / İzmir,
                  Türkiye
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3 font-mono text-sm uppercase tracking-widest hover:opacity-90 transition-all font-bold rounded-sm shadow-md hover:shadow-lg"
              >
                <span className="material-symbols-outlined">chat</span> WhatsApp
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: İletişim Formu */}
        <div className="bg-customSurface/80 backdrop-blur-md p-8 md:p-10 border border-customBorder rounded-sm shadow-xl relative z-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-customMuted uppercase font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-customBg border-b border-customBorder text-customText p-3 focus:border-customAccent focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-customMuted uppercase font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-customBg border-b border-customBorder text-customText p-3 focus:border-customAccent focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-customMuted uppercase font-bold">
                Service Required
              </label>
              <select className="w-full bg-customBg border-b border-customBorder text-customText p-3 focus:border-customAccent focus:outline-none transition-colors appearance-none cursor-pointer">
                <option className="bg-customSurface">
                  Select a Service...
                </option>
                <option className="bg-customSurface">Ship Agency</option>
                <option className="bg-customSurface">Project Cargo</option>
                <option className="bg-customSurface">Heavy Lift</option>
                <option className="bg-customSurface">Offshore Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-customMuted uppercase font-bold">
                Message
              </label>
              <textarea
                className="w-full bg-customBg border-b border-customBorder text-customText p-3 focus:border-customAccent focus:outline-none transition-colors resize-none"
                rows="4"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-customAccent text-customBg py-4 font-mono text-sm uppercase tracking-widest hover:opacity-80 transition-all font-bold mt-4"
            >
              SEND INQUIRY
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
