import Head from "next/head";
import { useEffect, useState } from "react";
import StockListItem from "../../components/StockListItem/StockListItem";
import { getStock, Stock } from "../../utils/api";
import styles from "../../styles/id.module.css";
import { useRouter } from "next/dist/client/router";
import Topic from "../../components/Topic/Topic";
import BackButton from "../../components/BackButton/BackButton";
import loadingPage from "../loadingPage";
import Info from "../../components/Info/Info";
import Perform from "../../components/Perform/Perform";
import Navbar from "../../components/Navbar/Nabar";

export default function Overview() {
  const router = useRouter();
  const { id } = router.query;
  const [stock, setStock] = useState<Stock>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getStock(id).then((currentStock) => {
      setStock(currentStock);
    });
  }, [id]);
  if (!stock) {
    return loadingPage();
  }
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
        <StockListItem stock={stock} />
        <section className={styles.info}>
          <Info
            firstWord={"Yearly"}
            restOfPhrase={"Return Value"}
            content={"1.45"}
          />
          <Info
            firstWord={"Yearly"}
            restOfPhrase={"Return Value"}
            content={"1.45"}
          />
        </section>
        <Perform
          head={"Performance"}
          performanceRate={"4,56"}
          performanceText={
            "Compared to the MSCI World Equity the Stock performes"
          }
        />
      </main>
      <footer className={styles.footer}>
        <Navbar />
      </footer>
    </div>
  );
}
