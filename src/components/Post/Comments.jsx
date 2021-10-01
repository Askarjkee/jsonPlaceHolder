import styles from './post.module.css';

export const Comments = ({comment}) => {
    return (
        <div>
            <h3 className={styles.comment_name}>{comment.name}</h3>
            <div>Email: <a href='#'>{comment.email}</a></div>
            <div className={styles.comment_body}>{comment.body}</div>
            <div className={styles.line}></div>
        </div>
    )
}