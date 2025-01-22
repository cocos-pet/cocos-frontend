import { Player } from "@lottiefiles/react-lottie-player";
import loading from "@asset/lottie/loading.json";

const Loading = () => {
  return (
    <div>
      <Player autoplay loop={false} src={loading} />
    </div>
  );
};

export default Loading;
