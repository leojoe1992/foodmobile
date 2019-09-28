<template>
  <div>
    <div class="header">
      <img class="setting" src="../../../assets/setting.png" alt />
      <img class="email" src="../../../assets/email.png" alt />
    </div>
    <!-- 登录div -->
    
      <div class="login" v-if="isLogin" @click="jumpToMecenter">
        <img src="../../../assets/loginoff.png" alt />
        <div>
          <h2>{{uname}}</h2>
          <p>正在通往美食达人的路上...</p>
        </div>
      </div>
      <div class="login" 
      v-if="!isLogin"
      @click="jumpToLogin">
        <img src="../../../assets/loginoff.png" alt />
        <div>
          <h2>点击登录</h2>
          <p>据说登录的人做饭更好吃</p>
        </div>
      </div>
    

    <!-- 登录div结束 -->
    <!-- 登录后显示 -->
    <div class="user-info" v-if="isLogin">
      <div class="browse">
        <span>0</span>
        <p class="info-title">浏览</p>
      </div>
      <div class="followers">
        <span>0</span>
        <p class="info-title">粉丝</p>
      </div>
      <div class="follow">
        <span>0</span>
        <p class="info-title">关注</p>
      </div>
      <div class="articles">
        <span>0</span>
        <p class="info-title">作品</p>
      </div>
    </div>
    <!-- 用户收藏夹等等 -->
    <div class="userbar">
      <div class="store">
        <img src="../../../assets/store.png" alt />
        <p>收藏</p>
      </div>
      <div class="store">
        <img src="../../../assets/post.png" alt />
        <p>发布</p>
      </div>
      <div class="store">
        <img src="../../../assets/draw.png" alt />
        <p>草稿</p>
      </div>
      <div class="store">
        <img src="../../../assets/basket.png" alt />
        <p>菜篮</p>
      </div>
    </div>
    <!-- 未登录状态 -->
    <div class="offline" v-if="false">
      <img src="../../../assets/offline.png" alt />
    </div>
    <!-- 登录后显示我的足迹 -->
    <div class="myhistory">
      <h2>我的足迹</h2>
      <div class="historycard">
        <div class="mydate">
          <div class="date">
            <p>●sep●</p>
            <p>25</p>
          </div>
          <div class="longline"></div>
        </div>
        <div class="my-img">
          <img src="../../../assets/slide1.png" alt />
        </div>
        <div class="content">
          <h2>早餐鸡蛋卷</h2>
          <div class="foodclass">
            <span class="breakfast">早餐</span>
            <span>带来美好一天..</span>
          </div>
          <van-rate v-model="score" readonly />
          <div class="userinfo">
            <div class="userimg">
              <img src="../../../assets/idimg.jpeg" alt />
              <span>美食姐姐</span>
            </div>
            <div class="zan">
              <img src="../../../assets/heart.png" alt />
              <span>222</span>
            </div>
            <div class="view">
              <img src="../../../assets/eye.png" alt />
              <span>124</span>
            </div>
          </div>
        </div>
      </div>
      <div class="historycard">
        <div class="mydate">
          <div class="date">
            <p>●sep●</p>
            <p>25</p>
          </div>
          <div class="longline"></div>
        </div>
        <div class="my-img">
          <img src="../../../assets/slide1.png" alt />
        </div>
        <div class="content">
          <h2>早餐鸡蛋卷</h2>
          <div class="foodclass">
            <span class="breakfast">早餐</span>
            <span>带来美好一天..</span>
          </div>
          <van-rate v-model="score" readonly />
          <div class="userinfo">
            <div class="userimg">
              <img src="../../../assets/idimg.jpeg" alt />
              <span>美食姐姐</span>
            </div>
            <div class="zan">
              <img src="../../../assets/heart.png" alt />
              <span>222</span>
            </div>
            <div class="view">
              <img src="../../../assets/eye.png" alt />
              <span>124</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      score: 3,
      isLogin:true,
      uname:""
    
    };
  },
  methods:{
    jumpToLogin(){
      this.$router.push("./login")
    },
    //跳转到个人中心
    jumpToMecenter(){
      this.$router.push("./mecenter")
    },
    load(){
      var url="load";
      this.axios.get(url)
      .then(res=>{
        var n=res.data.code;
        if(n==-1){
          this.isLogin=false;
        }else {
          this.isLogin=true;
          this.uname=res.data.uname;
          console.log(n);
        }
        
        
      })
      
    }
  },
  created(){
    this.load();
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 6rem;
  background: url("../../../assets/foodbanner.png") no-repeat;
  background-size: 100% auto;
}
.header img {
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 4rem;
}
.setting {
  margin-left: 70%;
  margin-right: 2rem;
}
.login {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
}
.login img {
  height: 5rem;
  margin-right: 2rem;
}
.login h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.login p {
  color: #666;
}
.user-info {
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
}
.browse,
.followers,
.follow,
.articles {
  text-align: center;
  color: #333;
  font-family: 微软雅黑;
  font-weight: bold;
  font-size: 16px;
}
.info-title {
  margin-top: 1rem;
}
.userbar {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.store {
  text-align: center;
}
.store img {
  width: 2rem;
  height: 2.2rem;
}
.offline img {
  width: 100%;
}
.myhistory {
  padding: 1rem;
}
.historycard {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  height: 9rem;
}
.mydate {
  width: 11.5%;
  height: 100%;
}
.date {
  height: 2.5rem;
  width: 2.5rem;
  background: url("../../../assets/date.png");
  background-size: 100% auto;
  text-align: center;
}
.date p:first-child {
  color: white;
  font-size: 12px;
}
.date p:last-child {
  margin-top: 0.2rem;
  font-weight: bold;
  color: #666;
}
.longline {
  height: 70%;
  width: 3px;
  background: #f2f2f2;
  margin: 0 auto;
}
.my-img {
  width: 40%;
}
.my-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-left: 0.5rem;
}
.content {
  width: 50%;
  padding-left: 1rem;
}
.content h2 {
  font: 20px 微软雅黑 bolder;
}
.foodclass {
  display: flex;
  width: 100%;
  height: auto;
  border: 1px solid #eb828a;
  border-radius: 2px;
  color: #eb828a;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.foodclass span:last-child {
  margin-left: 1rem;
}
.breakfast {
  width: 2rem;
  color: white;
  background: #eb828a;
  width: 3rem;
  text-align: center;
}
.userinfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
.userinfo div {
  display: flex;
  align-items: center;
}
.userimg {
  width: 40%;
}
.userinfo img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
}
.userinfo span {
  font-size: 10px;
}
.zan {
  width: 33%;
}
</style>