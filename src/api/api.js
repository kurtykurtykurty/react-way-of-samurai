import * as axios from 'axios';

const VELLIO_API_KEY = '4bed342d-a07b-4784-ab63-6c76a0b43914';
const KURTY_API_KEY = '92aa74a7-fa70-4d6c-8d8b-20a6b237851e';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': VELLIO_API_KEY },
});

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance
//         .get(`users?page=${currentPage}&count=${pageSize}`)
//         .then((response) => {
//             return response.data;
//         });
// };

// export const follow = (id) => {
//     return instance.post(`follow/${id}`).then((response) => {
//         return response.data;
//     });
// };

// export const unfollow = (id) => {
//     return instance.delete(`follow/${id}`).then((response) => {
//         return response.data;
//     });
// };

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`).then((response) => {
            return response.data;
        });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then((response) => {
            return response.data;
        });
    },
};

export const foo = () => {};
