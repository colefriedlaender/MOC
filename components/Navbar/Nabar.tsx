import Link from "next/link";
import styles from "../Navbar/Navbar.module.css";
export type NavbarProps = {
  page: string;
};

function Navbar({ page }: NavbarProps) {
  return (
    <div className={styles.container}>
      <Link href={`/searchPage`}>
        <a>
          <img
            className={styles.icon}
            src={
              page === "/searchPage"
                ? "/Icons/add.circle.svg"
                : "/Icons/add.svg"
            }
            alt="Add Button"
          />
        </a>
      </Link>
      <Link href={`/portfolio`}>
        <a>
          <img
            className={styles.icon}
            src={
              page === "/portfolio"
                ? "/Icons/home.circle.svg"
                : "/Icons/home.svg"
            }
            alt="Home Button"
          />
        </a>
      </Link>
      <Link href={`/community`}>
        <a>
          <img
            className={styles.icon}
            src={
              page === "/community"
                ? "/Icons/community.circle.svg"
                : "/Icons/community.svg"
            }
            alt="Home Button"
          />
        </a>
      </Link>
    </div>
  );
}
export default Navbar;
