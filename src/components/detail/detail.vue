<template>
  <div class="detail">
    <div class="header">账单明细</div>
    <div class="no-data" v-if="!totalFund">暂无数据</div>
    <div class="chart-container" ref="container" style="width: 100%;height: 400px" v-else></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import { mapState, mapGetters } from 'vuex';
import { chartOption } from './chartOption.js';

export default {
  mounted () {
    this.$nextTick(() => {
      this.draw();
    });
  },
  methods: {
    draw () {
      this.chart = echarts.init(this.$refs.container);
      this.chart.setOption(chartOption(this.fund));
    }
  },
  computed: {
    ...mapState([
      'fund'
    ]),
    ...mapGetters([
      'totalFund'
    ])
  }
};
</script>

<style lang="stylus">
@import"./detail.styl"
</style>
