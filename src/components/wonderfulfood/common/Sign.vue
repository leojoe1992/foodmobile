<template>
  <div class="main">
    <img class="close" @click="jump" src="../../../assets/back.png" alt />
    <h3>用户注册</h3>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('用户名4~8位字母或数字组合')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      <van-field v-model="password" type="password2" label="密码确认" placeholder="请再次密码" required />
    </van-cell-group>
    <van-button type="primary" size="large" @click="reg">注册</van-button>
    
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      password2:""
    };
  },
  methods: {
    jump: function() {
      this.$router.push("./login");
    },
    reg:function(){
      
    }
  },
  watch:{
   
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