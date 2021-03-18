import Head from "next/head";
import BackButton from "../components/BackButton/BackButton";
import Balance from "../components/Balance/Balance";
import Greeting from "../components/Greeting/Greeting";
import SettingsButtonStories from "../components/SettingsButton/SettingsButton";
import Stock from "../components/Stock/Stock";
import SubHeadline from "../components/SubHeadline/SubHeadline";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>MOC</title>
          <link rel="icon" href="/Icons/material-home.svg.svg" />
        </Head>
        <header className={styles.header}>
          <Greeting name={"Max Mustermann"} />
          <SettingsButtonStories
            onClick={() => {
              alert("You pressed the Settings Button");
            }}
          />
          <Balance total={10000} returnValue={2.45} />
        </header>
        <main className={styles.main}>
          <SubHeadline date={"14.03.2002"} />
          <Stock
            amount={3}
            stockPrice={100}
            stockRate={2.45}
            stockName={"APPL INC."}
            total={300}
          />
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
