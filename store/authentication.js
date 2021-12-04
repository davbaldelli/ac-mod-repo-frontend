import {userService} from '@/_services';

const initialState =  {status: {}, user: null};

export const authentication = {
    namespaced: true,
    state:() => initialState,
    getters: {
        loggedIn: state => {
            return state.status.loggedIn
        },
        isLogged: state => {
            return state.user.role !== "base"
        },
        isAdmin: (state, getters) => {
            return getters.isLogged && state.user.role === "admin"
        },
        token: state => {
            return state.user.token
        },
        user: state => {
            return state.user
        }
    },
    actions: {
        setup({dispatch, commit}, user){
            if(user){
                commit('loginSuccess', user)
            } else {
                dispatch('login', {'username': 'base', 'password': 'dumbass'})
            }
        },
        login({dispatch, commit}, {username, password}) {
            return new Promise((res, rej) => {
                commit('loginRequest', {username});
                userService.login(username, password)
                    .then(
                        user => {
                            commit('loginSuccess', user);
                            res(user)
                        }
                    ).catch(
                        error => {
                            commit('loginFailure');
                            dispatch('alert/error', error, {root: true});
                            rej(error)
                    }
                );
            })

        },
        logout({commit}) {
            userService.logout();
            commit('logout');
        }
    },
    mutations: {
        loginRequest(state, user) {
            state.status = {loggingIn: true};
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = {loggedIn: true};
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = {username: "base"}
        },
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
}
