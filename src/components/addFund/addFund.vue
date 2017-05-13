<template>
  <transition name="slide">
    <div class="add-fund">
      <div class="header">添加资产</div>
      <div class="select-bar" @click="toggleIsFund">
        <div class="select-button" :class="{'active': isFund}">资产</div>
        <div class="select-button" :class="{'active': !isFund}">负债</div>
      </div>
      <ul class="list">
        <router-link v-for="typeitem in typeList" class="list-item" tag="li" :to="{name: 'input', params: {type: typeitem, isFund: isFund}}" :key="typeitem">
          <i :class="'icon-' + typeitem" class="icon"></i>
          <span class="type">{{typeitem}}</span>
          <span class="count">{{typeObject[typeitem]}}元</span>
        </router-link>
      </ul>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      isFund: true
    };
  },
  computed: {
    typeObject () {
      return this.isFund ? this.$store.state.fund : this.$store.state.debt;
    },
    typeList () {
      return Object.keys(this.typeObject);
    }
  },
  methods: {
    toggleIsFund () {
      this.isFund = !this.isFund;
    }
  }
};
</script>

<style lang="stylus">
@import"./addFund.styl"
</style>
