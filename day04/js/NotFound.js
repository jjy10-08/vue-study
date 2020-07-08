var NotFound={
    template:`<div class="not-found">
    <h1 style="color:red">404:您所查找页面不存在</h1>
    <h2 style="color:gray">{{ n }}s后自动返回首页</h2>
    </div>`,
    data(){
        return{
            n:3,
            timer:0
        }
    },
    mounted(){
        this.timer = setInterval(()=>{
            this.n--;
            if(this.n==0){
                clearInterval(this.timer);
                this.n=3;
                this.$router.push('/')
                
            }
        },1000)
    }
}