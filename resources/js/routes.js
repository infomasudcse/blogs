import AdminHome from './components/admin/AdminHome.vue';
import CategotyList from './components/admin/category/list.vue';
export const routes = [
    {
        path:'/home',
        component:AdminHome
    },
    {
        path:'/category-list',
        component:CategotyList
    },
]