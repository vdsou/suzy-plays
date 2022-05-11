<template>
  <header>
    <Nav />
    <UserInput class="center" />
  </header>
</template>

<script>
import Nav from "./Nav.vue";
import UserInput from "./UserInput.vue";
export default {
  components: {
    Nav,
    UserInput,
  },
  data() {},
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
