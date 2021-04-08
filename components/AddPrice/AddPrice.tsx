import { ChangeEventHandler } from "react";
import styles from "../AddPrice/AddPrice.module.css";
export type AddPriceProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: number;
};

function AddPrice({ onChange, value }: AddPriceProps) {
  return (
    <div className={styles.container}>
      <div>Price</div>
      <div className={styles.containerBox}>
        <input
          className={styles.input}
          type="number"
          onChange={onChange}
          required
          value={value}
        ></input>
      </div>
    </div>
  );
}

export default AddPrice;
