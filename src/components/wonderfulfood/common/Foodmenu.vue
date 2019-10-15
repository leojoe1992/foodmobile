<template>
  <div>
    <swiper>
      <swiper-slide>
        <div class="menu-month">
          <swiper :options="swiperOption">
            <swiper-slide>
              <div class="month-card">
                <img class="user-photo" src="../../../assets/idimg.jpeg" alt />
                <div class="userid">
                  <span class="rating">NO.1</span>
                  <span class="id-name">豆妈maomao</span>
                </div>

                <div class="userDish">
                  <div class="user-img">
                    <img src="../../../assets/slide1.png" alt />
                    <img src="../../../assets/slide2.png" alt />
                    <img src="../../../assets/slide3.png" alt />
                  </div>
                  <span>作品</span>
                  <span class="golder">33</span>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="month-card">
                <img class="user-photo" src="../../../assets/idimg.jpeg" alt />
                <div class="userid">
                  <span class="rating">NO.1</span>
                  <span class="id-name">豆妈maomao</span>
                </div>

                <div class="userDish">
                  <div class="user-img">
                    <img src="../../../assets/slide1.png" alt />
                    <img src="../../../assets/slide2.png" alt />
                    <img src="../../../assets/slide3.png" alt />
                  </div>
                  <span>作品</span>
                  <span class="golder">33</span>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="month-card">
                <img class="user-photo" src="../../../assets/idimg.jpeg" alt />
                <div class="userid">
                  <span class="rating">NO.1</span>
                  <span class="id-name">豆妈maomao</span>
                </div>

                <div class="userDish">
                  <div class="user-img">
                    <img src="../../../assets/slide1.png" alt />
                    <img src="../../../assets/slide2.png" alt />
                    <img src="../../../assets/slide3.png" alt />
                  </div>
                  <span>作品</span>
                  <span class="golder">33</span>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="userrating">
            <div class="leftimg">
              <img class="king" src="../../../assets/King.png" alt="">
              <img class="imguser" src="../../../assets/idimg.jpeg" alt="">
            </div>
            <div class="rightcontent">
              <div class="idname">
                <div>
                  <span>豆妈maomao</span>
                  <p>排名上升</p>
                </div>
                <div>
                  作品
                  <span class="gray">33</span>
                </div>
              </div>
              <div class="dishimg">
                <img src="../../../assets/slide1.png" alt="">
                <img src="../../../assets/slide2.png" alt="">
                <img src="../../../assets/slide3.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="foodtab">
          <h4 class="tips">美食排行榜</h4>
          <div class="foodrating">
            <div class="crown">
              <img src="../../../assets/king1.png" alt="">
              <span>NO.1</span>
            </div>
            <div class="media">
              <img src="../../../assets/slide1.png" alt="">
            </div>
            <div class="foodcontent">
              <h4>早餐鸡蛋卷</h4>
              <div class="iduser">
                <img class="idimg" src="../../../assets/idimg.jpeg" alt="">
                <span>美食姐姐</span>
              </div>
              <div class="ratingdetail">
                <div class="ratingup">
                  <span>排名上升</span>
                  <img class="up" src="../../../assets/up.png" alt="">
                </div>
                <div class="readnum">
                  <span>浏览</span>
                  <span class="gray">33.8K</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods:{
    load(){
      
    }
  
  },
  created(){
    
  }
  
};
</script>
<style scoped>
.space {
  height: 1000px;
  background: aqua;
}
.menu-month {
  padding: 1rem;
}
.month-card {
  width: 100%;
  height: 18rem;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  border-radius:5px;
}
.user-photo {
  width: 100%;
  height: 60%;
  object-fit: cover;
}
.user-img {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.user-img img {
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;
}
.userDish {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:1rem 1rem;
}
.userid,
.userDish {
  margin-top:0.5rem;
  padding: 0.2rem 0.5rem;
}
.rating {
  margin-right: 1rem;
}
.golder {
  color: gold;
  font-size: 2rem;
}
.userrating{
  margin-top:1rem;
  padding:1rem;
  display: flex;
  justify-content: space-between;
  height: 8rem;
  border-bottom:1px solid #eee;
}
.leftimg{
  width:20%;
  position: relative;;
}
.imguser{
  width:3rem;
  height:3rem;
  margin-left:0.5rem;
  border-radius:50%;
}
.king{
  width:1.5rem;
  height:1.5rem;
  position:absolute;
  top:-1rem;
}
.rightcontent{
  width:80%;
}
.idname{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dishimg{
  margin-top:1rem;
  display: flex;
  justify-content: space-between;

}
.dishimg img{
  width:4.5rem;
  height:4.5rem;
  object-fit: cover;
}
.idname p{
  font-size:0.7rem;
}
.foodtab{
  padding:1rem;
}
.foodrating{
  margin-top:1rem; 
  display: flex;
  justify-content: space-between;
  height:150px;
}
.crown{
  width:10%;
  padding:0 0.3rem;
}
.crown img{
  width:2rem;
  
}
.media{
  width:40%;
}
.foodcontent{
  width:48%;
  padding:1rem;
}
.media img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.idimg{
  width:2rem;
  height:2rem;
  border-radius:50%;
  margin-left:-0.2rem;
}
.foodcontent h4{
  margin-bottom:0.5rem;
}
.iduser{
  display: flex;
  align-items: center;
}
.iduser span{
  margin-left:0.5rem;
  font-size:12px;
  color:#666;
}
.ratingdetail{
  margin-top:0.5rem;
}
.ratingup{
  display:flex;
  align-items: center;
}
.up{
  height: 1rem;
}
.readnum{
  margin-top:1rem;
  display: flex;
  justify-content: space-between;
}
.gray{
  font-size:18px;
  color:#666;
  font-weight: bold;
}
</style>