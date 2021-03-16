import styles from "../Balance/Balance.module.css";

export type BalanceProps = {
  total: number;
  returnValue: number;
};

function Balance({ total, returnValue }: BalanceProps) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>Balance</div>
      <div className={styles.total}>${total}</div>
      <div className={styles.returnValue}>+{returnValue}%</div>
    </div>
  );
}

export default Balance;
