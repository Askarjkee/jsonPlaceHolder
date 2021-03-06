import { NavLink } from "react-router-dom"
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <NavLink className={styles.link} to={'/posts'}>Posts</NavLink>
                <NavLink className={styles.link} to={'/users'}>Users</NavLink>
            </nav>
        </header>
    )
}