import type { Profile, Strength, ExperienceItem, ProjectData, SkillCategory, Certificate } from '@/types/portfolio';

export const profile: Profile = {
  name: '안지은',
  nameEn: 'Jieun Ahn',
  role: 'Frontend Developer',
  email: 'anjieun95@naver.com',
  phone: '010-2112-9288',
  education: '서울여자대학교 정보보호학과 졸업',
  intro: [
    'React와 TypeScript 기반으로 B2B 통합 모니터링 솔루션의 프론트엔드 개발을 담당해온 5년차 프론트엔드 개발자 안지은입니다.',
    '대규모 운영 환경에서 사용되는 대시보드 UI를 개발하며 복잡한 사용자 흐름과 데이터 구조를 다루는 경험을 쌓았습니다.',
    '또한, AI 기반 개발 도구를 실무에 적극 활용하며 개발 생산성과 업무 효율을 개선하는 방식에 관심을 가지고 있습니다.',
  ],
  blog: 'https://next-life-koala.tistory.com/',
  github: 'https://github.com/jieun-git',
};

export const strengths: Strength[] = [
  {
    title: '대규모 운영 UI 개발 경험',
    description:
      '수많은 리소스와 정책 데이터를 다루는 B2B 모니터링 제품에서 Grid, Form, Chart 중심의 복잡한 화면을 개발했습니다.',
  },
  {
    title: '복잡한 정책/설정 UI 설계 경험',
    description:
      '알람 정책, 임계치 설정, 대상 선택 등 다단계 입력 흐름에서 validation과 사용자 행동 흐름을 고려한 UI를 구현했습니다.',
  },
  {
    title: '공통화와 유지보수성 개선 경험',
    description:
      '반복되는 UI 패턴과 유틸리티를 모듈화하여 제품 전반의 개발 일관성과 생산성 향상에 기여했습니다.',
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: '엔키아',
    role: 'Frontend Developer',
    period: '2021.11 ~ 재직 중',
    description: 'B2B 모니터링 솔루션 및 디자인시스템 프론트엔드 개발',
    current: true,
  },
  {
    company: '오비고',
    role: 'Frontend Developer (인턴)',
    period: '2020.01 ~ 2020.06',
    description: '차량용 애플리케이션 퍼블리싱 및 프론트엔드 개발 보조',
    isIntern: true,
  },
];

