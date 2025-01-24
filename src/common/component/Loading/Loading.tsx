import { Player } from "@lottiefiles/react-lottie-player";
import loading from "@asset/lottie/loading.json";
import { layout } from "./Loading.css";

interface LoadingProps {
  height?: number;
}

const Loading = ({ height }: LoadingProps) => {
  return (
    <div className={layout} style={{ height: `${height}rem` }}>
      <Player autoplay loop src={loading} style={{ width: 127, height: 129 }} />
    </div>
  );
};

export default Loading;
