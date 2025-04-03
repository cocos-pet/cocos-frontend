#!/bin/bash

# 1. react-router-dom의 useSearchParams를 Next.js의 useSearchParams로 변경
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useSearchParams.*from \"react-router-dom\"" | xargs sed -i '' 's/import { useSearchParams as RouterSearchParams } from "react-router-dom";/import { useSearchParams } from "next\/navigation";/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useSearchParams.*from \"react-router-dom\"" | xargs sed -i '' 's/import {useSearchParams as RouterSearchParams} from "react-router-dom";/import {useSearchParams} from "next\/navigation";/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useSearchParams.*from \"react-router-dom\"" | xargs sed -i '' 's/import { useRouter, useSearchParams as RouterSearchParams } from "react-router-dom";/import { useRouter, useSearchParams } from "next\/navigation";/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useSearchParams.*from \"react-router-dom\"" | xargs sed -i '' 's/import {useRouter, useSearchParams as RouterSearchParams} from "react-router-dom";/import {useRouter, useSearchParams} from "next\/navigation";/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useSearchParams.*from \"react-router-dom\"" | xargs sed -i '' 's/import { useSearchParams as RouterSearchParams, useRouter } from "react-router-dom";/import { useSearchParams, useRouter } from "next\/navigation";/g'

# 2. RouterSearchParams 변수명을 searchParams로 변경
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "const searchParams = RouterSearchParams" | xargs sed -i '' 's/const searchParams = RouterSearchParams()/const searchParams = useSearchParams()/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "const \[searchParams, setSearchParams\] = RouterSearchParams" | xargs sed -i '' 's/const \[searchParams, setSearchParams\] = RouterSearchParams()/const searchParams = useSearchParams()/g'

# 3. 남아있는 useSearchParams as RouterSearchParams 임포트 수정
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useSearchParams as RouterSearchParams" | xargs sed -i '' 's/useSearchParams as RouterSearchParams/useSearchParams/g'

echo "Next.js useSearchParams 변환이 완료되었습니다." 