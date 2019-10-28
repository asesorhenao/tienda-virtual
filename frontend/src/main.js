// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import StarRating from 'vue-star-rating';
Vue.component('star-rating', StarRating);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueSingleSelect from 'vue-single-select';
Vue.component('vue-single-select', VueSingleSelect);

//axios. For HTTP and AJAX requests
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

// Routes for navigation
import home from './components/pages/home';
import login from './components/pages/login';
import register from './components/pages/register';
import category from './components/pages/category';
import product from './components/pages/product';
import myAcount from './components/pages/myAcount';
import myOrders from './components/pages/myOrders';
import addressBook from './components/pages/addressBook';
import shippingInfo from './components/pages/shippingInfo';
import favorites from './components/pages/favorites';
import contactus from './components/pages/contactUs';
import shoppingBag from './components/pages/shoppingBag';
import checkoutBag from './components/pages/checkoutBag';
import shoppingBagCongrats from './components/pages/shoppingBagCongrats';

const router = new VueRouter({
  mode: 'history',
  base: '/bella-fashion/',
  routes: [
    {
      path: '*',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/myAcount',
      component: myAcount
    },
    {
      path: '/myOrders',
      component: myOrders
    },
    {
      path: '/addressBook',
      component: addressBook
    },
    {
      path: '/shippingInfo',
      component: shippingInfo
    },
    {
      path: '/shoppingBag',
      component: shoppingBag
    },
    {
      path: '/checkoutBag',
      component: checkoutBag
    },
    {
      path: '/favorites',
      component: favorites
    },
    {
      path: '/contactus',
      component: contactus
    },
    {
      path: '/shoppingBagCongrats',
      component: shoppingBagCongrats
    }
  ]
});


Vue.config.productionTip = false

export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
