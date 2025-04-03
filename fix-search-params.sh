#!/bin/bash

# useSearchParams 임포트 변경
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useSearchParams" | xargs sed -i '' 's/import { useSearchParams } from "react-router-dom";/import { useSearchParams } from "next\/navigation";/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useSearchParams" | xargs sed -i '' 's/import {useSearchParams} from "react-router-dom";/import {useSearchParams} from "next\/navigation";/g'

# useSearchParams가 다른 import와 함께 있는 경우
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useSearchParams, " | xargs sed -i '' 's/useSearchParams, /useSearchParams as RouterSearchParams, /g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l ", useSearchParams" | xargs sed -i '' 's/, useSearchParams/, useSearchParams as RouterSearchParams/g'

# 실제 사용 패턴 변경 (1) - 기본 사용 패턴
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "const \[searchParams, setSearchParams\] = useSearchParams()" | xargs sed -i '' 's/const \[searchParams, setSearchParams\] = useSearchParams()/const searchParams = useSearchParams()/g'

# 실제 사용 패턴 변경 (2) - get 메서드
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "searchParams.get" | xargs sed -i '' 's/searchParams.get(/searchParams.get(/g'

# 실제 사용 패턴 변경 (3) - setSearchParams
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "setSearchParams" | xargs sed -i '' 's/setSearchParams(/\/\/ TODO: Fix this for Next.js - router.push with query params\
  \/\/ setSearchParams(/g'

echo "useSearchParams 변환이 완료되었습니다. 변경된 파일을 확인해주세요." 