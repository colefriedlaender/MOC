import styles from "../Navbar/Navbar.module.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      <img src="/material-add.svg" alt="" className={styles.addImage} />
      <img src="/material-home.svg" alt="" className={styles.homeImage} />
      <img src="/material-people.svg" alt="" className={styles.peopleImage} />
    </div>
  );
}

export default Navbar;
