import { ChangeEventHandler, MouseEventHandler } from "react";
import styles from "../AddAmount/AddAmount.module.css";
export type AddProps = {
  onClick: MouseEventHandler<HTMLImageElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: number;
};
function AddAmount({ onClick, onChange, value }: AddProps) {
  return (
    <div className={styles.container}>
      <div>Amount</div>
      <div className={styles.containerBox}>
        <input
          className={styles.input}
          type="number"
          onChange={onChange}
          required
          value={value}
        ></input>
        <img
          className={styles.img}
          src="/Icons/dropdown.svg"
          alt="Setings Button"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default AddAmount;
