import Head from "next/head";
import BackButton from "../components/BackButton/BackButton";
import Topic from "../components/Topic/Topic";
import styles from "../styles/settings.module.css";

import LoginPassword from "../components/LoginPassword/LoginPassword";
import SubmittButton from "../components/SubmitButton/SubmitButton";
import { useState } from "react";
import { currentPassword } from "./login";
import About from "../components/AboutMe/About";
export default function Settings() {
  const [oldPass, setOldPass] = useState(null);
  const [newPass, setNewPass] = useState(null);
  const onChangeOldPass = (e) => {
    setOldPass(e.target.value);
  };
  const onChangeNewPass = (e) => {
    setNewPass(e.target.value);
  };
  const handleSubmit = () => {
    if (oldPass == currentPassword) {
      alert(`You changed your PassWord to ${newPass}`);
    } else {
      alert(`Your password is wrong`);
      setOldPass("");
      setNewPass("");
    }
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
        <section className={styles.topic}>
          <Topic topic={"Settings"} />
        </section>
      </header>
      <main className={styles.main}>
        <div className={styles.login}>
          <LoginPassword
            name={"Old Password"}
            onChange={onChangeOldPass}
            value={oldPass}
          />
        </div>
        <div className={styles.login}>
          <LoginPassword
            name={"New Password"}
            onChange={onChangeNewPass}
            value={newPass}
          />
        </div>
        <div className={styles.login}>
          <SubmittButton onClick={handleSubmit} content={"Change Password"} />
        </div>
        <div className={styles.login}>
          <About />
        </div>
      </main>
    </div>
  );
}
