import { SectionTitle } from '@/components/common/section-title';
import { AnimatedSection } from '@/components/common/animated-section';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <section id="experience" className="py-24" aria-labelledby="experience-title">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionTitle index="02" title="Experience" />
        </AnimatedSection>

        <div className="relative">
          {/* 타임라인 세로선 */}
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-teal/50 via-border to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 100}>
                <div className="relative flex gap-8 pl-8">
                  {/* 타임라인 점 */}
                  <div
                    className={cn(
                      'absolute left-0 top-1.5 h-5 w-5 flex items-center justify-center',
                      'rounded-full border-2 bg-background',
                      exp.current ? 'border-teal' : 'border-border'
                    )}
                  >
                    {exp.current && (
                      <div className="h-2 w-2 rounded-full bg-teal animate-pulse" />
                    )}
                  </div>

                  <div className="flex-1">
                    {/* 회사 헤더 */}
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                      {exp.isIntern && (
                        <Badge variant="outline" className="text-[10px]">인턴</Badge>
                      )}
                      {exp.current && (
                        <Badge variant="teal" className="text-[10px]">재직 중</Badge>
                      )}
                    </div>

                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm text-teal">{exp.role}</span>
                      <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                    {exp.tech && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <Badge key={t} variant="outline">{t}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
