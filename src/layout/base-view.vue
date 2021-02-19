<template>
  <div id="app">
    <!-- 显示内容 -->
    <div class="header-part">顶部内容</div>
    <div class="content-box">
      <div class="nav">
        <router-link to="/index">首页</router-link>
        <br>
        <router-link to="/content/post-article">文章发表</router-link>
        <br>
        <router-link to="/content/manage-article">文章管理</router-link>
        <br>
        <router-link to="/content/manage-comment">评论管理</router-link>
        <br>
        <router-link to="/content/manage-image">图片管理</router-link>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

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