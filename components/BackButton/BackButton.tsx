import { MouseEventHandler } from "react";

export type BackButtonProps = {
  onClick: MouseEventHandler<HTMLImageElement>;
};

function BackButton({ onClick }: BackButtonProps) {
  return (
    <div>
      <img
        src="/Icons/material-back.svg"
        alt="Setings Button"
        onClick={onClick}
      />
    </div>
  );
}

export default BackButton;
