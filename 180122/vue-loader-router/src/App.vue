<template>
  <div id="app">
    <h1>vue-loader+vue-router</h1>
    <div>
      <a v-link="{path:'/home'}">主页</a>
      <a v-link="{path:'/news'}">新闻</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
