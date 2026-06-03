export function ReadmeContent() {
  return (
    <div className="flex flex-col h-full">
      <div className="w98-menubar">
        {['파일(F)', '편집(E)', '서식(O)', '보기(V)', '도움말(H)'].map((m) => (
          <span key={m} className="w98-menubar-item">{m}</span>
        ))}
      </div>
      <div className="w98-notepad-content w98-scroll flex-1">
        {`┌─────────────────────────────────────┐
│  안녕하세요, 안지은입니다 👋         │
└─────────────────────────────────────┘

React · TypeScript 기반 B2B 통합 모니터링 솔루션을
개발하는 5년차 프론트엔드 개발자입니다.

이 데스크탑은 제 포트폴리오입니다.
바탕화면의 아이콘을 더블클릭하거나
좌측 하단 [시작] 버튼을 눌러 탐색하세요.

─────────────────────────────────────

📁 About       — 자기소개 보기
💼 Experience  — 경력 및 이력
📂 Projects    — 프로젝트 목록
⚙️ Skills      — 기술 스택
✉️ Contact     — 연락처

─────────────────────────────────────
`}
      </div>
    </div>
  );
}
