import Login from './components/login.vue';
import Header from './components/header.vue';
import Home from './components/home.vue'; 

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    components: {
      default: Home,
      nav: Header
    }
  }, 
  {
    path: '*',
    redirect: '/',
  }
];