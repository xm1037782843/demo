import api from '../../api';
import {
    DynamicRoutes
} from '../../router/dynamic-router';
import {
    rulesRoutes
} from '../../utils/rulesRoutes';
import router,{baseRoutes} from '../../router/index';
export default {
    namespaced: true,
    state: {
        permissionList: null, //路由导航
        slideBarMenu: [], //动态导航 匹配规则的导航 
    },
    mutations: {
        setMenu(state, menu) {
            state.slideBarMenu = menu
        },
        setPermission(state, list) {
            state.permissionList = list
        },
        clearMenu(state){
            state.slideBarMenu =[]
        },
        clearPermission(state){
            state.permissionList =null
        }
    },
    actions: {
        //es6: promise    函数().then(res=>{ res })
        //es6: async await  
        async getActionsMuen({
            commit,
            state,
            rootState
        }) {
            //1.获取后台导航
            let slideMenu = await api.getPermission({
                username: rootState.loginModule.userToken
            })
            // console.log('--后台导航---', slideMenu.data.data);
            // console.log('--前台导航---', DynamicRoutes);
            //2. 获取前台导航内容
            //3. 匹配导航 [1,2,3] [2,3] -->[2,3]
            let menuList = rulesRoutes(DynamicRoutes, slideMenu.data.data);
            //5. 把获取的规则的路由 添加到 路由基础文件里面
            let BaseMenuRoutes = baseRoutes.find(item => item.path === ''); //layout
            let children = BaseMenuRoutes.children;//获取路由的children地址 children修改了 基础路由也修改
            children.push(...menuList)

            //4. 存储vuex 
            commit('setMenu', children)

            //5. 添加路由
            router.addRoutes(baseRoutes);//[{home:'',goods：}]
            //6. 存储所有的导航信息-- [login:'',layout:[children],404]
            let initRoutes=router.options.routes;
            commit('setPermission',[...initRoutes,...baseRoutes])

        }

    },
    getters: {

    }
}