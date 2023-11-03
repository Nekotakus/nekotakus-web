import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/', 
    component: () => import('@/views/layout.vue'),
    children: [
      // {
      //   path: '/',
      //   component: () => import('@/views/container.vue'),
      //   children: [
      //     {
      //       path: '/',
      //       component: () => import('@/views/homepage.vue')
      //     },
      //     {
      //       path: '/anime',
      //       component: () => import('@/views/anime.vue')
      //     },
      //   ]
      // },
      {
        path: '/',
        component: () => import('@/views/homepage.vue')
      },
      {
        path: '/anime',
        component: () => import('@/views/anime.vue')
      },
      {
        path: '/series/:avid',
        component: () => import('@/views/series.vue')
      },
      {
        path: '/season/:asid',
        component: () => import('@/views/season.vue')
      },
      {
        path: '/episode/:aeid',
        component: () => import('@/views/episode.vue')
      }
    ]
  }, 
]


const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export {router}