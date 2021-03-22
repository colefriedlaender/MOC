import Head from "next/head";
import styles from "../styles/settings.module.css";
import Lottie from "react-lottie";
import animationData from "../lotties/loadingTime.json";

export default function loadingPage() {
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
      <Head>
        <title>MOC</title>
        <link rel="icon" href="/Icons/favicon.png" />
      </Head>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <div className={styles.loading}>
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
