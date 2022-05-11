<template>
  <div class="settings">
    <div class="settings-title">
      <h1>Configurações</h1>
      <i><img src="../assets/edit.svg" alt="Editar" /></i>
    </div>
    <form action="" class="settings-form">
      <div class="update-username">
        <label for="username">Alterar usuário</label>
        <input
          type="text"
          id="username"
          placeholder="insira aqui seu novo usuário"
        />
      </div>
      <div class="update-password">
        <label for="password">Alterar senha</label>
        <input
          type="text"
          id="password"
          placeholder="insira aqui sua nova senha "
        />
        <input
          type="text"
          id="password"
          placeholder="repita aqui sua nova senha "
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
    <button class="delete-account" type="button">Excluir minha conta</button>
  </div>
</template>

<script>
export default {
  name: "Settings",
};
</script>

<style lang="scss" scoped>
.settings {
  margin: 3.5rem;
  .settings-title {
    display: flex;
    align-items: center;
  }
  .settings-form {
    display: flex;
    height: 40rem;
    flex-direction: column;
    justify-content: space-around;
    input {
      width: 24rem;
      height: 3rem;
      border-radius: 0.5rem;
      text-align: center;
      font-size: 1.2rem;
      margin: 0.6rem 0;
      color: #000;
      &::placeholder {
        color: var(--grey-color);
      }
    }
    label {
      font-weight: bold;
      font-size: 1.6rem;
    }
    .update-username,
    .update-password {
      display: flex;
      flex-direction: column;
    }
    button {
      width: 7rem;
      height: 3.5rem;
      font-weight: bold;
      background: #079992;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
  .delete-account {
    background: var(--danger-color);
    padding: 0.8rem 1.2rem;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 0.5rem;
    cursor: pointer;
  }
}
</style>
