<template>
  <div>
    <!-- 左侧导航 -->
    <SlideBarNav class="sidebar"/>
    <!-- 右侧内容 -->
    <MainContent class="container"/>

  </div>
</template>

<script>
import SlideBarNav from "./components/slidebar-nav";
import MainContent from './components/main-content';
export default {
  components: {
    SlideBarNav,
    MainContent
  },
};
</script>

<style lang="scss" scoped>
.container{
    margin-left: 200px;
}
</style>