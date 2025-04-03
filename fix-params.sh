#!/bin/bash

# useParams 임포트 변경
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useParams" | xargs sed -i '' 's/import { useParams } from "react-router-dom";/import { useParams } from "next\/navigation";/g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useParams" | xargs sed -i '' 's/import {useParams} from "react-router-dom";/import {useParams} from "next\/navigation";/g'

# useParams가 다른 import와 함께 있는 경우
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "useParams, " | xargs sed -i '' 's/useParams, /useParams, /g'
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l ", useParams" | xargs sed -i '' 's/, useParams/, useParams/g'

echo "useParams 변환이 완료되었습니다. 변경된 파일을 확인해주세요." 