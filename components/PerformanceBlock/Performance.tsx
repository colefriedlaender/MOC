import "./Performance.module.css";
export type PerformanceProps = {
  head: string;
  performanceText: string;
  performanceRate: string;
};

function Performance({
  head,
  performanceRate,
  performanceText,
}: PerformanceProps) {
  return (
    <div className="performanceContainer">
      <div className="head">{head}</div>
      <div className="performance">
        {performanceText}
        <span className="performanceRate"> {performanceRate}%</span>
      </div>
    </div>
  );
}

export default Performance;
