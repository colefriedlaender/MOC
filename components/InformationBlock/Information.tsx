import styles from "../InformationBlock/Information.module.css";
export type InformationProps = {
  firstWord: string;
  secondWord: string;
  information: string;
};

function Information({ firstWord, secondWord, information }: InformationProps) {
  return (
    <div className={styles.informationContainer}>
      <div className={styles.firstWord}>
        {firstWord}
        <span className={styles.secondWord}>{secondWord}</span>
      </div>
      <div className={styles.information}>{information}</div>
    </div>
  );
}

export default Information;
