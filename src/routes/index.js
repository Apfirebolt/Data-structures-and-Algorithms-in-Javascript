import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/basics',
    name: 'Basics',
    component: () => import('../pages/Basics.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../pages/Search.vue'),
  },
  {
    path: '/tree',
    name: 'Tree',
    component: () => import('../pages/Tree.vue'),
  },
  {
    path: '/classes',
    name: 'Classes',
    component: () => import('../pages/Classes.vue'),
  },
  {
    path: '/closure',
    name: 'Closure',
    component: () => import('../pages/Closure.vue'),
  },
  {
    path: '/array',
    name: 'Array',
    component: () => import('../pages/Array.vue'),
  },
  {
    path: '/graphs',
    name: 'Graphs',
    component: () => import('../pages/Graphs.vue'),
  },
  {
    path: '/math',
    name: 'Math',
    component: () => import('../pages/Math.vue'),
  },
  {
    path: '/queue',
    name: 'Queue',
    component: () => import('../pages/Queue.vue'),
  },
  {
    path: '/sorting',
    name: 'Sorting',
    component: () => import('../pages/Sorting.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../pages/Search.vue'),
  },
  {
    path: '/stack',
    name: 'Stack',
    component: () => import('../pages/Stack.vue'),
  },
  {
    path: '/dynamic-programming',
    name: 'DynamicProgramming',
    component: () => import('../pages/DynamicProgramming.vue'),
  },
  {
    path: '/bits',
    name: 'BitWise',
    component: () => import('../pages/Bits.vue'),
  },
  {
    path: '/string',
    name: 'String',
    component: () => import('../pages/String.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
