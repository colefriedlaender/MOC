import "./Greeting.module.css";
export type Name = {
  name: string;
};

function Button({ name }: Name) {
  return (
    <div className="grettingContainer">
      <div className="header">
        Hello,<span className="name">{name}</span>
      </div>
      <img src="/material-settings.svg" alt="" className="settingsImage" />
    </div>
  );
}

export default Button;
