
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
             <div className={styles.navbarContainer}>
             <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/birds"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    Birds
                </NavLink>
                <NavLink 
                    to="/reptiles"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    Reptiles
                </NavLink>
                <NavLink 
                    to="/mammals"
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                >
                    Mammals
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar