#!/bin/bash

# src/app 디렉토리에서 모든 .tsx 및 .ts 파일을 찾아 변경합니다.
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useNavigate" | xargs sed -i '' 's/import { useNavigate } from "react-router-dom";/import { useRouter } from "next\/navigation";/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useNavigate" | xargs sed -i '' 's/import {useNavigate} from "react-router-dom";/import {useRouter} from "next\/navigation";/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useNavigate" | xargs sed -i '' 's/useNavigate,/useRouter,/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useNavigate" | xargs sed -i '' 's/, useNavigate/, useRouter/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "const navigate" | xargs sed -i '' 's/const navigate = useNavigate()/const router = useRouter()/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "navigate(" | xargs sed -i '' 's/navigate(/router.push(/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "navigate(-1)" | xargs sed -i '' 's/navigate(-1)/router.back()/g'

# api hooks 등 다른 중요한 파일들도 확인하여 변경합니다.
find src/api -type f -name "*.ts" -o -name "*.tsx" | xargs grep -l "useNavigate" | xargs sed -i '' 's/import { useNavigate } from "react-router-dom";/import { useRouter } from "next\/navigation";/g'
find src/api -type f -name "*.ts" -o -name "*.tsx" | xargs grep -l "const navigate" | xargs sed -i '' 's/const navigate = useNavigate()/const router = useRouter()/g'
find src/api -type f -name "*.ts" -o -name "*.tsx" | xargs grep -l "navigate(" | xargs sed -i '' 's/navigate(/router.push(/g'

echo "라우팅 변환이 완료되었습니다. 변경된 파일을 확인해주세요." 