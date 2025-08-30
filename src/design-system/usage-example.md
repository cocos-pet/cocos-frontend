# 디자인 시스템 사용법

이제 디자인 시스템 컴포넌트들을 다음과 같은 방식으로 import할 수 있습니다:

## ✅ 메인 index에서 모든 컴포넌트 import (권장)

```typescript
import { Button, Chip, Modal, Toast } from "@design-system";
```

## ✅ 상대 경로 사용 (현재 작동 확인됨)

```typescript
import { Button } from "src/design-system";
import { Button } from "./src/design-system/Button";
```

## 사용 예시

```tsx
import React from "react";
import { Button, Chip } from "@design-system";

export function MyComponent() {
  return (
    <div>
      <Button
        variant="primary"
        label="클릭하세요"
        onClick={() => console.log("clicked")}
      />
      <Chip label="태그" color="blue" isSelected={true} />
    </div>
  );
}
```

## 설정된 Path Aliases

- `@design-system/*` → `src/design-system/*`
- TypeScript, Next.js, Storybook 모두 설정 완료

## 📁 단순화된 구조

- ✅ 각 컴포넌트 폴더에 개별 index.ts 파일 **없음**
- ✅ 모든 export는 메인 `src/design-system/index.ts`에서 처리
- ✅ 더 간단하고 유지보수하기 쉬운 구조
- ✅ import 경로 단순화: `@design-system`만 사용

## 사용 가능한 컴포넌트들

- `Button` → 버튼 컴포넌트
- `Chip` → 칩 컴포넌트
- `Modal`, `ModalTitle`, `ModalContent`, `ModalClose`, `ModalConfirm`, `ModalBottomAffix` → 모달 관련 컴포넌트들
- `Toast` → 토스트 컴포넌트
- `Radio` → 라디오 컴포넌트
- `Tab` → 탭 컴포넌트
- `Loading` → 로딩 컴포넌트
- `HeaderNav` → 헤더 네비게이션 컴포넌트
- `FloatingBtn` → 플로팅 버튼 컴포넌트
- `ColorChip` → 컬러 칩 컴포넌트
- `Divider` → 구분선 컴포넌트
- `CheckBoxText` → 체크박스 텍스트 컴포넌트
- `TextField` → 텍스트 필드 컴포넌트
