import { Stock } from "../../utils/api";
import styles from "../StockListItem/StockListItem.module.css";
export type StockProps = {
  stock: Stock;
};

function StockListItem({
  stock: { amount, price, rate, name, total },
}: StockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.stockName}>{name}</div>
      <div className={styles.stockRate}>+{rate}%</div>
      <div className={styles.amount}>
        {amount} x ${price}
      </div>
      <div className={styles.total}>${total}</div>
    </div>
  );
}
export default StockListItem;
