import Vue from 'vue'
import Router from 'vue-router'
import Simple from '@/components/Simple'
import About from '@/components/About'
import Search from '@/components/Search'
import Leaderboard from '@/components/Leaderboard'
import PlayerComponent from '@/components/layouts/PlayerComponent'
import Ranks from '@/components/Ranks'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Simple',
      component: Simple
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/leaderboards',
      name: 'Leaderboards',
      component: Leaderboard
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/player/:id',
      name: 'Profile',
      component: PlayerComponent
    },
    {
      path: '/ranks',
      name: 'Ranks',
      component: Ranks
    }
  ]
})
