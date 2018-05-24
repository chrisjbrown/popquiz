import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

const routes = [
  {
    path: '',
    component: function (resolve) {
      require(['@/pages/Start/Start.vue'], resolve)
    }
  },
  {
    path: '/question',
    component: function (resolve) {
      require(['@/pages/Question/Question.vue'], resolve)
    },
    beforeEnter: guardRoute
  },
  {
    path: '/overview',
    component: function (resolve) {
      require(['@/pages/Overview/Overview.vue'], resolve)
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
  const name = store.state.user.name
  const difficulty = store.state.user.difficulty

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
