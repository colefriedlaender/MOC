import styles from "../SubmitButton/SubmitButton.module.css";

export type SubmitButtonProps = {
  content: string;
};

function SubmittButton({ content }: SubmitButtonProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>{content}</div>
    </div>
  );
}

export default SubmittButton;
