import { NavLink } from 'react-router-dom';
import styles from './post.module.css';

export const Post = ({ post }) => {
    
    return (
        <li className={styles.item}>
            <NavLink className={styles.link} to={`/post/${post.id}`}><h2 className={styles.title}>{post.title}</h2></NavLink>
            <div className={styles.line}></div>
            <div className={styles.userId}>Author: UserId: {post.userId}</div>
            <div className={styles.line}></div>
            <div className={styles.text}>{post.body}</div>
        </li>
    )
}