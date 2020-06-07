import Vue from "vue";
import VueRouter from "vue-router";
import Games from "./components/Games";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Article from "./components/Article";

Vue.use(VueRouter);

const routes = [
    { path: '/games', component: Games},
    { path: '/work', component: Work },
    { path: '/blog/:id', component: Article },
    { path: '/', component: Blog },
];

export default new VueRouter({
    mode: 'history',
    routes
});