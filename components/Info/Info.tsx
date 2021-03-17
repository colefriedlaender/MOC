import styles from "../Info/Info.module.css";
export type InfoProps = {
  firstWord: string;
  restOfPhrase: string;
  content: string;
};

function Info({ firstWord, restOfPhrase, content }: InfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.firstWord}>
        {firstWord}
        <span className={styles.secondWord}>{restOfPhrase}</span>
      </div>
      <div className={styles.information}>{content}</div>
    </div>
  );
}

export default Info;
