#!/bin/bash

# const [searchParams] = useSearchParams() 형태를 const searchParams = useSearchParams()로 변경
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "const \[searchParams\] = useSearchParams()" | xargs sed -i '' 's/const \[searchParams\] = useSearchParams()/const searchParams = useSearchParams()/g'

# const [searchParams, setSearchParams] = useSearchParams() 형태도 변경
find src/app -type f -name "*.tsx" -o -name "*.ts" | xargs grep -l "const \[searchParams, setSearchParams\] = useSearchParams()" | xargs sed -i '' 's/const \[searchParams, setSearchParams\] = useSearchParams()/const searchParams = useSearchParams()/g'

echo "useSearchParams 배열 구조 분해 형태 수정이 완료되었습니다." 