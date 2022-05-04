<template>
  <div class="home">
    <UserCammandInput />
    <UserCommandList />
  </div>
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
.home {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
