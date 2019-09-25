<template>
  <div>
    <div class="concent">
      <div class="box">
        <!-- /*注释4*/ -->
        <div>
          <p><img src="../../../assets/share2.png" alt=""></p>
          <b>简简单单</b>
        </div>
        <div>
          <p><img src="../../../assets/share2.png" alt=""></p>
          <b>简简单单</b>
        </div>
        <div>
          <p><img src="../../../assets/share2.png" alt=""></p>
          <b>简简单单</b>
        </div>
        <div>
          <p><img src="../../../assets/share2.png" alt=""></p>
          <b>简简单单</b>
        </div>
        <div>
          <p><img src="../../../assets/share2.png" alt=""></p>
          <b>简简单单</b>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <user-show class="usershow"></user-show>
    
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

p {
  margin: 0;
  padding: 0;
}

.concent {
  margin: 10px auto;
  width: 100%;
  max-width: 750px;
  min-width: 320px;
  position: fixed;
}

.box {
  background:white;
  white-space: nowrap;
  overflow-x: auto;
  padding:0.5rem 1rem;
  margin-top:-10px;
  border-bottom: 1px solid #eee;
}

/*注释1*/
.box::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}

/*注释2*/
.box div {
  list-style: none;
  display: inline-block;
  width: 100px;
  line-height: 30px;
  margin-right: 10px;
  text-align: center;
}

/*注释3*/
.box p {
  width: 100%;
  height:100%;
  border-radius:10px;
}
.box p>img{
  width:100%;
  border-radius:4px;
}
.box div:last-child {
  margin: 0;
}
.box b{
  
  color:white;
  font:14px 苹方-简 bold;
  position:absolute;
  top:36px;
  left:1.5rem;
}
.box>div{
  position: relative;
}
.space{
  height:8rem;
}
</style>