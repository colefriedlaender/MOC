// import { useRouter } from "next/dist/client/router";
import styles from "../../styles/id.module.css";
import Head from "next/head";
import BackButton from "../../components/BackButton/BackButton";

export default function Overview() {
  // const router = useRouter();
  // // const { id } = router.query;

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
      </header>
      <main className={styles.main}></main>
    </div>
  );
}
