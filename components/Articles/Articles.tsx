import styles from "../Articles/Articles.module.css";
export type ArticlesProps = {
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
}: ArticlesProps) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>Articles</div>
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
