import styles from "../../styles/id.search.module.css";
import Head from "next/head";
import { getStockInfoAPIName, postStock, StockName } from "../../utils/api";
import BackButton from "../../components/BackButton/BackButton";
import { useRouter } from "next/dist/client/router";
import AddAmount from "../../components/AddAmount/AddAmount";
import AddPrice from "../../components/AddPrice/AddPrice";
import SubmittButton from "../../components/SubmitButton/SubmitButton";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

export default function Overview() {
  const [info, setInfo] = useState<StockName>(null);
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const { id } = router.query;
  function handleClick() {
    alert("Hallo");
  }
  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getStockInfoAPIName(id).then((APIname) => {
      setInfo(APIname);
    });
  }, [id]);
  if (!info) {
    return <Loading />;
  }
  const name = info[0].name;
  const sendStock = async (e) => {
    e.preventDefault();
    await postStock({
      id: id,
      amount: amount,
      price: price,
    });
    router.push("/portfolio");
  };

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
        {name}
      </header>
      <form onSubmit={sendStock}>
        <main className={styles.main}>
          <section className={styles.addAmount}>
            <AddAmount
              onClick={handleClick}
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </section>
          <section className={styles.addPrice}>
            <AddPrice
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </section>
        </main>
        <footer className={styles.footer}>
          <SubmittButton content={"Add"} onClick={sendStock} />
        </footer>
      </form>
    </div>
  );
}
