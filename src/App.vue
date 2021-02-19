<template>
  <div id="app">
    <!-- 显示内容 -->
    <div class="header-part">顶部内容</div>
    <div class="content-box">
      <div class="nav">
        <router-link to="/home">首页</router-link>
        <br>
        <router-link to="/article">文章</router-link>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
.header-part {
  background: #fff000;
}

.nav {
  background: #000fff;
  width: 150px;
  height: 200px;
  float: left;
}

.content {
  background: #00eeaa;
  width: 500px;
  height: 200px;
  float: left;
}

</style>
