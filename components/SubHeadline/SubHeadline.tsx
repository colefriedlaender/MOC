import "./SubHeadline.module.css";
export type SubHeaderProps = {
  date: string;
};

function SubHeadline({ date }: SubHeaderProps) {
  return (
    <div className="container3">
      <div className="subHeader">Portfolio</div>
      <div className="date">{date}</div>
    </div>
  );
}

export default SubHeadline;
