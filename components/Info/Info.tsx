import styles from "../Info/Info.module.css";
export type InfoProps = {
  firstWord: string;
  restOfPhrase: string;
  content: number;
};

function Info({ firstWord, restOfPhrase, content }: InfoProps) {
  const shortcontent = content.toFixed(2);
  return (
    <div className={styles.container}>
      <div className={styles.firstWord}>
        {firstWord}
        <span className={styles.restOfPhrase}>{restOfPhrase}</span>
      </div>
      <div className={styles.information}>{shortcontent}</div>
    </div>
  );
}

export default Info;
