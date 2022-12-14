import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

//Importare le singole pagine
import AboutPage from './pages/AboutPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import HomePage from './pages/HomePage.vue';
import NewsPage from './pages/NewsPage.vue';
import SinglePostPage from './pages/SinglePostPage.vue';
import CategoriesPage from './pages/categoriesPages/CategoriesPage.vue';
import CategoryPostsListPage from './pages/categoriesPages/CategoryPostsListPage.vue';
import TagsPage from './pages/tagsPages/TagsPage.vue';
import TagPostsListPage from './pages/tagsPages/TagPostsListPage.vue';
import PageNotFound from './pages/errors/PageNotFound.vue';

//Creare una nuova istanza di vueRouter
const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/news',
            name: 'news',
            component: NewsPage
        },
        {
            path: '/posts/:id',
            name: 'postShow',
            component: SinglePostPage
        },
        {
            path: '/categories',
            name: 'categories',
            component: CategoriesPage
        },
        {
            path: '/categories/:id',
            name: 'categoryPostsList',
            component: CategoryPostsListPage
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsPage
        },
        {
            path: '/tags/:id',
            name: 'tagPostsList',
            component: TagPostsListPage
        },
        {
            path: '*',
            name: 'pageNotFound',
            component: PageNotFound
        },
    ],
});

//esportare router a chi chiama 
export default router


