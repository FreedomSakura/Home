//1、引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'

//2、安装插件
Vue.use(VueRouter)

// 路由懒加载
const Home = () => import('views/home/home') 
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

//3、创建路由对象
const routes = [
    // 配置路由
    {
        path: '/',
        redirect: '/home'
    },
    // 首页
    {
        path: '/home',
        component: Home
    },
    // u选（分类）
    {
        path: '/category',
        component: Category
    },
    // 购物车
    {
        path: '/cart',
        component: Cart
    },
    // 我的
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//4、导出路由
export default router