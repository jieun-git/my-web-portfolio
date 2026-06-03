import { SectionTitle } from '@/components/common/section-title';
import { AnimatedSection } from '@/components/common/animated-section';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-24" aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionTitle index="04" title="Skills" />
        </AnimatedSection>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <AnimatedSection key={category.name} delay={i * 70}>
              <div className="rounded-lg border border-border bg-card p-5 hover:border-teal/30 transition-colors">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-0.5 rounded bg-teal/70" />
                  <h3 className="font-mono text-xs tracking-[0.12em] text-teal uppercase">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
