<template>
  <div class="signin">
    <div class="signin-box">
      <div class="signin-title">
        <h1>BOAS VINDAS</h1>
        <img src="../assets/suzy-plays.svg" alt="" />
      </div>
      <form @submit.prevent="userSignIn" class="signin-form">
        <input
          type="text"
          placeholder="insira seu usuário"
          v-model="username"
          ref="usernameInput"
        />
        <input
          type="password"
          placeholder="insira sua senha"
          v-model="password"
        />
        <button type="submit">ENTRAR</button>
      </form>
      <p>Não é cadastrado? <a href="/signup">Clique aqui</a></p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";

export default {
  name: "SignIn",
  setup() {
    const router = useRouter();
    const store = useStore();
    const username = ref("");
    const password = ref("");
    const usernameInput = ref(null);
    const userSignIn = () => {
      store.signIn({ username: username.value, password: password.value });
      router.push("/");
    };

    onMounted(() => usernameInput.value.focus());

    return {
      username,
      usernameInput,
      password,
      userSignIn,
    };
  },
};
</script>

<style lang="scss" scoped>
.signin {
  display: flex;
  justify-content: center;
  .signin-title {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 2.5rem;
    }
  }
  .signin-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 34rem;
    margin-top: 1.7rem;
    input,
    button {
      margin: 1.7rem 0;
      margin-top: 0;
      height: 3rem;
      text-align: center;
      border-radius: 5rem;
      color: #000;
    }

    input::placeholder {
      color: var(--grey-color);
    }
    button {
      color: var(--grey-color);
      cursor: pointer;
      background: var(--background--darker-color);
      font-weight: bold;
    }
  }
  p {
    text-align: center;
    color: var(--grey-color);
    a {
      color: var(--text-links-color);
      font-weight: 400;
    }
  }
  p,
  a {
    font-size: 1.2rem;
    font-weight: bold;
  }
}
</style>
