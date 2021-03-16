import styles from "../Info/Info.module.css";
export type InfoProps = {
  firstWord: string;
  otherWords: string;
  information: string;
};

function Info({ firstWord, otherWords, information }: InfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.firstWord}>
        {firstWord}
        <span className={styles.secondWord}>{otherWords}</span>
      </div>
      <div className={styles.information}>{information}</div>
    </div>
  );
}

export default Info;
