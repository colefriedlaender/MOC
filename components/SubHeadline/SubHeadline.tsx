import styles from "../SubHeadline/SubHeadline.module.css";
export type SubHeadlineProps = { date: string };

function SubHeadline({ date }: SubHeadlineProps) {
  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>Portfolio</div>
      <div className={styles.sort}>sort</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
}
export default SubHeadline;
