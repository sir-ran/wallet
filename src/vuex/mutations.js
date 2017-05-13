export const mutations = {

  ADD_FUND_OR_DEBT (state, payload) {
    let temp = payload.isFund ? state.fund : state.debt;
    temp[payload.type] = payload.num;
  },

  SUBMIT_ACCOUNT (state, payload) {
    if (payload.isIncome) {
      state.fund[payload.account] += payload.num;
    } else {
      state.fund[payload.account] -= payload.num;
    }
    state.records.push(payload);
  },

  STORAGE_INFO (state) {
    let data = JSON.stringify(state);
    window.localStorage.setItem('vue-wallet', data);
  },

  LOAD_INFO_FROM_LOCAL (state) {
    let data = JSON.parse(window.localStorage.getItem('vue-wallet'));
    for (let k in state) {
      state[k] = data[k];
    }
  }

};
