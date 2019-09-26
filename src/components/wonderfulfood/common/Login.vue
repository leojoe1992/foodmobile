<template>
  <div>
    <img class="close" @click="jump" src="../../../assets/close.png" alt />
    <h3>登录美食节</h3>
    <span></span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump: function() {
      this.$router.push("./");
    }
  }
};
</script>