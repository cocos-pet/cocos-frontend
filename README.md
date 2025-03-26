# 코코스 프론트엔드 프로젝트

## Next.js 마이그레이션 작업

이 프로젝트는 Vite, React 기반 프로젝트에서 Next.js 14.2.6 버전으로 마이그레이션 되었습니다.

### 주요 변경 사항

1. 패키지 의존성 변경

   - Vite -> Next.js
   - react-router-dom 제거 (Next.js App Router 사용)
   - @vanilla-extract/vite-plugin -> @vanilla-extract/next-plugin

2. 프로젝트 구조 변경

   - src/app 디렉토리 생성 (Next.js App Router)
   - 라우팅 방식 변경 (react-router-dom -> Next.js App Router)

3. 환경 변수 형식 변경

   - VITE*\* -> NEXT_PUBLIC*\*

4. TanStack Query 설정 변경
   - QueryClientProvider를 src/app/providers.tsx로 이동

### 작업 단위

1. 기본 설정 변경 (커밋1)

   - package.json 의존성 및 스크립트 변경
   - next.config.mjs 생성
   - tsconfig.json 수정
   - next-env.d.ts 생성

2. App Router 구조 생성 (커밋2)

   - src/app/layout.tsx 생성
   - src/app/providers.tsx 생성
   - src/app/page.tsx 생성 (홈페이지)

3. 인증 관련 페이지 마이그레이션 (커밋3)

   - 로그인 페이지 마이그레이션
   - 카카오 OAuth 리다이렉트 페이지 마이그레이션
   - 환경 변수 형식 변경
   - NotFound 페이지 마이그레이션

4. 기능 페이지 마이그레이션 (커밋4)

   - 메인 페이지 마이그레이션
   - 온보딩 페이지 마이그레이션
   - gitignore 파일 수정

5. 문서화 및 마무리 (커밋5)
   - README.md 업데이트

### 추가로 필요한 작업

1. 다른 페이지들의 마이그레이션

   - 커뮤니티 페이지
   - 마이페이지
   - 프로필 페이지
   - 설정 페이지
   - 반려동물 등록 페이지

2. 공통 컴포넌트 및 레이아웃 구성 재검토

   - 레이아웃 컴포넌트를 Next.js App Router의 layout.tsx 파일로 적절히 이동

3. API 클라이언트 설정 확인

4. 전체 빌드 및 배포 테스트

5. 성능 최적화 작업

---

# <img src="https://github.com/user-attachments/assets/231222fd-fbb1-4252-a6bc-a9b3382aa0ec" width="128" height="128" alt="파비콘"> 코코스

