var router=new VueRouter({
    routes:[
        {path:"/",component:index},
        {path:"/details/:lid",component:details,props:true},
        //404页面放最后
        {path:"/*",component:NotFound}
    ]
})