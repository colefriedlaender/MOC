import styles from "../SettingsButton/SettingsButton.module.css";

function SettingsButton() {
  return (
    <div className={styles.btn}>
      <img src="/Icons/material-settings.svg" alt="Setings Button" />
    </div>
  );
}

export default SettingsButton;
