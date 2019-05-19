import { getLoginLog,getSysLoginLog } from '@/services/api';

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
    *getSysLoginLog({ payload }, { call,put }) {
      const res = yield call(getSysLoginLog);
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
