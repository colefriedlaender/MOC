import Head from "next/head";
import { useEffect, useState } from "react";
import StockListItem from "../../components/StockListItem/StockListItem";
import { getStock, Stock } from "../../utils/api";
import styles from "../../styles/id.module.css";
import { useRouter } from "next/dist/client/router";
import Topic from "../../components/Topic/Topic";
import BackButton from "../../components/BackButton/BackButton";

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
    return <div className={styles.loadingState}>...Loading</div>;
  }
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>MOC</title>
          <link rel="icon" href="/Icons/material-home.svg.svg" />
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
        </main>
      </div>
    </div>
  );
}
