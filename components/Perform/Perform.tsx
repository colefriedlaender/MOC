import styles from "../Perform/Perform.module.css";
export type PerformProps = {
  head: string;
  performanceText: string;
  performanceRate: string;
};

function Perform({ head, performanceRate, performanceText }: PerformProps) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>{head}</div>
      <div className={styles.perform}>
        {performanceText}
        <span className={styles.performRate}> {performanceRate}%</span>
      </div>
    </div>
  );
}

export default Perform;
