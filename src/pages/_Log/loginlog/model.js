import { getLoginLog } from '@/services/api';

export default {
  namespace: 'loginlog',

  state: {
    data: [],
  },

  effects: {
    *getLoginLog({ payload }, { call,put }) {
      const res = yield call(getLoginLog);
      yield put({
        type:'setLoginlog',
        payload:res
      })
    },
  },

  reducers: {
    setLoginlog(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
  }
};
