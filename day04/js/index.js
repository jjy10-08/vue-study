var index={
    template:`<div class='index'>
    <my-header></my-header>
    <h1 style='color:green'>这里是首页</h1>
    <ul>
    <li><router-link to="/details/1">查看一号商品</router-link></li>
    <li><button @click="GoToDetails(5)">查看五号商品</button></li>
    </ul>
  </div>`,
    methods:{
        GoToDetails(lid){
            this.$router.push(`/details/${lid}`)
        }
    }
}