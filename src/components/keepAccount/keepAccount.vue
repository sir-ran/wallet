<template>
  <transition name="slide">
    <div class="keep-account">
      <div class="header">记一笔账</div>
      <div class="select-bar" @click="toggleIsIncome">
        <div class="select-button" :class="{'active': !isIncome}">支出</div>
        <div class="select-button" :class="{'active': isIncome}">收入</div>
      </div>
      <div class="input-bar">
        <div class="select-account" @click="toggleSheet" >
          <span class="text" v-if="!selectedAccount">选择账户</span>
          <span class="text" v-else><i :class="'icon-' + selectedAccount" class="icon"></i>{{selectedAccount}}</span>
        </div>
        <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible">
        </mt-actionsheet>
        <input type="number" v-model.number="inputNum" class="input-box">
      </div>
      <p class="title">请选择用途</p>
      <div class="select-reason">
        <div v-for="reason in isIncome ? incomeReason : spendingReason" class="reason-item" @click="select(reason)">
          <span class="background" :class="{active: reason === selectedReason}">
            <i :class="'icon-' + reason" class="icon"></i>
          </span>
          <p class="name">{{reason}}</p>
        </div>
      </div>
      <button class="save-button" @click="saveKeppAccount">保存</button>
    </div>
  </transition>
</template>

<script>
import { Actionsheet, Toast } from 'mint-ui';
import moment from 'moment';
moment.locale('zh-cn');

export default {
  data () {
    return {
      isIncome: false,
      sheetVisible: false,
      selectedAccount: '',
      selectedReason: '',
      inputNum: 0,
      spendingReason: ['餐饮', '购物', '交通', '通讯', '娱乐', '医疗', '旅行', '教育', '借款', '社交'],
      incomeReason: ['工资', '奖金', '报销', '利息', '还款']
    };
  },
  methods: {
    toggleIsIncome () {
      this.isIncome = !this.isIncome;
    },
    toggleSheet () {
      this.sheetVisible = !this.sheetVisible;
    },
    select (reason) {
      this.selectedReason = reason;
    },
    saveKeppAccount () {
      if (!this.selectedAccount) {
        Toast({
          message: '请选择账户',
          duration: 1500
        });
        return;
      } else if (!this.selectedReason) {
        Toast({
          message: '请选择用途',
          duration: 1500
        });
        return;
      } else {
        this.$store.commit('SUBMIT_ACCOUNT', {
          isIncome: this.isIncome,
          num: this.inputNum,
          account: this.selectedAccount,
          reason: this.selectedReason,
          time: moment(new Date()).format('MMMDo')
        });
        this.$store.commit('STORAGE_INFO');
        Toast({
          message: '保存成功',
          duration: 1500
        });
        this.$router.back();
      }
    }
  },
  components: {
    'mt-actionsheet': Actionsheet
  },
  computed: {
    actions () {
      let _this = this;
      let list = Object.keys(this.$store.state.fund);
      let actions = [];
      for (let i of list) {
        actions.push({
          name: i,
          method: function () {
            _this.selectedAccount = this.name;
          }
        });
      }
      return actions;
    }
  }
};
</script>

<style lang="stylus">
@import"./keepAccount.styl"
</style>
