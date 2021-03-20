import { MouseEventHandler } from "react";
import styles from "../BackButton/BackButton.module.css";

export type BackButtonProps = {
  onClick: MouseEventHandler<HTMLImageElement>;
};

function BackButton({ onClick }: BackButtonProps) {
  return (
    <div className={styles.btn}>
      <img
        src="/Icons/material-back.svg"
        alt="Setings Button"
        onClick={onClick}
      />
    </div>
  );
}
export default BackButton;
