<template>
  <div>
    <div id="headerimg"><img class="headerbanner" src="../../../assets/springbanner.png" alt=""></div>
    <div id="tabtitle" @click="change">
      <ul class="tabtitle">
        <li class="isactive">食秀</li>
        <li>食杰</li>
        
      </ul>
    </div>
    <mt-tab-container v-model="tab" id="tab">
      <mt-tab-container-item id="foodshow">
        <food-show></food-show>
      </mt-tab-container-item>
      <mt-tab-container-item id="foodmenu">
        <food-menu></food-menu>
      </mt-tab-container-item>
      
    </mt-tab-container>
  </div>
</template>
<script>
import Foodshow from "./Foodshow";
import Foodmenu from "./Foodmenu";
export default {
  components:{
    "food-show":Foodshow,
    "food-menu":Foodmenu,
  },
  data() {
    return {
      tab:"foodshow"
    };
  },
  methods: {
    change(e){
      if(e.target.nodeName=="LI"){
        
        if(e.target.innerText=="食秀"){
          this.tab="foodshow";
          e.target.className="isactive";
          e.target.nextSibling.className="";
          e.target.nextSibling.nextSibling.className="";
        }else if(e.target.innerText=="食杰"){
          this.tab="foodmenu";
          e.target.className="isactive";
          e.target.previousSibling.className="";
          e.target.nextSibling.className="";
        }else{
          this.tab="taskcenter";
          e.target.className="isactive";
          e.target.previousSibling.className="";
          e.target.previousSibling.previousSibling.className="";
        }
      }
    }
  },
};
</script>
<style scoped>
.isactive{
  border-bottom: 2px solid #f00;
  font:16px bolder SimHei;
}
ul{
  list-style: none;
  padding:0;
  margin:0;
  display: flex;
}
  .headerbanner{
  height:3.5rem;
  width:100%;
  margin-bottom:4px;
  position: fixed;
  z-index: 100;
}
#headerimg{
  height:3.8rem;
}
#tabtitle{
  display: block;
  width:100%;
  height: 2rem;
  position: fixed;
  background:white;
  z-index: 15;
}
.tabtitle{
  height:2rem;
  justify-content: center;
  font:14px 苹方-简;
  background:white;
}
.tabtitle>li:not(:first-child){
  margin-left:2rem;
}
#tab{
  margin-top:30px;
}

</style>