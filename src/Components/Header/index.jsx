import styles from "./Header.module.css";
import Navbar from "../../Components/Navbar";

const Header = () => {
  return (
    <>
      <h1 className={styles.header}>Welcome to Australian zoo</h1>
      <Navbar />
    </>
  );
};

export default Header;
