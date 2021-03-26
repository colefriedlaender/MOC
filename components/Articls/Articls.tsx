import styles from "../Articls/Articls.module.css";
export type ArticalsProps = {
  linkNameOne: string;
  linkNameTwo: string;
  linkNameThree: string;
  linkNameFour: string;
  linkNameFive: string;
  titleNameOne: string;
  titleNameTwo: string;
  titleNameThree: string;
  titleNameFour: string;
  titleNameFive: string;
};

function Articals({
  linkNameOne,
  linkNameTwo,
  linkNameThree,
  linkNameFour,
  linkNameFive,
  titleNameOne,
  titleNameTwo,
  titleNameThree,
  titleNameFour,
  titleNameFive,
}: ArticalsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>Articls</div>
      <a href={titleNameOne}>
        <div className={styles.linkName}>- {linkNameOne}</div>
      </a>
      <a href={titleNameTwo}>
        <div className={styles.linkName}>- {linkNameTwo}</div>
      </a>
      <a href={titleNameThree}>
        <div className={styles.linkName}>- {linkNameThree}</div>
      </a>
      <a href={titleNameFour}>
        <div className={styles.linkName}>- {linkNameFour}</div>
      </a>
      <a href={titleNameFive}>
        <div className={styles.linkName}>- {linkNameFive}</div>
      </a>
    </div>
  );
}

export default Articals;
