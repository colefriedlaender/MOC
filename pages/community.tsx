import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import styles from "../styles/community.module.css";
import Navbar from "../components/Navbar/Nabar";
import Lottie from "react-lottie";
import animationData from "../lotties/chat.json";
export default function Community() {
  const router = useRouter();
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
        <link rel="icon" href="/Icons/favicon.money.png" />
      </Head>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <Lottie options={defaultOptions} height={300} width={350} />
      </main>
      <div className={styles.footerContainer}>
        <Navbar page={router.pathname} />
      </div>
    </div>
  );
}
