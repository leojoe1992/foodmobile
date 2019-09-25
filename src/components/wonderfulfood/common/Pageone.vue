<template>
  <div>
    <p class="titletips">
      <span class="tips">“你们去征服世界,我只想征服一个人的胃和心”</span>
    </p>
    <div class="videocard">
      <div class="card-item firstchild"></div>
      <div class="card-item secondchild"></div>
      <div class="card-item lastchild"></div>
    </div>
    <div class="navmenu">
      <div class="navmenu-item">
        <h3>每日福利</h3>
        <p>好货推荐</p>
        <img src="../../../assets/box.png" alt />
      </div>
      <div class="navmenu-item">
        <h3>本周流行</h3>
        <p>最佳菜肴</p>
        <img src="../../../assets/nicefood.png" alt />
      </div>
      <div class="navmenu-item">
        <h3>智能组菜</h3>
        <p>选材神器</p>
        <img src="../../../assets/strawberry.png" alt />
      </div>
      <div class="navmenu-item">
        <h3>菜谱分类</h3>
        <p>美味分类</p>
        <img src="../../../assets/sweetcircl.png" alt />
      </div>
    </div>
    <div class="timetitle">
      <ul>
        <li>今日</li>
        <li>早餐</li>
        <li>午餐</li>
        <li>下午茶</li>
        <li>晚餐</li>
        <li>夜宵</li>
        <li>
          <img src="../../../assets/rightarrow.png" alt />
        </li>
      </ul>
    </div>
    <div class="foodtime">
      <mt-swipe class="foodswipe" :auto="0" :show-indicators="false">
        <mt-swipe-item class="foodcontainer">
          <div class="imgcontainer">
            <div class="img-items">
              <img src="../../../assets/foodtime1.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
            <div class="img-items">
              <img src="../../../assets/foodtime2.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="imgcontainer">
            <div class="img-items">
              <img src="../../../assets/foodtime3.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
            <div class="img-items">
              <img src="../../../assets/foodtime4.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="imgcontainer">
            <div class="img-items">
              <img src="../../../assets/foodtime5.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
            <div class="img-items">
              <img src="../../../assets/foodtime6.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item class="foodcontainer">
          <div class="imgcontainer">
            <div class="img-items">
              <img src="../../../assets/foodtime1.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
            <div class="img-items">
              <img src="../../../assets/foodtime2.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="imgcontainer">
            <div class="img-items">
              <img src="../../../assets/foodtime3.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
            <div class="img-items">
              <img src="../../../assets/foodtime4.png" alt />
              <p class="s-title">荷包蛋</p>
              <p class="sub-title">营养早餐</p>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="slideimg">
      <mt-swipe :auto="0" class="slidecontainer">
        <mt-swipe-item>
          <img src="../../../assets/slide1.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../../assets/slide2.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../../assets/slide3.png" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="secondtitle">
      <ul>
        <li class="isactive">推荐</li>
        <li>时令</li>
        <li>食肉</li>
        <li>素食</li>
        <li>烘焙</li>
        <li>食街</li>
      </ul>
    </div>
    <user-show></user-show>
  </div>
</template>
<script>
import Usershow from "./Usershow";
export default {
  components:{
    "user-show":Usershow,
  }
};
</script>
<style scoped>
.titletips {
  text-align: left;
  margin-left: 24px;
  margin-top: 60px;
  margin-bottom: 16px;
}

.videocard {
  margin: 0 auto;
  height: 350px;
  position: relative;
  box-sizing: border-box;
  padding-left: 2rem;
  overflow: hidden;
}
.card-item {
  height: 100%;
  width: 75%;
  float: left;
  border-radius: 2rem;
  position: absolute;
}
.firstchild {
  background: darkgreen;
  z-index: 20;
}
.secondchild {
  top: 17.5px;
  height: 90%;
  background: darksalmon;
  z-index: 19;
  left: 3.5rem;
}
.lastchild {
  top: 35px;
  height: 80%;
  background: darkseagreen;
  z-index: 18;
  left: 5rem;
}
.navmenu {
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 90%;
  height: 85px;
}
.navmenu-item {
  width: 23%;
  height: 85px;
  background: #f9e9e7;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  padding-left: 5px;
  padding-top: 5px;
}
.navmenu-item > h3 {
  font: 14px 苹方-简 bold;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 2px;
}
.navmenu-item > p {
  font: 10px 苹方-简;
  margin-top: 0;
  margin-bottom: 0px;
  margin-left: 2px;
  z-index: 4;
}
.navmenu-item > img {
  height: 60px;
  margin-top: -5px;
  margin-left: 15px;
  z-index: 1;
}
.timetitle {
  width: 90%;
  margin: 0 atuo;
  text-align: center;
  padding-left: 1.5rem;
}
.timetitle > ul {
  margin: 0 auto;
  text-align: center;
  align-items: center;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.timetitle > ul > li > img {
  height: 15px;
  vertical-align: middle;
}
.timetitle > ul > li:first-child {
  font-size: 14px;
  font-weight: bolder;
}
.foodswipe {
  margin: 0 auto;
  margin-top: 1rem;
  height: 260px;
  width: 90%;
}

.imgcontainer {
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: space-around;
}
.imgcontainer > .img-items {
  width: 47%;
  height: 200px;
  border-radius: 10px;
  text-align: center;
}
.imgcontainer > .img-items > img {
  height: 200px;
  border-radius: 10px;
}
.s-title {
  margin: 2px 0;
  font-size: 14px;
  font-weight: bolder;
  text-align: left;
}
.sub-title {
  padding: 0;
  margin: 0;
  font: 12px 苹方-简;
  background: linear-gradient(white 50%, #f9e9e7 100%);
  text-align: left;
}
.slidecontainer {
  height: 180px;
  width: 90%;
  margin: 0 auto;
}
.slidecontainer img {
  width: 100%;
  height: 180px;
  border-radius: 10px;
}
.mint-swipe-indicator {
  width: 20px !important;
  height: 5px !important;
  border-radius: 0;
}
.secondtitle > ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 10px 10px;
  font: 14px 苹方-简;
  line-height: 10px;
}
.secondtitle > ul > li:first-child {
  font-weight: bolder;
  font-size: 16px;
}
.isactive {
  border-bottom: 5px solid #f00;
  border-radius: 5px;
}
.cardItem {
  box-sizing: border-box;
  width: 11rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding-bottom: 0.3rem;
  margin-bottom: 0.5rem;
}
.imgcard {
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
}
.idimg {
  width: 15%;
  border-radius: 100%;
}
.foodtitle {
  margin: 7px 0 5px 10px;
  font-size: 14px;
  font-weight: bolder;
}
.idinfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
}
.inforight,
.infoleft {
  display: flex;
  align-items: center;
}
.eye {
  width: 40%;
}
.idname {
  font: 10px 苹方-简;
}
.infoleft {
  margin-left: 0.3rem;
}
.inforight {
  font: 10px 苹方-简;
  margin-right: 1rem;
}
.twocarditems {
  margin: 0 auto;
}
.showcard {
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
<style>
  .tips {
  padding: 8px;
  font: 12px 苹方-简;
  background: linear-gradient(white 50%, #f9e9e7 100%);
}
</style>