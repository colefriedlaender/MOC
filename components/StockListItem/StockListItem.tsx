import styles from "../StockListItem/StockListItem.module.css";
export type StockProps = {
  amount: number;
  price: number;
  stockName: string;
  priceAPI: number;
};

function StockListItem({ amount, price, priceAPI, stockName }: StockProps) {
  const sum4 = priceAPI * amount;
  const total = sum4.toFixed(2);
  const sum1 = priceAPI - price;
  const sum2 = sum1 / price;
  const sum3 = sum2 * 100;
  const rate = sum3.toFixed(2);

  return (
    <div className={styles.container}>
      <div className={styles.stockName}>{stockName}</div>
      <div className={sum3 < 0 ? styles.stockRateNeg : styles.stockRate}>
        {rate}%
      </div>
      <div className={styles.amount}>
        {amount} x ${price}
      </div>
      <div className={styles.total}>${total}</div>
    </div>
  );
}
export default StockListItem;
