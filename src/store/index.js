import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  state: () => ({
    user: { username: "admin", password: "admin" },
    logged: false,
  }),
  getters: {},
  actions: {
    signIn(data) {
      const { username, password } = data;
      if (this.user.username === username && this.user.password === password) {
        this.logged = true;
        return this.logged;
      }
      return this.logged
    },
  },
});
