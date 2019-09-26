<template>
  <div class="mainbody">
    <div class="header">
      <div class="search">
        <img class="search-img" src="../../../assets/search.png" alt />
        <span>吃什么</span>
      </div>
    </div>
    <div class="space"></div>
    <div class="prompt">
      <p>适合吃什么</p>
      <span>综合千万用户数据研究得出</span>
    </div>
    <div class="maincontainer">
      <div class="main-card">
        <div class="titile">
          <img src="../../../assets/baby.png" alt />
          <h2>小儿研究所</h2>
        </div>
        <span class="my-small">小儿护理饮食指南,新手爸妈必备</span>

        <!-- 不贴合轮播 -->
        <van-swipe :loop="false" 
        :show-indicators="false"
        :width="200">
          <van-swipe-item>
            <div class="mother-card">
              <span class="title">小儿腹泻</span>
              <div class="subtitle">
                <img src="../../../assets/pointer-big.png" alt />
                <span>家长们必知的腹泻知识</span>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="mother-card">
              <span class="title">小儿腹泻</span>
              <div class="subtitle">
                <img src="../../../assets/pointer-big.png" alt />
                <span>家长们必知的腹泻知识</span>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="mother-card">
              <span class="title">小儿腹泻</span>
              <div class="subtitle">
                <img src="../../../assets/pointer-big.png" alt />
                <span>家长们必知的腹泻知识</span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>

        <!-- 不贴合轮播结束 -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>
<style scoped>
.mainbody {
  background: #a6b9f4;
}
.header {
  width: 100%;
  height: 4rem;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  padding-left: 1rem;
}
.search-img {
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  margin-left: 0.5rem;
}
.search {
  height: 40%;
  background: #f5f5f5;
  width: 60%;

  display: flex;
  align-items: center;
  padding: 0.3rem;
}
.space {
  height: 5rem;
  background: #a6b9f4;
}
.prompt {
  height: 3.5rem;
  background: #a6b9f4;
  padding-left: 1rem;
}
.prompt p,
.prompt span {
  color: white;
  font-size: 20px;
}
.prompt span {
  font-size: 10px;
}
.maincontainer {
  background: white;
  border-radius: 20px 20px 0 0;
  padding: 1rem;
}

.titile {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.titile img {
  height: 1.5rem;
  margin-right: 1rem;
}
.titile h2 {
  font-size: 18px;
  font-weight: bold;
}
.my-small {
  font-size: 12px;
  color: #666;
}
.main-card {
  padding-bottom: 2rem;
  border-bottom: 2px solid #eee;
}
.mother-card {
  background: url("../../../assets/motherlove.png") no-repeat;
  background-position: -25px -25px;
  width: 11rem;
  height: 5rem;
  padding: 0.5rem;
  padding-top: 12rem;
  border-radius: 10px;
  margin-top: 1rem;
}
.title {
  font-size: 14px;
  padding: 0.5rem;
  background: #fb890e;
  color: white;
  border-radius: 5px;
}
.subtitle {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: #000;
}
.subtitle img {
  width: 0.8rem;
  height: 0.8rem;
}
.subtitle span {
  font-size: 12px;
  margin-left: 0.5rem;
}
.swiper-slide {
  width: 100%;
}
</style>