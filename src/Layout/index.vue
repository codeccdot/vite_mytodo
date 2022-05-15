<template>
  <div id="lay-container">
    <!-- 侧边栏导航 -->
    <Nav class="nav"></Nav>
    <!-- 内容 -->
    <div class="app-main">
      <!-- <div class="header"></div> -->
      <div class="main"></div>
      <!-- <router-view></router-view> -->
    </div>
      <RightBar class="rightBar"></RightBar>
  </div>
</template>

<script lang="ts">
import RightBar from "./rightBar/rightBar.vue";
import Nav from "./Nav/nav.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Nav,RightBar },
  setup() {},
});
</script>

<style lang="scss" scoped>
#lay-container {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  //侧边栏
  .nav {
    flex: 1.5;
    min-width: 250px;
    // background-color: azure;
    height: 100%;
  }
  //主内容
  .app-main {
    display: flex;
    flex-direction: column;
    flex: 6;
    height: 100%;
    .header {
      flex: 1;
      background-color: blanchedalmond;
    }
    .main {
      flex: 12;
       background: rgb(232, 234, 235);
    }
  }
  // 右边栏
   .rightBar{
     flex:3;
     min-width: 20px;
     background-color: rgb(102, 87, 79);
   }
}
</style>
