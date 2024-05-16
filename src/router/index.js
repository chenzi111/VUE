import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'//引入登录界面组件
import AssessPage from '@/views/AssessPage.vue'//引入评测界面组件
import ChartsContent from '@/components/ChartsContent.vue'//引用可视化图标内容页面组件
import GradeEvaluation from '@/components/GradeEvaluation.vue'//引入等级评估页面
import ComprehensiveEvaluation from '@/components/ComprehensiveEvaluation.vue';//引入数据管理界面
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {path: '/' ,name: 'login' ,component: LoginPage },
        {path: '/assess' ,component: AssessPage ,
            meta: { requireAuth: true },//添加一个meta字段来标识这个路由需要认证
            children: [{ path: '/', name: 'assess', component: ChartsContent },//引入子路由 即访问.../assess/chartscontent
                       { path:'/assess/grade',name:'grade',component:GradeEvaluation},
                       { path: '/assess/ComprehensiveEvaluation', name: 'Comprehensive', component: ComprehensiveEvaluation }
                        ]
        },
    ]
})
// 路由守卫
router.beforeEach((to,_from,next)=>{
    //用.matched方法 检查每个record（路由记录）的meta是否为用some方法返回true或者false
    // true则为to（跳转页面时）需要路由验证
    const requireAuth = to.matched.some(record=>record.meta.requireAuth);
    var islogin;
    if(localStorage.getItem('token')==200){
        islogin=true;
    }
    else{
        islogin=false;
    }
    //如果页面需要验证但用户未登录
    if (requireAuth && islogin==false){
        next({
            path:'/'
        })
    }
    else{
        next();
        // localStorage.clear();
    }
})
export default router