import styles from "../PerformanceBlock/Performance.module.css";
export type PerformanceProps = {
  head: string;
  performanceText: string;
  performanceRate: string;
};

function Performance({
  head,
  performanceRate,
  performanceText,
}: PerformanceProps) {
  return (
    <div className={styles.performanceContainer}>
      <div className={styles.head}>{head}</div>
      <div className={styles.performance}>
        {performanceText}
        <span className={styles.performanceRate}> {performanceRate}%</span>
      </div>
    </div>
  );
}

export default Performance;
