import Posts from '@/views/posts/Index'
import Login from '@/views/auth/Login'

import middleware from './middleware'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: middleware.guest
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    beforeEnter: middleware.user
  }
]
