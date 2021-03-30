import Head from "next/head";
import { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import Headline from "../components/SubHeadline/Headline";
import Suggestion from "../components/Suggestion/Suggestion";
import Topic from "../components/Topic/Topic";
import useDebounce from "../hooks/useDebounce";
import styles from "../styles/search.module.css";
import { getStockBySearch, SearchAPI } from "../utils/api";
import loadingPage from "./loadingPage";
export default function SearchPage() {
  const [id, setId] = useState("A");
  const [stock, setStock] = useState<SearchAPI[]>();
  const debounceSearch = useDebounce(id, 500);

  const onChange = (e) => {
    setId(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (!confirm("Do you really want to submit?")) {
      return;
    }
    alert(id);
    e.target.reset();
  }
  useEffect(() => {
    getStockBySearch(id).then((newStock) => {
      setStock(newStock);
    });
  }, [id]);
  if (!stock) {
    return loadingPage();
  }
  if (!debounceSearch) {
    return;
  }
  console.log(stock);
  const searchItems = stock.map((suggestion) => (
    <Suggestion
      name={suggestion.name}
      price={suggestion.price}
      key={suggestion.id}
    />
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>MOC</title>
        <link rel="icon" href="/Icons/favicon.money.png" />
      </Head>
      <header className={styles.header}>
        <section className={styles.topic}>
          <Topic topic={"Search"} />
        </section>
      </header>
      <main className={styles.main}>
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Search onChange={onChange} onClick={handleSubmit} />
          </form>
          <Headline />
        </div>
        <section>
          <div>{searchItems}</div>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
