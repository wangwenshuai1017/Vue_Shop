import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)
/* const routes = [
  { path:'/', redirect: '/login' },
  { path:'/login', component: Login }
]
const router = new Router({
  routes
})
export default router */  
const router = new Router({
  routes:[
    { path:'/', redirect: '/login' },
    { path:'/login', component: Login },
    { path:'/home', component: Home }
  ]
})

router.beforeEach(function(a,b,next){
    console.log(a.path,b,next);
    if(a.path=="/login"){return next()};
    const urlstr = window.sessionStorage.getItem("token");
    if(!urlstr){
      next("/login");
    }else{
      next();
    }
})

export default router
