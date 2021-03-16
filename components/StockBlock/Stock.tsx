import styles from "../StockBlock/Stock.module.css";
export type StockProps = {
  stockName: string;
  rate: string;
  amount: number;
  price: string;
  total: string;
};

function Stock({ amount, price, rate, stockName, total }: StockProps) {
  return (
    <div className={styles.stockContainer}>
      <div className={styles.stockName}>{stockName}</div>
      <div className={styles.rate}>{rate}%</div>
      <div className={styles.amount}>
        {amount} x ${price}
      </div>
      <div className={styles.total}>${total}</div>
    </div>
  );
}

export default Stock;
