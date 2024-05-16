<template>
  <div id="all">
    <div id="GradeEvaluation">
      <div class="Ratingscale">
        <div class="diagram"></div>
        <button id="assess">开始评定</button>
      </div>
      <div class="grade">
        <div style="display: flex;"><div class="message">肌电评定</div><div class="extent">{{ EMG }}级</div></div>
        <div style="display: flex;"><div class="message">姿态评定</div><div class="extent">{{ Poise }}级</div></div>
        <div style="display: flex;"><div class="message">综合评定</div><div class="extent">{{ Comprehensive }}级</div></div>
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
  width: 330px;
  height: 400px;
  margin:20px 20px 20px 100px;
}
.message{
  width: 200px;
  height: 50px;
  margin-top: 50px;
  border:2px solid rgb(106, 204, 231);
  border-radius: 20px;
  line-height: 50px;
}
.extent{
  width: 200px;
  height: 50px;
  margin-top: 50px;
  line-height: 50px;
  font-size: 20px;
}
</style>