import { userService } from '@/_services'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? {
    status: { loggedIn: true },
    user
  }
  : {
    status: {},
    user: { username: 'base' }
  }

export const state = () => initialState

export const getters = {
  loggedIn: state => {
    return state.status.loggedIn
  },
  isLogged: state => {
    return state.user.role !== 'base'
  },
  isAdmin: (state, getters) => {
    return getters.isLogged && state.user.role === 'admin'
  },
  isPremium : (state, getters) => {
    return getters.isLogged && (state.user.role === 'admin' || state.user.role === 'premium')
  },
  token: state => {
    return state.user.token
  },
  user: state => {
    return state.user
  }
}
export const actions = {
  setup ({
    dispatch,
    commit
  }, user) {
    if (user) {
      commit('loginSuccess', user)
    } else {
      dispatch('login', {
        'username': 'base',
        'password': 'dumbass'
      })
    }
  },
  login ({
    dispatch,
    commit
  }, {
    username,
    password
  }) {
    return new Promise((res, rej) => {
      commit('loginRequest', { username })
      userService.login(username, password)
        .then(
          user => {
            commit('loginSuccess', user)
            res(user)
          }
        ).catch(
        error => {
          commit('loginFailure')
          dispatch('alert/error', error, { root: true })
          rej(error)
        }
      )
    })

  },
  logout ({ commit }) {
    userService.logout()
    commit('logout')
  }
}

export const mutations = {
  loginRequest (state, user) {
    state.status = { loggingIn: true }
    state.user = user
  },
  loginSuccess (state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  loginFailure (state) {
    state.status = {}
    state.user = { username: 'base' }
  },
  logout (state) {
    state.status = {}
    state.user = null
  }
}

