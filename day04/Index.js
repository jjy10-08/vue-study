var Index={
  template:`<div class="index">
    <my-header></my-header>
    <h1 style="color:green">这里是首页</h1>
    <ul>
      <li><router-link to="/details/1">查看1号商品的详情</router-link></li>
      <li><button @click="goToDetails(5)">查看5号商品的详情</button></li>
    </ul>
  </div>`,
  methods:{
    goToDetails(lid){
      this.$router.push(`/details/${lid}`)
                      // /details/5
    }
  }
}