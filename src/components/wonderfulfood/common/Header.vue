<template>
  <div>
    <div><img class="headerbanner" src="../../../assets/springbanner.png" alt=""></div>
    <div class="header">
      <img @click="jump" class="icon" src="../../../assets/add.png" alt="">
      <div class="search">
        <img class="icon" src="../../../assets/search.png" alt="">
        <span>搜索百万免费菜谱</span>
      </div>
      <img class="icon" src="../../../assets/email.png" alt="">
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  methods:{
    jump(){
      this.$router.push("./post")
    }
  }
}
</script>
<style scoped>
.headerbanner{
  height:3.5rem !important;
  width:100%;
  margin-bottom:4px;
  position: fixed;
  z-index: 100;
}
  .header{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding:4px 1.5rem;
    border-bottom:1px solid #eee;
    position:fixed;
    top:40px;
    box-sizing:border-box;
    z-index:101;
    background:white;
  }
  .icon{
    height:1.5rem;
  }
  .search{
    width:68%;
    height:1.5rem;
    display: flex;
    justify-content: center;
    padding:4px;
    align-items: center;
    background-color:#efefef;
    border-radius:3px;
    align-items: center;
    
  }
  .search>span{
    font:12px 苹方-简;
    color:#9a9a9a;
    line-height:1.5rem;
  }
  .search>img.icon{
    height:1rem;
    margin-right:2px;
  }
 .clear{
   clear:both;
   height: 24px;
 }
</style>