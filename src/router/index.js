import Vue from 'vue';
import Router from 'vue-router';
// import VueAnalytics from 'vue-analytics';
import home from './home';//首页
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routers: [
    ...home,
  ]
})

export default router;