# Portfolio Website

## 프로젝트 개요

프론트엔드 개발자의 개인 포트폴리오 웹사이트.
사용자가 제공하는 노션 페이지 또는 PDF에서 포트폴리오 데이터를 추출하여 웹 페이지를 구성한다.

## 기술 스택

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (폰트, 메타데이터, ThemeProvider)
│   ├── page.tsx            # 메인 랜딩 페이지 (모든 섹션 조합)
│   └── globals.css         # Tailwind 기본 스타일 + CSS 변수
├── components/
│   ├── ui/                 # shadcn/ui 컴포넌트 (Button, Card, Badge 등)
│   ├── sections/           # 페이지 섹션 컴포넌트
│   │   ├── hero.tsx        # 히어로 / 인트로
│   │   ├── about.tsx       # 자기소개
│   │   ├── projects.tsx    # 프로젝트 목록
│   │   ├── experience.tsx  # 경력/이력
│   │   ├── skills.tsx      # 기술 스택
│   │   └── contact.tsx     # 연락처
│   ├── layout/             # Header, Footer, Navigation
│   └── common/             # 공통 컴포넌트 (SectionTitle, AnimatedCard 등)
├── data/
│   └── portfolio.ts        # 포트폴리오 데이터 (노션/PDF에서 추출한 내용)
├── lib/
│   └── utils.ts            # cn() 등 유틸리티
└── types/
    └── portfolio.ts        # 타입 정의
```

## 데이터 처리 워크플로우

1. 사용자가 노션 페이지 URL 또는 PDF 파일을 제공한다
2. 해당 콘텐츠에서 포트폴리오 정보를 추출한다
3. `src/data/portfolio.ts`에 타입 안전한 데이터 객체로 정리한다
4. 각 섹션 컴포넌트가 이 데이터를 import하여 렌더링한다

## 페이지 섹션 구성

- **Hero**: 이름, 한 줄 소개, CTA 버튼 (이력서 다운로드, 연락하기)
- **About**: 자기소개, 프로필 이미지
- **Projects**: 프로젝트 카드 그리드 (썸네일, 설명, 기술 태그, GitHub/배포 링크)
- **Experience**: 경력 타임라인 (회사, 역할, 기간, 주요 성과)
- **Skills**: 기술 스택 시각화 (카테고리별 그룹핑: Frontend, Backend, Tools 등)
- **Contact**: 이메일, GitHub, LinkedIn 등 연락처 + 간단한 컨택트 폼

## 디자인 가이드라인

### 테마

- 다크 모드 기본, 라이트 모드 토글 지원
- shadcn/ui의 기본 테마 시스템 활용 (CSS 변수 기반)

### 타이포그래피

- 한글: Pretendard 또는 Noto Sans KR
- 영문/코드: JetBrains Mono (monospace)

### 레이아웃

- 반응형 디자인 (모바일 퍼스트)
- 최대 너비: `max-w-6xl` (1152px)
- 섹션 간 여백: `py-20` 이상
- 스크롤 기반 네비게이션

### 인터랙션

- 스크롤 시 섹션 fade-in 애니메이션 (Intersection Observer 또는 framer-motion)
- 프로젝트 카드 hover 효과
- 부드러운 스크롤 (`scroll-behavior: smooth`)

### 색상

- shadcn/ui 기본 색상 팔레트 사용
- 액센트 컬러는 사용자 선호에 따라 조정 가능

## 코딩 컨벤션

### 일반 규칙

- 모든 컴포넌트는 함수형 + TypeScript
- `"use client"`는 클라이언트 인터랙션이 필요한 컴포넌트에만 사용
- Props 타입은 컴포넌트 파일 상단에 interface로 정의
- 주석은 한국어로 작성

### 네이밍

- 컴포넌트 파일: kebab-case (`project-card.tsx`)
- 컴포넌트 이름: PascalCase (`ProjectCard`)
- 유틸리티 함수: camelCase (`formatDate`)
- 타입/인터페이스: PascalCase (`ProjectData`)

### shadcn/ui 사용

- 컴포넌트 추가: `npx shadcn@latest add [component]`
- 커스텀 스타일은 Tailwind 유틸리티 클래스로 처리
- shadcn/ui 컴포넌트 소스 수정은 최소화

### 스타일링

- 인라인 스타일 사용 금지, Tailwind 클래스만 사용
- `cn()` 유틸리티로 조건부 클래스 결합
- 반복 패턴은 Tailwind `@apply`보다 컴포넌트 추출 우선

## 빌드 & 실행 명령어

```bash
pnpm install          # 의존성 설치
pnpm dev              # 개발 서버 (localhost:3000)
pnpm build            # 프로덕션 빌드
pnpm lint             # ESLint 검사
```

## 성능 요구사항

- Lighthouse 점수 90+ (Performance, Accessibility, Best Practices, SEO)
- 이미지는 Next.js `<Image>` 컴포넌트로 최적화
- 폰트는 `next/font`로 로드
- 불필요한 클라이언트 번들 최소화

## 접근성

- 시맨틱 HTML 태그 사용 (`<main>`, `<section>`, `<article>`, `<nav>`)
- 모든 이미지에 alt 텍스트
- 키보드 네비게이션 지원
- 충분한 색상 대비 (WCAG AA 이상)

## SEO

- 메타데이터 설정 (title, description, og:image)
- Next.js `metadata` API 활용
- `robots.txt`, `sitemap.xml` 생성

## 주의사항

- 포트폴리오 데이터는 하드코딩 (`src/data/portfolio.ts`), CMS 연동 없음
- 외부 API 호출 없음 (정적 사이트)
- 배포 타겟: Vercel