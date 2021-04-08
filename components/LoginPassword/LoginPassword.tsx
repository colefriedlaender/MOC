import { ChangeEventHandler } from "react";
import styles from "../LoginPassword/LoginPassword.module.css";
export type LoginProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: number | string;
};
function LoginPassword({ name, onChange, value }: LoginProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>{name}</div>
      <div className={styles.inputContainer}>
        <img src="/Icons/lock.svg" alt="EmailIcon" />
        <input
          className={styles.input}
          type="password"
          placeholder="Enter your password here"
          onChange={onChange}
          value={value}
        ></input>
      </div>
    </div>
  );
}

export default LoginPassword;
