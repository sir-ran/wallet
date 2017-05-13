import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/fund'
    },
    {
      path: '/fund',
      component: resolve => require(['../components/fund/fund.vue'], resolve)
    },
    {
      path: '/fund/addFund',
      name: 'addFund',
      component: resolve => require(['../components/addFund/addFund.vue'], resolve)
    },
    {
      path: '/fund/addFund/input',
      name: 'input',
      component: resolve => require(['../components/input/input.vue'], resolve)
    },
    {
      path: '/fund/keepAccount',
      name: 'keepAccount',
      component: resolve => require(['../components/keepAccount/keepAccount.vue'], resolve)
    },
    {
      path: '/detail',
      component: resolve => require(['../components/detail/detail.vue'], resolve)
    },
    {
      path: '/about',
      component: resolve => require(['../components/about/about.vue'], resolve)
    }
  ],
  linkActiveClass: 'active'
});
