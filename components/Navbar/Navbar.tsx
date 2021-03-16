import "./Navbar.module.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      <img src="/material-add.svg" alt="" className="addImage" />
      <img src="/material-home.svg" alt="" className="homeImage" />
      <img src="/material-people.svg" alt="" className="peopleImage" />
    </div>
  );
}

export default Navbar;
