import styles from "../Greeting/Greeting.module.css";
export type NameProps = { name: string };

function Greeting({ name }: NameProps) {
  return (
    <div className={styles.container}>
      <div className={styles.geeting}>
        Hello,<span className={styles.name}>{name}</span>
      </div>
    </div>
  );
}

export default Greeting;
