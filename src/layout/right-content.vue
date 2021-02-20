<template>
  <div>
    <div class="content-title-box">right content</div>
    <div class="content-container-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
name: "right-content"
}
</script>

<style>
   .content-title-box {
     padding: 10px;
   }

   .content-container-box {
     padding: 10px;
     border-bottom: solid 1px #e6e6e6;
   }
</style>