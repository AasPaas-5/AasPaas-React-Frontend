import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import AasPaas_Black_Logo from "../../assets/Navbar/AasPaas_Black_Logo.webp";
import Search from "../../assets/Navbar/search_logo.webp";
import SignIn from "../../assets/Navbar/sign_in.webp";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={AasPaas_Black_Logo} />
      </div>
      <div className={styles.search}>
        <form>
          <input type="text" placeholder="Search for anything"></input>
          <button type="submit">
            <img src={Search} />
          </button>
        </form>
      </div>

      <div className={styles.menu}>
        <div className={styles.categories}>
          <Link to="">Home</Link>
          <Link to="">Orders</Link>
          <Link to="">Sell</Link>
        </div>
        <Link to="login" className={styles.signin}>
          <img src={SignIn} />
          Sign in
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
