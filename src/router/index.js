import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView.vue';
import createViewList from '../views/CreateListView';
import bus from '../utils/bus';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    // (HOC) component: createViewList('NewsView'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner');

      store
        .dispatch('FETCH_LIST', to.name)
        .then(() => {
          // bus.$emit('end:spinner');
          next();
        })
        .catch((error) => console.log(error));
    },
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    // (HOC) component: createViewList('AskView'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner');

      store
        .dispatch('FETCH_LIST', to.name)
        .then(() => {
          // bus.$emit('end:spinner');
          next();
        })
        .catch((error) => console.log(error));
    },
  },
  {
    path: '/jobs',
    name: 'jobs',
    // (MIXIN) component: JobsView,
    component: createViewList('JobsView'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner');

      store
        .dispatch('FETCH_LIST', to.name)
        .then(() => {
          // bus.$emit('end:spinner');
          next();
        })
        .catch((error) => console.log(error));
    },
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView,
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemView,
  },
  /* {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(//webpackChunkName: "about"// "../views/About.vue"),
  }, */
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
