export default {
    namespaced:true,
    state:{
        userToken:''
    },
    mutations:{
        setUser(state,params){
            state.userToken=params
        }
    },
    actions:{

    },
    getters:{

    }
}