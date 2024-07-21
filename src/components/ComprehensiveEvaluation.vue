<template>
  <div id="all">
    <div id="ComprehensiveEvaluation">
      <div class="Evaluation">
        <div class="select">
          <button :class="{arm:activeid==2,active:activeid==1}" @click="left()">左臂</button>
          <button :class="{arm:activeid==1,active:activeid==2}" @click="right()">右臂</button>
        </div>
        <div class="content" v-show="activeid==1">
          <div id="text">当前检测手臂：<div id="armname">{{ arm }}</div></div>
          <div id="insertbox"><button id="insert">将康复建议导入机器</button></div>
          <div id="message">
            <span>患者姓名：{{ name }}</span>
            <span id="time">评定时间：{{ time }}</span>
            <span>线上医师：{{ doctor }}</span>
          </div>
          <div class="flexbox">
            <div class="ActiveRange">活动范围评定结果</div>
            <div class="EMG">肌电评定结果</div>
            <div class="Recommend">推荐方案
              <div class="Proposal">方案一</div>
              <div class="Proposal">方案二</div>
            </div>
          </div>
        </div>
        <div class="content" v-show="activeid==2">
          <div id="text">当前检测手臂：<div id="armname">{{ arm }}</div></div>
          <div id="insertbox"><button id="insert">将康复建议导入机器</button></div>
          <div id="message">
            <span>患者姓名：{{ name }}</span>
            <span id="time">评定时间：{{ time }}</span>
            <span>线上医师：{{ doctor }}</span>
          </div>
          <div class="flexbox">
            <div class="ActiveRange">活动范围评定结果</div>
            <div class="EMG">肌电评定结果</div>
            <div class="Recommend">推荐方案
              <div class="Proposal">方案一</div>
              <div class="Proposal">方案二</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'ComprehensiveEvaluation',
    data(){
      return{
        arm:'左臂',
        activeid:'1',
        // name:'XXX',
        // time:'XXXX年XX月XX日',
        // doctor:'XXX'
      }
    },
    methods:{
      left(){
        this.activeid=1;
        this.arm='左臂'
      },
      right(){
        this.activeid=2;
        this.arm='右臂'
      }
    }
}
</script>

<style scoped>
#all{
  width:980px;
  height:540px;
  background-color:rgb(233, 234, 236);
}
#ComprehensiveEvaluation{
  width:960px;
  height:510px;
  margin: 10px;
  border-radius: 10px;
  background-color:white ;
  border-top: 10px solid transparent;
}
.Evaluation{
  width: 940px;
  height: 500px;
  margin:0px 10px 10px 10px;
  border-radius:10px;
  /* background-color: rgb(233,234,236); */
}
.select{
  height:35px;
  width: 940px;
  background-color: white;
}
.arm{
  height: 35px;
  width: 90px;
  border: 2px solid rgb(106, 204, 231);
  border-radius: 5px;
  background-color: white;
  font-size: 15px;
  float: left;
}
.arm:hover{
  box-shadow: 2px 2px 2px 2px rgba(96, 143, 229, 0.096);
}
.active{
  height: 35px;
  width: 90px;
  border: 2px solid rgb(106, 204, 231);
  border-radius: 5px;
  background-color: #12dbdb8e;
  font-size: 15px;
  float: left;
}
.content{
  width: 100%;
  height: 465px;
}
#text{
  display: flex;
  height: 40px;
  width: 220px;
  float: left;
  margin-left:10px;
  text-align: left;
  line-height: 40px;
}
#armname{
  height: 40px;
  width: 50px;
  font-size: 20px;
  color: rgb(205, 57, 116);
}
#insert{
  float: right;
  height: 25px;
  width: 150px;
  margin: 10px 10px 0px 10px;
  border:2px solid rgb(72, 137, 233);
  border-radius: 15px;
  background-color:rgba(96, 189, 229, 0.312) ;
}
#insertbox{
  width: 100%;
  height: 50px;
}
#message{
  width: 100%;
  height: 30px;
  border-bottom: 2px solid rgb(106, 204, 231);
}
span{
  float: left;
  height: 30px;
  width: 250px;
  font-size: 18px;
  text-align: left;
  margin-left:10px;
}
#time{
  height: 30px;
  width: 400px;
}
.flexbox{
  display: flex;
  width: 100%;
  height: 370px;
}
.ActiveRange{
  width: 285px;
  height: 360px;
  background-color:rgb(211,228,227);
  margin: 10px 20px 0px 10px;
  border-radius:10px;
}
.EMG{
  width:285px;
  height: 360px;
  background-color: rgb(211,228,227);
  margin: 10px 20px 0px 0px;
  border-radius:10px;
}
.Recommend{
  width: 285px;
  height: 360px;
  background-color:rgb(211,228,227);
  margin: 10px 10px 0px 0px;
  border-radius:10px;
}
.Proposal{
  height: 150px;
  width: 265px;
  margin: 10px;
}
</style>