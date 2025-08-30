import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@design-system/Loading/Loading"), {
  ssr: false,
});

const LoadingFallback = () => <Loading height={80} />;

export default LoadingFallback;
