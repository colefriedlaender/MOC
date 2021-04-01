import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Nabar";
import Search from "../components/Search/Search";
import Headline from "../components/SubHeadline/Headline";
import Suggestion from "../components/Suggestion/Suggestion";
import Topic from "../components/Topic/Topic";
import styles from "../styles/search.module.css";
import { getStockBySearch, SearchAPI } from "../utils/api";
export default function SearchPage() {
  const router = useRouter();
  const [id, setId] = useState("A");
  const [stock, setStock] = useState<SearchAPI[]>();

  const onChange = (e) => {
    setId(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (!confirm("Do you really want to submit?")) {
      return;
    }
    alert(id);
    setId(e.target.value);
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getStockBySearch(id).then((newStock) => {
        setStock(newStock);
      });
    }, 400);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [id]);
  if (!stock) {
    return <Loading />;
  }

  const searchItems = stock.map((suggestion) => (
    <Link href={`/search/${suggestion.id}`} key={suggestion.id}>
      <a>
        <Suggestion name={suggestion.name} price={suggestion.price} />
      </a>
    </Link>
  ));
  async function handleClick() {
    alert("This function will come soon");
  }
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
      <div className={styles.footerContainer}>
        <Navbar onClick={handleClick} page={router.pathname} />
      </div>
    </div>
  );
}
