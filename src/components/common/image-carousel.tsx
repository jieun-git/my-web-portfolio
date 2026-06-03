"use client";

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

export function ImageCarousel({ images, projectName }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const n = images.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + n) % n), [n]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % n), [n]);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape' && open) close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, open, close]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (n === 0) return null;

  return (
    <>
      {/* 인라인 캐러셀 */}
      <div className="space-y-3">
        {/* 메인 뷰어 */}
        <div className="relative flex items-center justify-center rounded-lg border border-border bg-card overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[current]}
            alt={`${projectName} 스크린샷 ${current + 2}`}
            className="max-h-[60vh] w-full object-contain cursor-zoom-in"
            onClick={() => setOpen(true)}
          />

          {n > 1 && (
            <>
              <button
                aria-label="이전 이미지"
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 backdrop-blur text-foreground hover:bg-background/90 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="다음 이미지"
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 backdrop-blur text-foreground hover:bg-background/90 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* 썸네일 줄 */}
        {n > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {images.map((src, i) => (
              <button
                key={i}
                aria-label={`${projectName} 스크린샷 ${i + 2} 보기`}
                onClick={() => setCurrent(i)}
                className={[
                  'flex-shrink-0 h-16 w-24 rounded overflow-hidden border-2 transition-all',
                  i === current
                    ? 'border-teal opacity-100 ring-1 ring-teal/50'
                    : 'border-border opacity-50 hover:opacity-90',
                ].join(' ')}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 라이트박스 */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} 이미지 확대 보기`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={close}
        >
          {/* 닫기 버튼 */}
          <button
            aria-label="닫기"
            onClick={close}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>

          {/* 이미지 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[current]}
            alt={`${projectName} 스크린샷 ${current + 2}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* 이전/다음 버튼 */}
          {n > 1 && (
            <>
              <button
                aria-label="이전 이미지"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-foreground hover:text-teal hover:border-teal/50 transition-colors"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                aria-label="다음 이미지"
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-foreground hover:text-teal hover:border-teal/50 transition-colors"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
