import styles from "../Loading/Loading.module.css";
import Lottie from "react-lottie";
import animationData from "../../lotties/loadingTime.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </div>
  );
}

export default Loading;
