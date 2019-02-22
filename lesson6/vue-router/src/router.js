import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Contacts from './views/contacts.vue';
import News from './views/news.vue';
import Newsitem from './views/news-item.vue';
import NewsWrapper from './views/news-wrapper.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/news',
      name: 'News',
      component: NewsWrapper,
      children: [
        {
          path: '',
          name: 'news page',
          component: News
        },
        {
          path: ':id',
          component: Newsitem,
        }
      ]
    },
    // {
    //   path: '/news/:id',
    //   name: 'contacts',
    //   component: Contacts,
    // }
  ],
});

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: 'index.vue',
    },
    {
      path: '/about',
      component: 'about.vue',
    },
    {
      path: '/news',
      children: [
        {
          path: '',
          camponent: './news/index.vue'
        },
        {
          path: '/:id',
          camponent: './news/_id.vue'
        }
      ]
    },
    {
      path: ':user',
      children: [
        {
          path: '',
          component: './_user/index.vue'
        },
        {
          path: 'setting',
          component: './_user/setting.vue'
        }
      ]
    }
  ],
});

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next);
// })

export default router;
