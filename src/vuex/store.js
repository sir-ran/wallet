import { mutations } from './mutations';

const state = {

  fund: {
    '支付宝': 0,
    '微信': 0,
    '现金': 0,
    '银行卡': 0,
    '投资': 0
  },

  debt: {
    '贷款': 0,
    '欠款': 0
  },

  records: []

};

const getters = {

  totalFund (state) {
    let total = 0;
    for (let i in state.fund) {
      total += state.fund[i];
    }
    return total;
  },

  totalDebt (state) {
    let total = 0;
    for (let i in state.debt) {
      total += state.debt[i];
    }
    return total;
  },

  netFund (state, getters) {
    return getters.totalFund - getters.totalDebt;
  }
};

export default {
  state,
  mutations,
  getters
};
