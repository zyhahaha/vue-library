import Vue from 'vue';
import Router from 'vue-router';

const index = () => import(/* webpackChunkName: "index" */'@/views/index.vue');
const address = () => import(/* webpackChunkName: "address" */'@/views/address/index.vue');
const menu = () => import(/* webpackChunkName: "menu" */'@/views/menu/index.vue');
const upload = () => import(/* webpackChunkName: "upload" */'@/views/upload/index.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: 'index'
      }
    }, {
      path: '/address',
      name: 'address',
      component: address,
      meta: {
        title: 'address'
      }
    }, {
      path: '/menu',
      name: 'menu',
      component: menu,
      meta: {
        title: 'menu'
      }
    }, {
      path: '/upload',
      name: 'upload',
      component: upload,
      meta: {
        title: 'upload'
      }
    }
  ]
});
