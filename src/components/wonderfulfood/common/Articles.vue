<template>
  <div @click="hidden">
    <div class="backimgcontainer">
      <img class="backimg" src="../../../assets/luffy.jpg" alt />
    </div>
    <div class="idcontainer">
      <span class="username">tom</span>
      <img class="idimg" src="../../../assets/loginoff.png" alt />
    </div>
    <div v-for="i of 3" :key="i" class="item">
      <div class="imgcon">
        <img class="idimg1" src="../../../assets/loginoff.png" alt />
      </div>
      <div class="content">
        <span class="idname">tom</span>
        <p
          class="usercontent"
        >Lorem ipsum dolor sit amet conseam! Enim sint reiciorem accusamus, architecto nostrum?</p>
        <div class="timeinfo">
          <span class="my-small">54 分钟前</span>
          <div id="comment" class="hidden">
            <span class="white">
              <img class="heart" src="../../../assets/Heartwhite.png" alt />
              赞
            </span>|
            <span class="white">
              <img class="heart" src="../../../assets/comment.png" alt />
              评论
            </span>
          </div>
          <i @click="comment" class="comment">...</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: false
    };
  },
  methods: {
    comment(e) {
      var btn = e.target;
      var comment = btn.previousElementSibling;
      if (comment.className == "pAc") {
        comment.className = "hidden";
      } else {
        comment.className = "pAc";
        console.log(btn.nodeName);
      }
    },
    hidden(e){
      var btn=document.getElementById("comment");
      if(e.target.nodeName!="I"){
        btn.className="hidden";
      }
    }
  }
};
</script>
<style scoped>
.backimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.backimgcontainer {
  width: 100%;
  height: 15rem;
  float: left;
}
.idimg {
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
}
.idimg1 {
  width: 3rem;
  height: 3rem;
}
.idcontainer {
  position: relative;
  margin-top: -3rem;
  float: right;
  z-index: 10;
  margin-bottom: 1rem;
}
.username {
  font-size: 24px;
  -webkit-text-fill-color: #fff; /*文字的填充色*/
  -webkit-text-stroke: 0.3px #000;
  position: absolute;
  top: 1rem;
  right: 7rem;
}
.item {
  width: 100%;
  margin-right: 0;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}
.imgcon {
  margin-right: 1rem;
}
.idname {
  color: #5b6a91;
  font-size: 16px;
  font-weight: bold;
}
.usercontent {
  font: 14px 微软雅黑;
  margin-bottom: 0.3rem;
}
.my-small {
  font-size: 12px;
  color: #ccc;
}
.timeinfo {
  display: flex;
  justify-content: space-between;
  height: 2rem;
  width: 100%;
  align-items: center;
}
.comment {
  line-height: 0.5rem;
  width: 1.5rem;
  height: 1rem;
  background: #f7f7f7;
  border-radius: 3px;
  text-align: center;
}
.pAc {
  width: 9rem;
  height: 100%;
  background: #4b5053;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 2.5rem;
}
.white {
  color: white;
}
.heart {
  width: 1rem;
  height: 1rem;
}
.hidden {
  display: none;
}
</style>