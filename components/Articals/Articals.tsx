import styles from "../Articals/Articals.module.css";
export type ArticalsProps = {
  linkNameOne: string;
  linkNameTwo: string;
  linkNameThree: string;
  linkNameFour: string;
  linkNameFive: string;
};

function Articals({
  linkNameOne,
  linkNameTwo,
  linkNameThree,
  linkNameFour,
  linkNameFive,
}: ArticalsProps) {
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

export default Articals;
