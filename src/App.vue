<template>
  <div id="app">
    <router-view></router-view>
    <div class="tab-wrapper">
      <tab></tab>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    tab: require('./components/tab/tab')
  },
  mounted () {
    this.$store.commit('LOAD_INFO_FROM_LOCAL');
  }
};
</script>

<style lang="stylus">
#app
  font-family: '黑体'
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .tab-wrapper
    position fixed
    width 100%
    bottom 0
    left 0
</style>
