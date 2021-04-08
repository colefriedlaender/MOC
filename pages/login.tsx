import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useState } from "react";
import LoginEmail from "../components/LoginEmail/LoginEmail";
import LoginPassword from "../components/LoginPassword/LoginPassword";
import SubmittButton from "../components/SubmitButton/SubmitButton";
import styles from "../styles/login.module.css";
export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  console.log(email);
  console.log(password);
  const handleSubmit = () => {
    // if (email == "colefriedlaender@outlook.de" && password == 1234) {
    //   router.push("/portfolio");
    // } else {
    //   return alert("The password is wrong");
    // }
    router.push("/portfolio");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>MOC</title>
        <link rel="icon" href="/Icons/favicon.money.png" />
      </Head>
      <header className={styles.header}>
        <img src="/Icons/logoMOC.svg" alt="Logo" />
      </header>
      <main className={styles.main}>
        <LoginEmail name={"Email Adress"} onChange={onChangeEmail} />
        <LoginPassword name={"Password"} onChange={onChangePassword} />
        <SubmittButton onClick={handleSubmit} content={"LOGIN"} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
