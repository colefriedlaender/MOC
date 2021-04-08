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
import { useRouter } from "next/dist/client/router";
import startPortfolio from "./startPortfolio";

const userName = "Cole Friedlaender";

export default function Home() {
  const router = useRouter();
  const [stocksDB, setStocksDB] = useState<MongoInfo[]>();
  const [stocksAPI, setStocksAPI] = useState<StockAPI[]>();
  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;

  useEffect(() => {
    getStocksInfoMongo().then((newStocks) => {
      setStocksDB(newStocks);
    });
    getStocksInfoAPI().then((newPrice) => {
      setStocksAPI(newPrice);
    });
  }, []);
  if (!stocksDB) {
    return startPortfolio();
  }
  if (!stocksAPI) {
    return startPortfolio();
  }

  const a1 = stocksAPI;
  const a2 = stocksDB;
  const stock = a1.map((stockAPI) => ({
    ...stockAPI,
    ...a2.find((stockDB) => stockDB.id === stockAPI.id),
  }));
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
  let total = 0;
  for (let i = 0; i < stock.length; i++) {
    total = total + stock[i].amount * stock[i].priceAPI;
  }
  let rate = 0;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < stock.length; i++) {
    sum1 = stock[i].priceAPI - stock[i].price;
    sum2 = sum1 / stock[i].price;
    rate = rate + sum2 * 100;
  }

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
            <Balance sum={total} returnValue={rate} />
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
        <Navbar page={router.pathname} />
      </div>
    </div>
  );
}
