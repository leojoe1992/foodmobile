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
      <van-field v-model="password2" type="password" label="密码确认" placeholder="请再次密码" required />
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
      password2: ""
    };
  },
  methods: {
    jump: function() {
      this.$router.push("./login");
    },
    reg: function() {
      // 1：获取用户名和密码
      var $uname = this.username;
      var $upwd = this.password;
      var $upwd2 = this.password2;
      // console.log($uname,$upwd)
      // 2: 创建正则表达式 3~12位置 字母数字
      var reg = /^[a-zA-Z0-9]{3,12}$/i;
      // 3: 判断如何错误 用户名提示

      if (!reg.test($uname)) {
        this.$toast("用户名格式不正确");
        return;
      }
      if (!reg.test($upwd)) {
        this.$toast("密码格式不正确");
        return;
      }
      if ($upwd !== $upwd2) {
        this.$toast("两次输入的密码不一致");
        return;
      }
      var url = "hasuname";
      var obj = { uname: $uname };
      this.axios.get(url, { params: obj }).then(res => {
        var n = res.data.code;
        if (n == -1) {
          this.$toast("用户名已经被占用");
          return;
        }
        //  else if(n==1){
        //    this.axios.post("reg",{
        //      uname:$uname,
        //      upwd:$upwd
        //    })
        //    .then(res=>{
        //      this.$toast("注册成功");
        //      this.$router.push("./login");
        //    })
        //  }
      });
      let postData = this.qs.stringify({ uname: $uname, upwd: $upwd });
      this.axios({
        method: "post",
        url: "reg",
        data: postData
      }).then(res => {
        if (res.code == -1) {
          this.$toast("注册失败");
        } else {
          this.$toast("注册成功");
          this.$router.push("./login");
        }
      });
    }
  },
  watch: {}
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