import api from './api'

export default {

  createSession () {
    return api.get('http://blog-stack-api.test/sanctum/csrf-cookie')
  },
  login (params) {
    return api.post('http://blog-stack-api.test/api/v1/login', params)
  },
  logout () {
    return api.delete('http://blog-stack-api.test/api/v1/logout')
  },
  getPosts () {
    return api.get('http://blog-stack-api.test/api/v1/posts')
  }
}
