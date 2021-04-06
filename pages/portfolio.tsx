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
import Loading from "../components/Loading/Loading";
import { useRouter } from "next/dist/client/router";

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
    return <Loading />;
  }
  if (!stocksAPI) {
    return <Loading />;
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
  const total =
    stock[0].amount * stock[0].priceAPI +
    stock[1].amount * stock[1].priceAPI +
    stock[2].amount * stock[2].priceAPI +
    stock[3].amount * stock[3].priceAPI +
    stock[4].amount * stock[4].priceAPI +
    stock[5].amount * stock[5].priceAPI +
    stock[6].amount * stock[6].priceAPI +
    stock[7].amount * stock[7].priceAPI +
    stock[8].amount * stock[8].priceAPI +
    stock[9].amount * stock[9].priceAPI +
    stock[10].amount * stock[10].priceAPI;
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
            <Balance sum={total} returnValue={4.67} />
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
