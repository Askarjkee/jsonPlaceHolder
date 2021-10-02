import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { JSONPlaceHolderAPI } from '../../api';
import styles from './post.module.css';
import { Comments } from './Comments';
import { Spinner } from '../commons/Spinner';

export const Post = () => {

    const [dataPost, setDataPost] = useState('')
    const [dataComments, setDataComments] = useState([])
    const [showComments, toggleShowComments] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        JSONPlaceHolderAPI.getPost(id)
            .then(data => {
                setDataPost(data)
                setLoading(false)
            },
                (error) => {
                    setLoading(false)
                    setError(error)
                })
    }, [id])

    useEffect(() => {
        JSONPlaceHolderAPI.getComments(id)
            .then(data => {
                setDataComments(data)
            },
                (error) => {
                    setError(error)
                })
    }, [id])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div>oops..something goes wrong {error.message}</div>
    }

    return (
        <>
            <div className={styles.post_block}>
                <h2 className={styles.title} >{dataPost.title}</h2>
                <div className={styles.line}></div>
                <div className={styles.user} >Author: UserId: {dataPost.userId}</div>
                <div className={styles.line}></div>
                <div className={styles.text}>{dataPost.body}</div>
            </div>
            <button onClick={() => toggleShowComments(!showComments)}>{showComments ? 'hidden comments' : 'show comments'}</button>
            {
                showComments ?
                    <div className={styles.comments_block}>
                        {
                            dataComments.map(comment => {
                                return <Comments key={comment.id} comment={comment} />
                            })
                        }
                    </div>

                    :

                    null
            }
        </>
    )
}