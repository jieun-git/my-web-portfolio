import { SectionTitle } from '@/components/common/section-title';
import { AnimatedSection } from '@/components/common/animated-section';
import { ProjectCard } from './project-card';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="py-24" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionTitle index="03" title="Projects" />
        </AnimatedSection>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
