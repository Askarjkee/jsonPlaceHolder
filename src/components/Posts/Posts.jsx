import { useEffect, useState } from 'react';
import { JSONPlaceHolderAPI } from '../../api';
import { Post } from './Post';
import styles from './post.module.css'
import { Pagination } from './Pagination';
import { Spinner } from '../commons/Spinner'

export const Posts = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPosts, setCurrentPosts] = useState([])

    useEffect(() => {
        JSONPlaceHolderAPI.getPosts()
            .then(data => {
                setLoading(false)
                setPosts(data)
            },
            (error) => {
                setLoading(false)
                setError(error)
            })
    }, [])

    useEffect(() => {
        
        if (posts) {
            const lastIndex = currentPage + '0'
            const startIndex = lastIndex - 10
            setCurrentPosts(posts.slice(+startIndex, +lastIndex))
        }
    }, [currentPage, posts])

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <div>oops..something wrong {error.message}</div>
    }

    return (
        <>
            <div><h1>Total posts: {posts.length}</h1></div>
            <Pagination
                totalItemsCount={posts.length}
                pageSize={10}
                currentPage={currentPage}
                onPageChanged={setCurrentPage}
                portionSize={5} />

            <ul className={styles.list}>
                {
                    currentPosts.map(post => {
                        return <Post key={post.id} post={post} />
                    })
                }
            </ul>
        </>
    )
}