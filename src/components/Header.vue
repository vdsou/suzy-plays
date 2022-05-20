<template>
  <header>
    <Nav />
    <UserInput class="center" :disabled="logged" />
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
    const logged = computed(() => store.logged);
    return { logged };
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
