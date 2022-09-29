import App from './views/App';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

//Importare le singole pagine
import AboutPage from './pages/AboutPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import HomePage from './pages/HomePage.vue';
import NewsPage from './pages/NewsPage.vue';

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
    ],
});

//esportare router a chi chiama 
export default router


