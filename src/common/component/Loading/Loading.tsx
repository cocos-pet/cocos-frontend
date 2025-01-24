import loading from "@asset/lottie/loading.json";
import { layout } from "./Loading.css";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className={layout}>
      {/* Lottie 애니메이션 */}
      <Lottie animationData={loading} autoplay={true} style={{ width: 127, height: 129 }} />
    </div>
  );
};

export default Loading;
