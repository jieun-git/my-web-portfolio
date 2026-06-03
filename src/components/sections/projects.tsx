import { projects } from '@/data/portfolio';
import type { ProjectData } from '@/types/portfolio';
import Image from 'next/image';

const PROJECT_ICONS: Record<string, string> = {
  'polestar10': '📄',
  'nds': '📄',
  'polestar-s': '📄',
  'aiotion-wss': '📄',
  'ai-prompt-manager': '📄',
};

interface ProjectsFolderProps {
  onOpenProject: (id: string) => void;
}

export function ProjectsFolderContent({ onOpenProject }: ProjectsFolderProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto w98-scroll p-3">
        <div className="flex flex-wrap gap-1">
          {projects.map((p) => (
            <div
              key={p.id}
              className="w98-file-icon"
              onDoubleClick={() => onOpenProject(p.id)}
              title={`더블클릭하여 열기: ${p.name}`}
            >
              <span className="text-4xl">{PROJECT_ICONS[p.id] ?? '📄'}</span>
              <span className="w98-file-icon-label">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectDetailProps {
  project: ProjectData;
}

export function ProjectDetailContent({ project }: ProjectDetailProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto w98-scroll p-4 space-y-4">
        {/* 헤더 */}
        <div className="flex items-start gap-3">
          <span className="text-3xl mt-1">📄</span>
          <div>
            <div className="font-bold text-base">{project.name}</div>
            <div className="text-xs text-w98-dark">{project.period}</div>
            <div className="text-sm mt-1">{project.description}</div>
            {project.achievements && (
              <div className="flex flex-wrap gap-1 mt-2">
                {project.achievements.map((a) => (
                  <span key={a} className="text-xs text-w98-navy">🏆 {a}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 이미지 목록 */}
        {project.images && project.images.length > 0 && (
          <div className="space-y-2">
            {project.images.map((src, i) => (
              <div key={i} className="w98-inset overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.name} ${i + 1}`}
                  width={620}
                  height={340}
                  className="w-full object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        )}

        {/* 섹션들 */}
        {project.sections?.map((section) => (
          <div key={section.title}>
            <div className="w98-section-heading">{section.title}</div>
            <ul className="space-y-1">
              {section.items.map((item, i) => (
                <li key={i} className="text-xs leading-relaxed flex gap-2">
                  <span className="text-w98-dark flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* 기술 스택 */}
        <div>
          <div className="w98-section-heading">기술 스택</div>
          <div className="flex flex-wrap gap-1">
            {project.tech.map((t) => (
              <span key={t} className="w98-tag text-xs">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
