import { skills } from '@/data/portfolio';

export function SkillsContent() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto w98-scroll p-4">
        <div className="w98-section-heading text-base font-bold mb-4">기술 스택</div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {skills.map((category) => (
            <div key={category.name}>
              <div className="w98-section-heading">{category.name}</div>
              <div className="flex flex-wrap gap-1">
                {category.items.map((item) => (
                  <span key={item} className="w98-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
