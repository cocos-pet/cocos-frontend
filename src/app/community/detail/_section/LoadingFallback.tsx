import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@common/component/Loading/Loading.tsx"), {
  ssr: false,
});

const LoadingFallback = () => <Loading height={80} />;

export default LoadingFallback;
