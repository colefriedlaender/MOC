import "./Balance.module.css";

export type BalanceProps = {
  totalValue: string;
  returnValue: string;
};

function Balance({ totalValue, returnValue }: BalanceProps) {
  return (
    <div className="container2">
      <div className="balanceHeader">Balance</div>
      <div className="totalValue">${totalValue}</div>
      <div className="returnValue">{returnValue}%</div>
    </div>
  );
}

export default Balance;
