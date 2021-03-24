import Head from "next/head";
import { useEffect, useState } from "react";
import Balance from "../components/Balance/Balance";
import Greeting from "../components/Greeting/Greeting";
import SettingsButtonStories from "../components/SettingsButton/SettingsButton";
import StockListItem from "../components/StockListItem/StockListItem";
import SubHeadline from "../components/SubHeadline/SubHeadline";
import styles from "../styles/Home.module.css";
import { getStocks, Stock } from "../utils/api";
import Link from "next/link";
import Navbar from "../components/Navbar/Nabar";
import loadingPage from "./loadingPage";

const userName = "Cole Friedlaender";
const date = "14.03.2021";

export default function Home() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    getStocks().then((newStocks) => {
      setStocks(newStocks);
    });
  }, []);
  if (!stocks) {
    return loadingPage();
  }
  const stockItems = stocks.map((stock) => (
    <Link href={`/stocks/${stock.id}`} key={stock.id}>
      <a>
        <StockListItem key={stock.id} stock={stock} />
      </a>
    </Link>
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>MOC</title>
        <link rel="icon" href="/Icons/favicon.png" />
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
            <Balance total={10000} returnValue={2.45} />
          </section>
          <section className={styles.date}>
            <SubHeadline date={date} />
          </section>
        </header>
      </div>
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <section className={styles.list}>
            <div>{stockItems}</div>
          </section>
        </main>
      </div>
      <div className={styles.footerContainer}>
        <Navbar />
      </div>
    </div>
  );
}
