"use client";

import loading from "@asset/lottie/loading.json";
import { layout } from "./Loading.css";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LoadingProps {
  height?: number;
}

const Loading = ({ height }: LoadingProps) => {
  return (
    <div className={layout} style={{ height: `${height}rem` }}>
      {/* Lottie 애니메이션 */}
      <Lottie animationData={loading} autoplay={true} style={{ width: 127, height: 129 }} />
    </div>
  );
};

export default Loading;
