import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from "../Navbar/Navbar.module.css";
export type NavbarProps = {
  onClick: MouseEventHandler<HTMLImageElement>;
  activeButton: string;
};

function Navbar({ onClick, activeButton }: NavbarProps) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.container}>
      <Link href={`/searchPage`}>
        <a>
          <img
            className={styles.icon}
            src={
              activeButton === "/searchPage"
                ? "/Icons/add.circle.svg"
                : "/Icons/add.svg"
            }
            alt="Add Button"
          />
        </a>
      </Link>
      <Link href={`/`}>
        <a>
          <img
            className={styles.icon}
            src={
              activeButton === "/"
                ? "/Icons/home.circle.svg"
                : "/Icons/home.svg"
            }
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
