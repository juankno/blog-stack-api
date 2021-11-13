import Posts from '@/views/posts/Index'
import Login from '@/views/auth/Login'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  }
]
