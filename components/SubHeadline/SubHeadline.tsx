import styles from "../SubHeadline/SubHeadline.module.css";
export type SubHeaderProps = {
  date: string;
};

function SubHeadline({ date }: SubHeaderProps) {
  return (
    <div className={styles.subHeaderContainer}>
      <div className={styles.subHeader}>Portfolio</div>
      <img src="/material-sort.svg" alt="" className={styles.sortImage} />
      <div className={styles.sort}>sort</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
}

export default SubHeadline;
