import "./Information.module.css";
export type InformationProps = {
  firstWord: string;
  secondWord: string;
  information: string;
};

function Information({ firstWord, secondWord, information }: InformationProps) {
  return (
    <div className="informationContainer">
      <div className="firstWord">
        {firstWord}
        <span className="secondWord">{secondWord}</span>
      </div>
      <div className="information">{information}</div>
    </div>
  );
}

export default Information;
