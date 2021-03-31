import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from "../Navbar/Navbar.module.css";
export type NavbarProps = {
  onClick: MouseEventHandler<HTMLImageElement>;
};

function Navbar({ onClick }: NavbarProps) {
  return (
    <div className={styles.container}>
      <Link href={`/searchPage`}>
        <a>
          <img className={styles.icon} src="/Icons/add.svg" alt="Add Button" />
        </a>
      </Link>
      <Link href={`/`}>
        <a>
          <img
            className={styles.icon}
            src="/Icons/home.svg"
            alt="Home Button"
          />
        </a>
      </Link>
      <img
        className={styles.icon}
        src="/Icons/community.svg"
        alt="Community Button"
        onClick={onClick}
      />
    </div>
  );
}
export default Navbar;

export function onClick() {
  return alert("This function will come soon");
}
