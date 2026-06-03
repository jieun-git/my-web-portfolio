import { SectionTitle } from '@/components/common/section-title';
import { AnimatedSection } from '@/components/common/animated-section';
import { profile, strengths } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-24" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionTitle index="01" title="About" />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          {/* 소개 텍스트 */}
          <div className="space-y-10">
            <AnimatedSection delay={100}>
              {/* 프로필 이니셜 + 텍스트 */}
              <div className="flex gap-6 items-start">
                {/* 이니셜 placeholder */}
                <div
                  className="flex-shrink-0 h-20 w-20 rounded-full border-2 border-teal/40 bg-teal/5 flex items-center justify-center"
                  aria-label="프로필 이미지 placeholder"
                >
                  <span className="font-mono text-xl font-bold text-teal">JA</span>
                </div>
                <div className="space-y-4">
                  {profile.intro.map((paragraph, i) => (
                    <p key={i} className="text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* 프로필 메타 */}
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 border border-border rounded-lg p-5 bg-card/50">
                <MetaRow label="EMAIL" value={profile.email} href={`mailto:${profile.email}`} />
                <MetaRow label="PHONE" value={profile.phone} href={`tel:${profile.phone}`} />
                <MetaRow label="EDUCATION" value={profile.education} />
                <MetaRow label="BLOG" value="Like a koala 🐨" href={profile.blog} external />
              </div>
            </AnimatedSection>
          </div>

          {/* 강점 카드 */}
          <div className="space-y-4 lg:min-w-[340px]">
            {strengths.map((s, i) => (
              <AnimatedSection key={s.title} delay={150 + i * 80}>
                <div className="group relative rounded-lg border border-border bg-card p-5 hover:border-teal/40 transition-colors">
                  <div className="absolute top-5 right-5 font-mono text-xs text-teal/40 group-hover:text-teal/70 transition-colors">
                    0{i + 1}
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1 w-4 rounded bg-teal/60" />
                    <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface MetaRowProps {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

function MetaRow({ label, value, href, external }: MetaRowProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[10px] tracking-[0.15em] text-teal/60">{label}</span>
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-sm text-foreground hover:text-teal transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-sm text-foreground">{value}</span>
      )}
    </div>
  );
}
