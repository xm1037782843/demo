<template>
  <div>
    <el-menu
      background-color="#304156"
      text-color="#fff"
      active-text-color="rgb(77, 188, 255)"
    >
      <menuNav :menuList='slideBarMenu' />
    </el-menu>
  </div>
</template>

<script>
import menuNav from "@/components/menu-nav.vue";
// import { children } from "../../../router";
// import { DynamicRoutes } from '../../../router/dynamic-router';
import {mapState} from 'vuex';
export default {
  data() {
    return {
      // DynamicRoutes,
    };
  },
  computed:{
    ...mapState('permission',['slideBarMenu'])
  },
  components: {
    menuNav,
  },
};
</script>

<style lang="scss" scoped>
</style>