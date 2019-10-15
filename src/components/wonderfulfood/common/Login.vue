<template>
  <div class="main">
    <img class="close" @click="jump" src="../../../assets/close.png" alt />
    <h3>用户登录</h3>
    <van-cell-group>
      <van-field
        
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        maxlength="12"
        @click-right-icon="$toast('用户名4~12位字母或数字组合')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required
      maxlength="16" />
    </van-cell-group>
    <van-button type="warning" size="large" @click="login">登录</van-button>
    <h2>
      未注册用户?
      <van-button @click="jumpTosign" type="primary" size="small">点击注册</van-button>
    </h2>
    <h2 class="title">第三方登录</h2>
    <div class="th-partLogin">
      <img src="../../../assets/alipay.png" alt />
      <img src="../../../assets/wechat.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login:function(){
      // 1：获取用户名和密码
      var $uname=this.username;
      var $upwd=this.password;
      // console.log($uname,$upwd)
      // 2: 创建正则表达式 3~12位置 字母数字
       var reg=/^[a-zA-Z0-9]{3,12}$/i;
      // 3: 判断如何错误 用户名提示
      if(!reg.test($uname)){
        this.$toast("用户名格式不正确");
        return;
      }
      if(!reg.test($upwd)){
        this.$toast("密码格式不正确");
        return;
      }
      // 4: 判断如何错误 密码提示
      // 5: 发送ajax
      var url="login";
      var obj={uname:$uname,upwd:$upwd};
      this.axios.get(url,{params:obj})
      .then(res=>{
        var n=res.data.code;
        if(n===1){
          this.$toast("登录成功");
          this.$router.push("./");
        }else{
          this.$messagebox("用户名密码错误")
        }
      })
      ;
      // 6: 接收服务器返回数据
      // 7: 失败 提示
      // 8: 成功 跳转
    },
    jump: function() {
      this.$router.push("./");
    },
    jumpTosign:function(){
      this.$router.push("./Sign");
    },
   
  },
  created(){
   
  }
};
</script>
<style scoped>
.van-button {
  margin-top: 2rem;
}
h3 {
  font: 18px 黑体 bolder;
  margin: 2rem;
  text-align: center;
}
.close {
  width: 2rem;
  height: 2rem;
}
.main {
  padding: 1rem;
}
.title {
  text-align: center !important;
  padding: 2rem;
  margin-top: 3rem;
  border-bottom: 1px solid #f5f5f5;
}
.th-partLogin {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
}
</style>