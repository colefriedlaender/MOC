import { MouseEventHandler } from "react";

export type SettingsButtonProps = {
  onClick: MouseEventHandler<HTMLImageElement>;
};

function BackButton({ onClick }: SettingsButtonProps) {
  return (
    <div>
      <img
        src="/Icons/material-settings.svg"
        alt="Setings Button"
        onClick={onClick}
      />
    </div>
  );
}

export default BackButton;
