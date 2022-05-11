<template>
  <div class="home-content">
    <div class="title">
      <i><img src="../assets/music.svg" alt="Símbolo de Música" /></i>
      <h1>Vamos começar criando um comando para chamar sua playlist</h1>
    </div>
    <form action="" class="form">
      <input
        type="text"
        class="user-command-input"
        placeholder="insira seu comando"
      />
    </form>
  </div>
</template>
<script>
export default {
  name: "UserCammandInput",
  components: {},
};
</script>
<style lang="scss" scoped>
.home-content {
  .title {
    display: flex;
    h1 {
      font-size: 1.6rem;
      line-height: 19px;
      margin: 0 1.2rem;
    }
    i {
      display: flex;
    }
  }
  .form {
    width: inherit;
    margin-top: 2.2rem;
    .user-command-input {
      width: 100%;
      height: 3.5rem;
      margin: 0 auto;
      color: #000;
      text-align: center;
      font-size: 1.2rem;
      border-radius: 0.5rem;
      &::placeholder {
        color: var(--grey-color);
      }
    }
  }
}
</style>
