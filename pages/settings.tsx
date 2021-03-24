import Head from "next/head";
import BackButton from "../components/BackButton/BackButton";
import Topic from "../components/Topic/Topic";
import styles from "../styles/settings.module.css";
import Lottie from "react-lottie";
// import animationData from "../lotties/loading.json";
// import animationData from "../lotties/404.json";
import animationData from "../lotties/construction.json";
export default function Settings() {
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
      <header className={styles.header}>
        <BackButton
          onClick={() => {
            history.back();
          }}
        />
        <section className={styles.topic}>
          <Topic topic={"Settings"} />
        </section>
      </header>
      <main className={styles.main}>
        <div className={styles.loading}>
          <Lottie options={defaultOptions} height={220} width={300} />
        </div>
        <div>
          <button
            onClick={() => {
              getStockInformation();
            }}
          >
            API
          </button>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
