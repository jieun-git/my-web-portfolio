import { profile, strengths } from '@/data/portfolio';

export function AboutContent() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto w98-scroll p-4 space-y-4">
        {/* 프로필 헤더 */}
        <div className="flex gap-4 items-center pb-3 border-b border-w98-dark/30">
          <div className="w-16 h-16 bg-w98-navy flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">JA</span>
          </div>
          <div>
            <div className="font-bold text-base">{profile.name} <span className="font-normal text-sm">{profile.nameEn}</span></div>
            <div className="text-sm text-w98-dark">{profile.role} · 5 years</div>
          </div>
        </div>

        {/* 소개 */}
        <div className="space-y-2">
          {profile.intro.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed">{p}</p>
          ))}
        </div>

        {/* 핵심 경험 */}
        <div>
          <div className="w98-section-heading">핵심 경험</div>
          <div className="space-y-3">
            {strengths.map((s, i) => (
              <div key={s.title} className="flex gap-2">
                <span className="w98-badge-active text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <div className="text-sm font-bold">{s.title}</div>
                  <div className="text-xs text-w98-dark mt-1 leading-relaxed">{s.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 연락처 정보 */}
        <div>
          <div className="w98-section-heading">정보</div>
          <table className="text-sm w-full">
            <tbody>
              <tr><td className="pr-4 py-0.5 text-xs text-w98-dark font-bold w-20">EMAIL</td><td><a className="w98-link" href={`mailto:${profile.email}`}>{profile.email}</a></td></tr>
              <tr><td className="pr-4 py-0.5 text-xs text-w98-dark font-bold">EDUCATION</td><td className="text-xs">{profile.education}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
