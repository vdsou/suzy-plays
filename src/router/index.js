import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Playlists from "../views/Playlists.vue";
import Settings from "../views/Settings.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import { useStore } from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { private: true },
  },
  {
    path: "/playlists",
    name: "Playlists",
    component: Playlists,
    meta: { private: true },
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: { private: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { private: true },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    meta: { private: false },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: { private: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.meta.private && !store.logged) {
    next("/signin");
  }
  else if (!to.meta.private && store.logged) {
    console.log(to);
    next("/");
  } else {
    next();
  }
});

export default router;
