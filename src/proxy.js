import { NextResponse } from 'next/server';

const locales = ['en', 'tr'];
const defaultLocale = 'en';

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/wp-admin') ||
    pathname.startsWith('/wp-login.php') ||
    pathname.startsWith('/wp-json') ||
    pathname.startsWith('/wp-content') ||
    pathname.startsWith('/wp-includes')
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return;
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|wp-admin|wp-login.php|wp-content|wp-includes).*)',
  ],
};
