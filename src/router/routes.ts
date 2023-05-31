//Vue file imports

export const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    component: {},
  },
  // otherwise redirect to login
  { path: "/:pathMatch(.*)*", redirect: "/" },
];
