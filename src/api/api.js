import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/'

const instance = axios.create({
    baseURL
})

export const JSONPlaceHolderAPI = {
    getPosts: () => {
        return instance.get('posts')
            .then(res => res.data)
    },
    getPost: (id) => {
        return instance.get(`posts/${id}`)
            .then(res => res.data)
    },
    getComments: (id) => {
        return instance.get(`posts/${id}/comments`)
            .then(res => res.data)
    },
    getUsers: () => {
        return instance.get('users')
            .then(res => res.data)
    }

}