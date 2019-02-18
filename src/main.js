// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局导航钩子
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登陆权限
  if (to.meta.requireAuth) {
    // 通过Vuex state 获取当前的token是否存在
    console.log(isEmptyObject(this.$store.state.user))
    if (!isEmptyObject(this.$store.state.user)) {
      next()
    } else {
      next({
        path: '/login',
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

function isEmptyObject (obj) {
  for (var key in obj) {
    return false
  }
  return true
}
