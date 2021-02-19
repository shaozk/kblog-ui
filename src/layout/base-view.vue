<template>
  <div id="app">
    <el-container>
      <el-header>顶部内容</el-header>
      <el-container>
        <el-aside width="200px">
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
        </el-aside>
        <el-container>
          <el-main>
            <div class="content">
              <router-view></router-view>
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>

</template>

<script>

</script>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>