import { JSONPlaceHolderAPI } from '../../api';
import { useEffect, useState } from 'react';
import { UsersItem } from './UsersItem';
import { Spinner } from '../commons/Spinner'
import { Pagination } from '../commons/Pagination';
import styles from './users.module.css';

export const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [dataUsers, setUsersData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        JSONPlaceHolderAPI.getUsers()
            .then(res => {
                setLoading(false)
                setUsersData(res)
            },
                (error) => {
                    setLoading(false)
                    setError(error)
                })
    }, [])

    if (error) {
        return <div>oops..something goes wrong {error.message}</div>
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <h2>Total Users: {dataUsers.length}</h2>
            <Pagination
                totalItemsCount={dataUsers.length}
                pageSize={10}
                currentPage={currentPage}
                onPageChanged={setCurrentPage}
                portionSize={5} />
            <div className={styles.users}>
                {
                    dataUsers.map(user => {
                        return <UsersItem key={user.id} user={user} />
                    })
                }
            </div>
        </>
    )
}