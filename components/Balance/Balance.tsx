import styles from "../Balance/Balance.module.css";

export type BalanceProps = {
  sum: number;
  returnValue: number;
};

function Balance({ sum, returnValue }: BalanceProps) {
  const total = sum.toFixed(2);
  const value = returnValue.toFixed(2);
  return (
    <div className={styles.container}>
      <div className={styles.head}>Balance</div>
      <div className={styles.total}>${total}</div>
      <div
        className={returnValue < 0 ? styles.returnValueNeg : styles.returnValue}
      >
        {value}%
      </div>
    </div>
  );
}

export default Balance;
