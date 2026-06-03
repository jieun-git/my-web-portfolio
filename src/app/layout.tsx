import type { Metadata } from 'next';
import { Noto_Sans_KR, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '안지은 | Frontend Developer',
  description:
    'React와 TypeScript 기반 B2B 통합 모니터링 솔루션을 개발하는 5년차 프론트엔드 개발자 안지은의 포트폴리오입니다.',
  keywords: ['프론트엔드 개발자', 'Frontend Developer', 'React', 'TypeScript', '안지은', 'Jieun Ahn'],
  authors: [{ name: '안지은', url: 'https://github.com/jieun-git' }],
  openGraph: {
    type: 'website',
    title: '안지은 | Frontend Developer',
    description: 'React & TypeScript 기반 B2B 모니터링 솔루션 전문 프론트엔드 개발자 안지은의 포트폴리오',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSansKr.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
