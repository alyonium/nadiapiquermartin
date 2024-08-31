import type { Metadata } from 'next';
import { Roboto, Raleway, Jost } from 'next/font/google';
import '../globals.css';
import { getMessages } from 'next-intl/server';
import classNames from 'classnames';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

const roboto = Roboto({
  weight: ['100', '300', '400'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const raleway = Raleway({
  weight: ['200', '300', '400'],
  subsets: ['latin'],
  variable: '--font-raleway',
});

const jost = Jost({
  weight: ['200', '300', '400'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-jost',
});

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        lang={locale}
        className={classNames(raleway.variable, jost.variable, roboto.variable)}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
