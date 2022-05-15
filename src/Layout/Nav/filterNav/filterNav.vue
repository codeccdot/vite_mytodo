<!-- 动态侧边栏组件 -->
<template>
  <div class="filter-container">
    <div class="line">
        <div class="dot red"></div>
        <div class="dot orange"></div>
        <div class="dot green"></div>
    </div>
    <div
      class="itemList"
      v-for="(item, index) in filterNav.itemList"
      :key="index" @click="goRouter(item.path)"
    >
      <div class="item">{{ item.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
// import { func } from "vue-types";

export default defineComponent({
  setup() {
    const filterNav = reactive({
      itemList: [
        { name: "日期代办" },
        { name: "清单设置" },
        { name: "系统设置" },
        { name: "代办完成效率图" },
      ],
    });
    //路由跳转
    const goRouter = (path:String):void =>{
          
    }
    return {
      filterNav,goRouter
    };
  },
});
</script>

<style lang="scss" scoped>
//  滚动条设置
.filter-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgb(245, 243, 243);
  border-radius: 10px;
  background-color: #ffffff;
}

.filter-container::-webkit-scrollbar {
  width: 10px;
  background-color: #ffffff;
}

.filter-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cfb731;
}
.red{
   background:red; 
}
.orange{
    background: orange;
}
.green{
    background: green;
}

// @import url('../../../static/global.scss');
.filter-container {
  overflow: auto;
  margin-top: 15px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

  // justify-content: space-evenly;
  .line{
   width: 100%;
   height: 30px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   column-gap: 10px;
//    background: #000;
   .dot{
       position: relative;
       bottom:5px;
       width: 10px;
       height: 10px;      
       border-radius:50% ;

   } 
  }
  .itemList {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 15px;
    // color:rgb(181, 171, 171);
    font-weight: 600;
    height: 65px;
    .item {
      // height: 100%;
    }
  }
  .itemList:hover {
    background: rgb(181, 176, 176);
  }
}
</style>
