# 🏋️‍♂️ GIGACHAD - AI 동기부여 코칭 플랫폼

> **"너만의 맞춤형 AI 동기부여 친구"**  
> 사용자 성향에 맞춘 개인화된 GIGACHAD 캐릭터와 함께 목표를 달성하세요!

[![Next.js](https://img.shields.io/badge/Next.js-14.2.25-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn%2Fui-Latest-000000?logo=react)](https://ui.shadcn.com/)

## 📋 프로젝트 개요

GIGACHAD는 사용자의 정치성향, 가치관, 동기부여 스타일에 따라 맞춤형으로 대화하는 AI 코칭 플랫폼입니다. 단순한 동기부여를 넘어서 사용자의 개성을 반영한 강렬하고 효과적인 코칭을 제공합니다.

### 🎯 핵심 컨셉

- **개인화된 AI 캐릭터**: 사용자 성향에 따른 맞춤형 말투와 접근법
- **실용적 생산성 도구**: 앱 잠금, 목표 추적, 실시간 피드백
- **커뮤니티 기반 동기부여**: CHAD 레벨별 소속감과 경쟁 요소

## 🚀 현재 개발 상태

### ✅ 완료된 기능
- [x] Next.js 14 + TypeScript 기반 프로젝트 설정
- [x] Shadcn/ui 컴포넌트 라이브러리 통합
- [x] 반응형 채팅 인터페이스 UI
- [x] 사이드바 네비게이션
- [x] 다크/라이트 테마 지원
- [x] 모바일 최적화

### 🚧 개발 중인 기능
- [ ] 사용자 프로필링 시스템
- [ ] AI 캐릭터 개인화 엔진
- [ ] 실시간 채팅 기능
- [ ] 목표 추적 시스템
- [ ] 앱 잠금 기능

## 🏗️ 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Shadcn/ui + Radix UI
- **Icons**: Lucide React
- **State Management**: React Hooks + Context API

### Backend (예정)
- **AI**: OpenAI GPT API
- **Server**: Node.js + Express
- **Database**: MongoDB + Redis
- **Authentication**: NextAuth.js
- **Push Notifications**: Firebase Cloud Messaging

## 📁 프로젝트 구조

```
giga-pt/
├── app/                           # Next.js App Router
│   ├── explore/                   # 탐색 페이지
│   │   └── page.tsx              # 탐색 페이지 컴포넌트
│   ├── goals/                     # 목표 관리 페이지
│   │   └── page.tsx              # 목표 페이지 컴포넌트
│   ├── summary/                   # 요약 페이지
│   │   └── page.tsx              # 요약 페이지 컴포넌트
│   ├── fonts/                     # 폰트 파일
│   │   ├── GeistMonoVF.woff      # Geist Mono 폰트
│   │   └── GeistVF.woff          # Geist 폰트
│   ├── favicon.ico               # 파비콘
│   ├── globals.css               # 글로벌 스타일
│   ├── layout.tsx                # 루트 레이아웃
│   ├── loading.tsx               # 로딩 컴포넌트
│   └── page.tsx                  # 메인 페이지
├── components/                    # 재사용 가능한 컴포넌트
│   ├── ui/                       # Shadcn/ui 컴포넌트
│   │   ├── badge.tsx            # 배지 컴포넌트
│   │   ├── button.tsx           # 버튼 컴포넌트
│   │   ├── card.tsx             # 카드 컴포넌트
│   │   ├── input.tsx            # 입력 컴포넌트
│   │   ├── progress.tsx         # 진행률 컴포넌트
│   │   ├── scroll-area.tsx      # 스크롤 영역 컴포넌트
│   │   └── separator.tsx        # 구분선 컴포넌트
│   ├── scroll-area.tsx          # 스크롤 영역 컴포넌트
│   ├── separator.tsx            # 구분선 컴포넌트
│   └── sidebar.tsx              # 사이드바 컴포넌트
├── lib/                          # 유틸리티 함수
│   └── utils.ts                  # 공통 유틸리티
├── components.json               # Shadcn/ui 설정
├── next.config.mjs              # Next.js 설정
├── package.json                 # 프로젝트 의존성
├── postcss.config.mjs           # PostCSS 설정
├── tailwind.config.ts           # Tailwind CSS 설정
├── tsconfig.json                # TypeScript 설정
└── next-env.d.ts                # Next.js 타입 정의
```

## 🎨 주요 기능

### 1. 개인화된 AI 캐릭터
```typescript
// 사용자 성향에 따른 말투 변화 예시
const chadPersonalities = {
  conservative: "자네, 남자라면 해야 할 일이 있지 않나?",
  progressive: "야, 너 진짜 멋있게 살고 싶지 않아?",
  feminist: "성별 상관없이 네가 원하는 걸 쟁취해",
  traditional: "진짜 사나이는 말보다 행동이지"
}
```

### 2. 실시간 채팅 인터페이스
- 카카오톡 스타일의 자연스러운 대화 UI
- 실시간 타이핑 인디케이터
- 메시지 복사, 좋아요/싫어요, 재생성 기능
- 음성 메시지 지원 (예정)

### 3. 목표 추적 시스템
- 운동, 공부, 생활 패턴 통합 관리
- 실시간 진행률 시각화
- 성취 배지 및 레벨 시스템

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/damnboy1310/giga-pt.git
cd giga-pt
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
```

3. **개발 서버 실행**
```bash
npm run dev
# 또는
yarn dev
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린팅
npm run lint
```

## 🎯 타겟 사용자

- **주 타겟**: 20-30대 자기계발에 관심 있는 직장인/대학생
- **부 타겟**: 운동/공부 동기가 필요한 10대 후반-40대 초반
- **페르소나**: 의지는 있지만 실행력이 부족한 사람들

## 💰 수익 모델

### 구독 티어 시스템

| 등급 | 가격 | 주요 기능 |
|------|------|-----------|
| 🥉 **CHAD** | 무료 | 기본 동기부여 메시지, 일일 미션 3개 |
| 🥈 **MEGACHAD** | 월 9,900원 | 개인화 코칭, 무제한 미션, 앱 잠금 |
| 🥇 **GIGACHAD** | 월 19,900원 | 실시간 AI 대화, 프리미엄 테마 |
| 💎 **TERACHAD** | 월 39,900원 | 1:1 화상 코칭, 전문가 연결 |

## 🎨 UI/UX 특징

### 디자인 원칙
- **강렬한 개성**: 기존 앱들의 무난한 톤과 차별화
- **직관적 사용성**: 복잡한 기능을 간단하게
- **감정적 연결**: 사용자와 AI 캐릭터 간의 강한 유대감

### 주요 화면
- **메인 화면**: 오늘의 CHAD 메시지, 진행 중인 미션
- **채팅 화면**: 실시간 대화, 음성 메시지
- **통계 화면**: 목표 달성률, 성취 배지

## 🔧 개발 로드맵

### Phase 1: MVP (1-2개월)
- [ ] 사용자 프로필링 시스템
- [ ] 기본 AI 채팅 기능
- [ ] 목표 설정 및 추적

### Phase 2: 고도화 (2-3개월)
- [ ] 앱 잠금 기능
- [ ] 음성 메시지
- [ ] 푸시 알림

### Phase 3: 확장 (3-6개월)
- [ ] 커뮤니티 기능
- [ ] 전문가 연결
- [ ] 오프라인 이벤트

## 📊 성공 지표 (KPI)

- **사용자 유지율** (30일): 60% 이상
- **목표 달성률**: 70% 이상
- **앱스토어 평점**: 4.5점 이상
- **구독 갱신율**: 80% 이상

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **프로젝트 링크**: [https://github.com/damnboy1310/giga-pt](https://github.com/damnboy1310/giga-pt)
- **이메일**: your-email@example.com

## 🙏 감사의 말

- [Next.js](https://nextjs.org/) - React 프레임워크
- [Shadcn/ui](https://ui.shadcn.com/) - UI 컴포넌트 라이브러리
- [Tailwind CSS](https://tailwindcss.com/) - CSS 프레임워크
- [Lucide](https://lucide.dev/) - 아이콘 라이브러리

---

**"CHAD가 되어라, 그냥 되지 말고!"** 💪
