import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
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
    <html lang="ko" style={{ overflow: 'hidden', height: '100%' }}>
      <body className={notoSansKr.variable} style={{ overflow: 'hidden', height: '100%', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
