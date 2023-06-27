import { createStore } from "vuex";
let timeout = null;

export default createStore({
  state() {
    return { loading: false };
  },
  actions: {
    setLoading(ctx, loading) {
      ctx.commit("setLoading", loading);
    },
  },
  mutations: {
    setLoading(state, loading) {
      clearTimeout(timeout);
      if (loading) {
        timeout = setTimeout(() => {
          state.loading = loading;
        }, 200);
      } else state.loading = loading;
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
  },
});
