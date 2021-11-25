import Vue from 'vue'
import Vuex from 'vuex'
import respository from '@/api/repository'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: {
      state: () => ({
        user: sessionStorage.user ? JSON.parse(sessionStorage.getItem('user')) : null
      }),

      getters: {
        user: state => state.user,
        authenticated: state => state.user !== null
      },
      mutations: {
        SET_USER (state, user) {
          state.user = user
        }
      },
      actions: {
        async login ({ commit }, user) {
          await respository.createSession()
          const { data } = await respository.login(user)
          commit('SET_USER', data)

          sessionStorage.user = JSON.stringify(data)
        }
      }
    }
  }
})
