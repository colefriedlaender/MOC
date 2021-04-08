import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import styles from "../styles/welcome.module.css";
import Lottie from "react-lottie";
import animationData from "../lotties/load.json";
import { useEffect } from "react";
export default function Welcome() {
  const router = useRouter();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/login");
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>MOC</title>
        <link rel="icon" href="/Icons/favicon.money.png" />
      </Head>
      <main className={styles.main}>
        <img src="/Icons/logoBIG.svg" alt="Logo" />
        <Lottie options={defaultOptions} height={50} width={150} />
      </main>
    </div>
  );
}
