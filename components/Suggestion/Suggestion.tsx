import styles from "../Suggestion/Suggestion.module.css";
export type SuggestionProps = {
  name: string;
  price: number | null;
};
function Suggestion({ name, price }: SuggestionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>${price}</div>
    </div>
  );
}

export default Suggestion;
