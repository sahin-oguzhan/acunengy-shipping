# Acunengy Shipping & Maritime — Web Application

Bu proje Next.js (App Router), Tailwind CSS ve Headless WordPress (WPGraphQL) mimarisi ile geliştirilmiş kurumsal web uygulamasıdır.

---

## 🚀 Yerel Kurulum Adımları (Local Development)

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

### 2. Ortam Değişkenlerini (Environment Variables) Tanımlayın

Proje ana dizinindeki `.env.example` dosyasının adını `.env.local` olarak değiştirin ve gerekli API anahtarlarını girin:

```bash
cp .env.example .env.local
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızdan `http://localhost:3000` adresine giderek siteyi görüntüleyebilirsiniz.

---

## 🛠️ Canlı Ortam Derlemesi (Production Build)

```bash
npm run build
npm run start
```

## ☁️ Vercel Dağıtımı (Deploy to Vercel)

Projeyi Vercel üzerine sıfırdan kurmak için:

1. **GitHub Reposunu Bağlayın:** [Vercel Dashboard](https://vercel.com) üzerinden **Add New Project** diyerek GitHub reponuzu içeri aktarın (Import).
2. **Ortam Değişkenlerini (Environment Variables) Ekleyin:**
   Kurulum ekranında yer alan **Environment Variables** bölümüne `.env.example` dosyasındaki şu anahtarları ve değerlerini eksiksiz ekleyin:
   - `NEXT_PUBLIC_WORDPRESS_API_URL`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. **Deploy:** **Deploy** butonuna tıklayın. Vercel build işlemini tamamlayıp siteyi yayına alacaktır.
