import Link from '../Link/Link'
import styles from './Navbar.module.css'
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

const Navbar = (props) => {
    const { logo } = props;

    const navbarStyle = useSpring({
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0 },
        config: { friction: 10, tension: 50 },
    });

    return (
        <animated.div className={styles.navbar} style={navbarStyle}>
            <div className={styles.navbarWrapper}>
                <img className={styles.navbarLogo} src={logo} alt="logo" />
                <div className={styles.navbarLinkWrapper}>
                    <Link to="/">
                        <div className={styles.navbarLink}>
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className={styles.navbarLink}>
                            <p>About</p>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className={styles.navbarLink}>
                            <p>Contact</p>
                        </div>
                    </Link>
                </div>
            </div>
        </animated.div>
    );
}

export default Navbar;