'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, Github, BookOpen, Mail } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { profile } from '@/data/portfolio';

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="소개"
    >
      {/* 그리드 배경 */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* 중앙 글로우 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <div
          className="max-w-3xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {/* 상단 레이블 */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-teal" />
            <span className="font-mono text-xs tracking-[0.2em] text-teal uppercase">
              Frontend Developer · 5 years
            </span>
          </div>

          {/* 이름 */}
          <h1 className="mb-3 text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mb-2 font-mono text-xl text-teal tracking-widest sm:text-2xl">
            {profile.nameEn}
          </p>

          {/* 태그라인 */}
          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.3s',
            }}
          >
            React와 TypeScript 기반 B2B 모니터링 솔루션을 개발하는
            <br className="hidden sm:block" />
            5년차 프론트엔드 개발자입니다.
          </p>

          {/* CTA 버튼 */}
          <div
            className="mt-10 flex flex-wrap gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.5s',
            }}
          >
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'gap-2')}
            >
              <Mail size={16} />
              연락하기
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'teal', size: 'lg' }), 'gap-2')}
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.blog}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'gap-2')}
            >
              <BookOpen size={16} />
              Blog
            </a>
          </div>
        </div>

        {/* 스크롤 힌트 */}
        <a
          href="#about"
          className="absolute bottom-12 left-6 flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-teal transition-colors"
          aria-label="아래로 스크롤"
        >
          <ArrowDown size={14} className="animate-bounce" />
          <span>scroll</span>
        </a>

        {/* 우측 데코레이션 */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-teal/40 to-transparent" />
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground/40 [writing-mode:vertical-rl]">
            Jieun 2026
          </span>
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-teal/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
