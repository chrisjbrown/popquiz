import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

const routes = [
  {
    path: '',
    component: function (resolve) {
      require(['@/components/Start/Start.vue'], resolve)
    }
  },
  {
    path: '/questions',
    component: function (resolve) {
      require(['@/components/Questions/Questions.vue'], resolve)
    },
    beforeEnter: guardRoute
  },
  {
    path: '/overview',
    component: function (resolve) {
      require(['@/components/Overview/Overview.vue'], resolve)
    },
    beforeEnter: guardRoute
  },
  {
    path: '',
    component: {
      template: '<div>404</div>'
    }
  }
]

// guard route if user hasn't set name and difficulty
function guardRoute (to, from, next) {
  const name = store.getters.name
  const difficulty = store.getters.difficulty

  if (!name || !difficulty) {
    next({
      path: '/',
    })
  } else {
    next()
  }
}


Vue.use(VueRouter)
export default new VueRouter({
  routes
})
