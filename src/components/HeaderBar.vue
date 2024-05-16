<template>
    <div id="Header">
        <div class="titlebox">
            <img src="../assets/康复系统.svg" alt="">
            <div class="title">上肢康复评定系统</div>
        </div>
    </div>
</template>

<script>
export default{
    name:'HeaderBar',
}
</script>

<style scoped>
#Header{
    height: 60px;
    width: 1232px;
    background-color:white;
    margin: 0px;
}
.titlebox{
    margin:5px;
    position: relative;
    float: left;
    display: flex;
}
.title{
    line-height: 50px;
    margin-left: 5px;
    font-size: 20px;
    font-weight: 600;
}
</style>