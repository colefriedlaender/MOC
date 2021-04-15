import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useState } from "react";
import LoginEmail from "../components/LoginEmail/LoginEmail";
import LoginPassword from "../components/LoginPassword/LoginPassword";
import LoginName from "../components/LoginName/LoginName";
import SubmittButton from "../components/SubmitButton/SubmitButton";
import styles from "../styles/login.module.css";
export const currentPassword = 1234;
export default function Login() {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState();
  const [confirmPW, setConfirmPW] = useState();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPW = (e) => {
    setConfirmPW(e.target.value);
  };
  console.log(email);
  console.log(password);
  console.log(name);
  const handleSubmit = () => {
    if (password == currentPassword) {
      router.push("/portfolio");
    } else {
      return alert("The password is wrong");
    }
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
        <LoginName name={"Name"} onChange={onChangeName} />
        <LoginEmail name={"Email Adress"} onChange={onChangeEmail} />
        <LoginPassword
          name={"Password"}
          onChange={onChangePassword}
          value={password}
        />
        <LoginPassword
          name={"Confirm Password"}
          onChange={onChangeConfirmPW}
          value={confirmPW}
        />
        <SubmittButton onClick={handleSubmit} content={"LOGIN"} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
