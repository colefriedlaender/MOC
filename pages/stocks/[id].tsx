import Head from "next/head";
import { useEffect, useState } from "react";
import StockListItem from "../../components/StockListItem/StockListItem";
import {
  getStockInfoAPI,
  getStockInfoAPINews,
  getStockInfoMongo,
  MongoInfo,
  NewsAPI,
  StockAPI,
} from "../../utils/api";
import styles from "../../styles/id.module.css";
import { useRouter } from "next/dist/client/router";
import Topic from "../../components/Topic/Topic";
import BackButton from "../../components/BackButton/BackButton";
import loadingPage from "../loadingPage";
import Info from "../../components/Info/Info";
import Perform from "../../components/Perform/Perform";
import Navbar from "../../components/Navbar/Nabar";
import Articals from "../../components/Articls/Articls";

export default function Overview() {
  const router = useRouter();
  const { id } = router.query;
  const [stockDB, setStockDB] = useState<MongoInfo>(null);
  const [stockAPI, setStockAPI] = useState<StockAPI>(null);
  const [stockAPINews, setStockAPINews] = useState<NewsAPI[]>();

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getStockInfoMongo(id).then((currentStock) => {
      setStockDB(currentStock);
    });

    getStockInfoAPI(id).then((currentAPI) => {
      setStockAPI(currentAPI);
    });
    getStockInfoAPINews(id).then((currentNews) => {
      setStockAPINews(currentNews);
    });
  }, [id]);
  if (!stockDB) {
    return loadingPage();
  }

  if (!stockAPI) {
    return loadingPage();
  }
  if (!stockAPINews) {
    return loadingPage();
  }
  const API = stockAPI[0];
  console.log(stockAPINews[0].title);
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
          <Topic topic={"Overview"} />
        </section>
      </header>
      <main className={styles.main}>
        <StockListItem
          amount={stockDB.amount}
          price={stockDB.price}
          stockName={API.name}
          priceAPI={API.priceAPI}
        />
        <section className={styles.info}>
          <Info
            firstWord={"Current"}
            restOfPhrase={"Stock Price"}
            content={API.priceAPI}
          />
          <Info
            firstWord={"Yearly"}
            restOfPhrase={"Return Rate"}
            content={API.change}
          />
        </section>
        <Perform
          head={"Performance"}
          performanceRate={"4,56"}
          performanceText={
            "Compared to the MSCI World Equity the Stock performes"
          }
        />
        <Articals
          linkNameOne={stockAPINews[0].title}
          linkNameTwo={stockAPINews[1].title}
          linkNameThree={stockAPINews[2].title}
          linkNameFour={stockAPINews[3].title}
          linkNameFive={stockAPINews[4].title}
          titleNameOne={stockAPINews[0].link}
          titleNameTwo={stockAPINews[1].link}
          titleNameThree={stockAPINews[2].link}
          titleNameFour={stockAPINews[3].link}
          titleNameFive={stockAPINews[4].link}
        />
      </main>
      <footer className={styles.footer}>
        <Navbar />
      </footer>
    </div>
  );
}
