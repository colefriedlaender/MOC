import styles from "../Greeting/Greeting.module.css";
export type Name = {
  name: string;
};

function Button({ name }: Name) {
  return (
    <div className={styles.grettingContainer}>
      <div className={styles.header}>
        Hello,<span className={styles.name}>{name}</span>
      </div>
      <img
        src="/material-settings.svg"
        alt=""
        className={styles.settingsImage}
      />
    </div>
  );
}

export default Button;
