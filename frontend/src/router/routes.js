import Posts from '@/views/posts/Index'
import Login from '@/views/auth/Login'

import middleware from './middleware'

export default [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter: middleware.guest
  },
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
