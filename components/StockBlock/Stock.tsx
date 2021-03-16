import "./Stock.module.css";
export type StockProps = {
  stockName: string;
  rate: string;
  amount: number;
  price: string;
  total: string;
};

function Stock({ amount, price, rate, stockName, total }: StockProps) {
  return (
    <div className="stockContainer">
      <div className="stockName">{stockName}</div>
      <div className="rate">{rate}%</div>
      <div className="amount">
        {amount} x ${price}
      </div>
      <div className="total">${total}</div>
    </div>
  );
}

export default Stock;
