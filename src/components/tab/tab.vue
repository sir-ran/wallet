<template>
  <div class="tab">
    <router-link to="/fund" tag="div" class="tab-item">
      <i class="icon-资产 icon"></i>
      <span class="text">资产</span>
    </router-link>
    <router-link to="/detail" tag="div" class="tab-item">
      <i class="icon-账单 icon"></i>
      <span class="text">明细</span>
    </router-link>
    <router-link to="/about" tag="div" class="tab-item">
      <i class="icon-关于 icon"></i>
      <span class="text">关于</span>
    </router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="stylus">
@import"./tab.styl"
</style>

<style>
@import"../../assets/icon/style.css";
</style>
