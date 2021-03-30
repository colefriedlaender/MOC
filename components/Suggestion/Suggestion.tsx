import styles from "../Suggestion/Suggestion.module.css";
export type SuggestionProps = {
  name: string;
  price: number;
};
function Suggestion({ name, price }: SuggestionProps) {
  const sum = price.toFixed(2);
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>${sum}</div>
    </div>
  );
}

export default Suggestion;
