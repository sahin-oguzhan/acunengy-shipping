import { NextResponse } from 'next/server';

// Desteklediğimiz diller ve varsayılan dil
const locales = ['en', 'tr'];
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Eğer URL zaten bir dil içeriyorsa (örn: /en veya /tr), işlem yapmadan devam et
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Görseller, Next.js dosyaları veya favicon gibi statik dosyaları yönlendirmeden hariç tut
  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return;
  }

  // Eğer kullanıcının girdiği URL'de dil yoksa, onu varsayılan dile (en) yönlendir
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Middleware'in hangi sayfalarda çalışacağını belirler
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
