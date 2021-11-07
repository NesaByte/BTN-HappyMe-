import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';  

Vue.use(VueRouter);

import LoginPage from './components/login.vue';
import Header from './components/header.vue';
import Admin from './components/admin.vue';
import Inside from './components/inside.vue'; 
import Landing from './components/landing.vue'; 
 
export const routes = [
  {
    path: '/landing',
    component: Landing,
    meta: { auth: false }
  },
  
  {
    path: '/home',
    components: {
      default: Inside,
      nav: Header
    },
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/admin',
    component: Admin,
    meta: { auth: false }
  }, 
  
     
  {
    path: '*',
    component : LoginPage
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});



router.beforeEach(({meta, path}, from, next)=>{
  console.log("to.path == " + path);
  var { auth = true } = meta;
  const isLogin = localStorage.getItem('token') == 'ImLogin' ;
  
  if (auth && !isLogin && path !== '/login') {
    //return next({ path: '/login' })
  next() 

  } 
  next() 
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});