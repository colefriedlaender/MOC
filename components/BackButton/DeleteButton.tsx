import { MouseEventHandler } from "react";
import styles from "../BackButton/BackButton.module.css";

export type BackButtonProps = {
  onClick: MouseEventHandler<HTMLImageElement>;
};

function DeleteButton({ onClick }: BackButtonProps) {
  return (
    <div className={styles.btn}>
      <img src="/Icons/trash.svg" alt="Delete Button" onClick={onClick} />
    </div>
  );
}
export default DeleteButton;
