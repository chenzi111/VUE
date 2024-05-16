<template>
    <div>
        <div class="login-wrap">
            <div class="login-container">
                <div class="message">
                    <h1 class="title">医诺上肢康复评定系统</h1>
                </div>
                <div id="darkbannerwrap"></div>
                <form class="form">
                    <img src="../assets/登录-用户.svg" alt="" id="icon1">
                    <label for="user-name">
                    <input type="text" v-model="usename" placeholder="请输入账号">
                    </label>
                    <hr>
                    <img src="../assets/登录-密码.svg" alt="" id="icon2">
                    <label for="password">
                    <input type="password" v-model="password" placeholder="请输入密码">
                    </label>
                    <hr>
                    <div><button type="submit" @click="Login()">登录</button></div>
                </form>
            </div>
        </div>
        <div class="footer"><label for="schoolname" id="footer-name">@广州中医药大学医学信息工程</label></div>
    </div>
</template>

<script>
export default{
    name:'LonginPage',
    data(){
        return{
            usename:'',//账号：309324904@qq.com
            password:''//密码：123456
        }
    },
    methods:{
        Login(){
            this.$axios.post("https://api.apiopen.top/api/login",
            {account:this.usename,password:this.password})
            .then(res=>{
                console.log(res.data);
                if(res.data.code==200){
                    //本地存储登录成功的token
                    const token = res.data.code;
                    localStorage.setItem('token',token);
                    this.$router.push('/assess')}
                else{
                    alert("账户或密码错误，请重新填写")
                }
            })
            .catch(error=>{
                console.log(error.data);
                alert("登陆失败");
            })
        }
    }
}
</script>

<style scoped>
.login-wrap{
    display: flex;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
    width: 1232px;
    height: 600px;
    background: url('../assets/背景.jpg');
}
.login-container{
    width: 500px;
    height: 500px;
    margin-top: 5%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    border:1px solid #eaeaea;
}
.message{
    height:130px;
    width:500px;
    position: relative;
    left:-20px ;
    background-color: rgb(24, 143, 159);
    color: white;
}
 .title{
    line-height: 130px;
 }
#darkbannerwrap{
    background: url('../assets/aiwrap.png');
    width: 18px;
    height: 10px;
    position: relative;
    left: -20px;
}
#icon1{
    position: relative;
    top:10px;
    float: left;
}
#icon2{
    position: relative;
    top:10px;
    float: left;
}
.form{
    position: relative;
    left: 25px;
    height:260px;
    width:450px;
}
label{
    font-size: 20px;
}
input{
    height: 60px;
    width:350px;
    margin:10px,10px,0,0;
    font-size: 18px;
    border:none;
    background-color:rgba(255, 255, 255, 0);
    transform: translateX(-10px);
}
input:focus{
    outline: none;
}
button{
    height: 80px;
    width: 450px;
    margin-top:20px;
    border: none;
    background-color: rgb(24, 143, 159);
    color: white;
    font-size: 25px;
}
button:hover{
    box-shadow: 3px 3px 3px 3px rgba(24, 143, 159, 0.5);
}
.footer{
    position:relative;
    height: 50px;
    width: 100%;
    color: rgb(162, 164, 168);
    background-color:#ffffff;
}
#footer-name{
    font-size: 15px;
    line-height: 50px;
    font-weight: 700;
}
hr{
    margin: 2px;
}
</style>