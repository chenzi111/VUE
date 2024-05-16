<template>
  <div id="app" :style="{transform: 'scale(${scaleFactor})',transformOrigin:'top left'}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      windowidth:0,
      windowheight:0,
      desiginwidth:1232,
      desiginheight:648,
      scaleFactor:1,//初始化因子
    }
  },
  mounted(){
    window.addEventListener('resize',this.handleResize);
    this.handleResize();
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.handleResize);
  },
  methods:{
    handleResize(){
      this.windowidth=window.innerWidth;
      this.windowheight=window.innerHeight;
      const scalewidth = this.windowidth/this.desiginwidth;
      const scaleheight = this.windowheight/this.desiginheight;
      this.scaleFactor=Math.min(scalewidth,scaleheight);
      console.log(scaleheight,scalewidth);
      console.log(this.scaleFactor);
    }
  }
}
</script>

<style scoped>
/* 媒体查询适配 */
/* @media screen and (min-width: 1500px){
  body{
    transform: scale(1.2);
    transform-origin: top left;
    /* overflow:scroll !important; */
    /* background:white !important;
  }
} */
body{
  margin:0px;
  /* background: url('./assets/背景.jpg'); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
#app {
  height: 650px;
  width: 1232px;
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: transform 0.3s ease;
}
</style>
