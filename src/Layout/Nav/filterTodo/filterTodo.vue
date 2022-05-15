<!-- 动态侧边栏组件 -->
<template>
  <div class="filter-container">
    <div
      class="itemList"
      v-for="(item, index) in filterNav.itemList"
      :key="index" @click="goRouter(item.path)"
    >
      <div class="sign"></div>
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
        { name: "作业清单" },
        { name: "旅行清单" },
        { name: "梦想清单" },
        { name: "规划清单" },
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
  background-color: #82848a;
}

// @import url('../../../static/global.scss');
.filter-container {
  overflow: auto;
  margin-top: 15px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
 
  .sign{
    position: absolute;
    left: 30%;
    width: 10px;
    height: 10px;
    border-radius:50%;
    background: lightblue;
  }
  .itemList {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 15px;
    // color:rgb(181, 171, 171);
    font-weight: 600;
    height: 35px;
    .item {
      // height: 100%;
    }
  }
  .itemList:hover {
    background: rgb(45, 178, 240);
  }
}
</style>
