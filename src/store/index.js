import { defineStore } from "pinia";
import api from "../services/api";

export const useStore = defineStore("user", {
  state: () => ({
    user: {
      name: "",
      username: "",
      token: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "",
    },
    userErrors: {},
    userLoggedIn: localStorage.getItem("user") ? true : false,
  }),
  getters: {},
  actions: {
    async signIn(userData) {
      const { username, password } = userData;
      await api
        .post("/user/signin", {
          username,
          password,
        })
        .then(async (res) => {
          this.user.token = res.data.token;
          localStorage.setItem("user", JSON.stringify(this.user.token));
          this.userLoggedIn = true;
        })
        .catch(({ response }) => {
          this.userErrors["data"] = response.data;
          this.userErrors["status"] = response.status;
        });
    },
    signOut() {
      localStorage.removeItem("user");
      this.userLoggedIn = false;
    },
  },
});
