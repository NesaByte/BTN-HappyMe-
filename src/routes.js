import Login from './components/login.vue';
import Header from './components/header.vue';
import Admin from './components/admin.vue';
import Home from './components/home.vue'; 

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    components: {
      default: Admin,
      nav: Header
    }
  },
  {
    path: '/home',
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