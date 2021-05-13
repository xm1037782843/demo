import axios from '../utils/request';
const base={
    baseUrl:'http://localhost:4000',
    login:'/api/login',//登录
    permission:'/api/permission',//动态导航 username
}

const api={
    /**
     * 登录接口
     */
    getLogin(params){
        return axios.post(base.baseUrl+base.login,params)
    },
    /**
     * 动态路由导航 username
     */
    getPermission(params){
        return axios.get(base.baseUrl+base.permission,{
            params
        })
    }
    

}

export default api