<template>
  <nav>
    <div v-if="showMenu" class="nav-content" :class="{ showMenu }">
      <div class="user-menu-info">
        <i>
          <img src="../assets/content/user-icon.svg" alt="Ícone de Usuário" />
        </i>
        <h2>Chico de Loba</h2>
      </div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/settings">Editar Perfil</router-link>
        </li>
        <li>
          <router-link to="/about">Sobre</router-link>
        </li>
        <li>
          <router-link to="#" @click="leave">Sair</router-link>
        </li>
      </ul>
    </div>
    <button
      class="nav-overlay"
      v-if="showMenu"
      @click="showMenu = !showMenu"
    ></button>
    <a href="#" @click="showMenu = !showMenu">
      <img src="../assets/menu.svg" alt="Menu" />
    </a>
  </nav>
</template>

<script>
import { ref } from "vue";
import { useStore } from "@/store";

export default {
  name: "Nav",
  setup() {
    const store = useStore();
    const showMenu = ref(false);
    const leave = () => {
      store.signOut();
    };
    return {
      showMenu,
      leave,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-content {
  background: var(--background--darker-color);
  height: 100vh;
  width: 20vw;
  padding: 3.6rem;
  .user-menu-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    img {
      margin-right: 2.9rem;
    }
  }
  &.showMenu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
  }
  ul li {
    margin: 1.1rem 0;
  }
  ul li a {
    font-size: 1.6rem;
    font-weight: 500;
    display: block;
  }
}
.nav-overlay {
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(60, 99, 130, 0.85);
  height: 100vh;
  width: 80vw;
}
</style>
