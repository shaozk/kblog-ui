<template>
  <div id="app">
    <el-container>
      <el-header id="admin-header-box">
        <topHeader></topHeader>
      </el-header>
      <el-container>
        <el-aside id="left-menu-list-box" width="200px">
          <left-menu></left-menu>
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
  export default {
    mounted() {
      // dongtaishezhi cebian candan gaodu

    }
  }
</script>

<style>
.el-header {
  background-color: dodgerblue;
  line-height: 60px;
}

.el-aside {
  line-height: 200px;
  border-right: aliceblue solid 1px;
}


</style>