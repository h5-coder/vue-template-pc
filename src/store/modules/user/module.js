
import { userAction } from './action';
import { userGetter } from './getter';
import { userMutation } from './mutation';

export const user = {
    state: {
        username: 'lyx'
    },
    actions: userAction,
    getters: userGetter,
    mutations: userMutation
};

export default user;
