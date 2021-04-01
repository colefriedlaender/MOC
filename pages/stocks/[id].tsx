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
import Info from "../../components/Info/Info";
import InfoPrice from "../../components/Info/InfoPrice";
import Perform from "../../components/Perform/Perform";
import Navbar, { onClick } from "../../components/Navbar/Nabar";
import Articles from "../../components/Articles/Articles";
import Loading from "../../components/Loading/Loading";

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
    return <Loading />;
  }

  if (!stockAPI) {
    return <Loading />;
  }
  if (!stockAPINews) {
    return <Loading />;
  }
  const API = stockAPI[0];
  return (
    <div className={styles.container}>
      <Head>
        <title>MOC</title>
        <link rel="icon" href="/Icons/favicon.money.png" />
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
          <InfoPrice
            firstWord={"Current"}
            restOfPhrase={"Stock Price"}
            content={API.priceAPI}
          />
          <Info
            firstWord={"Percent"}
            restOfPhrase={"OF Change"}
            content={API.change}
          />
        </section>
        <Perform
          head={"Performance"}
          performanceRate={"4,56"}
          performanceText={
            "Compared to the MSCI World Equity the Stock performs"
          }
        />
        <Articles
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
        <Navbar onClick={onClick} page={router.pathname} />
      </footer>
    </div>
  );
}
