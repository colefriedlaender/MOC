import "./SubHeadline.module.css";
export type SubHeaderProps = {
  date: string;
};

function SubHeadline({ date }: SubHeaderProps) {
  return (
    <div className="subHeaderContainer">
      <div className="subHeader">Portfolio</div>
      <img src="/material-sort.svg" alt="" className="sortImage" />
      <div className="sort">sort</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default SubHeadline;
