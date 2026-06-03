import { experiences, certificate } from '@/data/portfolio';

export function ExperienceContent() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto w98-scroll p-4 space-y-4">
        <div className="w98-section-heading text-base font-bold">경력</div>

        {experiences.map((exp, i) => (
          <div key={exp.company}>
            {i > 0 && <div className="w98-divider my-4" />}
            <div className="flex items-start justify-between gap-2 mb-1">
              <span className="font-bold text-sm">{exp.company}</span>
              {exp.current && <span className="w98-badge-active text-xs flex-shrink-0">재직 중</span>}
              {exp.isIntern && <span className="w98-badge-gray text-xs flex-shrink-0">인턴</span>}
            </div>
            <div className="text-xs text-w98-dark mb-1">
              {exp.role} · {exp.period}
            </div>
            <p className="text-sm leading-relaxed">{exp.description}</p>
            {exp.tech && (
              <div className="flex flex-wrap gap-1 mt-2">
                {exp.tech.map((t) => (
                  <span key={t} className="w98-tag text-xs">{t}</span>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* 자격증 */}
        <div className="w98-divider" />
        <div>
          <div className="w98-section-heading">자격증</div>
          <div className="text-sm">
            <span className="font-bold">{certificate.name}</span>
            <span className="text-w98-dark text-xs ml-2">· {certificate.issuer} · {certificate.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
