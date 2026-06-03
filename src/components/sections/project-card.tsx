import Link from 'next/link';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { ProjectData } from '@/types/portfolio';

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        'group relative flex h-[300px] flex-col rounded-lg border bg-card overflow-hidden',
        'transition-all duration-300 cursor-pointer',
        'hover:border-teal/40 hover:shadow-[0_4px_32px_hsl(var(--teal)/0.08)]',
        project.status === 'active' ? 'border-teal/20' : 'border-border'
      )}
    >
      {/* 상단 액센트 라인 */}
      {project.status === 'active' && (
        <div className="h-0.5 w-full flex-shrink-0 bg-gradient-to-r from-teal/80 via-teal/40 to-transparent" />
      )}

      <div className="flex flex-1 flex-col overflow-hidden p-6">
        {/* 헤더 */}
        <div className="mb-3 flex-shrink-0">
          <div className="mb-1 flex items-center gap-2">
            <span className="font-mono text-base font-bold text-foreground group-hover:text-teal transition-colors inline-flex items-center gap-1">
              {project.name}
              <ArrowUpRight
                size={13}
                className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
              />
            </span>
            {project.status === 'active' && (
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
        </div>

        {/* 설명 */}
        <p className="mb-3 flex-shrink-0 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* 성과 — 컴팩트 1줄 */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-3 flex-shrink-0 flex items-center gap-1.5 truncate">
            <Trophy size={11} className="text-teal flex-shrink-0" />
            <span className="font-mono text-[10px] text-teal truncate">
              {project.achievements[0]}
            </span>
          </div>
        )}

        {/* 기술 스택 — 하단 고정 */}
        <div className="mt-auto flex flex-wrap gap-1.5 overflow-hidden max-h-[52px]">
          {project.tech.map((t) => (
            <Badge key={t} variant="teal">{t}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
