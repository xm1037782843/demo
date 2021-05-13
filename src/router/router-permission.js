import router from './index';
import store from '../store';
// import api from '../api';
//路由权限-- 
router.beforeEach((to, from, next) => {
    //1.判断路由是否需要登录 
    if (to.matched.length > 0 && !to.matched.some(record => record.meta.isLogin)) {
        next();//login 404界面
    } else {
        //需要登录----- 
        //2.判断是否登录过
        if (store.state.loginModule.userToken) {
            //获取导航--- 
            // api.getPermission({ username:store.state.loginModule.userToken }).then(res=>{
            //     console.log('---动态导航--',res.data);
            // })
            //网络请求数据
           if(store.state.permission.slideBarMenu.length === 0 ){
                store.dispatch('permission/getActionsMuen')
           }

            next()
            

        } else {
            next('/login')
        }

    }

})