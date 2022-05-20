<template>
  <input
    type="text"
    class="userInput"
    placeholder="insira aqui um link ou título"
    :disabled="!disabled"
  />
</template>

<script>
export default {
  name: "UserInput",
  props: {
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.userInput {
  color: #000;
  width: 35rem;
  height: 3.5rem;
  border-radius: 5rem;
  padding: 1rem 5rem;
  text-align: center;
  font-size: 1.2rem;

  &::placeholder {
    color: var(--grey-color);
  }
}
</style>
