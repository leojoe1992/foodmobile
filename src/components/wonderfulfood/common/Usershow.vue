<template>
  <div>
    <div class="showcard">
      <div class="leftItems">
        <div v-for="i of 3" :key="i" class="cardItem">
          <img class="imgcard" src="../../../assets/slide1.png" alt />
          <p class="foodtitle">美味食物</p>
          <div class="idinfo">
            <div class="infoleft">
              <img class="idimg" src="../../../assets/idimg.jpeg" alt />
              <span class="idname">老厨师</span>
            </div>
            <div class="inforight">
              <img class="eye" src="../../../assets/eye.png" alt />
              <span>12w+</span>
            </div>
          </div>
        </div>
        
      </div>
       
      
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.leftItems{
  width:100%;
  margin:0;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
  .cardItem {
  box-sizing: border-box;
  width: 49%;
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
 padding:1rem;
}
</style>>
  
</style>