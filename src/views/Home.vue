<template>
  <div class="home">
    <UserCammandInput />
  </div>
</template>
<script>
import UserCammandInput from '../components/UserCammandInput.vue';
export default {
  name: "Home",
  components: {UserCammandInput},
};
</script>
<style scoped>
.home {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>
