import { MouseEventHandler } from "react";
import styles from "../SettingsButton/SettingsButton.module.css";

export type SettingsButtonProps = {
  onClick: MouseEventHandler<HTMLImageElement>;
};

function SettingsButton({ onClick }: SettingsButtonProps) {
  return (
    <div className={styles.btn}>
      <img
        src="/Icons/material-settings.svg"
        alt="Setings Button"
        onClick={onClick}
      />
    </div>
  );
}

export default SettingsButton;
