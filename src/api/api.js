import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/'

const instance = axios.create({
    baseURL
})

export const JSONPlaceHolderAPI = {
    getPosts: () => {
        return instance.get('posts')
            .then(res => res.data)
    }
}