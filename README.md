# PNPM 사용

우린 패키지매니저로 pnpm 사용하니까 꼭 pnpm -v 확인해서 잘 설치되어 있는지 확인하고 
pnpm add, pnpm install, pnpm dev, pnpm build 와 같이 yarn 대신 pnpm 으로 사용해!!
(pnpm -v 했을 때 corepack을 설치할거냐는 질문에는 무조건 y 해야함!!)


## svgr 사용 -> svg 파일을 컴포넌트처럼 사용하기

svg 파일을 react component 처럼 사용하기 위해, .svg 파일을 public > svgs 폴더 안에 넣은 뒤,
pnpm svgr 명령어 입력해서 사용하기 ! 그러면 알아서 src > asset > svg 폴더 안에 필요한 파일들이 생성될거야!


## 전역 스타일 세팅하는 사람은 반드시 width 375px과 중앙 정렬도 신경 써서 만들어두기 !
