<template>
    <div id="all">
        <div id="aside-bar">
            <div class="select">
                <div :class="{item:item.id!=Activeid,itemactive:item.id==Activeid}" 
                    v-for="(item) in list" :key="item.id" @click="fn(item.id)">
                    <img :src="item.path" alt=""><div class="title-name">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'AsideBar',
    data(){
        return{
            list:[{id:1,name:'在线评测',path:require('../assets/图表.svg'),router:"/assess/"},
                  {id:2,name:'等级评定',path:require('../assets/等级.svg'),router:"/assess/grade"},
                  {id:3,name:'综合评定',path:require('../assets/综合.svg'),router:"/assess/ComprehensiveEvaluation"}    
                 ],
            Activeid:'1'
        }
    },
    created(){
        // this.$Event.$on('hash',res=>{
        //     this.Activeid=res;
        //     console.log(this.Activeid)
        // })
    },
    methods:{
        fn(id){
            this.Activeid=id;//导航栏高亮
            this.$router.push(this.list[id-1].router,()=>{},()=>{});
        }
    },
    watch:{
        '$route'(to,from){
            console.log(from.path)
            for(var i=0; i<this.list.length;i++){
                if(to.path===this.list[i].router){
                    this.Activeid=i+1;
                    // console.log(this.Activeid);
                }
            }
        }
    }
}
</script>

<style scoped>
/* #all{
    display: flex;
    height:540px;
    width:252px;
    background-color:rgb(233, 234, 236) ;
} */
#aside-bar{
    height:520px;
    width: 232px;
    margin:10px;
    border-radius: 10px;
    background-color: white;
}
.select{
    position: relative;
    top:10px;
}
.item{
    display: flex;
    height:40px;
    width: 210px;
    margin-left: 10px;
    margin-top:10px;
    border-radius: 10px;
    background-color:rgb(233, 234, 236);
}
.itemactive{
    display: flex;
    height:40px;
    width: 210px;
    margin-left: 10px;
    margin-top:10px;
    border-radius: 10px;
    background-color:rgba(96, 143, 229, 0.267) ;
}
img{
    height: 18px;
    width: 18px;
    margin: 10px;
}
.title-name{
    line-height: 40px;
}
</style>