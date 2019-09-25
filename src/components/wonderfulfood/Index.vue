<template>
  <div class="index">
    
      
      <tab-bar></tab-bar>
   
  </div>
</template>
<script>

import Tabbar from "./common/Tabbar"
export default {
  components:{
    
    "tab-bar":Tabbar,
  }
}
</script>

<style scoped>
 .index{
   padding-bottom: 60px;
 }
</style>