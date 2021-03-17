import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>MOC</title>
          <link rel="icon" href="/vercel.svg" />
        </Head>
        <header className={styles.header}></header>
        <main className={styles.main}></main>
      </div>
    </div>
  );
}
