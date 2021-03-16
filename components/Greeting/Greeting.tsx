import "./Greeting.module.css";
export type Name = {
  name: string;
};

function Button({ name }: Name) {
  return (
    <div className="header">
      Hello,<span className="name">{name}</span>
    </div>
  );
}

export default Button;
