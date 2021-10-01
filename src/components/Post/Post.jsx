import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { JSONPlaceHolderAPI } from '../../api';
import styles from './post.module.css';
import { Comments } from './Comments';

export const Post = () => {

    const [post, setPost] = useState('')
    const [dataComments, setDataComments] = useState([])

    const { id } = useParams();

    useEffect(() => {
        JSONPlaceHolderAPI.getPost(id)
            .then(data => setPost(data))
    }, [id])

    useEffect(() => {
        JSONPlaceHolderAPI.getComments(id)
            .then(data => setDataComments(data))
    }, [id])

    return (
        <>
            <div className={styles.post_block}>
                <h2 className={styles.title} >{post.title}</h2>
                <div className={styles.line}></div>
                <div className={styles.user} >Author: UserId: {post.userId}</div>
                <div className={styles.line}></div>
                <div className={styles.text}>{post.body}</div>
            </div>
            <span>Comments:</span>
            <div className={styles.comments_block}>
                {
                    dataComments.map(comment => {
                        return <Comments key={comment.id} comment={comment}/>
                    })
                }
            </div>
        </>
    )
}