export const projects: ProjectData[] = [
  {
    id: 'polestar10',
    name: 'Polestar10',
    period: '2023.03 ~ 현재',
    description: 'AIOps 기반 On-premise 통합 모니터링 솔루션',
    details: [
      '대시보드, 알람 정책, 시스템 관리 등 운영형 UI 설계 및 구현',
      'ag-Grid 기반 대용량 데이터 관리 화면 및 Tree 구조 개발',
      'Apache ECharts 기반 시계열 데이터 시각화 기능 구현',
      '복잡한 정책 설정 및 Validation 기반 입력 흐름 설계',
      'MSA / MFA 환경 기반 프론트엔드 개발 및 유지보수',
    ],
    tech: ['React', 'TypeScript', 'Recoil', 'ag-Grid', 'Apache ECharts', 'Ant Design', 'SCSS', 'Figma'],
    status: 'active',
    images: [
      '/projects/polestar10/polestar10-1.png',
      '/projects/polestar10/polestar10-2.png',
      '/projects/polestar10/polestar10-3.png',
      '/projects/polestar10/polestar10-4.png',
      '/projects/polestar10/polestar10-5.gif',
      '/projects/polestar10/polestar10-6.png',
      '/projects/polestar10/polestar10-7.png',
      '/projects/polestar10/polestar10-8.png',
      '/projects/polestar10/polestar10-9.png',
      '/projects/polestar10/polestar10-10.png',
    ],
    sections: [
      {
        title: 'Overview',
        items: [
          '다양한 모니터링 솔루션(EMS, APM, NMS, ITSM 등)을 통합한 On-premise 기반 통합 운영 플랫폼입니다.',
          '대시보드, 알람, 정책 관리 등 모니터링 기능을 하나의 UI 환경에서 제공하여 운영 효율 향상과 빠른 장애 대응을 지원합니다.',
          'MSA 와 MFA(Micro Front-end Architecture) 환경 기반으로 구성된 프로젝트입니다.',
        ],
      },
      {
        title: 'Role & Contribution',
        items: [
          'React / TypeScript 기반 모니터링 UI 개발 및 고도화',
          '대시보드, 알람 정책, 커스텀 모니터링 등 복잡한 관리 화면 구현',
          '공통 컴포넌트와 유틸리티 모듈화를 통한 재사용성 및 유지보수성 개선',
          'ag-Grid, ECharts 기반 대용량 데이터 UI 및 시각화 기능 구현',
          '디자인 시스템과 실제 운영 요구사항을 고려한 UI 구조 설계',
        ],
      },
      {
        title: 'Key Implementation',
        items: [
          '운영 환경의 핵심 정보를 통합 대시보드 형태로 시각화하는 포털 페이지 개발',
          'Apache ECharts 기반 차트 및 데이터 시각화 구현',
          '레이아웃 유연성과 사용자 인터랙션을 고려하여 커스텀 UI 컴포넌트 개발',
          '반응형 UI 및 CSS 애니메이션을 적용한 UX 개선',
          '알람 정책, 수집 정책, 유지보수 작업 등 복잡한 운영 정책 관리 화면 개발',
          'Step 기반 입력 흐름과 실시간 Validation 구조를 설계하여 사용자 입력 오류 최소화',
          '스케줄 입력값을 Cron 표현식으로 변환하는 로직 구현',
          '정책 유형에 따라 동적으로 변경되는 UI 구조 설계',
          '과거 성능 데이터를 기반으로 추천된 임계치를 시각적으로 확인할 수 있는 UI 개발',
          '차트 상에서 임계값 라인을 실시간으로 제어할 수 있도록 인터랙션 구현',
          '사용자 입력값과 AI 추천값을 함께 비교할 수 있는 UI 흐름 설계',
          '관리자 설정 기반의 비밀번호 정책을 동적으로 검증할 수 있는 Validation 컴포넌트 구현',
          '정규식(RegExp) 기반 실시간 유효성 검사 및 사용자 피드백 제공',
          '외부 Validation 라이브러리 없이 React 기반으로 직접 구현',
        ],
      },
      {
        title: 'Achievements',
        items: [
          '복잡한 운영 정책과 관리 기능을 단계별 UI 흐름으로 구조화하여 사용자 입력 부담 감소',
          '공통 컴포넌트 및 유틸리티 모듈화를 통해 유지보수성과 재사용성 향상',
          'ag-Grid, ECharts, Ant Design 기반 운영형 UI 개발 경험 확보',
          '운영 환경에 필요한 다양한 관리 기능을 하나의 UI 환경으로 통합하여 UX 개선',
        ],
      },
    ],
  },
  {
    id: 'nds',
    name: 'NDS (NKIA Design System)',
    period: '2022.12 ~ 2024.07',
    description: '통합신제품 공통 UI 컴포넌트 및 디자인 시스템',
    details: [
      'Ant Design 기반 공통 UI 컴포넌트 및 스타일 시스템 구축',
      'Modal, DatePicker, Loading 등 운영 제품 공통 컴포넌트 설계 및 구현',
      'Storybook 기반 컴포넌트 문서화 및 협업 환경 구성',
      '디자인 토큰 및 상태 기반 범용 컴포넌트 구조 설계',
    ],
    tech: ['React', 'TypeScript', 'Ant Design', 'Storybook', 'SCSS'],
    status: 'completed',
    images: [
      '/projects/nds/nds-1.png',
      '/projects/nds/nds-2.png',
      '/projects/nds/nds-3.png',
      '/projects/nds/nds-4.png',
    ],
    sections: [
      {
        title: 'Overview',
        items: [
          'Ant Design 기반으로 자사 제품 환경에 맞는 스타일과 기능을 확장하여 구축한 통합 디자인 시스템입니다.',
          '여러 제품과 조직에서 공통으로 사용할 수 있는 UI 컴포넌트 및 스타일 시스템을 제공하여 개발 생산성과 UI 일관성을 높이는 것을 목표로 했습니다.',
          'Storybook 기반 문서화를 통해 컴포넌트 사용 가이드와 협업 효율을 개선했습니다.',
        ],
      },
      {
        title: 'Role & Contribution',
        items: [
          '신규 요구사항에 맞춘 공통 UI 컴포넌트 설계 및 기능 확장',
          '디자인 토큰과 상태 기반 구조를 고려한 범용 컴포넌트 개발',
          'DatePicker, Modal, Loading 등 운영 제품에서 반복적으로 사용되는 UI 공통화',
          'Storybook 기반 컴포넌트 문서화 및 협업 환경 구성',
          '제품 간 UI 일관성과 유지보수성을 고려한 스타일 시스템 구성',
        ],
      },
      {
        title: 'Key Implementation',
        items: [
          '기존 제품에서 사용하던 아이콘 구조를 기반으로 신규 공통 아이콘 라이브러리 구성 및 배포',
          '프로젝트 전반에서 일관된 아이콘 사용이 가능하도록 컴포넌트 형태로 제공',
          '디자인 시스템 스타일 가이드에 맞춘 SVG 커스터마이징 적용',
          'Modal, DatePicker 등 반복적으로 사용되는 UI 컴포넌트 공통화',
          '옵션 및 상태에 따라 유연하게 동작할 수 있도록 범용 구조 설계',
          '제품별 요구사항에 대응할 수 있도록 props 기반 커스터마이징 지원',
          'Day.js 기반 날짜 계산 유틸 함수 구현',
          '년/월/시간/범위 선택 등 다양한 DatePicker 시나리오 지원',
          'SCSS animation 및 keyframe 기반 Loading UI 구현',
          '라우팅, 모듈 로딩, 데이터 로딩 상태에 따라 공통으로 사용할 수 있는 Loading 컴포넌트 구성',
        ],
      },
      {
        title: 'Achievements',
        items: [
          '공통 UI 컴포넌트와 디자인 시스템을 구축하여 제품 간 UI 일관성과 유지보수성 향상',
          '반복적으로 사용되는 UI 패턴을 공통화하여 신규 화면 개발 생산성 개선',
          'Storybook 기반 문서화를 통해 컴포넌트 사용성과 협업 효율 향상',
          '범용 구조의 공통 컴포넌트 설계를 통해 다양한 운영 제품 요구사항 대응',
        ],
      },
    ],
  },
  {
    id: 'polestar-s',
    name: 'Polestar S',
    period: '2022.09 ~ 2022.11',
    description: '구독형 SaaS 서버 모니터링 서비스',
    details: [
      '조직 관리, 멤버십, 빌링, 관리자 기능 UI 개발',
      'React Query / Redux 기반 상태 관리 및 비동기 데이터 처리',
      'MFA(Micro Frontend Architecture) 환경 기반 UI 개발',
      'Apache ECharts 기반 차트 및 통계 시각화 기능 구현',
      'i18n 기반 다국어(한국어/영어) 지원',
    ],
    tech: ['React', 'TypeScript', 'TanStack Query', 'Redux', 'Ant Design', 'styled-components', 'Apache ECharts'],
    achievements: ['글로벌 SaaS 육성 프로젝트 우수 과제 선정 및 장관상 수상', '사업화 이후 12억원 이상 매출 달성 기여'],
    status: 'completed',
    images: [
      '/projects/polestar-s/polestarS-1.png',
      '/projects/polestar-s/polestarS-2.png',
      '/projects/polestar-s/polestarS-3.png',
      '/projects/polestar-s/polestarS-4.png',
      '/projects/polestar-s/polestarS-5.png',
      '/projects/polestar-s/polestarS-6.png',
      '/projects/polestar-s/polestarS-7.png',
    ],
    sections: [
      {
        title: 'Overview',
        items: [
          '하이브리드 클라우드 환경의 서버 상태를 모니터링하고 장애 대응을 지원하는 구독형 SaaS 모니터링 서비스입니다.',
          '조직 관리, 멤버십 구독, 빌링, 관리자 기능 등 서비스 운영에 필요한 다양한 기능을 웹 기반 UI로 제공합니다.',
          'Micro Frontend Architecture(MFA) 기반으로 구성된 프로젝트입니다.',
        ],
      },
      {
        title: 'Role & Contribution',
        items: [
          '조직 관리, 멤버십, 빌링, 관리자 기능 등 서비스 운영 UI 설계 및 구현',
          'Tanstack Query, Redux 기반 상태 관리 및 데이터 흐름 처리',
          '공통 컴포넌트 구조화를 통한 UI 일관성과 재사용성 개선',
          'MFA 환경에서 도메인별 화면 개발 및 UI 연동',
          'Ant Design 및 styled-components 기반 서비스 UI 개발',
        ],
      },
      {
        title: 'Key Implementation',
        items: [
          '제품 소개 및 기능을 시각적으로 제공하는 비즈니스 포털 페이지 개발',
          'i18n 기반 다국어 처리(한국어/영어) 지원',
          'styled-components 기반 커스텀 스타일링 및 레이아웃 구현',
          '로그인 및 조직 설정 기능 개발',
          '조직 활성화, 기본 로그인 조직 설정, 조직 탈퇴 기능 구현',
          'Redux 기반 조직 상태 전역 관리',
          'Tanstack Query 기반 조직 조회 및 상태 변경 로직 구현',
          '권한 기반 관리자 페이지 라우팅 처리',
          '멤버십 구독/변경/조회 기능 구현',
          '빌링 통계 및 요금 정보 시각화 UI 개발',
          'Apache ECharts 기반 공통 차트 컴포넌트 구현',
          'Form, Input, Button, Table, Drawer, Notification 등 공통 컴포넌트 구현',
          'Ant Design과 styled-components를 활용한 공통 UI 스타일 구성',
          '제품 전반에서 재사용 가능한 UI 구조 설계',
        ],
      },
      {
        title: 'Achievements',
        items: [
          '멤버십, 조직, 빌링 등 SaaS 운영 기능을 하나의 UI 환경으로 통합 구현',
          '공통 컴포넌트 구조화를 통해 서비스 UI 일관성과 유지보수성 향상',
          'Tanstack Query 기반 데이터 처리 구조를 적용하여 비동기 상태 관리 효율 개선',
          '글로벌 SaaS 육성 프로젝트 우수 과제로 선정 및 장관상 수상',
          '사업화 이후 12억원 이상의 매출 달성에 기여',
        ],
      },
    ],
  },
  {
    id: 'aiotion-wss',
    name: 'AIOTION WSS',
    period: '2022.03 ~ 2023.11',
    description: 'IoT 기반 와이어로프 안전 진단 및 모니터링 솔루션',
    details: [
      '월간 리포트, 검수 프로세스, 알람 정책, 센서 차트 UI 개발',
      'WebSocket 기반 실시간 상태 모니터링 기능 구현',
      'Apache ECharts 기반 센서 데이터 시각화 및 차트 커스터마이징',
      'PDF 생성 구조 개선을 통한 리포트 품질 향상',
    ],
    tech: ['React', 'JavaScript', 'Ant Design', 'Apache ECharts', 'WebSocket', 'LESS'],
    status: 'completed',
    images: [
      '/projects/aiotion-wss/aiotion-1.png',
      '/projects/aiotion-wss/aiotion-2.png',
      '/projects/aiotion-wss/aiotion-3.png',
      '/projects/aiotion-wss/aiotion-4.png',
      '/projects/aiotion-wss/aiotion-5.png',
      '/projects/aiotion-wss/aiotion-6.png',
      '/projects/aiotion-wss/aiotion-7.png',
      '/projects/aiotion-wss/aiotion-8.png',
      '/projects/aiotion-wss/aiotion-9.png',
      '/projects/aiotion-wss/aiotion-10.png',
      '/projects/aiotion-wss/aiotion-11.png',
    ],
    sections: [
      {
        title: 'Overview',
        items: [
          '와이어로프를 사용하는 산업 현장의 안전 상태를 실시간으로 모니터링하고 이상 징후를 분석하는 IoT 기반 안전 진단 솔루션입니다.',
          '센서 데이터 시각화, 알람 정책, 검수 프로세스, 월간 리포트 등 운영 현장에서 필요한 기능을 웹 기반 UI로 제공합니다.',
          '고객사 요구사항에 맞춘 기능 커스터마이징과 빠른 운영 대응을 중심으로 프로젝트가 진행되었습니다.',
        ],
      },
      {
        title: 'Role & Contribution',
        items: [
          '월간 리포트, 검수 프로세스, 알람 정책, 센서 차트 등 운영 핵심 화면 UI 설계 및 구현',
          '서버 API 및 실시간 데이터 흐름을 고려한 프론트엔드 구조 설계',
          'WebSocket 기반 실시간 상태 반영 UI 구현',
          'PDF 생성 및 차트 시각화 기능 개선을 통한 사용자 운영 편의성 향상',
          '고객사 요구사항 기반 기능 커스터마이징 및 UI 개선 대응',
        ],
      },
      {
        title: 'Key Implementation',
        items: [
          '산업 현장의 월간 안전 현황 데이터를 시각화하여 제공하는 리포트 화면 개발',
          '기존 html-to-image 기반 PDF 생성 방식의 화질 저하 문제 개선',
          'react-to-pdf 기반 구조로 변경하여 HTML 요소를 직접 PDF로 렌더링하도록 개선',
          '한글 인코딩 지원을 통해 리포트 가독성과 품질 향상',
          '특정 게이트웨이의 검수 진행 상태를 실시간으로 모니터링할 수 있는 UI 구현',
          'WebSocket 기반 양방향 통신을 통해 실시간 상태 데이터를 화면에 반영',
          'Step 기반 진행 흐름 UI를 통해 작업 상태를 직관적으로 확인할 수 있도록 구성',
          '알람 레벨 기반 정책 등록 및 조회 기능 구현',
          'Ant Design 기반 Form 구조를 활용하여 운영자가 쉽게 정책을 관리할 수 있도록 UI 구성',
          '다양한 정책 조건에 대응할 수 있도록 동적 입력 흐름 설계',
          'Apache ECharts 기반 센서 데이터 시각화 기능 구현',
          '하나의 차트에서 여러 데이터를 구분하여 표시할 수 있도록 커스텀 라인 차트 구성',
          '기본 legend/tooltip 기능 대신 운영 요구사항에 맞춘 커스텀 UI 직접 구현',
        ],
      },
      {
        title: 'Achievements',
        items: [
          'PDF 생성 구조 개선을 통해 기존 저해상도 및 한글 미지원 문제 해결',
          'WebSocket 기반 실시간 상태 UI를 구축하여 운영 현장 대응 속도 향상',
          '고객사 요구사항 기반 커스터마이징 대응으로 서비스 운영 만족도 개선',
          '센서 데이터 시각화 기능 고도화를 통해 데이터 모니터링 가독성 향상',
        ],
      },
    ],
  },
  {
    id: 'ai-prompt-manager',
    name: 'AI Prompt Manager',
    period: '2025.04 ~ 2025.08',
    description: '사내 LLM 프로젝트를 위한 Prompt 관리 서비스',
    details: [
      'Prompt 버전 관리 및 평가 데이터 관리 UI 개발',
      '테스트 자동화 흐름을 고려한 관리형 UI 구조 설계',
      '다크/라이트 모드를 지원하는 전역 테마 시스템 구성',
      '재사용 가능한 공통 컴포넌트 및 상태 기반 UI 설계',
    ],
    tech: ['React', 'TypeScript', 'Ant Design', 'Figma', 'styled-components'],
    status: 'completed',
    images: [
      '/projects/ai-prompt-manager/ai-1.png',
      '/projects/ai-prompt-manager/ai-2.png',
      '/projects/ai-prompt-manager/ai-3.png',
      '/projects/ai-prompt-manager/ai-4.png',
      '/projects/ai-prompt-manager/ai-5.png',
      '/projects/ai-prompt-manager/ai-6.png',
      '/projects/ai-prompt-manager/ai-7.png',
      '/projects/ai-prompt-manager/ai-8.png',
      '/projects/ai-prompt-manager/ai-9.png',
      '/projects/ai-prompt-manager/ai-10.png',
    ],
    sections: [
      {
        title: 'Overview',
        items: [
          'LLM 사용 시 반복되는 프롬프트에 대한 관리와 테스트 검증의 비효율을 개선하기 위해 제작한 사내 프롬프트 관리 서비스입니다.',
          '프롬프트 버전 관리, 평가 데이터 관리, 테스트 자동화 과정을 보다 효율적으로 수행할 수 있도록 사용자 친화적인 UI 제공을 목표로 했습니다.',
        ],
      },
      {
        title: 'Role & Contribution',
        items: [
          'Figma 기반 기획안을 바탕으로 프론트엔드 구조 설계 및 UI 구현 전담',
          '상태 흐름과 재사용성을 고려한 컴포넌트 구조 설계',
          '사용자 입력 흐름과 관리 편의성을 고려한 화면 인터랙션 구현',
          '다크/라이트 모드를 고려한 전역 테마 구조 설계',
          '기획자와 협업하여 기능 흐름(FE 구조 → API 연동 → 동적 반영) 구체화 및 UI 동작 최적화',
        ],
      },
      {
        title: 'Key Implementation',
        items: [
          '반복되는 입력/관리 UI 패턴을 공통 컴포넌트로 분리하여 유지보수성과 확장성을 개선',
          'props 기반 구조를 통해 다양한 프롬프트 관리 화면에 재사용 가능하도록 설계',
          '다크/라이트 모드 전환을 고려하여 스타일 토큰 기반 테마 시스템 구성',
          '색상, 여백 등의 디자인 값을 공통화하여 UI 일관성 유지',
          '프롬프트 생성/수정/평가/삭제 과정에서 동적 흐름과 상태 변화를 고려한 UI 인터랙션 구현',
          '사용자 편의성을 고려한 입력 검증 및 화면 피드백 처리',
        ],
      },
      {
        title: 'Achievements',
        items: [
          '스타일 토큰 및 공통 컴포넌트 구조를 직접 설계하여 UI 일관성과 유지보수 효율 개선',
          '프롬프트 관리/평가 기능의 UI 흐름을 구조화하여 반복적인 테스트 작업 효율 향상',
          '다크/라이트 모드를 고려한 전역 테마 시스템 구성으로 사용자 설정에 따른 UI 유연성 확대',
          '기획자와 협업하며 기능 흐름과 UI 동작 방식을 구체화하여 서비스 완성도 향상',
        ],
      },
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Vue'],
  },
  {
    name: 'State Management',
    items: ['Recoil', 'Redux', 'TanStack Query'],
  },
  {
    name: 'UI / Styling',
    items: ['Ant Design', 'styled-components', 'SCSS', 'LESS', 'Tailwind CSS'],
  },
  {
    name: 'Data Viz & Grid',
    items: ['Apache ECharts', 'ag-Grid'],
  },
  {
    name: 'Architecture',
    items: ['WebSocket', 'MSA', 'MFA', 'i18n'],
  },
  {
    name: 'Tools',
    items: ['Figma', 'Storybook', 'Git', 'Claude', 'Cursor'],
  },
];

export const certificate: Certificate = {
  name: '정보처리기사',
  issuer: '한국산업인력공단',
  date: '2019.05.22',
};
