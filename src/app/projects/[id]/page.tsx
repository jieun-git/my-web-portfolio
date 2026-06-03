import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { projects } from '@/data/portfolio';
import { ImageCarousel } from '@/components/common/image-carousel';

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: '프로젝트를 찾을 수 없습니다' };
  return {
    title: `${project.name} | 안지은 포트폴리오`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  const bannerImage = project.images?.[0];
  const galleryImages = project.images?.slice(1) ?? [];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* 히어로 배너 */}
        <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-background via-teal/5 to-background sm:h-80">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-teal/10 blur-[80px]" />
          {project.status === 'active' && (
            <div className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-teal/80 via-teal/40 to-transparent" />
          )}
          {bannerImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={bannerImage}
              alt={`${project.name} 배너`}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-teal/20 bg-card/60 backdrop-blur-sm">
                <span className="font-mono text-3xl font-bold text-teal">
                  {project.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* 뒤로 가기 */}
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-teal transition-colors"
          >
            <ArrowLeft size={14} />
            목록으로
          </Link>

          {/* 헤더 */}
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-3">
              <h1 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
                {project.name}
              </h1>
              {project.status === 'active' && (
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-teal" />
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Calendar size={13} />
                {project.period}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Layers size={13} />
                {project.tech.length}개 기술 스택
              </span>
            </div>
          </div>

          <div className="space-y-10">
            {/* 풍부한 섹션 렌더링 */}
            {project.sections && project.sections.length > 0 ? (
              project.sections.map((section) => (
                <section key={section.title} aria-labelledby={`section-${section.title}`}>
                  <h2
                    id={`section-${section.title}`}
                    className="mb-4 flex items-center gap-3 font-mono text-sm tracking-[0.1em] text-teal uppercase"
                  >
                    <span className="h-px w-6 bg-teal/50" />
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal/60" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))
            ) : (
              <>
                {/* 섹션 없을 때 폴백 */}
                <section aria-labelledby="desc-title">
                  <h2 id="desc-title" className="mb-4 flex items-center gap-3 font-mono text-sm tracking-[0.1em] text-teal uppercase">
                    <span className="h-px w-6 bg-teal/50" />
                    Overview
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{project.description}</p>
                </section>
                <section aria-labelledby="details-title">
                  <h2 id="details-title" className="mb-4 flex items-center gap-3 font-mono text-sm tracking-[0.1em] text-teal uppercase">
                    <span className="h-px w-6 bg-teal/50" />
                    Key Contributions
                  </h2>
                  <ul className="space-y-3">
                    {project.details.map((d, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal/60" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{d}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            )}

            {/* 기술 스택 */}
            <section aria-labelledby="tech-title">
              <h2 id="tech-title" className="mb-4 flex items-center gap-3 font-mono text-sm tracking-[0.1em] text-teal uppercase">
                <span className="h-px w-6 bg-teal/50" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="teal" className="text-sm px-3 py-1">
                    {t}
                  </Badge>
                ))}
              </div>
            </section>

            {/* 갤러리 */}
            {galleryImages.length > 0 && (
              <section aria-labelledby="gallery-title">
                <h2 id="gallery-title" className="mb-4 flex items-center gap-3 font-mono text-sm tracking-[0.1em] text-teal uppercase">
                  <span className="h-px w-6 bg-teal/50" />
                  Screenshots
                </h2>
                <ImageCarousel images={galleryImages} projectName={project.name} />
              </section>
            )}
          </div>

          {/* 하단 뒤로 가기 */}
          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-teal transition-colors"
            >
              <ArrowLeft size={14} />
              다른 프로젝트 보기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
