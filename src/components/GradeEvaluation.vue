<template>
  <div id="all">
    <div id="GradeEvaluation">
      <div class="Ratingscale">
        <div class="diagram">
          <img src="../assets/grade.jpg" alt="">
        </div>
        <button id="assess">开始评定</button>
      </div>
      <div class="grade">
        <div style="display: flex;" id="result"><div class="message">肌电评定</div>
        <div class="extent">
            <div class="linemessage">肌肉疲劳程度：{{  }}</div>
            <div class="linemessage">肌肉协调程度：{{  }}</div>
            <div class="linemessage">肌电变化程度：{{  }}</div>
            <div class="linemessage" style="background-color:aquamarine; color: black; border: 1px solid">肌电评估等级：{{  }}</div>
          </div>
        </div>
        <div style="display: flex;" id="result"><div class="message">姿态评定</div>
          <div class="extent">
          <div class="linemessage1">姿势动态平衡程度：{{  }}</div>
          <div class="linemessage1">三轴角度：{{  }}</div>
          <div class="linemessage1" style="background-color:aquamarine; color: black; border: 1px solid">姿势评分：{{  }}</div>
          </div>
        </div>
        <div style="display: flex;" id="result"><div class="message">综合评定</div>
        <div class="extent" style="display: flex;">
          <div>
            <div class="linemessage2">训练动作：{{  }}</div>
            <div class="linemessage2" style="border: 1px solid rgb(255, 255,255); color: black; background-color: gainsboro;">训练时长：{{  }}</div>
          </div>
          <div>
            <div class="linemessage2">训练阶段：{{  }}</div>
            <div class="linemessage2" style="background-color:greenyellow; color: black; border: 1px solid">综合评估：{{  }}</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name:'GradeEvaluation',
    data(){
      return{
      EMG:'IV',
      Poise:'IV',
      Comprehensive:'IV'
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
#GradeEvaluation{
  display: flex;
  width:960px;
  height:520px;
  margin: 10px;
  border-radius: 10px;
  background-color:white ;
}
.Ratingscale{
  width: 350px;
  height: 500px;
  margin: 10px;
}
.diagram{
  width: 330px;
  height: 400px;
  margin: 10px;
  background-color:rgb(211,228,227);
  overflow: scroll;
}
#assess{
  width: 250px;
  height: 50px;
  border: 2px solid rgb(106, 204, 231);
  border-radius: 10px;
}
.grade{
  width: 500px;
  height: 475px;
  margin-left: 20px;
  color:white;
}
#result{
  width: 500px;
  height: 150px;
  line-height: 150px;
  margin-top: 15px;
  background-color: rgba(126, 218, 218, 0.586);
  border-radius: 10px;
}
.message{
  width: 100px;
  height: 50px;
  line-height: 50px;
  border:2px solid rgb(33, 130, 157);
  border-radius: 20px;
  margin:37px 0px 37px 10px;
  color:white; 
  font-size: large;
  background-color:rgb(106, 204, 231); 
}
.extent{
  width: 300px;
  height: 150px;
  font-size: 15px;
}
.linemessage{
  width: 300px;
  height:30px;
  margin:5px 0px 0px 20px;
  padding-left:15px ;
  line-height: 30px;
  text-align: left;
  background-color: rgba(31, 116, 126, 0.562);
  border-radius: 5px;
}
.linemessage1{
  width: 300px;
  height:45px;
  margin:3px 0px 0px 20px;
  padding-left:15px ;
  line-height: 45px;
  text-align: left;
  background-color: rgba(31, 116, 126, 0.562);
  border-radius: 5px;
}
.linemessage2{
  width: 150px;
  height:45px;
  margin:20px 0px 20px 20px;
  padding-left:15px ;
  line-height: 45px;
  text-align: left;
  background-color: rgba(31, 116, 126, 0.562);
  border-radius: 5px;
  border: 1px solid rgb(255, 255,255); 
}
</style>