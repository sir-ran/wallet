<template>
  <transition name="swipe">
    <div class="input">
      <div class="header">新建账户</div>
      <div class="type-bar">
        <i :class="'icon-' + type" class="icon"></i>
        <span class="type">{{type}}</span>
      </div>
      <div class="split"></div>
      <p class="title">账户余额</p>
      <div class="input">
        <label class="label">请输入余额</label>
        <input type="number" v-model.number.trim="inputNum" class="input-box" autofocus>
      </div>
      <button class="save-button" @click="saveFund">保存</button>
    </div>
  </transition>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      inputNum: 0
    };
  },
  computed: {
    type () {
      return this.$route.params.type;
    },
    isFund () {
      return this.$route.params.isFund;
    }
  },
  methods: {
    saveFund () {
      this.$store.commit('ADD_FUND_OR_DEBT', {
        type: this.type,
        num: this.inputNum,
        isFund: this.isFund
      });
      this.$store.commit('STORAGE_INFO');
      this.$router.back();
      Toast({
        message: '保存成功',
        duration: 1500
      });
    }
  }
};
</script>

<style lang="stylus">
@import"./input.styl"
</style>
