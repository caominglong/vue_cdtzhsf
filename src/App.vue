<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    // 关闭加载动画
    setTimeout(() => {
      document.getElementById("loader-wrapper").style.display = "none";
    }, 1000)
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #efefef;
  height: 100vh;
  overflow: hidden;
  #app {
    background-color: #efefef;
    height: 100vh;
    overflow: hidden;
    .minHight {
      height: 100vh;
    }
  }
}
</style>
