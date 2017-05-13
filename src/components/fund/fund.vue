<template>
  <div class="fund">
    <div class="fund-header">
      <div class="header-top">
        <p class="title">净资产（元）</p>
        <span class="net-fund">{{filteredText(netFund)}}</span>
      </div>
      <div class="header-bottom">
        <div class="bottom-item">
          <span class="title">总资产：</span>
          <span class="total">{{filteredText(totalFund)}}</span>
        </div>
        <div class="bottom-item">
          <span class="title">总负债：</span>
          <span class="total">{{filteredText(totalDebt)}}</span>
        </div>
      </div>
      <div class="hideNumber" @click="toggleShowNumber">
        <i class="icon-眼睛 icon" v-if="showNumber"></i>
        <i class="icon-闭眼 icon" v-else></i>
      </div>
    </div>
    <div class="button-bar">
      <router-link :to="{name: 'addFund'}" tag="div" class="button">添加资产</router-link>
      <router-link :to="{name: 'keepAccount'}" tag="div" class="button">记一笔账</router-link>
    </div>
    <div class="records">
      <ul class="list">
        <li v-for="record in records" class="list-item">
          <i :class="'icon-' + record.account" class="icon"></i>
          <span class="reason">{{record.reason}}</span>
          <span class="account">{{record.account}}</span>
          <span class="num">{{record.num}}元</span>
          <span class="type" :class="{'income': record.isIncome}">{{record.isIncome ? '收入' : '支出'}}</span>
          <span class="time">{{record.time}}</span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      showNumber: true
    };
  },
  methods: {
    toggleShowNumber () {
      this.showNumber = !this.showNumber;
    },
    filteredText (val) {
      let temp = !val ? '暂无数据' : val;
      return this.showNumber ? temp : '****';
    }
  },
  computed: {
    ...mapGetters([
      'totalFund',
      'totalDebt',
      'netFund'
    ]),
    records () {
      return this.$store.state.records;
    }
  }
};
</script>

<style lang="stylus">
@import"./fund.styl"
</style>
