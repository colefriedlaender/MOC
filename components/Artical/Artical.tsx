import styles from "../Artical/Artical.module.css";
export type ArticalProps = {
  linkNameOne: string;
  linkNameTwo: string;
  linkNameThree: string;
  linkNameFour: string;
  linkNameFive: string;
};

function Artical({
  linkNameOne,
  linkNameTwo,
  linkNameThree,
  linkNameFour,
  linkNameFive,
}: ArticalProps) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>Articals</div>
      <div className={styles.linkName}>- {linkNameOne}</div>
      <div className={styles.linkName}>- {linkNameTwo}</div>
      <div className={styles.linkName}>- {linkNameThree}</div>
      <div className={styles.linkName}>- {linkNameFour}</div>
      <div className={styles.linkName}>- {linkNameFive}</div>
    </div>
  );
}

export default Artical;
