<template>
  <div class="signup">
    <div class="signup-box">
      <div class="signup-title">
        <h1>registre-se</h1>
        <img src="../assets/suzy-plays.svg" alt="Suzy Plays" />
      </div>
      <form action="" class="signup-form">
        <input type="text" placeholder="insira seu usuário" />
        <input type="email" placeholder="insira seu email" />
        <input type="password" placeholder="insira sua senha" />
        <input type="password" placeholder="repita sua senha" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.signup {
  display: flex;
  .signup-title {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.7rem;
    h1 {
      text-transform: uppercase;
      font-size: 2.5rem;
    }
  }
  .signup-form {
    display: flex;
    flex-direction: column;
    input,
    button {
      margin-bottom: 1.1rem;
      width: 34rem;
      height: 3rem;
      border-radius: 5rem;
      text-align: center;
      color: #000;
      font-size: 1.2rem;
    }
    button {
      color: var(--grey-color);
      background: var(--background--darker-color);
      cursor: pointer;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
}
</style>
