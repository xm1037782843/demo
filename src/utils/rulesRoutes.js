/**
 * @param {Array} DynamicRoutes 前台路由导航 
 * @param {Array} slideMenu  后台动态的路由
 * menuList=[] 符合规则的导航路由
 */
export function rulesRoutes(DynamicRoutes,slideMenu){
    let menuList=[]
    //遍历数组  查找对象 
    DynamicRoutes.forEach((item,index)=>{
        slideMenu.forEach((ele,i)=>{
            if(item.meta.name === ele.name ){
                if(ele.children && ele.children.length >0){
                   item.children=rulesRoutes(item.children,ele.children)
                }
                menuList.push(item)
            }
        })
    })
    return menuList;
}