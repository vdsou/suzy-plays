<template>
  <div class="signin">
    <div class="signin-box">
      <div class="signin-title">
        <h1>BOAS VINDAS</h1>
        <img src="../assets/suzy-plays.svg" alt="" />
      </div>
      <form action="" class="signin-form">
        <input type="text" placeholder="insira seu usuário" />
        <input type="password" placeholder="insira sua senha" />
        <button type="submit">ENTRAR</button>
      </form>
      <p>Não é cadastrado? <a href="/signup">Clique aqui</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style scoped>
.signin {
  display: flex;
  justify-content: center;
}
.signin .signin-title {
  display: flex;
  flex-direction: column;
}
.signin .signin-title h1{
  font-size: 2.5rem;
}
.signin .signin-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 34rem;
  margin-top: 1.7rem;
}
.signin .signin-form input,
.signin .signin-form button {
  margin: 1.7rem 0;
  margin-top: 0;
  height: 3rem;
  text-align: center;
  border-radius: 5rem;
  color: #000;
}
.signin .signin-form input::placeholder {
  color: var(--grey-color);
}
.signin .signin-form button {
  color: var(--grey-color);
  cursor: pointer;
  background: var(--background--darker-color);
  font-weight: bold;
}
p {
  text-align: center;
  color: var(--grey-color);
}
p,
a {
  font-size: 1.2rem;
  font-weight: bold;
}
p a {
  color: var(--text-links-color);
  font-weight: 400;
}
</style>
