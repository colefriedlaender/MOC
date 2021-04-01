import { ChangeEventHandler, MouseEventHandler } from "react";
import styles from "../Search/Search.module.css";

export type SearchProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLImageElement>;
};

function Search({ onChange, onClick }: SearchProps) {
  return (
    <div className={styles.container}>
      <input
        onChange={onChange}
        className={styles.input}
        type="text"
        placeholder="APPLE INC."
      ></input>
      <img
        onClick={onClick}
        className={styles.icon}
        src="/Icons/Search.svg"
        alt="Settings Button"
      />
    </div>
  );
}
export default Search;
