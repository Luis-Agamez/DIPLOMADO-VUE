import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import ContactView from '../views/ContactView.vue'
import InicioPrincipal from '../paginas/InicioPrincipal.vue'
import LoginFormView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import DetailBookView from '../views/DetailBookView.vue'
import CreateBookView from '../views/CreateBookView.vue'
import CartView from '../views/CartView.vue'
import PayView from '../views/PayView.vue'
import ShoppingView from '../views/ShoppingView.vue'
import DashBoardView from '../DashBoardView.vue'
import OverView from '../views/OverView.vue'
import SaleDetailView from '../views/SaleDetailView.vue'
import StadisticView from '../views/StadisticView.vue'



import ListadoUsuarios from '../paginas/usuarios/ListadoUsuarios.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginFormView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView 
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: ListadoUsuarios
    },
    
    {
      path: '/404',
      name: 'notfound',
      component: NotFoundView
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      props : true,
      component: DetailBookView
    },
    {
      path: '/create/:id',
      name: 'create',
      props : true,
      component: CreateBookView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/pay',
      name: 'pay',
      component: PayView
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: ShoppingView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoardView
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverView
    },
    {
      path: '/salesdetail/:id',
      name: 'salesdetail',
      component:SaleDetailView
    },
    {
      path: '/stadistic',
      name: 'stadistic',
      component:StadisticView
    },
    {
      path: '/search',
      name: 'search',
      component:SearchView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
