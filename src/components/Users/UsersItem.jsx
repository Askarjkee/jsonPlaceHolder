import styles from './users.module.css';

export const UsersItem = ({user}) => {
    return (
        <div className={styles.users_block}>
            <h2 className={styles.users_name}>Name: {user.name}</h2>
            <div className={styles.users_nickname}>User name: {user.username}</div>
            <div>userId: {user.id}</div>
            <div><a href="#">Email: {user.email}</a></div>
        </div>
    )
}
