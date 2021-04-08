import { ChangeEventHandler } from "react";
import styles from "../LoginEmail/LoginEmail.module.css";
export type LoginProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
function LoginEmail({ name, onChange }: LoginProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>{name}</div>
      <div className={styles.inputContainer}>
        <img src="/Icons/mail.svg" alt="EmailIcon" />
        <input
          className={styles.input}
          type="email"
          placeholder="username@gmail.com"
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
}

export default LoginEmail;
