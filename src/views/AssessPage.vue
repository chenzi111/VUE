<template>
    <div id="Assess">
        <HeaderBar></HeaderBar>
        <div id="content">
            <AsideBar id="asidebar"></AsideBar>
            <router-view></router-view>
        </div>
        <div class="footer"><label for="schoolname" id="footer-name">@广州中医药大学医学信息工程</label></div>
    </div>
</template>
<script>
import HeaderBar from '../components/HeaderBar.vue'
import AsideBar from '../components/AsideBar.vue';
export default{
    name:'AssessPage',
    components:{
        "HeaderBar":HeaderBar,
        "AsideBar":AsideBar,
    }
}
</script>
<style scoped>
#Assess{
    height: 100%;
    width: 100%;
    margin: 0px;
}
#content{
    display: flex;
    margin: 0px;
    width:100%;
    height:540px;
    background-color:rgb(233, 234, 236);
}
#asidebar{
    position: relative;
    float: left;
}
.footer{
    position:relative;
    height: 50px;
    width: 1232px;
    color: rgb(162, 164, 168);
    background-color:white;
    text-align: center;
}
#footer-name{
    font-size: 15px;
    line-height: 50px;
    font-weight: 700;
}
</style>