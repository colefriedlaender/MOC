import Head from "next/head";
import Button from "../components/button/Button";
import Greeting from "../components/Greeting/Greeting";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/material-sort.svg" />
        </Head>
        <header className={styles.header}>
          <Greeting name="Cole Friedlaender" />
        </header>
        <main className={styles.main}></main>
      </div>
    </div>
  );
}
