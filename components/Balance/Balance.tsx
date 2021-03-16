import styles from "../Balance/Balance.module.css";

export type BalanceProps = {
  totalValue: string;
  returnValue: string;
};

function Balance({ totalValue, returnValue }: BalanceProps) {
  return (
    <div className={styles.balanceContainer}>
      <div className={styles.balanceHeader}>Balance</div>
      <div className={styles.totalValue}>${totalValue}</div>
      <div className={styles.returnValue}>{returnValue}%</div>
    </div>
  );
}

export default Balance;
