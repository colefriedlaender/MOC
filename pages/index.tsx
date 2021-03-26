import Head from "next/head";
import { useEffect, useState } from "react";
import Balance from "../components/Balance/Balance";
import Greeting from "../components/Greeting/Greeting";
import SettingsButtonStories from "../components/SettingsButton/SettingsButton";
import StockListItem from "../components/StockListItem/StockListItem";
import SubHeadline from "../components/SubHeadline/SubHeadline";
import styles from "../styles/Home.module.css";
import {
  getStocksInfoMongo,
  getStocksInfoAPI,
  MongoInfo,
  StockAPI,
} from "../utils/api";
import Link from "next/link";
import Navbar from "../components/Navbar/Nabar";
import loadingPage from "./loadingPage";

const userName = "Cole Friedlaender";
const date = "14.03.2021";

export default function Home() {
  const [stocksDB, setStocksDB] = useState<MongoInfo[]>();
  const [stocksAPI, setStocksAPI] = useState<StockAPI[]>();

  useEffect(() => {
    getStocksInfoMongo().then((newStocks) => {
      setStocksDB(newStocks);
    });
    getStocksInfoAPI().then((newPrice) => {
      setStocksAPI(newPrice);
    });
  }, []);
  if (!stocksDB) {
    return loadingPage();
  }
  if (!stocksAPI) {
    return loadingPage();
  }
  const a1 = stocksAPI;
  const a2 = stocksDB;
  const stock = a1.map((stockAPI) => ({
    ...stockAPI,
    ...a2.find((stockDB) => stockDB.id === stockAPI.id),
  }));
  console.log({ stock });

  const trackItems = stock.map((stock) => (
    <Link href={`/stocks/${stock.id}`} key={stock.id}>
      <a>
        <StockListItem
          amount={stock.amount}
          price={stock.price}
          stockName={stock.name}
          priceAPI={stock.priceAPI}
        />
      </a>
    </Link>
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>MOC</title>
        <link rel="icon" href="/Icons/favicon.toilett.png" />
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
            <Balance total={6789.89} returnValue={1.89} />
          </section>
          <section className={styles.date}>
            <SubHeadline date={date} />
          </section>
        </header>
      </div>
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <section className={styles.list}>
            <div>{trackItems}</div>
          </section>
        </main>
      </div>
      <div className={styles.footerContainer}>
        <Navbar />
      </div>
    </div>
  );
}
