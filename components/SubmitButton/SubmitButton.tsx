import { MouseEventHandler } from "react";
import styles from "../SubmitButton/SubmitButton.module.css";

export type SubmitButtonProps = {
  content: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function SubmittButton({ content, onClick }: SubmitButtonProps) {
  return (
    <button className={styles.container} type={"submit"} onClick={onClick}>
      <div className={styles.topic}>{content}</div>
    </button>
  );
}

export default SubmittButton;
