<template>
  <div class="main">
    <div class="header">
      <van-icon @click="back" size="25px" name="arrow-left" />
      <van-button size="small" round type="primary" @click="post">发表</van-button>
    </div>
    <div class="textarea">
      <van-cell-group>
        <van-field v-model="content" placeholder="传菜谱,晒美食..." type="textarea" />
      </van-cell-group>
    </div>
    <div class="uploadpic">
      <van-uploader v-model="fileList" multiple :max-count="9" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      content: "",
      fileList: []
    };
  },
  methods: {
    post() {
      if (this.content == "") {
        Toast("请写点东西!");
        return;
      } else if (this.fileList.length == 0) {
        Toast("请至少传一张图片");
        // console.log(this.fileList)
        return;
      } else {
        var content=this.content;
        var fileList=this.fileList;
        
        for(var i=0;i<fileList.length;i++){
         var pic=fileList[i].content;
        }
        console.log(pic);
        var postData = this.qs.stringify({
          content,
          pic
        });
      
        this.axios({
          method: "post",
          url: "sendmsg",
          data: postData
        }).then(res => {
          if (res.data.code == -1) {
            Toast("请先登录")
            return;
          } else if (res.data.code == 1) {
            Toast.loading({
              mask: true,
              message: "发表中..."
            });
            setTimeout(()=>{
              Toast.success('发表成功');
              this.$router.push("./");
            },3000)
          }
        });
      }
    },
    back() {
      this.$router.push("./");
    }
  },
  watch: {
    
  }
};
</script>
<style scoped>
.main {
  padding: 1rem;
}
.header {
  display: flex;
  justify-content: space-between;
}
.textarea {
  margin-top: 1rem;
}
.uploadpic {
  margin-top: 1rem;
}
</style>
<style>
.van-uploader__wrapper {
  display: flex;
  justify-content: center;
}
</style>