<template>
  <div>
    <template v-for="item in menuList">
      <!-- 二级或者多级导航 -->
      <el-submenu
        :index="item.name"
        :key="item.name"
        v-if="item.children && item.children.length > 0"
      >
        <template slot="title">{{ item.meta.name }}</template>
        <my-nav :menuList="item.children"></my-nav>
        <!-- <el-menu-item index="2-1" v-for="item.children">选项1</el-menu-item> -->
      </el-submenu>

      <!-- 直接导航 -->
      <el-menu-item
        :key="item.name"
        :index="item.name"
        @click="tiao(item.name)"
        v-else
      >
        <i class="iconfont" :class="item.meta.icon"></i>
        <span>{{ item.meta.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "my-nav",
  props: {
    menuList: {
      //[{},{}]
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  mounted() {
    console.log("导航动态数据---", this.menuList);
  },
  methods: {
    tiao(name) {
      console.log(name);
      this.$router.push({
        name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>