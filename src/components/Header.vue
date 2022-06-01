<template>
  <header>
    <Nav />
    <UserInput class="center" :disabled="userLoggedIn" />
  </header>
</template>

<script>
import { useStore } from "@/store";
import { computed } from "vue";
import Nav from "./Nav.vue";
import UserInput from "./UserInput.vue";
export default {
  components: {
    Nav,
    UserInput,
  },
  setup() {
    const store = useStore();
    const userLoggedIn = computed(() => store.userLoggedIn);
    return { userLoggedIn };
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  padding: 3.5rem;
  position: relative;
  .center {
    margin: auto;
  }
}
</style>
