export default {
  state: {
    user: { username: "guest", role_id: 0, user_id: null },
  },
  mutations: {
    changeUser(state, newUser) {
      if (!newUser) {
        state.user.username = "guest";
        state.user.role_id = 0;
        state.user.user_id = null;
        return;
      }
      state.user.username = newUser.username;
      state.user.role_id = newUser.role_id;
      state.user.user_id = newUser.user_id;
    },
  },
  getters: {
    username(state) {
      return state.user.username;
    },
    role(state) {
      if (state.user.role_id == 0) {
        return "unauthorized";
      } else if (state.user.role_id == 1) {
        return "user";
      } else if (state.user.role_id == 2) {
        return "admin";
      }
    },
  },
};
