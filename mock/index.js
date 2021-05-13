const express=require('express')
const app=express()
const cors =require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const vipLogin = require("./data/vip_login.json");
const adminLogin = require("./data/admin_login.json");
const adminPermission = require("./data/admin_permission.json");
const vipPermission = require("./data/vip_permission.json");

//登录接口
// app.post('/api/login',(req,res)=>{
//     let user=req.body.username;
//     let pwd=req.body.password;
//     if(user && pwd){
//         res.send({
//             user,
//             token:'shshhodssasaksaksa'
//         })
//     }else{
//         res.send({
//             msg:'账户 密码错误',
//         })
//     }
// })
app.post("/api/login", (req, res) => {
    const username = req.body.username;
    if (username === 'admin') {
        res.send(adminLogin)
    } else {
        res.send(vipLogin)
    }
})

//动态导航---  
app.get("/api/permission", (req, res) => {
    const user = req.query.username;//账号名
    if (user === 'admin') {
        res.send(adminPermission)
    } else {
        res.send(vipPermission)
    }
})



app.listen(4000,()=>{
    console.log(4000);
})