import styles from "../Stock/Stock.module.css";
export type StockProps = {
  stockName: string;
  stockRate: number;
  amount: number;
  stockPrice: number;
  total: number;
};

function Stock({
  amount,
  stockPrice,
  stockRate,
  stockName,
  total,
}: StockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.stockName}>{stockName}</div>
      <div className={styles.stockRate}>+{stockRate}%</div>
      <div className={styles.amount}>
        {amount} x ${stockPrice}
      </div>
      <div className={styles.total}>${total}</div>
    </div>
  );
}
export default Stock;
