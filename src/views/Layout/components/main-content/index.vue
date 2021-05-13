<template>
    <div>
        <!-- 顶部导航 -->
        <Header/>
        <!-- 下面内容区域 -->
        <Content class="container"></Content>
    </div>
</template>

<script>
import Content from './content';
import Header from './top-nav';
export default {
    components:{
      Content,
      Header  
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin-top: 60px;
}

</style>