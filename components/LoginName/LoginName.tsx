import { ChangeEventHandler } from "react";
import styles from "../LoginName/LoginName.module.css";
export type LoginProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
function LoginName({ name, onChange }: LoginProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>{name}</div>
      <div className={styles.inputContainer}>
        <img src="/Icons/mail.svg" alt="EmailIcon" />
        <input
          className={styles.input}
          type="text"
          placeholder="Cole Friedlaender"
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
}

export default LoginName;
