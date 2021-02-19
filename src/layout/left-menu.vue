<template>
  <div>
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>运营</span>
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>用户</span>
        </template>
        <el-menu-item index="3-1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3-3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
  import {routes} from '../router'

  export default {
    data() {
      return {
        menuList: []
      }
    },
    mounted() {
      let menuList = routes[0]
      this.menuList = menuList.children
      console.log(this.menuList)
    }
  }

</script>

<style scoped>

</style>