![image](https://github.com/user-attachments/assets/522b8f7f-7e09-4b7e-b4df-ab57cccfc22a)
반려동물 증상을 겪는 반려인들이 커뮤니티를 통해 고민을 공유하고 병원 정보를 확인할 수 있는 서비스!

</br>

<h2> 🐶 COCOS Team </h2>

<table align="center">
    <tr align="center">
      <td style="min-width: 150px;">
            <a href="https://github.com/ocahs9">
              <img src="https://github.com/user-attachments/assets/e95ea9f0-4df6-4422-a652-ef5c6f8d3c81" width="200" height="250" alt="프로필사진">
              <br />
              <b>🎧공준혁</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/minjeoong">
              <img src="https://github.com/user-attachments/assets/af774eda-6ea2-4abe-a34c-b27430451ffe" width="200" height="250" alt="프로필사진">
              <br />
              <b>🌸김민정</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/yarimu">
              <img src="https://github.com/user-attachments/assets/04394243-2a2d-4620-a555-1c08c2324d45" width="200" height="250" alt="프로필사진">
              <br />
              <b>🐶이예림</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/Leeyoonji23">
              <img src="https://github.com/user-attachments/assets/db34c483-c14e-4eb0-8414-a0ffe4bab520" width="200" height="250" alt="프로필사진">
              <br />
              <b>🐾이윤지</b>
            </a>
        </td>
    </tr>
    <tr align="center">
       <td>
            <b>Lead</b>, 마이페이지 뷰 <br/>
      </td>
       <td>
            검색, 게시물 뷰 <br/>
      </td>
       <td>
            로그인, 온보딩 뷰 <br/>
      </td>
      <td>
            메인, 커뮤니티 뷰 <br/>
      </td>
    </tr>
</table>

</br>

<h2> 🛠 기술스택 </h2>

   <div align="center">

| 역할                 | 종류                                                                                                                                                                                                             | 선정 이유                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                               | 컴포넌트 기반 개발로 유지보수성과 재사용성을 높이기 위해 선정                      |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                                | 코드 안정성과 생산성을 동시에 확보하기 위해 사용                                   |
| Styling              | ![Vanila Extract](https://img.shields.io/badge/vanila--extract-FFEC6E?style=for-the-badge&logo=vala&logoColor=white)                                                                                             | 타입 안전성과 모듈화된 스타일링을 제공하여 유지보수성을 강화                       |
| Data Fetching        | ![Tanstack-Query](https://img.shields.io/badge/reactquery-FF4154.svg?style=for-the-badge&logo=reactquery&logoColor=white)                                                                                        | 데이터 패칭과 캐싱을 효율적으로 관리하고 간편하게 서버 상태를 동기화하기 위해 사용 |
| State Management     | ![Zustand](https://img.shields.io/badge/zustand-000000.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4&logoColor=white)                          | 간결하고 유연한 상태 관리로 직관적인 로직 구현을 지원                              |
| Formatting           | ![biome](https://img.shields.io/badge/biome-60A5FA?style=for-the-badge&logo=biome&logoColor=000)                                                                                                                 | 코드 포맷팅과 린팅을 통합 관리해 일관된 코드 스타일 유지                           |
| Package Manager      | ![Pnpm](https://img.shields.io/badge/pnpm-F69220.svg?style=for-the-badge&logo=pnpm&logoColor=white)                                                                                                              | 빠른 속도와 디스크 공간 절약을 제공하는 패키지 매니저로 프로젝트 효율성을 극대화   |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) | 버전 관리를 통해 협업을 원활히 하고 코드 변경 이력을 체계적으로 관리               |
| Deployment           | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)                                                                                                            | 쉬운 배포와 글로벌 CDN을 통해 빠르고 안정적인 사용자 경험 제공                     |

</div>

<br/>

<h2> 📄 컨벤션 및 브랜치 전략 (Git, Branch) </h2>
<h3>Git Branch</h3>

```
- main (배포용)
- develop (개발용)
- feat/#issue/기능명 (작업용)
```

<h3>Commit Convention</h3>
Commit Message 👉 기능 키워드: 커밋 내용</br>
<br />

| Commit Type | Description                                             |
| ----------- | ------------------------------------------------------- |
| ✨ feat     | 새로운 기능 추가                                        |
| 🚀 api      | api 연동                                                |
| 🐞 fix      | 버그 수정                                               |
| 📦 chore    | 빌드 업무, 패키지 매니저, 라이브러리, dependencies 설정 |
| 📝 docs     | 문서 수정 - ex) README.md                               |
| 🎨 design   | 사용자 UI 디자인 변경 - ex) CSS                         |
| 💄 style    | 기능 수정 없는 코드 스타일 변경                         |
| ♻️ refactor | 코드 리팩토링                                           |
| 📝 test     | 테스트 코드, 리팩토링 테스트 코드 추가                  |
| 🌐 ci       | ci 설정 파일 수정                                       |
| 🪄 perf     | 성능 개선                                               |
| 🛠️ rename   | 파일 혹은 폴더명 변경                                   |
| ⚙️ init     | 초기 세팅                                               |

<br/>

<h3>Coding Convention</h3>
<a href="https://oceanic-pixie-c2c.notion.site/16dc12bc853381f484d1cb9f192c4f4a">COCOS Web의 코딩 컨벤션</a>
<br/><br/>

<h3>PR & Issue Template</h3>
이슈 및 pr 템플릿은 실제로 이슈와 PR이 올라오는 템플릿 확인!
<br/><br/><br/>

<h2>📷 구현 뷰</h2>
<img src="https://github.com/user-attachments/assets/f5e00d9d-254f-49fb-92ec-df21a0e26806" width="1240" height="1754" alt="파비콘">

<br/><br/>

<h2> 📁 폴더 구조 </h2>

```
📦 public
📦 src
 ┣ 📂asset
 ┃ ┣ 📂svg
 ┃ ┗ 📂image
 ┣ 📂api
 ┃ ┣ 📂domain
 ┃ ┣ 📂kakaologin
 ┃ ┗ 📜index.tsx
 ┣ 📂common
 ┃ ┣ 📂component
 ┃ ┣ 📂util
 ┃ ┣ 📂hook
 ┃ ┗ 📂service
 ┣ 📂shared
 ┃ ┣ 📂component
 ┃ ┣ 📂util
 ┃ ┣ 📂hook
 ┃ ┣ 📂storage
 ┃ ┣ 📂store
 ┃ ┣ 📂constant
 ┃ ┗ 📂style
 ┣ 📂page
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📂constant
 ┃ ┃ ┃ ┣ 📂type
 ┃ ┃ ┃ ┣ 📂hook
 ┃ ┃ ┃ ┗ 📂util
 ┃ ┃ ┣ 📂shared
 ┃ ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📂constant
 ┃ ┃ ┃ ┣ 📂hook
 ┃ ┃ ┃ ┗ 📂util
 ┃ ┃ ┣ 📂index
 ┃ ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📂constant
 ┃ ┃ ┃ ┣ 📂type
 ┃ ┃ ┃ ┣ 📂hook
 ┃ ┃ ┃ ┗ 📂util
 ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┗ 📜Main.styled.ts
 ┃ ┣ 📂admin
 ┃ ┗ 📂mypage
 ┣ 📂style
 ┃ ┣ 📜GlobalStyles.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂type
 ┃ ┗ 📜global.d.ts
 ┣ 📂route
 ┃ ┗ 📜Router.tsx
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┣ 📜eslint.config.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.json
 ┣ 📜.stylelintrc.json
 ┣ 📜README.md
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock

```
