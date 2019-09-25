<template>
  <div>
    <mt-tab-container class="page-container" v-model="active">
      <mt-tab-container-item id="foodset">
        <header-s></header-s>
        <page-one></page-one>
      </mt-tab-container-item>
      <mt-tab-container-item id="foodshow">
        <page-two></page-two>
      </mt-tab-container-item>
      <mt-tab-container-item id="eatwhat">
        <page-three></page-three>
      </mt-tab-container-item>
      <mt-tab-container-item id="me">第四页</mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="foodset" @click.native="changeState(0)">
        <tabbaricon
          :selectedImage="require('../../../assets/homered.png')"
          :normalImage="require('../../../assets/home.png')"
          :focused="currentIndex[0].isSelect"
        ></tabbaricon>
        <span class="bartxt">食集</span>
      </mt-tab-item>
      <mt-tab-item id="foodshow" @click.native="changeState(1)">
        <tabbaricon
          :normalImage="require('../../../assets/cube.png')"
          :selectedImage="require('../../../assets/addred.png')"
          :focused="currentIndex[1].isSelect"
        ></tabbaricon>
        <span class="bartxt">食秀</span>
      </mt-tab-item>
      <mt-tab-item id="eatwhat" @click.native="changeState(2)">
        <tabbaricon
          :normalImage="require('../../../assets/question.png')"
          :selectedImage="require('../../../assets/questionred.png')"
          :focused="currentIndex[2].isSelect"
        ></tabbaricon>
        <span class="bartxt">吃什么</span>
      </mt-tab-item>
      <mt-tab-item id="me" @click.native="changeState(3)">
        <tabbaricon
          :normalImage="require('../../../assets/cook.png')"
          :selectedImage="require('../../../assets/cookred.png')"
          :focused="currentIndex[3].isSelect"
        ></tabbaricon>
        <span class="bartxt">我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Tabbaricon from "./Tabbaricon.vue";
import Header from "./Header";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
export default {
  data() {
    return {
      //面板中显示子组件id
      active: "foodset",
      //创建数组保存图片焦点状态
      currentIndex: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ]
    };
  },
  methods: {
    changeState(n) {
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for (var i = 0; i < this.currentIndex.length; i++) {
        //2:判断如果循环下标与n相等 20
        if (n == i) {
          //3:当前下标元素true 10:22
          this.currentIndex[i].isSelect = true;
        } else {
          //4:其它元素修改false
          this.currentIndex[i].isSelect = false;
        }
      }
    }
  },
  components: {
    "tabbaricon": Tabbaricon,
    "header-s":Header,
    "page-one":Pageone,
    "page-two":Pagetwo,
    "page-three":Pagethree,
  }
};
</script>
<style scoped>
.mint-tabbar > .mint-tab-item {
  color: #999999;
}
/*修改默认tab选中文字样式*/
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: #f00;
}
</style>