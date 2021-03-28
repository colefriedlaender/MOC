import styles from "../Search/Search.module.css";

function Search() {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        placeholder="APPLE INC."
      ></input>
      <img
        className={styles.icon}
        src="/Icons/Search.svg"
        alt="Setings Button"
      />
    </div>
  );
}

export default Search;
