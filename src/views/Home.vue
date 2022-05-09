<template>
  <section class="home">
    <UserCammandInput />
    <UserCommandList />
  </section>
</template>
<script>
import UserCammandInput from "../components/UserCammandInput.vue";
import UserCommandList from "../components/UserCommandList.vue";
export default {
  name: "Home",
  components: { UserCammandInput, UserCommandList },
};
</script>
<style scoped>

</style>
