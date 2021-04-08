import Head from "next/head";
import Balance from "../components/Balance/Balance";
import Greeting from "../components/Greeting/Greeting";
import SettingsButtonStories from "../components/SettingsButton/SettingsButton";
import SubHeadline from "../components/SubHeadline/SubHeadline";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar/Nabar";
import { useRouter } from "next/dist/client/router";
import Lottie from "react-lottie";
import animationData from "../lotties/add.json";

const userName = "Cole Friedlaender";

export default function startPortfolio() {
  const router = useRouter();
  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;
  const defaultOptions = {
    loop: false,
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
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <Greeting name={userName} />
          <section className={styles.settingsButton}>
            <Link href={`/settings`}>
              <a>
                <SettingsButtonStories />
              </a>
            </Link>
          </section>
          <section className={styles.balance}>
            <Balance sum={0} returnValue={0} />
          </section>
          <section className={styles.date}>
            <SubHeadline date={date} />
          </section>
        </header>
      </div>

      <main className={styles.main}>
        <section className={styles.add}>
          <Link href={`/searchPage`}>
            <a>
              <Lottie options={defaultOptions} height={200} width={200} />
            </a>
          </Link>
        </section>
      </main>

      <div className={styles.footerContainer}>
        <Navbar page={router.pathname} />
      </div>
    </div>
  );
}
